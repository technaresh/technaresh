import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { Menu, X } from "lucide-react"
import { site, navItems } from "@/data/portfolio"
import { Button } from "@/components/ui/button"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"
import {
  getProfilePhotoCandidates,
  initialsFromName,
} from "@/lib/profile-photo"
import { cn } from "@/lib/utils"

const NAV_GLASS_SCROLL = 60

function NavbarProfileAvatar({ reducedMotion }) {
  const candidates = useMemo(() => getProfilePhotoCandidates(), [])
  const [attempt, setAttempt] = useState(0)
  const [photoReady, setPhotoReady] = useState(false)
  const [photoFailed, setPhotoFailed] = useState(false)
  const imgRef = useRef(null)

  const safeIndex = Math.min(
    attempt,
    Math.max(0, candidates.length - 1)
  )
  const src = candidates[safeIndex]
  const initials = initialsFromName(site.name)
  const showPlaceholder = !photoReady || photoFailed

  useLayoutEffect(() => {
    setPhotoReady(false)
    setPhotoFailed(false)
    const el = imgRef.current
    if (el?.complete && el.naturalHeight > 0) {
      setPhotoReady(true)
    }
  }, [src])

  return (
    <span
      aria-hidden="true"
      className="relative inline-flex h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[hsl(222_22%_9%)] ring-[1.5px] ring-[#00c9b1]/60"
      style={
        reducedMotion
          ? undefined
          : { willChange: "opacity, transform" }
      }
    >
      <img
        ref={imgRef}
        key={src}
        src={src}
        alt=""
        width={32}
        height={32}
        decoding="async"
        className={cn(
          "h-full w-full object-cover transition-opacity duration-300 motion-reduce:transition-none",
          photoReady && !photoFailed ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => {
          setPhotoFailed(false)
          setPhotoReady(true)
        }}
        onError={() => {
          if (attempt < candidates.length - 1) {
            setAttempt((a) => a + 1)
          } else {
            setPhotoFailed(true)
            setPhotoReady(false)
          }
        }}
      />
      {showPlaceholder ? (
        <span className="absolute inset-0 flex items-center justify-center font-display text-[11px] font-semibold tracking-tight text-[#00c9b1]">
          {initials}
        </span>
      ) : null}
    </span>
  )
}

export function Navbar({ heroSectionEl }) {
  const [open, setOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [pastHero, setPastHero] = useState(false)
  const reducedMotion = usePrefersReducedMotion()

  const navElevated = scrollY > NAV_GLASS_SCROLL

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const el = heroSectionEl
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        setPastHero(!entry.isIntersecting)
      },
      { root: null, threshold: 0, rootMargin: "0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [heroSectionEl])

  const firstName = site.name.split(" ")[0]
  const motionCls = reducedMotion
    ? "transition-none"
    : "transition-[opacity,transform] duration-300 ease-out"

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-300 motion-reduce:transition-none",
        navElevated
          ? "border-white/5 bg-[#0d0f12]/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 md:gap-4 md:px-6">
        <a
          href="#top"
          className="flex min-h-8 min-w-0 flex-1 items-center gap-2 truncate font-display text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80 sm:gap-3"
        >
          <div
            className={cn(
              "flex min-h-8 shrink-0 items-center overflow-hidden motion-reduce:transition-none",
              reducedMotion ? undefined : "transition-[max-width] duration-300 ease-out",
              pastHero
                ? "max-w-[min(14rem,calc(100vw-8rem))] md:max-w-[18rem]"
                : "max-w-0"
            )}
          >
            <div
              className={cn(
                "flex min-h-8 items-center gap-2 pr-0.5",
                motionCls,
                pastHero
                  ? "translate-x-0 opacity-100"
                  : reducedMotion
                    ? "opacity-0"
                    : "-translate-x-2 opacity-0"
              )}
            >
              <NavbarProfileAvatar reducedMotion={reducedMotion} />
              <span className="hidden text-sm font-medium font-sans text-foreground md:inline">
                {site.name}
              </span>
            </div>
          </div>

          <span className="min-w-0 truncate">
            {!pastHero ? (
              <>
                {firstName}
                <span className="text-muted-foreground font-normal"> · portfolio</span>
              </>
            ) : (
              <>
                <span className="md:hidden">
                  {firstName}
                  <span className="text-muted-foreground font-normal"> · portfolio</span>
                </span>
                <span className="hidden text-muted-foreground font-normal md:inline">
                  {" "}
                  · portfolio
                </span>
              </>
            )}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/30 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <Button variant="outline" size="sm" asChild>
            <a href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={site.links.resume}>Get in touch</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border/80 bg-card/50 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 px-4 py-4 backdrop-blur-md md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-muted/50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex gap-2 border-t border-border/60 pt-3">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href={site.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Button>
              <Button size="sm" className="flex-1" asChild>
                <a href={site.links.resume} onClick={() => setOpen(false)}>
                  Contact
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

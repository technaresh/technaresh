import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { ArrowRight, MapPin } from "lucide-react"
import { site } from "@/data/portfolio"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"
import { HeroNetworkDoodle } from "@/components/visuals/portfolio-doodles"
import { cn } from "@/lib/utils"
import {
  getProfilePhotoCandidates,
  initialsFromName,
} from "@/lib/profile-photo"

const TEAL = "#00c9b1"
const TEAL_GLOW = "0 0 48px -12px rgba(0, 201, 177, 0.15)"

function HeroProfilePhoto({ badgeLabel, name, reducedMotion }) {
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
  const initials = initialsFromName(name)

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
    <div className="relative w-full max-w-[260px] sm:max-w-[280px] lg:max-w-[260px] xl:max-w-[280px]">
      <div
        className="pointer-events-none absolute -inset-10 rounded-[2rem] motion-reduce:opacity-[0.06]"
        style={{
          opacity: 0.08,
          backgroundImage:
            "radial-gradient(circle, hsl(var(--border) / 0.85) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
        aria-hidden
      />

      <div
        className="relative overflow-hidden rounded-2xl p-[2px] motion-reduce:shadow-[0_0_40px_-14px_rgba(0,201,177,0.12)]"
        style={{ boxShadow: TEAL_GLOW }}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[220%] max-w-none -translate-x-1/2 -translate-y-1/2",
            reducedMotion
              ? "motion-reduce:animate-none"
              : "motion-safe:animate-hero-conic-spin"
          )}
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, rgba(0,201,177,0.12) 0deg, rgba(51,65,85,0.08) 95deg, rgba(0,201,177,0.06) 190deg, rgba(71,85,105,0.09) 285deg, rgba(0,201,177,0.11) 360deg)",
          }}
        />

        <div
          className="relative z-[1] w-full overflow-hidden rounded-[calc(1rem-2px)] border-2 border-[#00c9b1] bg-card outline outline-1 outline-offset-2 outline-[#00c9b1]/25 [aspect-ratio:3/4] min-h-[min(72vw,360px)] sm:min-h-[min(70vw,400px)]"
        >
          <img
            ref={imgRef}
            key={src}
            src={src}
            alt={
              photoReady && !photoFailed
                ? `${name} — professional photo`
                : ""
            }
            width={750}
            height={1000}
            decoding="async"
            fetchPriority="high"
            className={cn(
              "absolute inset-0 z-[1] h-full w-full object-cover transition-opacity duration-500",
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
            <div
              className="absolute inset-0 z-[2] flex items-center justify-center bg-[hsl(222_22%_9%)]"
              aria-hidden={photoFailed ? false : true}
            >
              <span
                className="font-display text-2xl font-semibold tracking-tight"
                style={{ color: TEAL }}
              >
                {initials}
              </span>
            </div>
          ) : null}
        </div>
      </div>

      <Badge
        variant="heroAvailability"
        className="absolute bottom-3 left-3 z-[4] inline-flex max-w-[calc(100%-1.5rem)] items-center gap-0"
      >
        <span className="relative mr-2 inline-flex h-2 w-2 shrink-0">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40 motion-reduce:animate-none"
            aria-hidden
          />
          <span
            className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"
            aria-hidden
          />
        </span>
        <span className="truncate font-sans text-[11px] font-medium leading-none">
          {badgeLabel}
        </span>
      </Badge>
    </div>
  )
}

export function Hero({ sectionRef }) {
  const reducedMotion = usePrefersReducedMotion()
  const [parallaxY, setParallaxY] = useState(0)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    if (reducedMotion) return
    const onScroll = () => {
      setParallaxY(window.scrollY * 0.14)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion) return
    const n = site.roleCycle.length
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % n)
    }, 3200)
    return () => window.clearInterval(id)
  }, [reducedMotion])

  const roleText =
    site.roleCycle[reducedMotion ? 0 : roleIndex] ?? site.title

  const photoBadge =
    site.heroPhotoAvailabilityLabel ?? "Open to Opportunities"

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden border-b border-border/40"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-subtle bg-[length:56px_56px] opacity-[0.18]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -right-8 top-6 w-[min(92vw,640px)] opacity-[0.14] motion-reduce:opacity-[0.1]"
        style={
          reducedMotion
            ? undefined
            : { transform: `translate3d(0, ${parallaxY * 0.6}px, 0)` }
        }
        aria-hidden
      >
        <HeroNetworkDoodle className="h-auto w-full text-primary" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <div className="order-2 space-y-8 lg:order-1 lg:max-w-xl xl:max-w-2xl">
            <div
              className="flex flex-wrap items-center gap-2 opacity-0 animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              <Badge variant="muted">{site.availabilityBadge}</Badge>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                {site.location}
              </span>
            </div>

            <div className="space-y-5">
              <h1
                className="font-display text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08] opacity-0 animate-fade-up"
                style={{ animationDelay: "140ms" }}
              >
                {site.name}
              </h1>
              <p
                className="min-h-[1.75rem] text-lg font-medium text-primary sm:text-xl opacity-0 animate-fade-up"
                style={{ animationDelay: "200ms" }}
              >
                <span
                  key={reducedMotion ? "static-role" : roleText}
                  className="inline-block animate-in fade-in zoom-in-95 duration-500 motion-reduce:animate-none"
                >
                  {roleText}
                </span>
              </p>
              <p
                className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg opacity-0 animate-fade-up"
                style={{ animationDelay: "260ms" }}
              >
                {site.tagline}
              </p>

              <div
                className="flex flex-wrap gap-2 pt-1 opacity-0 animate-fade-up sm:gap-3"
                style={{ animationDelay: "300ms" }}
              >
                {site.credibilityStrip.map((row) => (
                  <div
                    key={row.rest}
                    className="inline-flex items-baseline gap-1.5 rounded-lg border border-border/60 bg-card/40 px-3 py-2 backdrop-blur-sm"
                  >
                    {row.accent ? (
                      <span className="font-mono text-sm font-semibold tabular-nums text-primary">
                        {row.accent}
                      </span>
                    ) : null}
                    <span className="text-xs font-medium text-muted-foreground sm:text-sm">
                      {row.rest}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="flex flex-wrap gap-3 opacity-0 animate-fade-up"
              style={{ animationDelay: "340ms" }}
            >
              <Button asChild>
                <a href="#projects">
                  View selected work
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={site.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href={`mailto:${site.email}`}>Email</a>
              </Button>
            </div>
          </div>

          <div className="order-1 flex w-full shrink-0 justify-center lg:order-2 lg:justify-end lg:pl-4">
            <HeroProfilePhoto
              badgeLabel={photoBadge}
              name={site.name}
              reducedMotion={reducedMotion}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

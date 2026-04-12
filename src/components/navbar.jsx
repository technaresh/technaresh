import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { site, navItems } from "@/data/portfolio"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-transparent transition-colors duration-300",
        scrolled && "border-border/60 bg-background/85 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          {site.name.split(" ")[0]}
          <span className="text-muted-foreground font-normal"> · portfolio</span>
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

        <div className="hidden items-center gap-2 md:flex">
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/80 bg-card/50 md:hidden"
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

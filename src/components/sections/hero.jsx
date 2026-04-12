import { useEffect, useState } from "react"
import { ArrowRight, MapPin } from "lucide-react"
import { site } from "@/data/portfolio"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"
import { HeroNetworkDoodle } from "@/components/visuals/portfolio-doodles"

export function Hero() {
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

  return (
    <section
      id="top"
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
        <div className="max-w-3xl space-y-8">
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
      </div>
    </section>
  )
}

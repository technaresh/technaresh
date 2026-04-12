import { ArrowRight, MapPin } from "lucide-react"
import { site } from "@/data/portfolio"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/40"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-subtle bg-[length:56px_56px] opacity-[0.45]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-primary/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-primary/[0.04] blur-3xl" />

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
              className="text-lg text-primary sm:text-xl font-medium opacity-0 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              {site.title}
            </p>
            <p
              className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg opacity-0 animate-fade-up"
              style={{ animationDelay: "260ms" }}
            >
              {site.tagline}
            </p>
          </div>

          <div
            className="flex flex-wrap gap-3 opacity-0 animate-fade-up"
            style={{ animationDelay: "320ms" }}
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

          <dl
            className="grid gap-6 border-t border-border/60 pt-10 sm:grid-cols-3 opacity-0 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            {site.heroFacts.map((row) => (
              <div key={row.label}>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {row.label}
                </dt>
                <dd className="mt-1.5 text-sm text-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

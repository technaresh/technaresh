import { credentials } from "@/data/portfolio"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  AwsLogoMark,
  ContributionHeatmapDecor,
  GithubLogoMark,
} from "@/components/visuals/portfolio-doodles"

function CredentialLogo({ kind }) {
  if (kind === "aws") {
    return <AwsLogoMark className="h-11 w-11 shrink-0 text-primary/90" />
  }
  if (kind === "github") {
    return <GithubLogoMark className="h-11 w-11 shrink-0 text-primary/90" />
  }
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background/40 font-mono text-xs text-primary">
      ···
    </div>
  )
}

export function Certifications() {
  return (
    <section
      id="credentials"
      className="relative scroll-mt-24 overflow-hidden border-b border-border/40 py-20 md:py-24"
    >
      <div
        className="pointer-events-none absolute -right-4 top-1/2 w-[min(100%,420px)] -translate-y-1/2 opacity-[0.2] motion-reduce:opacity-[0.12]"
        aria-hidden
      >
        <ContributionHeatmapDecor className="h-full w-full" />
      </div>
      <div
        className="pointer-events-none absolute right-8 bottom-12 opacity-[0.15] motion-reduce:opacity-[0.08]"
        aria-hidden
      >
        <ContributionHeatmapDecor className="h-16 w-40 rotate-3" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Certifications &amp; achievements
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Credibility, kept current
          </h2>
          <p className="text-muted-foreground">
            Formal credentials and public signal—easy to verify, no decorative
            clutter.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {credentials.map((c) => (
            <Card
              key={c.title}
              className="group relative overflow-hidden border-border/70 bg-card/55 transition-colors hover:border-primary/35"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:group-hover:opacity-0"
                aria-hidden
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent" />
                <div className="absolute -inset-full top-0 h-full w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-primary/15 to-transparent motion-reduce:animate-none motion-safe:group-hover:animate-foil-sheen" />
              </div>
              <CardContent className="relative flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
                <CredentialLogo kind={c.kind} />
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="muted">{c.year}</Badge>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {c.issuer}
                    </span>
                  </div>
                  <p className="font-display text-base font-semibold leading-snug text-foreground">
                    {c.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

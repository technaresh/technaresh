import { credentials } from "@/data/portfolio"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function Certifications() {
  return (
    <section id="credentials" className="scroll-mt-24 border-b border-border/40 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Certifications &amp; achievements
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Credibility, kept current
          </h2>
          <p className="text-muted-foreground">
            A mix of formal credentials and community signal—easy to verify, no
            decorative clutter.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {credentials.map((c) => (
            <Card
              key={c.title}
              className="border-border/70 bg-card/50 transition-colors hover:border-border"
            >
              <CardContent className="flex flex-col gap-3 p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="muted">{c.year}</Badge>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {c.issuer}
                  </span>
                </div>
                <p className="font-display text-base font-medium leading-snug text-foreground">
                  {c.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

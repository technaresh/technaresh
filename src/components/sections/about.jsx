import { site } from "@/data/portfolio"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border/40 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              About
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {site.aboutHeadline}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {site.summary}
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground/90">
              {site.aboutSubline}
            </p>
          </div>

          <Card className="border-border/70 bg-card/80">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">At a glance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              {site.glance.map((row, i) => (
                <div
                  key={row.label}
                  className={
                    i < site.glance.length - 1
                      ? "flex justify-between gap-4 border-b border-border/50 pb-3"
                      : "flex justify-between gap-4"
                  }
                >
                  <span className="max-w-[55%] shrink-0">{row.label}</span>
                  <span className="text-right text-foreground">{row.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

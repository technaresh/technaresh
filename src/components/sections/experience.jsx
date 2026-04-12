import { experience } from "@/data/portfolio"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 border-b border-border/40 py-20 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] motion-reduce:opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--border) / 0.55) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 max-w-2xl space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Experience
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Where impact compounded
          </h2>
          <p className="text-muted-foreground">
            Chronological highlights—each role expanded scope from models to platforms
            to people.
          </p>
        </div>

        <div className="relative border-l-2 border-primary/40 pl-8 md:pl-10">
          <ol className="space-y-0">
            {experience.map((job) => (
              <li key={job.company} className="relative pb-12 last:pb-0">
                <span
                  className={cn(
                    "absolute left-[calc(-2rem-1px)] top-3 z-[1] h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background md:left-[calc(-2.5rem-1px)]",
                    job.current
                      ? "bg-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.18)] motion-reduce:animate-none motion-reduce:shadow-[0_0_0_2px_hsl(var(--primary)/0.12)] motion-safe:animate-timeline-node-pulse"
                      : "bg-primary/80"
                  )}
                  aria-hidden
                />
                <Card className="border-border/70 bg-card/75">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <CardTitle className="text-lg">{job.company}</CardTitle>
                      <span className="font-mono text-xs text-muted-foreground">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-primary/90">{job.role}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                      {job.points.map((pt) => (
                        <li key={pt} className="flex gap-3 leading-relaxed">
                          <span
                            className="mt-2 h-px w-6 shrink-0 bg-border"
                            aria-hidden
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

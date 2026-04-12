import { experience } from "@/data/portfolio"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-b border-border/40 py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
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

        <ol className="relative space-y-0 border-l border-border/60 pl-8 md:pl-10">
          {experience.map((job) => (
            <li key={job.company} className="relative pb-12 last:pb-0">
              <span
                className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-primary/80"
                aria-hidden
              />
              <Card className="border-border/70 bg-card/60">
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
    </section>
  )
}

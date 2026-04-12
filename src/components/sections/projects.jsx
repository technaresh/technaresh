import { ExternalLink } from "lucide-react"
import { projects } from "@/data/portfolio"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ProjectSchematic } from "@/components/visuals/portfolio-doodles"

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-border/40 py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Featured projects
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Case-study snapshots
            </h2>
            <p className="text-muted-foreground">
              Outcome-forward narratives with problem → approach → result. Open any
              card for the full arc.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p) => {
            const signal = p.impactSignal ?? 0.78
            return (
              <Card
                key={p.id}
                className="group relative flex flex-col overflow-hidden border-border/70 bg-card/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_14px_44px_-28px_hsl(var(--primary)/0.45)]"
              >
                <CardHeader className="space-y-3">
                  <ProjectSchematic
                    projectId={p.id}
                    className="h-[48px] w-full max-w-[200px] text-primary"
                  />
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg leading-snug">{p.title}</CardTitle>
                    <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {p.period}
                    </span>
                  </div>
                  <CardDescription className="text-xs font-medium text-primary/90">
                    {p.role}
                  </CardDescription>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.blurb}
                  </p>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 pt-0">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="outline" className="font-normal">
                      {t}
                    </Badge>
                  ))}
                </CardContent>

                <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-32 group-hover:opacity-100 motion-reduce:max-h-32 motion-reduce:opacity-100 motion-reduce:transition-none">
                  <div className="mx-6 border-t border-border/50 bg-muted/15 px-3 py-2.5">
                    <p className="text-[11px] leading-relaxed text-muted-foreground">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                        Approach
                      </span>
                      <span className="mt-1 block text-foreground/90">
                        {p.approachStrip ?? p.approach}
                      </span>
                    </p>
                  </div>
                </div>

                <CardFooter className="mt-auto flex flex-col items-stretch gap-3 border-t border-border/50 bg-muted/10 pt-5">
                  <p className="font-mono text-xs text-foreground/90">
                    <span className="text-muted-foreground">Signal · </span>
                    {p.metrics}
                  </p>
                  <div
                    className="h-0.5 w-full overflow-hidden rounded-full bg-border/70"
                    title="Relative impact signal (illustrative)"
                  >
                    <div
                      className="h-full rounded-full bg-primary/80 transition-[width] duration-500 motion-reduce:transition-none"
                      style={{ width: `${Math.round(signal * 100)}%` }}
                    />
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary" size="sm" className="w-full">
                        Read case study
                        <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
                      <DialogHeader>
                        <DialogTitle>{p.title}</DialogTitle>
                        <DialogDescription>
                          {p.role} · {p.period}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-5 text-sm">
                        <div>
                          <h4 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                            Problem
                          </h4>
                          <p className="mt-2 leading-relaxed text-foreground/90">
                            {p.problem}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                            Approach
                          </h4>
                          <p className="mt-2 leading-relaxed text-foreground/90">
                            {p.approach}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                            Outcome
                          </h4>
                          <p className="mt-2 leading-relaxed text-foreground/90">
                            {p.outcome}
                          </p>
                        </div>
                        <div className="rounded-lg border border-border/60 bg-muted/20 px-4 py-3 font-mono text-xs text-foreground">
                          {p.metrics}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

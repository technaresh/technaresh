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
          {projects.map((p) => (
            <Card
              key={p.id}
              className="group flex flex-col border-border/70 bg-card/70 transition-shadow duration-300 hover:border-border hover:shadow-md"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg leading-snug">{p.title}</CardTitle>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground whitespace-nowrap">
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
              <CardFooter className="mt-auto flex flex-col items-stretch gap-3 border-t border-border/50 bg-muted/10 pt-5">
                <p className="font-mono text-xs text-foreground/90">
                  <span className="text-muted-foreground">Signal · </span>
                  {p.metrics}
                </p>
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
          ))}
        </div>
      </div>
    </section>
  )
}

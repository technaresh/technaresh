import { site } from "@/data/portfolio"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  IconAIBrain,
  IconCloudNode,
  IconWrenchBuild,
} from "@/components/visuals/portfolio-doodles"

const glanceIcons = [IconCloudNode, IconAIBrain, IconWrenchBuild]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border/40 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
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

          <div className="rounded-xl bg-[length:200%_200%] bg-gradient-to-br from-primary/35 via-slate-600/22 to-primary/28 p-px motion-reduce:animate-none motion-safe:animate-gradient-border-flow">
            <Card className="border-0 bg-card/95 shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">At a glance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-0">
                <div className="grid gap-0 sm:grid-cols-2 sm:gap-4">
                  <div className="space-y-4 sm:border-r sm:border-border/50 sm:pr-4">
                    {site.glance.map((row, i) => {
                      const Icon = glanceIcons[i] ?? IconWrenchBuild
                      return (
                        <div
                          key={row.label}
                          className={
                            i < site.glance.length - 1
                              ? "flex gap-3 border-b border-border/40 pb-4"
                              : "flex gap-3"
                          }
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-background/50">
                            <Icon className="h-7 w-7" />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-foreground">
                              {row.label}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {row.value}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="mt-4 hidden text-xs leading-relaxed text-muted-foreground sm:mt-0 sm:block">
                    <p className="font-mono uppercase tracking-wider text-primary/90">
                      Summary
                    </p>
                    <p className="mt-3">
                      AWS-first platforms, FastAPI services, and applied AI
                      (Bedrock, MCP, LLMs) with production guardrails—not slideware.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

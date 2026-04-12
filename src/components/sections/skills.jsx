import { skillTabs } from "@/data/portfolio"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-border/40 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Core skills
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Depth across the ML product stack
          </h2>
          <p className="text-muted-foreground">
            Grouped for scanning—each area reflects hands-on ownership, not keyword
            stuffing.
          </p>
        </div>

        <Tabs defaultValue="ml" className="w-full">
          <TabsList className="grid h-auto w-full grid-cols-3 p-1 sm:inline-flex sm:w-auto">
            {skillTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex-1 px-4 py-2 text-xs sm:text-sm"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <Card className="border-border/70 bg-card/60">
                <CardContent className="p-6 md:p-8">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {tab.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-lg border border-border/40 bg-background/40 px-4 py-3 text-sm text-foreground/90"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

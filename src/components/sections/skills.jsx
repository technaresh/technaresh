import { skillTabs } from "@/data/portfolio"

function LaneConnector() {
  return (
    <div
      className="hidden shrink-0 items-center self-stretch pt-10 md:flex"
      aria-hidden
    >
      <svg
        width="28"
        height="120"
        viewBox="0 0 28 120"
        className="text-primary/30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 60h12M14 52l8 8-8 8"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

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
            Three delivery lanes—how models, data, and engineering connect from
            experiment to production.
          </p>
        </div>

        <div className="relative rounded-xl border border-border/50 bg-background/20 p-4 md:p-6">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:absolute md:left-6 md:top-4 md:mb-0">
            Flow · ML &amp; AI → Data → Engineering
          </p>

          <div className="mt-6 flex flex-col gap-6 md:mt-10 md:flex-row md:items-stretch md:gap-0">
            {skillTabs.map((tab, index) => (
              <div key={tab.id} className="contents md:contents">
                <div
                  className="flex min-h-0 flex-1 flex-col rounded-xl border border-border/60 bg-card/50 p-4 transition-[box-shadow,background-color] duration-300 hover:bg-card/70 hover:shadow-[0_0_28px_-10px_hsl(var(--primary)/0.35)] md:p-5"
                >
                  <div className="mb-3 flex items-center justify-between gap-2 border-b border-border/40 pb-3">
                    <h3 className="font-display text-sm font-semibold text-foreground">
                      {tab.label}
                    </h3>
                    <span className="font-mono text-[10px] text-primary/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <ul className="flex flex-1 flex-col gap-2">
                    {tab.items.map((item) => (
                      <li key={item}>
                        <span className="inline-flex w-full rounded-lg border border-border/35 bg-background/35 px-3 py-2 text-left text-xs leading-snug text-foreground/90 transition-colors duration-200 hover:border-primary/25 hover:text-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < skillTabs.length - 1 ? <LaneConnector /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from "react"
import { Check, Copy, Mail } from "lucide-react"
import { IconGithub, IconLinkedin } from "@/components/icons/social-icons"
import { site } from "@/data/portfolio"
import { Button } from "@/components/ui/button"
import { ContactArrowDoodle } from "@/components/visuals/portfolio-doodles"

const EMAIL_TEMPLATE = `Subject: [Role] — Naresh Choudhary

Hi Naresh,

We're hiring for ___ on ___ (team/size/stage).
Stack: ___. Timeline: ___. Work style: ___.

Best,
[Name]`

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyTemplate() {
    try {
      await navigator.clipboard.writeText(EMAIL_TEMPLATE)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Contact
            </p>
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Let&apos;s talk about the next measurable win
              </h2>
              <ContactArrowDoodle className="pointer-events-none absolute -right-2 top-full mt-1 h-14 w-[4.5rem] text-primary sm:right-4 md:h-16 md:w-[5.25rem]" />
            </div>
            <p className="max-w-xl pt-10 text-muted-foreground sm:pt-12">
              Open to conversations about senior backend, cloud, and applied-AI
              roles—or collaboration on well-scoped real-world problems. Share
              context and timeline; I typically reply within a few business days.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <a href={`mailto:${site.email}`}>
                  <Mail className="h-4 w-4" />
                  {site.email}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={site.links.linkedin} target="_blank" rel="noreferrer">
                  <IconLinkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href={site.links.github} target="_blank" rel="noreferrer">
                  <IconGithub className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border/70 bg-[hsl(222_22%_6%)] shadow-sm">
            <div className="flex items-center justify-between gap-2 border-b border-border/60 bg-card/80 px-3 py-2">
              <span className="font-mono text-[11px] text-muted-foreground">
                email_template.txt
              </span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 gap-1.5 px-2 font-mono text-[11px] text-primary hover:text-primary"
                onClick={copyTemplate}
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            <pre className="max-h-[min(70vh,320px)] overflow-auto p-4 font-mono text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
              <code className="text-foreground/90">{EMAIL_TEMPLATE}</code>
            </pre>
          </div>
        </div>

        <footer className="mt-20 border-t border-border/50 pt-10 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.footerTagline}
          </p>
        </footer>
      </div>
    </section>
  )
}

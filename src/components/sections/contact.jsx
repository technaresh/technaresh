import { Mail } from "lucide-react"
import { IconGithub, IconLinkedin } from "@/components/icons/social-icons"
import { site } from "@/data/portfolio"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Contact
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Let&apos;s talk about the next measurable win
            </h2>
            <p className="max-w-xl text-muted-foreground">
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

          <Card className="border-border/70 bg-card/60">
            <CardHeader>
              <CardTitle className="text-base">Quick brief (optional)</CardTitle>
              <CardDescription>
                This is a static portfolio—use your email client to send the
                details below as a template.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 font-mono text-xs leading-relaxed text-muted-foreground">
              <p className="rounded-lg border border-dashed border-border/70 bg-background/50 p-4 text-left">
                Subject: [Role] — Naresh Choudhary
                <br />
                <br />
                Hi Naresh,
                <br />
                <br />
                We&apos;re hiring for ___ on ___ (team/size/stage).
                <br />
                Stack: ___. Timeline: ___. Work style: ___.
                <br />
                <br />
                Best,
                <br />
                [Name]
              </p>
            </CardContent>
          </Card>
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

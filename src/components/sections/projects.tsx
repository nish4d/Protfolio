import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { projects, personalInfo } from "@/lib/data";
import { ArrowUpRight, Github } from "lucide-react";

export function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <div className="mx-auto max-w-6xl px-4">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          Things I&apos;ve Built
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Projects with polish.
        </h2>
      </FadeIn>

      {featured ? (
        <FadeIn delay={0.05}>
          <Card className="mt-10 overflow-hidden">
            <div className="relative grid gap-8 p-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="border-accent-primary/30">Featured</Badge>
                </div>
                <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight">
                  {featured.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {featured.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {featured.liveUrl ? (
                    <Button asChild>
                      <a
                        href={featured.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : null}
                  {featured.githubUrl ? (
                    <Button variant="outline" asChild>
                      <a
                        href={featured.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : null}
                  {featured.githubBackendUrl ? (
                    <Button variant="outline" asChild>
                      <a
                        href={featured.githubBackendUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Backend
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-background/20 p-6">
                  {/* Glowing gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/10 via-transparent to-accent-secondary/10" />
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-primary/10 blur-3xl" />
                  <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-accent-secondary/10 blur-2xl" />

                  <div className="relative space-y-5">
                    {/* Project type badges row */}
                    <div className="flex flex-wrap gap-2">
                      {["E-Commerce", "Real-time", "Secure"].map((label) => (
                        <span
                          key={label}
                          className="rounded-full border border-accent-primary/30 bg-accent-primary/10 px-3 py-1 text-xs font-semibold text-accent-primary"
                        >
                          {label}
                        </span>
                      ))}
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3 text-center">
                      {[
                        { value: "Live", label: "Production" },
                        { value: "Full", label: "Stack" },
                        { value: "Real‑time", label: "Updates" },
                      ].map(({ value, label }) => (
                        <div
                          key={label}
                          className="rounded-2xl border border-border/60 bg-surface/40 px-2 py-3"
                        >
                          <p className="text-sm font-extrabold text-foreground">{value}</p>
                          <p className="mt-0.5 text-[10px] text-muted">{label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech-stack pills */}
                    <div>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {featured.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-lg border border-border/50 bg-surface/50 px-2.5 py-1 text-xs font-medium text-foreground/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </FadeIn>
      ) : null}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p, idx) => (
          <FadeIn key={p.name} delay={0.06 + idx * 0.03}>
            <Card className="group h-full transition-transform hover:-translate-y-0.5 hover:border-accent-primary/25">
              <CardHeader>
                <div className="flex flex-wrap gap-2">
                  {p.tags.slice(0, 3).map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <div className="mt-4 text-lg font-extrabold text-foreground">
                  {p.name}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.liveUrl ? (
                    <a
                      className="inline-flex items-center gap-1 text-sm font-semibold text-foreground/90 transition-colors hover:text-foreground"
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                  {p.githubUrl ? (
                    <a
                      className="inline-flex items-center gap-1 text-sm font-semibold text-foreground/90 transition-colors hover:text-foreground"
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                      <Github className="h-4 w-4" />
                    </a>
                  ) : null}
                  {p.githubBackendUrl ? (
                    <a
                      className="inline-flex items-center gap-1 text-sm font-semibold text-foreground/90 transition-colors hover:text-foreground"
                      href={p.githubBackendUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Backend
                      <Github className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <div className="mt-10">
          <Button variant="outline" asChild>
            <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer">
              View All on GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}

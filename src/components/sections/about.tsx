import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { personalInfo } from "@/lib/data";

export function About() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid gap-10 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <FadeIn>
            <div className="relative max-w-sm">
              <div className="absolute -inset-6 rounded-[40px] bg-accent-primary/10 blur-[40px]" />
              <div className="relative rounded-[40px] border border-border/70 bg-surface/50 p-6 backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[28px] border border-border/60 bg-background/20 p-5">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent-primary/10 via-transparent to-accent-secondary/10" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                        Blueprint
                      </div>
                      <div className="rounded-full border border-border/60 bg-surface/40 px-3 py-1 text-[11px] font-semibold text-foreground">
                        {personalInfo.role}
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-6 gap-3">
                      <div className="col-span-4 rounded-2xl border border-border/60 bg-surface/30 p-4">
                        <div className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                          Focus
                        </div>
                        <div className="mt-2 text-sm font-semibold text-foreground">
                          UI polish + scalable APIs
                        </div>
                        <div className="mt-2 text-sm text-muted">
                          Clean systems that feel premium.
                        </div>
                      </div>

                      <div className="col-span-2 grid gap-3">
                        <div className="rounded-2xl border border-border/60 bg-surface/30 p-4">
                          <div className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                            Location
                          </div>
                          <div className="mt-2 text-sm font-semibold text-foreground">
                            Dhaka
                          </div>
                        </div>
                        <div className="rounded-2xl border border-border/60 bg-surface/30 p-4">
                          <div className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                            Style
                          </div>
                          <div className="mt-2 text-sm font-semibold text-foreground">
                            Dark + Sharp
                          </div>
                        </div>
                      </div>

                      <div className="col-span-6 rounded-2xl border border-border/60 bg-surface/30 p-4">
                        <div className="flex items-center justify-between">
                          <div className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                            Signals
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-8 rounded-full bg-accent-primary/40" />
                            <span className="h-1.5 w-5 rounded-full bg-accent-secondary/40" />
                            <span className="h-1.5 w-10 rounded-full bg-border" />
                          </div>
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          <Chip>Architecture</Chip>
                          <Chip>Performance</Chip>
                          <Chip>DX</Chip>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <BentoStat label="Shipping" value="Fast" />
                  <BentoStat label="TypeScript" value="Strict" />
                  <BentoStat label="UX" value="Polished" />
                  <BentoStat label="APIs" value="Scalable" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="md:col-span-7">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Who Am I?
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Building products with intention.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              I&apos;m {personalInfo.name}, a full stack developer focused on building
              scalable web experiences - from interface to API to database. I care about
              performance, clarity, and engineering decisions that hold up over time.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              My approach: strong foundations, fast feedback loops, and a clean UI that
              feels premium without being noisy.
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <FadeIn delay={0.05}>
              <ValueCard
                title="Problem Solver"
                desc="I break down ambiguity into clear milestones and ship with confidence."
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <ValueCard
                title="Clean Code Advocate"
                desc="Readable, typed, and maintainable code is a feature - not a luxury."
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <ValueCard
                title="Continuous Learner"
                desc="Always improving craft: tooling, architecture, and UX details."
              />
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent-primary/25 bg-surface/40 px-4 py-2 text-sm font-semibold text-foreground shadow-[0_0_0_1px_rgba(0,212,255,0.18)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-secondary/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-secondary" />
              </span>
              Currently learning: Advanced system design + performance tuning
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

function Chip({ children }: { children: string }) {
  return (
    <div className="rounded-full border border-border/60 bg-background/20 px-3 py-1 text-center text-[11px] font-semibold text-foreground">
      {children}
    </div>
  );
}

function BentoStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-background/20 px-4 py-3">
      <div className="text-[11px] font-semibold uppercase tracking-widest text-muted">
        {label}
      </div>
      <div className="mt-1 font-display text-sm font-extrabold text-foreground">
        {value}
      </div>
    </div>
  );
}

function ValueCard({ title, desc }: { title: string; desc: string }) {
  return (
    <Card>
      <CardHeader>
        <div className="text-sm font-extrabold text-foreground">{title}</div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted">{desc}</p>
      </CardContent>
    </Card>
  );
}

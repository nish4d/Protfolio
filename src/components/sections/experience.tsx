import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          My Journey
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Experience timeline.
        </h2>
      </FadeIn>

      <div className="mt-10 grid gap-6">
        {experiences.map((e, idx) => (
          <FadeIn key={`${e.company}-${e.role}`} delay={0.05 + idx * 0.06}>
            <Card>
              <CardHeader>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-base font-extrabold text-foreground">
                      {e.role}
                    </div>
                    <div className="mt-0.5 text-sm font-semibold text-muted">
                      {e.company}
                      <span className="mx-2 text-border">•</span>
                      {e.location}
                    </div>
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                    {e.dateRange}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm leading-6 text-muted">
                  {e.bullets.map((b) => (
                    <li key={b} className="pl-4">
                      <span className="-ml-4 mr-2 inline-block text-accent-primary">
                        ▸
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {e.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { skills, type SkillCategory } from "@/lib/data";
import { cn } from "@/lib/utils";
import * as Tabs from "@radix-ui/react-tabs";

const categories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "Tools & DevOps",
];

export function Skills() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          My Arsenal
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Skills that ship.
        </h2>
      </FadeIn>

      <FadeIn delay={0.05}>
        <Tabs.Root defaultValue={categories[0]} className="mt-8">
          <Tabs.List className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Tabs.Trigger
                key={c}
                value={c}
                className={cn(
                  "rounded-full border border-border/70 bg-surface/40 px-4 py-2 text-sm font-semibold text-muted transition-colors data-[state=active]:border-accent-primary/35 data-[state=active]:text-foreground data-[state=active]:shadow-[0_0_0_1px_rgba(0,212,255,0.18)]",
                )}
              >
                {c}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {categories.map((c) => (
            <Tabs.Content key={c} value={c} className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {skills
                  .filter((s) => s.category === c)
                  .map((s) => (
                    <Card
                      key={s.name}
                      className="transition-transform hover:-translate-y-0.5 hover:border-accent-primary/25"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-extrabold text-foreground">
                            {s.name}
                          </div>
                          <Badge>{s.level}%</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="h-2 w-full rounded-full bg-background/25">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                            style={{ width: `${s.level}%` }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </FadeIn>
    </div>
  );
}

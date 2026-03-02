"use client";

import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useTypewriter } from "@/components/hooks/use-typewriter";
import { useCountUp } from "@/components/hooks/use-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const { text } = useTypewriter({
    words: [
      "Full Stack Developer",
      "Next.js Expert",
      "MongoDB Architect",
      "React Specialist",
    ],
  });

  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.4 });

  const projects = useCountUp({ to: 12, enabled: statsInView });
  const years = useCountUp({ to: 3, enabled: statsInView });
  const tech = useCountUp({ to: 24, enabled: statsInView });
  const coffee = useCountUp({ to: 6, enabled: statsInView, durationMs: 1200 });

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,212,255,0.22) 1px, transparent 0)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(circle at 50% 35%, black 0%, black 50%, transparent 72%)",
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid items-center gap-12 py-10 md:grid-cols-12 md:py-0">
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-sm font-semibold text-muted"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
              className="mt-3 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span className="bg-gradient-to-r from-accent-primary via-accent-primary to-accent-secondary bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="mt-4 flex items-center gap-2"
            >
              <p className="text-base font-semibold text-foreground/90 sm:text-lg">
                {text}
              </p>
              <span className="h-5 w-[1px] bg-border" />
              <span className="font-mono text-xs text-muted">
                {personalInfo.tagline}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="mt-6 max-w-xl text-base leading-7 text-muted"
            >
              I build modern, high-performance web apps with thoughtful UI, scalable APIs,
              and clean database design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("/cv.pdf", "_blank")}
              >
                Download CV
                <Download className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border/70 bg-surface/40 p-3 text-foreground transition-colors hover:border-accent-primary/40 hover:bg-surface/70"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border/70 bg-surface/40 p-3 text-foreground transition-colors hover:border-accent-primary/40 hover:bg-surface/70"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <div
              ref={statsRef}
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              <Stat label="Projects" value={projects} />
              <Stat label="Years" value={years} />
              <Stat label="Technologies" value={tech} />
              <Stat label="Coffee" value={coffee} />
            </div>
          </div>

        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 rounded-[32px] bg-accent-primary/10 blur-[30px]" />
            <div className="relative overflow-hidden rounded-[32px] border border-border/70 bg-surface/40 backdrop-blur-xl">
              <div className="flex items-center gap-2 border-b border-border/70 bg-background/20 px-5 py-4">
                <div className="h-2.5 w-2.5 rounded-full bg-accent-secondary/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-accent-primary/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-border" />
                <div className="ml-3 font-mono text-xs text-muted">nishad@portfolio:~</div>
              </div>

              <div className="p-6">
                <div className="rounded-2xl border border-border/70 bg-background/20 p-4">
                  <div className="font-mono text-xs leading-6 text-muted">
                    <div>
                      <span className="text-accent-primary">$</span> whoami
                    </div>
                    <div className="mt-2 text-foreground">{personalInfo.name}</div>
                    <div className="text-muted">{personalInfo.role}</div>
                    <div className="mt-3">
                      <span className="text-accent-primary">$</span> stack --top
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <Pill label="Next.js" />
                      <Pill label="React" />
                      <Pill label="Node.js" />
                      <Pill label="MongoDB" />
                      <Pill label="TypeScript" />
                      <Pill label="Tailwind" />
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-border/70 bg-background/20 p-4">
                  <p className="text-sm font-semibold text-foreground">
                    Based in {personalInfo.location}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {personalInfo.availability === "available"
                      ? "Available for freelance and collaboration."
                      : "Currently unavailable for freelance."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs font-semibold">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-surface/40 px-4 py-4 backdrop-blur-md">
      <div className="font-display text-2xl font-extrabold text-foreground">
        {value}
      </div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted">
        {label}
      </div>
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <div className="rounded-full border border-border/70 bg-surface/40 px-3 py-1 text-center text-[11px] font-semibold text-foreground">
      {label}
    </div>
  );
}

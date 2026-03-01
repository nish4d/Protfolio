"use client";

import { personalInfo } from "@/lib/data";
import { ArrowUp, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-display text-lg font-extrabold text-foreground">
              {personalInfo.name}
            </div>
            <div className="mt-1 text-sm text-muted">{personalInfo.tagline}</div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border/70 bg-surface/40 p-2 text-muted transition-colors hover:border-accent-primary/35 hover:bg-surface/70 hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border/70 bg-surface/40 p-2 text-muted transition-colors hover:border-accent-primary/35 hover:bg-surface/70 hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <button
              className="ml-2 inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/40 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent-primary/35 hover:bg-surface/70"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to top
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 text-xs text-muted">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

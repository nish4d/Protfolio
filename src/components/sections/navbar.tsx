"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Github,
  Linkedin,
  Menu,
  Mail,
  MapPin,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type NavItem = { id: string; label: string };

const items: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar({
  email,
  githubUrl,
  linkedinUrl,
  location,
}: {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  location: string;
}) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const ids = useMemo(() => items.map((i) => i.id), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -60% 0px",
      },
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [ids]);

  const onNav = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-40 w-full border-b border-transparent bg-background/50 backdrop-blur-xl transition-colors",
        scrolled && "border-border/70",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          href="#"
          className="group inline-flex items-center"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="text-sm font-semibold text-foreground/90">
            Nishadul Haque
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onNav(item.id)}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-semibold text-muted transition-colors hover:text-foreground",
                active === item.id &&
                  "bg-surface/60 text-foreground shadow-[inset_0_0_0_1px_rgba(0,212,255,0.25)]",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-muted transition-colors hover:bg-surface/60 hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-muted transition-colors hover:bg-surface/60 hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNav("contact")}
          >
            <Mail className="h-4 w-4" />
            Contact
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-border/70 bg-surface/50 p-2 text-foreground md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-border/70 bg-background/80 p-4 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-foreground">Menu</div>
              <button
                className="rounded-full p-2 text-muted hover:bg-surface/60 hover:text-foreground"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 grid gap-2">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNav(item.id)}
                  className={cn(
                    "flex items-center justify-between rounded-2xl border border-border/60 bg-surface/40 px-4 py-3 text-left text-base font-semibold text-foreground",
                    active === item.id &&
                      "border-accent-primary/30 shadow-[0_0_0_1px_rgba(0,212,255,0.25)]",
                  )}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-muted">#{item.id}</span>
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              <div className="flex items-center gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm text-muted hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                <span>{email}</span>
              </a>
              <div className="flex items-center gap-2">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/50 px-4 py-2 text-sm font-semibold text-foreground"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/50 px-4 py-2 text-sm font-semibold text-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

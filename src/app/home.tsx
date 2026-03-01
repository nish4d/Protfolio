"use client";

import { Toaster } from "sonner";

import { CursorGlow } from "@/components/effects/cursor-glow";
import { GlowOrbs } from "@/components/effects/glow-orbs";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Section } from "@/components/sections/section";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { personalInfo } from "@/lib/data";

export function HomePage() {
  return (
    <div className="relative">
      <LenisProvider />
      <Toaster richColors position="bottom-right" />
      <CursorGlow />
      <GlowOrbs />

      <Navbar
        email={personalInfo.email}
        githubUrl={personalInfo.githubUrl}
        linkedinUrl={personalInfo.linkedinUrl}
        location={personalInfo.location}
      />

      <main>
        <Hero />

        <Section id="about">
          <About />
        </Section>

        <Section id="skills">
          <Skills />
        </Section>

        <Section id="projects">
          <Projects />
        </Section>

        <Section id="experience">
          <Experience />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>

        <Footer />
      </main>
    </div>
  );
}

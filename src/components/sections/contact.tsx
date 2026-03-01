"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [loading, setLoading] = useState(false);

  const defaultValues = useMemo<FormValues>(
    () => ({ name: "", email: "", subject: "", message: "" }),
    [],
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onTouched",
  });

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const body = encodeURIComponent(
        `From: ${values.name} <${values.email}>\n\n${values.message}`,
      );
      const subject = encodeURIComponent(values.subject);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      toast.success("Opening your email client...");
      form.reset(defaultValues);
    } catch {
      toast.error("Could not open email client.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          Let&apos;s Build Something Together
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Contact
        </h2>
      </FadeIn>

      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <FadeIn delay={0.05}>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="text-base font-extrabold text-foreground">
                    Reach out
                  </div>
                  <Badge
                    className={
                      personalInfo.availability === "available"
                        ? "border-accent-secondary/40"
                        : "border-border/70"
                    }
                  >
                    {personalInfo.availability === "available"
                      ? "Available for Freelance"
                      : "Not Available"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="grid gap-3">
                <InfoRow icon={<Mail className="h-4 w-4" />}>
                  <a
                    className="text-sm font-semibold text-foreground/90 hover:text-foreground"
                    href={`mailto:${personalInfo.email}`}
                  >
                    {personalInfo.email}
                  </a>
                </InfoRow>
                <InfoRow icon={<MapPin className="h-4 w-4" />}>
                  <span className="text-sm font-semibold text-foreground/90">
                    {personalInfo.location}
                  </span>
                </InfoRow>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={personalInfo.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <div className="lg:col-span-7">
          <FadeIn delay={0.1}>
            <Card>
              <CardHeader>
                <div className="text-base font-extrabold text-foreground">
                  Send a message
                </div>
              </CardHeader>
              <CardContent>
                <form
                  className="grid gap-3"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field
                      label="Name"
                      error={form.formState.errors.name?.message}
                    >
                      <Input
                        placeholder="Your name"
                        {...form.register("name")}
                      />
                    </Field>
                    <Field
                      label="Email"
                      error={form.formState.errors.email?.message}
                    >
                      <Input
                        placeholder="you@example.com"
                        type="email"
                        {...form.register("email")}
                      />
                    </Field>
                  </div>

                  <Field
                    label="Subject"
                    error={form.formState.errors.subject?.message}
                  >
                    <Input
                      placeholder="Project inquiry"
                      {...form.register("subject")}
                    />
                  </Field>

                  <Field
                    label="Message"
                    error={form.formState.errors.message?.message}
                  >
                    <Textarea
                      placeholder="Tell me a bit about what you want to build..."
                      {...form.register("message")}
                    />
                  </Field>

                  <div className="mt-2">
                    <Button type="submit" disabled={loading}>
                      {loading ? "Sending..." : "Send"}
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-surface/40 px-4 py-3">
      <div className="text-muted">{icon}</div>
      <div>{children}</div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-xs font-semibold uppercase tracking-widest text-muted">
          {label}
        </label>
        {error ? <span className="text-xs text-accent-secondary">{error}</span> : null}
      </div>
      {children}
    </div>
  );
}

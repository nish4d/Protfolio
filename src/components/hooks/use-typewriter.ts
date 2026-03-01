"use client";

import { useEffect, useMemo, useState } from "react";

export function useTypewriter({
  words,
  typeMs = 55,
  deleteMs = 35,
  holdMs = 1100,
}: {
  words: string[];
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
}) {
  const safeWords = useMemo(() => words.filter(Boolean), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (safeWords.length === 0) return;

    const current = safeWords[wordIndex % safeWords.length] ?? "";

    if (!deleting && text === current) {
      const t = window.setTimeout(() => setDeleting(true), holdMs);
      return () => window.clearTimeout(t);
    }

    if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % safeWords.length);
      return;
    }

    const t = window.setTimeout(
      () => {
        if (!deleting) setText(current.slice(0, text.length + 1));
        else setText(current.slice(0, Math.max(0, text.length - 1)));
      },
      deleting ? deleteMs : typeMs,
    );

    return () => window.clearTimeout(t);
  }, [deleteMs, deleting, holdMs, safeWords, text, typeMs, wordIndex]);

  return { text };
}

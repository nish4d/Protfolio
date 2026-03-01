"use client";

import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const coarse = window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
    if (coarse) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const el = dotRef.current;
    if (!el) return;

    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  if (!mounted || !enabled) return null;

  return (
    <div
      aria-hidden
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-50 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/70 blur-[1px] shadow-[0_0_0_1px_rgba(0,212,255,0.25),0_0_30px_rgba(0,212,255,0.25)]"
    />
  );
}

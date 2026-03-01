"use client";

import { useEffect, useState } from "react";

export function useCountUp({
  to,
  durationMs = 900,
  enabled,
}: {
  to: number;
  durationMs?: number;
  enabled: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const start = performance.now();
    const from = 0;

    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(from + (to - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [durationMs, enabled, to]);

  return value;
}

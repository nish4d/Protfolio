import * as React from "react";

import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      "flex h-12 w-full rounded-2xl border border-border/70 bg-surface/40 px-4 text-sm text-foreground placeholder:text-muted outline-none transition-colors focus-visible:border-accent-primary/40 focus-visible:ring-2 focus-visible:ring-accent-primary/20",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";

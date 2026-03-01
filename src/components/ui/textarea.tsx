import * as React from "react";

import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-[140px] w-full resize-none rounded-2xl border border-border/70 bg-surface/40 px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition-colors focus-visible:border-accent-primary/40 focus-visible:ring-2 focus-visible:ring-accent-primary/20",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

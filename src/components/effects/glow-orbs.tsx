export function GlowOrbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute left-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-accent-primary/15 blur-[80px]" />
      <div className="absolute right-[-15%] top-[15%] h-[560px] w-[560px] rounded-full bg-accent-secondary/10 blur-[90px]" />
      <div className="absolute left-[20%] bottom-[-20%] h-[620px] w-[620px] rounded-full bg-accent-primary/10 blur-[110px]" />
    </div>
  );
}

// TODO: Replace with real logo images when provided.
export function LogoPlaceholder({ label, variant = "light" }: { label: string; variant?: "light" | "dark" }) {
  const border = variant === "light"
    ? "border-navy/20 text-navy bg-white/60"
    : "border-white/30 text-white bg-white/5";
  return (
    <div
      aria-label={label}
      className={`h-12 w-12 sm:h-14 sm:w-14 rounded-xl border-2 border-dashed ${border} backdrop-blur grid place-items-center text-[9px] font-semibold uppercase tracking-wider text-center leading-tight px-1`}
    >
      {label}
    </div>
  );
}

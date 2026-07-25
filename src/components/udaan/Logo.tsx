export function Logos({ size = "md", whiteBg = true }: { size?: "sm" | "md" | "lg"; whiteBg?: boolean }) {
  const heightCls =
    size === "lg" ? "h-12 sm:h-14" : size === "sm" ? "h-7 sm:h-9" : "h-9 sm:h-11";

  return (
    <div className={`shrink-0 flex items-center gap-2.5 sm:gap-3.5 ${whiteBg ? "bg-white p-2 px-3.5 rounded-2xl shadow-md border border-slate-200/90" : ""}`}>
      <img
        src="/images/hitLogo2.png"
        alt="Heritage Institute of Technology 25 Years Logo"
        className={`${heightCls} w-auto object-contain transition-transform hover:scale-105`}
      />
      <img
        src="/images/iic-logo2.png"
        alt="Institution's Innovation Council Logo"
        className={`${heightCls} w-auto object-contain transition-transform hover:scale-105`}
      />
    </div>
  );
}

export function LogoPlaceholder({ label, variant = "light" }: { label: string; variant?: "light" | "dark" }) {
  return <Logos size={variant === "dark" ? "sm" : "md"} />;
}

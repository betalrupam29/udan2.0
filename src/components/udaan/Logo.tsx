export function Logos({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const heightCls =
    size === "lg" ? "h-16 sm:h-20 md:h-22" : size === "sm" ? "h-10 sm:h-12" : "h-14 sm:h-16";

  return (
    <div className="flex items-center gap-3 sm:gap-4 shrink-0">
      <img
        src="/images/hitLogo.jpeg"
        alt="Heritage Institute of Technology Logo"
        className={`${heightCls} w-auto object-contain rounded-lg transition-transform hover:scale-105`}
      />
      <img
        src="/images/iicLogo.jpeg"
        alt="Institution's Innovation Council Logo"
        className={`${heightCls} w-auto object-contain rounded-lg transition-transform hover:scale-105`}
      />
    </div>
  );
}

export function LogoPlaceholder({ label, variant = "light" }: { label: string; variant?: "light" | "dark" }) {
  return <Logos size={variant === "dark" ? "sm" : "md"} />;
}


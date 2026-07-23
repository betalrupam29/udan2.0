import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET = new Date("2026-08-26T10:00:00+05:30").getTime();

function diff() {
  const now = Date.now();
  const d = Math.max(0, TARGET - now);
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

export function Countdown({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [t, setT] = useState(diff());
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);
  const cells = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];
  const cardCls =
    variant === "dark"
      ? "glass-dark text-white"
      : "glass text-navy shadow-elegant";
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4">
      {cells.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className={`${cardCls} rounded-2xl px-2 sm:px-4 py-4 sm:py-6 text-center`}
        >
          <div className="font-display text-3xl sm:text-5xl font-bold tabular-nums">
            {String(c.value).padStart(2, "0")}
          </div>
          <div className={`mt-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] ${variant === "dark" ? "text-white/70" : "text-navy/60"}`}>
            {c.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

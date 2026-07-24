import { useMemo } from "react";
import { motion } from "framer-motion";

export function Particles({ count = 22 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 10,
        delay: Math.random() * 4,
        dur: 12 + Math.random() * 8,
        gold: Math.random() > 0.55,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {items.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.4, 1, 0], y: [0, -40, -10, -60, 0] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full blur-[1px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.gold ? "var(--gold-light)" : "rgba(255,255,255,0.7)",
            boxShadow: p.gold
              ? "0 0 12px rgba(212,160,23,0.65)"
              : "0 0 10px rgba(255,255,255,0.55)",
          }}
        />
      ))}
    </div>
  );
}

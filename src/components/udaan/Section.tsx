import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
          <span className="h-1 w-1 rounded-full bg-gold" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-navy-deep">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-navy/60 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}

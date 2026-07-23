import { motion } from "framer-motion";
import { Users, UserCheck, IndianRupee, Shirt, Building2, Monitor } from "lucide-react";

const stats = [
  { icon: Users, label: "Participants after Screening", value: "30 Teams" },
  { icon: UserCheck, label: "Maximum Team Members", value: "4" },
  { icon: IndianRupee, label: "Registration Fee (External)", value: "₹500 / team" },
  { icon: Shirt, label: "Official Event T-Shirt", value: "₹400 each" },
  { icon: Building2, label: "Venue", value: "Executive Hall" },
  { icon: Monitor, label: "Mode", value: "Offline" },
];

export function Details() {
  return (
    <section className="relative py-24 sm:py-32 text-white">

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            <span className="h-1 w-1 rounded-full bg-gold animate-glow-pulse" />
            Competition Details
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Everything you need to <span className="text-gradient-gold">know at a glance</span>.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="rounded-3xl border border-white/10 glass-dark p-6 hover:-translate-y-1 transition-transform"
            >
              <s.icon className="text-gold-light" size={22} />
              <div className="mt-4 text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/50">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

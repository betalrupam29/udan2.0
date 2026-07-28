import { motion } from "framer-motion";
import { Users, UserCheck, IndianRupee, Building2, Monitor } from "lucide-react";

const stats = [
  { icon: Users, label: "Participants after Screening", value: "50 Teams (max)" },
  { icon: UserCheck, label: "Maximum Team Members", value: "3" },
  { icon: IndianRupee, label: "Registration Fee", value: "₹500 / selected team" },
  { icon: Building2, label: "Venue", value: "Heritage Institute of Technology" },
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
              <div className="flex items-center gap-2">
                <s.icon className="text-gold-light" size={22} />
                <div className="text-xs uppercase tracking-wider text-white/70 font-semibold">{s.label}</div>
              </div>
              <div className="mt-4 text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

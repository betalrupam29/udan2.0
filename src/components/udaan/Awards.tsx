import { motion } from "framer-motion";
import { Trophy, Medal, Award } from "lucide-react";
import { SectionHeader } from "./Section";

const prizes = [
  {
    rank: "1st",
    label: "First Prize",
    amount: "₹30,000",
    icon: Trophy,
    tone: "gold",
    emoji: "🥇",
  },
  {
    rank: "2nd",
    label: "Second Prize",
    amount: "₹20,000",
    icon: Medal,
    tone: "silver",
    emoji: "🥈",
  },
  {
    rank: "3rd",
    label: "Third Prize",
    amount: "₹15,000",
    icon: Medal,
    tone: "bronze",
    emoji: "🥉",
  },
];

export function Awards() {
  return (
    <section id="awards" className="relative py-24 sm:py-32 text-white">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Awards & Rewards
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold">
            Build boldly. <span className="text-gradient-gold">Be recognised.</span>
          </h2>
          <p className="mt-4 text-white/70">
            A prize pool designed to fuel your next step — plus certificates for every eligible participant.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {prizes.map((p, i) => (
            <motion.div
              key={p.rank}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -8 }}
              className={`relative overflow-hidden rounded-3xl p-8 text-center border ${
                i === 0 ? "glass-dark border-gold/40 md:-translate-y-4 shadow-gold-glow" : "glass-dark border-white/10"
              }`}
            >
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl gradient-gold shadow-gold-glow">
                <p.icon size={36} className="text-navy-deep" />
              </div>
              <div className="mt-6 text-6xl">{p.emoji}</div>
              <div className="mt-3 text-sm uppercase tracking-[0.25em] text-white/60">{p.label}</div>
              <div className="mt-1 font-display text-4xl font-bold text-gradient-gold">{p.amount}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="mt-8 rounded-3xl glass-dark p-6 sm:p-8"
>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 border border-white/10">
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-yellow-500/20">
        <Award size={26} className="text-yellow-400" />
      </div>
      <div>
        <div className="text-sm uppercase tracking-widest text-white/60">
          4th Prize
        </div>
        <div className="font-display text-2xl font-bold text-gradient-gold">
          ₹10,000
        </div>
      </div>
    </div>

    <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 border border-white/10">
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-yellow-500/20">
        <Award size={26} className="text-yellow-400" />
      </div>
      <div>
        <div className="text-sm uppercase tracking-widest text-white/60">
          5th Prize
        </div>
        <div className="font-display text-2xl font-bold text-gradient-gold">
          ₹5,000
        </div>
      </div>
    </div>

    <div className="flex items-center justify-center rounded-2xl bg-white/5 p-5 border border-white/10">
      <div className="text-center">
        <div className="text-sm uppercase tracking-widest text-white/60">
          Certificates
        </div>
        <div className="mt-2 text-lg font-semibold">
          🎓 Every eligible participant receives an official UDAAN 2.0
          Certificate of Participation.
        </div>
      </div>
    </div>

  </div>
</motion.div>
      </div>
    </section>
  );
}
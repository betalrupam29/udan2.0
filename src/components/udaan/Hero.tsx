import { motion } from "framer-motion";
import { Calendar, MapPin, Monitor, Users, Download } from "lucide-react";
import PaymentRegister from "./PaymentRegister";

const info = [
  { icon: Calendar, label: "Date", value: "26–27 August 2026" },
  { icon: MapPin, label: "Venue", value: "Executive Hall, HITK, Kolkata" },
  { icon: Monitor, label: "Mode", value: "Offline" },
  { icon: Users, label: "Teams", value: "30 · Max 3 members" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen w-full text-white">

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs sm:text-sm font-medium text-gold-light">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-glow-pulse" />
            National Level · IIC · Heritage Institute of Technology
          </span>

          <h1 className="mt-6 font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none">
            <span className="block">UDAAN</span>
            <span className="block text-gradient-gold">2.0</span>
          </h1>

         <PaymentRegister />
          <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-light text-white/90">
            From <em className="text-gradient-gold not-italic font-medium">Grounded Ideas</em> to Sky-High Impact
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base text-white/70 leading-relaxed">
            National Level Reward-Based Competition on Prototype & Business Models organized by the
            Institution's Innovation Council (IIC), Heritage Institute of Technology, Kolkata.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#" // TODO: link brochure PDF
              className="inline-flex items-center gap-2 rounded-full glass-dark px-7 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-white/15 transition-colors"
            >
              <Download size={18} />
              Download Brochure
            </a>
          </div>
        </motion.div>

        {/* Info pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-14 grid max-w-5xl grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {info.map((it) => (
            <div key={it.label} className="glass-dark rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2 text-gold-light">
                <it.icon size={16} />
                <span className="text-[10px] sm:text-xs uppercase tracking-wider">{it.label}</span>
              </div>
              <div className="mt-2 text-sm sm:text-base font-semibold text-white leading-snug">{it.value}</div>
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}

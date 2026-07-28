import { motion } from "framer-motion";
import { Calendar, MapPin, Monitor, Users, Download, CheckCircle2, CalendarClock } from "lucide-react";
import PaymentRegister from "./PaymentRegister";


const info = [
  { icon: Calendar, label: "Date", value: "26–27 August 2026" },
  {
  icon: CheckCircle2,
  label: "Registration",
  value: "₹500 only for shortlisted 50(max) teams",
},
  { icon: CalendarClock, label: "Deadline", value: "16 August 2026" },
  { icon: Users, label: "Teams", value: " Max 3 members" },
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
        <span className="inline-flex items-center gap-3 rounded-full glass-dark px-6 py-3 text-sm sm:text-lg md:text-xl font-bold text-gold-light border border-gold/40 shadow-gold-glow">
  <span className="h-3 w-3 rounded-full bg-gold animate-glow-pulse" />
  National Level • IIC • Heritage Institute of Technology
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

          
        </motion.div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">

  <div className="glass-dark border border-gold/30 rounded-2xl px-6 py-4 min-w-[220px]">
    <p className="text-xs uppercase tracking-[0.25em] text-gold-light">
      Prize Pool
    </p>

    <h3 className="mt-1 text-3xl font-bold text-gradient-gold">
      ₹80,000
    </h3>

    <p className="text-white/70 text-sm mt-1">
      Total Cash Rewards
    </p>
  </div>

  <div className="glass-dark border border-white/10 rounded-2xl px-6 py-4 min-w-[220px]">
    <p className="text-xs uppercase tracking-[0.25em] text-white/60">
      Winner
    </p>

    <h3 className="mt-1 text-3xl font-bold text-white">
      🏆 ₹30,000
    </h3>

    <p className="text-white/70 text-sm mt-1">
      1st Prize
    </p>
  </div>

</div>

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

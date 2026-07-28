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
<div className="space-y-4 text-center">
  {/* Largest: Main Heading */}
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
    Heritage Institute of Technology
  </h2>

  {/* Medium: Innovation Council */}
  <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#D9B868] opacity-90">
    Institution's Innovation Council (IIC-HITK)
  </p>

  {/* Visual Separator */}
  <div className="mx-auto h-px w-24 bg-[#C99A3D]/40 my-2" />

  {/* Smallest: National Competition Subtitle */}
  <p className="text-[10px] sm:text-xs md:text-sm tracking-wide text-white/50 font-normal max-w-md mx-auto leading-normal">
    A National Level Prototype & Business Model Competition
  </p>
</div>



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

        {/* Two-column layout for prizes and event details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-12 grid max-w-6xl grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Left: Prize Information Card */}
          <div className="glass-dark border border-gold/30 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gradient-gold mb-4">Prize Distribution</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-gold-light font-semibold">🥇 1st Prize</span>
                <span className="text-xl font-bold text-white">₹30,000</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-gold-light font-semibold">🥈 2nd Prize</span>
                <span className="text-xl font-bold text-white">₹20,000</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-gold-light font-semibold">🥉 3rd Prize</span>
                <span className="text-xl font-bold text-white">₹15,000</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-gold-light font-semibold">4th Prize</span>
                <span className="text-xl font-bold text-white">₹10,000</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gold-light font-semibold">5th Prize</span>
                <span className="text-xl font-bold text-white">₹5,000</span>
              </div>
              <div className="mt-4 pt-3 border-t border-gold/30">
                <div className="flex items-center justify-between">
                  <span className="text-gold font-bold">Total Prize Pool</span>
                  <span className="text-2xl font-bold text-gradient-gold">₹80,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Event Details Card */}
          <div className="glass-dark border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Event Details</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="text-gold-light mt-1" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold-light">Date</p>
                  <p className="text-lg font-semibold text-white mt-1">26–27 August 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-gold-light mt-1" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold-light">Registration</p>
                  <p className="text-lg font-semibold text-white mt-1">₹500 only for shortlisted 50(max) teams</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CalendarClock className="text-gold-light mt-1" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold-light">Deadline</p>
                  <p className="text-lg font-semibold text-white mt-1">16 August 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-gold-light mt-1" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold-light">Teams</p>
                  <p className="text-lg font-semibold text-white mt-1">Max 3 members</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}

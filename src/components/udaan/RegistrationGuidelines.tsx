import { motion } from "framer-motion";
import { Users, AlertTriangle, CheckCircle2 } from "lucide-react";

const guidelines = [
  {
    title: "Registration Guidelines",
    icon: Users,
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/20",
    items: [
      "Each team can have a maximum of 3 student members and a mentor (optional)",
      "Open to all undergraduate and postgraduate students",
      "₹500 per team",
      "Registration: 28th July 2026 - 16th August 2026",
    ],
  },
  {
    title: "Before You Submit",
    icon: AlertTriangle,
    iconColor: "text-orange-400",
    bgColor: "bg-orange-500/20",
    items: [
      "Ensure all team member details are accurate",
      "Double-check your contact information",
      "Review your SDG theme selection",
      "Proofread your idea description",
      "Verify team composition meets requirements",
    ],
  },
  {
    title: "After Registration",
    icon: CheckCircle2,
    iconColor: "text-green-400",
    bgColor: "bg-green-500/20",
    items: [
       "Keep the Payment deteils after sucessful payment",
      "You'll receive a confirmation email if shortlisted",
      "Competition updates and announcements",
    ],
  },
];

export function RegistrationGuidelines() {
  return (
    <section id="guidelines" className="relative py-24 sm:py-32 text-white">


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
            Rules & Guidelines
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Registration <span className="text-gradient-gold">Information</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            Everything you need to know before, during, and after submitting your application.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {guidelines.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="rounded-3xl border border-white/10 glass-dark overflow-hidden flex flex-col h-full"
            >
              <div className="p-8 bg-white/5 flex items-center gap-4 border-b border-white/10">
                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${g.bgColor} ${g.iconColor}`}>
                  <g.icon size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">{g.title}</h3>
              </div>
              
              <div className="p-0 flex-1">
                <ul className="divide-y divide-white/5">
                  {g.items.map((item, j) => (
                    <li key={j} className="p-6 text-sm text-white/70 flex items-start gap-3">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${g.iconColor.replace('text-', 'bg-')}`} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

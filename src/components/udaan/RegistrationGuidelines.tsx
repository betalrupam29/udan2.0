import { motion } from "framer-motion";
import { Users, AlertTriangle, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./Section";

const guidelines = [
  {
    title: "Registration Guidelines",
    icon: Users,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
    topBgColor: "bg-blue-50/50",
    items: [
      "Each team can have a maximum of 3 student members and 1 mentor",
      "Open to all undergraduate and postgraduate students",
      "Free for HITK students",
      "₹500 per team for external participants",
      "Registration: 7th August 2026 - 17th August 2026",
    ],
  },
  {
    title: "Before You Submit",
    icon: AlertTriangle,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
    topBgColor: "bg-orange-50/50",
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
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
    topBgColor: "bg-green-50/50",
    items: [
      "You'll receive a confirmation email if shortlisted",
      "Payment details (if external participant)",
      "Competition updates and announcements",
    ],
  },
];

export function RegistrationGuidelines() {
  return (
    <section id="guidelines" className="relative py-24 sm:py-32 bg-mist/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Guidelines"
          title={<>Registration <span className="text-gradient-navy">Information</span>.</>}
          description="Everything you need to know before, during, and after submitting your application."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {guidelines.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="rounded-3xl border border-navy/5 bg-white shadow-elegant overflow-hidden flex flex-col h-full"
            >
              <div className={`p-8 ${g.topBgColor} flex items-center gap-4 border-b border-navy/5`}>
                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${g.bgColor} ${g.iconColor}`}>
                  <g.icon size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-navy-deep">{g.title}</h3>
              </div>
              
              <div className="p-0 flex-1 bg-white">
                <ul className="divide-y divide-navy/5">
                  {g.items.map((item, j) => (
                    <li key={j} className="p-6 text-sm text-navy/70 flex items-start gap-3">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${g.bgColor.replace('100', '400')}`} />
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

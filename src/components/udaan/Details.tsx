import { motion } from "framer-motion";
import { Users, UserCheck, IndianRupee, Shirt, Building2, Monitor, GraduationCap, FlaskConical, Rocket, Briefcase, Lightbulb } from "lucide-react";
import { SectionHeader } from "./Section";

const stats = [
  { icon: Users, label: "Participants after Screening", value: "30 Teams" },
  { icon: UserCheck, label: "Maximum Team Members", value: "4" },
  { icon: IndianRupee, label: "Registration Fee (External)", value: "₹500 / team" },
  { icon: Shirt, label: "Official Event T-Shirt", value: "₹400 each" },
  { icon: Building2, label: "Venue", value: "Executive Hall" },
  { icon: Monitor, label: "Mode", value: "Offline" },
];

const eligible = [
  { icon: GraduationCap, label: "Students" },
  { icon: Lightbulb, label: "Innovators" },
  { icon: FlaskConical, label: "Researchers" },
  { icon: Rocket, label: "Startups" },
  { icon: Briefcase, label: "Entrepreneurs" },
];

export function Details() {
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Competition Details"
          title={<>Everything you need to <span className="text-gradient-navy">know at a glance</span>.</>}
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="rounded-3xl border border-navy/5 bg-card p-6 shadow-elegant hover:-translate-y-1 transition-transform"
            >
              <s.icon className="text-gold-deep" size={22} />
              <div className="mt-4 text-2xl sm:text-3xl font-bold text-navy-deep">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-navy/50">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeader
            eyebrow="Eligibility"
            title={<>Who can <span className="text-gradient-gold">participate</span>?</>}
            description="Open to a diverse spectrum of builders and thinkers. Maximum team size: 4 members."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
            {eligible.map((e, i) => (
              <motion.div
                key={e.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-navy/5 bg-white p-6 text-center shadow-elegant"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl gradient-navy text-gold-light shadow-elegant group-hover:scale-110 transition-transform">
                  <e.icon size={22} />
                </div>
                <div className="mt-4 font-semibold text-navy-deep">{e.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

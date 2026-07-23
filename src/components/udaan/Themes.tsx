import { motion } from "framer-motion";
import {
  HeartPulse,
  Activity,
  Sprout,
  GraduationCap,
  ShieldCheck,
  BrainCircuit,
  TrainFront,
} from "lucide-react";
import { SectionHeader } from "./Section";

type Theme = {
  icon: typeof HeartPulse;
  name: string;
  sdgs: string[];
  goals: string[];
};

const themes: Theme[] = [
  {
    icon: HeartPulse,
    name: "Empowering the Elderly & Differently Abled",
    sdgs: ["SDG 3", "SDG 10", "SDG 11"],
    goals: ["Good Health and Well-Being", "Reduced Inequalities", "Sustainable Cities and Communities"],
  },
  {
    icon: Activity,
    name: "Health Analytics",
    sdgs: ["SDG 3", "SDG 9", "SDG 17"],
    goals: ["Good Health and Well-Being", "Industry, Innovation and Infrastructure", "Partnerships for the Goals"],
  },
  {
    icon: Sprout,
    name: "Agri Tech & Green Innovation",
    sdgs: ["SDG 2", "SDG 9", "SDG 12", "SDG 13"],
    goals: [
      "Zero Hunger",
      "Industry, Innovation and Infrastructure",
      "Responsible Consumption and Production",
      "Climate Action",
    ],
  },
  {
    icon: GraduationCap,
    name: "Child Welfare & Education Access",
    sdgs: ["SDG 3", "SDG 4", "SDG 10"],
    goals: ["Good Health and Well-Being", "Quality Education", "Reduced Inequalities"],
  },
  {
    icon: ShieldCheck,
    name: "Gender Equity & Women's Safety",
    sdgs: ["SDG 5", "SDG 10", "SDG 16"],
    goals: ["Gender Equality", "Reduced Inequalities", "Peace, Justice and Strong Institutions"],
  },
  {
    icon: BrainCircuit,
    name: "AI-based Intelligent System",
    sdgs: ["SDG 4", "SDG 9", "SDG 11"],
    goals: ["Quality Education", "Industry, Innovation and Infrastructure", "Sustainable Cities and Communities"],
  },
  {
    icon: TrainFront,
    name: "Transport System & Smart Construction",
    sdgs: ["SDG 9", "SDG 11", "SDG 13"],
    goals: ["Industry, Innovation and Infrastructure", "Sustainable Cities and Communities", "Climate Action"],
  },
];

export function Themes() {
  return (
    <section id="themes" className="relative py-24 sm:py-32 bg-mist">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(11,42,91,0.05),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tracks & Themes"
          title={<>Seven themes. <span className="text-gradient-gold">Infinite possibilities.</span></>}
          description="Every theme is mapped to the United Nations Sustainable Development Goals — build solutions that matter."
        />

        <div id="tracks" className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.55 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-elegant border border-navy/5 transition-all hover:shadow-[0_40px_80px_-30px_rgba(11,42,91,0.45)]"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-start justify-between">
                <div className="inline-grid h-14 w-14 place-items-center rounded-2xl gradient-gold shadow-gold-glow">
                  <t.icon size={26} className="text-navy-deep" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-navy/40">
                  Theme {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="relative mt-6 text-2xl font-semibold text-navy-deep leading-snug">
                {t.name}
              </h3>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {t.sdgs.map((s) => (
                  <span key={s} className="inline-flex items-center rounded-full bg-navy/5 px-2.5 py-1 text-[11px] font-semibold text-navy">
                    {s}
                  </span>
                ))}
              </div>

              <ul className="relative mt-5 space-y-1.5 text-sm text-navy/70">
                {t.goals.map((g) => (
                  <li key={g} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {g}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

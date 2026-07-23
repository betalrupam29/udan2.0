import { motion } from "framer-motion";
import {
  Lightbulb,
  Rocket,
  Wrench,
  Sparkles,
  BarChart3,
  Handshake,
  Leaf,
} from "lucide-react";
import { SectionHeader } from "./Section";

const pillars = [
  { icon: Lightbulb, title: "Innovation", desc: "Bold ideas that redefine what's possible in emerging technology." },
  { icon: Rocket, title: "Entrepreneurship", desc: "Turning student ventures into viable, scalable businesses." },
  { icon: Wrench, title: "Prototype Development", desc: "Hands-on engineering — building the working models of tomorrow." },
  { icon: Sparkles, title: "Startup Ecosystem", desc: "Access to mentors, incubators and the wider innovation network." },
  { icon: BarChart3, title: "Business Models", desc: "Pitches that go from concept to a defensible, sustainable model." },
  { icon: Handshake, title: "Industry Collaboration", desc: "Direct engagement with industry leaders and domain experts." },
  { icon: Leaf, title: "Sustainable Innovation", desc: "Solutions mapped to UN Sustainable Development Goals." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About the summit"
          title={<>Where prototypes meet <span className="text-gradient-navy">purpose</span>.</>}
          description="UDAAN 2.0 is a national-level, reward-based competition uniting student innovators around the pillars that shape tomorrow's economy."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-navy/5 bg-card p-6 sm:p-7 shadow-elegant transition-shadow hover:shadow-[0_30px_60px_-25px_rgba(11,42,91,0.35)]"
            >
              <div className="absolute inset-x-0 -top-16 h-32 bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-grid h-12 w-12 place-items-center rounded-2xl gradient-navy text-gold-light shadow-elegant">
                  <p.icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy-deep">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

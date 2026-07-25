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

const pillars = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Bold ideas that redefine what's possible in emerging technology.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurship",
    desc: "Turning student ventures into viable, scalable businesses.",
  },
  {
    icon: Wrench,
    title: "Prototype Development",
    desc: "Hands-on engineering — building the working models of tomorrow.",
  },
  {
    icon: Sparkles,
    title: "Startup Ecosystem",
    desc: "Access to mentors, incubators and the wider innovation network.",
  },
  {
    icon: BarChart3,
    title: "Business Models",
    desc: "Pitches that go from concept to a defensible, sustainable model.",
  },
  {
    icon: Handshake,
    title: "Industry Collaboration",
    desc: "Direct engagement with industry leaders and domain experts.",
  },
  {
    icon: Leaf,
    title: "Sustainable Innovation",
    desc: "Solutions mapped to UN Sustainable Development Goals.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-glow-pulse" />
            About the Summit
          </div>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Where prototypes meet{" "}
            <span className="text-gradient-gold">purpose</span>.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            UDAAN 2.0 is a national-level, reward-based competition uniting
            student innovators around the pillars that shape tomorrow's economy.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
              }}
              whileHover={{ y: -8 }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10

                bg-gradient-to-br
                from-white/[0.03]
                via-white/[0.015]
                to-transparent

                backdrop-blur-md

                p-6
                sm:p-7

                transition-all
                duration-300

                hover:border-green-400/40
                hover:from-white/[0.06]
                hover:via-white/[0.03]
                hover:shadow-[0_20px_40px_rgba(34,197,94,0.25)]
              "
            >
              {/* Green Glow */}
              <div className="absolute inset-0 rounded-2xl bg-green-500/5 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div
                  className="
                    inline-grid
                    h-14
                    w-14
                    place-items-center
                    rounded-2xl

                    border
                    border-green-400/20

                    bg-white/5
                    backdrop-blur-md

                    text-green-400

                    transition-all
                    duration-300

                    group-hover:bg-green-500
                    group-hover:border-green-400
                    group-hover:text-white
                    group-hover:shadow-lg
                    group-hover:shadow-green-500/30
                  "
                >
                  <p.icon size={24} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-white transition-colors duration-300 group-hover:text-green-400">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
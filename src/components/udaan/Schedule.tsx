import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const days = [
  {
    day: "Day 01",
    date: "26 August 2026",
    time: "10:00 AM – 7:00 PM",
    items: [
      "Registration & Check-in",
      "Inaugural Ceremony",
      "Prototype Display",
      "Mentor Interaction",
      "Initial Evaluation",
      "Networking Session",
      "End of Day Review",
    ],
  },
  {
    day: "Day 02",
    date: "27 August 2026",
    time: "10:00 AM – 7:00 PM",
    items: [
      "Final Presentations",
      "Business Model Pitch",
      "Jury Evaluation",
      "Expert Interaction",
      "Valedictory Session",
      "Prize Distribution",
      "Closing Ceremony",
    ],
  },
];

export function Schedule() {
  return (
    <section id="schedule" className="relative py-24 sm:py-32 bg-mist">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Schedule"
          title={<>Two days. <span className="text-gradient-navy">One breakthrough.</span></>}
          description="A tight, thoughtfully paced programme designed to move ideas from prototype to pitch."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {days.map((d, di) => (
            <motion.div
              key={d.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: di * 0.15, duration: 0.6 }}
              className="rounded-3xl bg-white shadow-elegant border border-navy/5 p-8 sm:p-10"
            >
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-gold-deep">{d.day}</div>
                  <div className="mt-1 font-display text-3xl font-bold text-navy-deep">{d.date}</div>
                </div>
                <div className="text-sm font-medium text-navy/60">{d.time}</div>
              </div>

              <div className="mt-8 relative pl-8">
                <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-gold via-navy/20 to-transparent" />
                {d.items.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="relative py-3"
                  >
                    <span className="absolute -left-[26px] top-4 h-3 w-3 rounded-full bg-white ring-2 ring-gold shadow-gold-glow" />
                    <div className="text-navy-deep font-medium">{item}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const rules = [
  { q: "Team Size", a: "Maximum 3 members per team. Cross-institution teams are permitted." },
  { q: "Registration", a: "Registration is mandatory for every participant on the team." },
  { q: "Registration Fee", a: "All teams pay ₹500 per team at the time of registration." },
  { q: "Official T-Shirt", a: "Optional UDAAN 2.0 event T-shirt available at ₹400 per member." },
  { q: "Original Prototype", a: "Only original, previously unpublished prototypes are allowed. Plagiarism results in disqualification." },
  { q: "Reporting Time", a: "Teams must report on time as per the published schedule on both days." },
  { q: "Judges' Decision", a: "The decision of the jury will be final and binding." },
  { q: "Event Schedule", a: "Participants must respect the event schedule and instructions of the organizers." },
  { q: "Certificates", a: "Certificates will be provided to all eligible participants." },
];

const faqs = [
  { q: "What is UDAAN2.0 competition about?", a: "UDAAN2.0 is a startup and business model competition organized by IIC-HITK that focuses on innovative solutions aligned with UN Sustainable Development Goals. It provides a platform for students to transform their ideas into viable business models with expert mentorship and substantial prizes." },
  { q: "Who can participate in UDAAN2.0?", a: "The competition is open to all undergraduate and postgraduate students. Teams can have a maximum of 3 members including the team leader. Both HITK students and external participants are welcome." },
  { q: "Is there any registration fee?", a: "500 Registration fees for all teams." },
  { q: "What should be the team composition?", a: "Each team can have a maximum of 3 members including one team leader. The team leader will be the primary point of contact. Teams can have members from different colleges and disciplines." },
  { q: "Can I participate individually?", a: "Yes, you can participate individually, but we encourage forming teams for diverse perspectives and skills. Individual participants can register as a team of one." },
  { q: "Can team members be from different colleges?", a: "Yes, team members can be from different colleges and institutions. However, if any team member is from outside HITK, the team will be considered as external participants and need to pay the registration fee." },
];

export function Rules() {
  return (
    <section id="rules" className="relative py-24 sm:py-32 text-white">

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gold-light mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-glow-pulse" />
            Official Guidelines
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight">
            Rules & <span className="text-gradient-gold">Guidelines</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {rules.map((r, i) => (
    <motion.div
      key={r.q}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
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
        hover:-translate-y-2
        hover:border-gold/40
        hover:from-white/[0.06]
        hover:via-white/[0.03]
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]
      "
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-5">
          <span
            className="
              grid
            h-12
            w-12
            place-items-center
            rounded-full
            border
            border-gold/30
            bg-gold/15
            text-base
            font-bold
            text-gold-light
            transition-all
            duration-300
            group-hover:bg-green-500
            group-hover:border-green-400
            group-hover:text-white
            group-hover:shadow-lg
            group-hover:shadow-green-500/30
            "
          >
            {String(i + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-gold-light">
          {r.q}
        </h3>

        <p className="text-sm leading-7 text-white/70">
          {r.a}
        </p>
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32 text-white">

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            <span className="h-1 w-1 rounded-full bg-gold animate-glow-pulse" />
            FAQ
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Questions? <span className="text-gradient-gold">Answered.</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 rounded-3xl glass-dark border border-white/10 p-4 sm:p-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`f-${i}`} className="border-white/10">
                <AccordionTrigger className="text-left text-white hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-white/60">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

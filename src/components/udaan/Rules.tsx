import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "./Section";

const rules = [
  { q: "Team Size", a: "Maximum 4 members per team. Cross-institution teams are permitted." },
  { q: "Registration", a: "Registration is mandatory for every participant on the team." },
  { q: "External Registration Fee", a: "External teams pay ₹500 per team at the time of registration." },
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
  { q: "Is there any registration fee?", a: "Registration is completely free for HITK students. External participants (non-HITK students) need to pay ₹500 per team. Payment details will be shared after successful form submission and selection." },
  { q: "What should be the team composition?", a: "Each team can have a maximum of 3 members including one team leader. The team leader will be the primary point of contact. Teams can have members from different colleges and disciplines." },
  { q: "Can I participate individually?", a: "Yes, you can participate individually, but we encourage forming teams for diverse perspectives and skills. Individual participants can register as a team of one." },
  { q: "Can team members be from different colleges?", a: "Yes, team members can be from different colleges and institutions. However, if any team member is from outside HITK, the team will be considered as external participants and need to pay the registration fee." },
];

export function Rules() {
  return (
    <section className="relative py-24 sm:py-32 bg-mist">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Rules & Guidelines"
          title={<>The <span className="text-gradient-navy">fine print</span>, without the fine print.</>}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 rounded-3xl bg-white shadow-elegant border border-navy/5 p-4 sm:p-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {rules.map((r, i) => (
              <AccordionItem key={r.q} value={`r-${i}`} className="border-navy/10">
                <AccordionTrigger className="text-left text-navy-deep hover:no-underline">
                  <span className="flex items-center gap-3">
                    <span className="grid h-7 w-7 place-items-center rounded-md bg-gold/15 text-xs font-bold text-gold-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {r.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-navy/70 pl-10">{r.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Questions? <span className="text-gradient-gold">Answered.</span></>}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 rounded-3xl bg-card shadow-elegant border border-navy/5 p-4 sm:p-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`f-${i}`} className="border-navy/10">
                <AccordionTrigger className="text-left text-navy-deep hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-navy/70">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

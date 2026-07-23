import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { SectionHeader } from "./Section";

const tracks = ["Prototype", "Business Model"];
const themes = [
  "Empowering the Elderly & Differently Abled",
  "Health Analytics",
  "Agri Tech & Green Innovation",
  "Child Welfare & Education Access",
  "Gender Equity & Women's Safety",
  "AI-based Intelligent System",
  "Transport System & Smart Construction",
];

export function Registration() {
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agree) {
      toast.error("Please accept the rules to continue.");
      return;
    }
    setSubmitting(true);
    // TODO: integrate registration API (Lovable Cloud / Payments gateway)
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    toast.success("Registration received. We'll be in touch shortly.");
    (e.target as HTMLFormElement).reset();
    setAgree(false);
  }

  const input =
    "w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm text-navy-deep placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition";

  return (
    <section id="registration" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Register"
          title={<>Reserve your team's <span className="text-gradient-gold">spot</span>.</>}
          description="External teams: ₹500 per team. T-shirts optional at ₹400. Screening selects 30 finalist teams."
        />

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl bg-card p-6 sm:p-10 shadow-elegant border border-navy/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Team Name"><input required name="team" className={input} placeholder="e.g. Skyline Innovators" /></Field>
            <Field label="Project Title"><input required name="title" className={input} placeholder="Your project title" /></Field>
            <Field label="Track">
              <select required name="track" defaultValue="" className={input}>
                <option value="" disabled>Select a track</option>
                {tracks.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
            <Field label="Theme">
              <select required name="theme" defaultValue="" className={input}>
                <option value="" disabled>Select a theme</option>
                {themes.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
            <Field label="Team Leader Name"><input required name="leader" className={input} placeholder="Full name" /></Field>
            <Field label="Email"><input required type="email" name="email" className={input} placeholder="leader@example.com" /></Field>
            <Field label="Phone"><input required type="tel" name="phone" className={input} placeholder="+91 " /></Field>
            <Field label="College"><input required name="college" className={input} placeholder="Institution name" /></Field>
            <Field label="Department"><input required name="dept" className={input} placeholder="e.g. CSE" /></Field>
            <Field label="Year of Study"><input required name="year" className={input} placeholder="e.g. 3rd" /></Field>
            <Field label="Number of Members">
              <select required name="members" defaultValue="" className={input}>
                <option value="" disabled>Select</option>
                {[1, 2, 3, 4].map((n) => <option key={n}>{n}</option>)}
              </select>
            </Field>
            <Field label="Abstract (PDF/DOC)">
              <input required type="file" name="abstract" accept=".pdf,.doc,.docx" className="w-full text-sm text-navy/70 file:mr-3 file:rounded-lg file:border-0 file:bg-navy file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white hover:file:bg-navy-deep" />
            </Field>
          </div>

          <label className="mt-6 flex items-start gap-3 text-sm text-navy/75 cursor-pointer">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-navy/30 text-gold focus:ring-gold"
            />
            I agree to the rules & guidelines of UDAAN 2.0.
          </label>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full gradient-gold px-8 py-3.5 text-sm font-semibold text-navy-deep shadow-gold-glow disabled:opacity-70 hover:-translate-y-0.5 transition-transform"
            >
              {submitting ? "Submitting…" : "Register Team"}
            </button>
            <span className="text-xs text-navy/50">You'll receive a confirmation email. Payment link follows for external teams.</span>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy/60">{label}</span>
      {children}
    </label>
  );
}

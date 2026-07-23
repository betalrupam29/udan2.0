import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const dates = [
  {
    event: "Submission Opens",
    date: "August 7, 2026",
    time: "9:00 AM",
    location: "Online Portal",
    description: "Team registration portal goes live",
  },
  {
    event: "Submission Deadline",
    date: "August 17, 2026",
    time: "11:59 PM",
    location: "Online Portal",
    description: "Last date for team registration",
  },
  {
    event: "Submission Shortlisting Notification",
    date: "August 23, 2026",
    time: "To be notified via email",
    location: "Online Portal",
    description: "Shortlisted teams will be notified via email",
  },
  {
    event: "Final event",
    date: "August 26-27, 2026",
    time: "10:00 AM onwards",
    location: "To be notified via email",
    description: "Selected teams will be notified via email",
  },
];

export function ImportantDates() {
  return (
    <section id="dates" className="relative py-24 sm:py-32 text-white">


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
            Important Dates
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Mark your <span className="text-gradient-gold">calendars</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            Keep track of all the important deadlines and event dates.
          </p>
        </motion.div>

        <div className="mt-16 overflow-x-auto pb-4">
          <div className="min-w-[900px] rounded-3xl border border-white/10 glass-dark overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="py-5 px-6 font-semibold text-gold-light text-sm">Event</th>
                  <th className="py-5 px-6 font-semibold text-gold-light text-sm">Date</th>
                  <th className="py-5 px-6 font-semibold text-gold-light text-sm">Time</th>
                  <th className="py-5 px-6 font-semibold text-gold-light text-sm">Location</th>
                  <th className="py-5 px-6 font-semibold text-gold-light text-sm">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {dates.map((d, i) => (
                  <motion.tr
                    key={d.event}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="hover:bg-white/5 transition-colors group"
                  >
                    <td className="py-5 px-6 font-bold text-white group-hover:text-gold-light transition-colors">
                      {d.event}
                    </td>
                    <td className="py-5 px-6 text-sm text-white/80">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-blue-400" />
                        {d.date}
                      </div>
                    </td>
                    <td className="py-5 px-6 text-sm text-white/80">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-green-400" />
                        {d.time}
                      </div>
                    </td>
                    <td className="py-5 px-6 text-sm text-white/80">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-orange-400" />
                        {d.location}
                      </div>
                    </td>
                    <td className="py-5 px-6 text-sm text-white/60">
                      {d.description}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

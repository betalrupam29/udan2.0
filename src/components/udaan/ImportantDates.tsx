import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { SectionHeader } from "./Section";

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
    <section id="dates" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Important Dates"
          title={<>Mark your <span className="text-gradient-gold">calendars</span>.</>}
          description="Keep track of all the important deadlines and event dates."
        />

        <div className="mt-16 overflow-x-auto pb-4">
          <div className="min-w-[900px] rounded-3xl border border-navy/5 bg-white shadow-elegant overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-mist border-b border-navy/5">
                  <th className="py-5 px-6 font-semibold text-navy-deep text-sm">Event</th>
                  <th className="py-5 px-6 font-semibold text-navy-deep text-sm">Date</th>
                  <th className="py-5 px-6 font-semibold text-navy-deep text-sm">Time</th>
                  <th className="py-5 px-6 font-semibold text-navy-deep text-sm">Location</th>
                  <th className="py-5 px-6 font-semibold text-navy-deep text-sm">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/5">
                {dates.map((d, i) => (
                  <motion.tr
                    key={d.event}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="hover:bg-mist/50 transition-colors group"
                  >
                    <td className="py-5 px-6 font-bold text-navy-deep group-hover:text-gold-deep transition-colors">
                      {d.event}
                    </td>
                    <td className="py-5 px-6 text-sm text-navy/80">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-blue-500" />
                        {d.date}
                      </div>
                    </td>
                    <td className="py-5 px-6 text-sm text-navy/80">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-green-500" />
                        {d.time}
                      </div>
                    </td>
                    <td className="py-5 px-6 text-sm text-navy/80">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-orange-500" />
                        {d.location}
                      </div>
                    </td>
                    <td className="py-5 px-6 text-sm text-navy/70">
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

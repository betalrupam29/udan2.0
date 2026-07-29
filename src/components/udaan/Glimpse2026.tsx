import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function Glimpse2026() {
  return (
    <section
  id="glimpse"
  className="relative overflow-hidden py-24"
>
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb20,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ================= Hero ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 font-medium">
            <Calendar className="w-4 h-4" />
            UDAAN 2026
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Glimpse 2026
          </h1>

          <p className="mt-8 max-w-4xl mx-auto text-lg leading-8 text-gray-300">
            UDAAN 2026 is the <span className="text-cyan-300 font-semibold">
              National Startup & Business Model Competition
            </span>{" "}
            organized by the Institution's Innovation Council (IIC),
            Heritage Institute of Technology. Building on the success of
            previous editions, UDAAN has evolved from an
            state competition into a national platform
            where innovators, entrepreneurs, and future leaders come
            together to present transformative ideas and impactful
            business models.
          </p>
        </motion.div>

        {/* ================= Video ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-center text-4xl font-bold mb-8">
            Event Highlights
          </h2>

          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <div className="aspect-video">
             <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/A7pOE7c78Bg?autoplay=1&mute=1&playsinline=1&loop=1&playlist=A7pOE7c78Bg"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
/>
            </div>
          </div>
        </motion.div>

        {/* ================= Journey ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mt-24"
        >
          {/* 2025 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-blue-400/30 transition-all duration-300">
            <span className="text-5xl font-black text-blue-400">
              2025
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              Inter-Institution Competition
            </h3>

            <p className="mt-5 text-gray-300 leading-7">
              UDAAN began as an inter-institutional startup and business
              model competition, encouraging students to present
              innovative ideas, develop entrepreneurial thinking, and
              collaborate with peers from different institutions.
            </p>
          </div>

          {/* 2026 */}
          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-md p-8 hover:border-cyan-300 transition-all duration-300">
            <span className="text-5xl font-black text-cyan-300">
              2026
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              National Level Competition
            </h3>

            <p className="mt-5 text-gray-200 leading-7">
              UDAAN 2026 expands onto the national stage, welcoming
              innovators and aspiring entrepreneurs from institutions
              across India to compete, collaborate, and showcase
              groundbreaking startup ideas and business models.
            </p>
          </div>
        </motion.div>

        {/* ================= Quote ================= */}
        

      </div>
    </section>
  );
}

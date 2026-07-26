import { motion } from "framer-motion";
import { Download, FileImage, FileText } from "lucide-react";

const cards = [
  {
    id: "brochure",
    icon: FileImage,
    iconColor: "text-amber-400",
    glowColor: "from-amber-500/20 via-transparent to-transparent",
    borderHover: "hover:border-amber-400/50",
    label: "Event Brochure",
    title: "Download Brochure",
    description:
      "Get the official UDAAN 2.0 brochure with event overview.",
    buttonText: "Download Brochure",
    buttonClass:
      "bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 hover:border-amber-400/60 text-amber-300",
    href: "/documents/brochure.jpeg",
    download: "UDAAN2_Brochure.jpeg",
  },
  {
    id: "tracks",
    icon: FileText,
    iconColor: "text-sky-400",
    glowColor: "from-sky-500/20 via-transparent to-transparent",
    borderHover: "hover:border-sky-400/50",
    label: "Theme Details",
    title: "Download Theme Guide",
    description:
      "Explore the SDG mapping document covering all hackathon themes.",
    buttonText: "Download Theme PDF",
    buttonClass:
      "bg-sky-400/10 hover:bg-sky-400/20 border border-sky-400/30 hover:border-sky-400/60 text-sky-300",
    href: "/documents/SDG_Mapping (1).pdf",
    download: "UDAAN2_Theme_SDG_Mapping.pdf",
  },
];

export function DownloadSection() {
  return (
    <section id="download" className="relative py-24 sm:py-32 text-white">
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light mb-4">
            <span className="h-1 w-1 rounded-full bg-gold animate-glow-pulse" />
            Downloads
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Get the{" "}
            <span className="text-gradient-gold">Resources</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-white/60 leading-relaxed">
            Everything you need — brochure and track details — available for download.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className={`relative rounded-3xl border border-white/10 glass-dark p-7 sm:p-9 flex flex-col gap-5 transition-all duration-300 overflow-hidden ${card.borderHover}`}
              >
                {/* Glow blob */}
                <div
                  className={`absolute -top-10 -left-10 w-48 h-48 rounded-full bg-gradient-to-br ${card.glowColor} blur-3xl pointer-events-none`}
                />

                {/* Icon + tag */}
                <div className="flex items-start justify-between relative z-10">
                  <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${card.iconColor}`}>
                    <Icon size={26} />
                  </div>
                </div>

                {/* Text */}
                <div className="relative z-10 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-1">
                    {card.label}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Button */}
                <a
                  href={card.href}
                  download={card.download}
                  className={`relative z-10 inline-flex items-center gap-2.5 self-start rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${card.buttonClass}`}
                >
                  <Download size={16} />
                  {card.buttonText}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

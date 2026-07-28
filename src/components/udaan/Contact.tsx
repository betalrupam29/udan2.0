import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 text-white">

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md rounded-3xl glass-dark border border-white/10 p-8 sm:p-10"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">Contact Us</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-gold-light shrink-0 mt-1" size={24} />
              <div className="text-white/80 leading-relaxed text-sm sm:text-base">
                Heritage Institute of Technology<br />
                Kolkata, West Bengal<br />
                India - 700107
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-gold-light shrink-0" size={24} />
              <a href="mailto:iic-hitk@heritageit.edu" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                iic-hitk@heritageit.edu
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-gold-light shrink-0" size={24} />
              <a href="tel:+919123074188" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                +91-
              </a>
            </div>
          </div>

          {/* <div className="mt-10 rounded-xl bg-white/5 p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-3 text-gold-light">Support Hours</h3>
            <div className="text-white/70 text-sm sm:text-base space-y-1">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}

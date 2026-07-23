import { MapPin, Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-white flex justify-center">
      <div className="w-full max-w-md rounded-2xl bg-gradient-to-br from-[#2a308b] to-[#4b338e] p-8 sm:p-10 text-white shadow-2xl">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="text-[#f97316] shrink-0 mt-1" size={24} />
            <div className="text-white/90 leading-relaxed text-sm sm:text-base">
              Heritage Institute of Technology<br />
              Kolkata, West Bengal<br />
              India - 700107
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-[#f97316] shrink-0" size={24} />
            <a href="mailto:rituparna.sinha@heritageit.edu" className="text-white/90 hover:text-white transition-colors text-sm sm:text-base">
              rituparna.sinha@heritageit.edu
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-[#f97316] shrink-0" size={24} />
            <a href="tel:+919123074188" className="text-white/90 hover:text-white transition-colors text-sm sm:text-base">
              +91-91230-74188
            </a>
          </div>
        </div>

        <div className="mt-10 rounded-xl bg-white/10 p-6 border border-white/5">
          <h3 className="text-xl font-bold mb-3">Support Hours</h3>
          <div className="text-white/80 text-sm sm:text-base space-y-1">
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}

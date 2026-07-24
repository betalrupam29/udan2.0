import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Info,
  Layers,
  Calendar,
  FileText,
  Trophy,
  HelpCircle,
  Mail,
} from "lucide-react";
import { Logos } from "./Logo";

const links = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: Info },
  { href: "#tracks", label: "Tracks", icon: Layers },
  { href: "#dates", label: "Important Dates", icon: Calendar },
  { href: "#guidelines", label: "Rules & Guidelines", icon: FileText },
  { href: "#awards", label: "Awards", icon: Trophy },
  { href: "#faq", label: "FAQ", icon: HelpCircle },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-[#EAD8B7] border-b-2 border-[#1E293B] ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 sm:h-24 items-center justify-between gap-4 py-2">
          <a href="#home" className="shrink-0">
            <Logos size="lg" whiteBg={true} />
          </a>

          <nav className="hidden xl:flex items-center gap-1.5">
            {links.map((l) => {
              const Icon = l.icon;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-[#0F172A] rounded-md transition-colors hover:bg-black/5 hover:text-[#0A1128]"
                >
                  <Icon className="w-4 h-4 text-[#0F172A]/80 shrink-0" />
                  <span>{l.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="xl:hidden inline-flex items-center justify-center rounded-md p-2 text-[#0F172A] hover:bg-black/10"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden overflow-hidden bg-[#EAD8B7] border-t border-slate-800/20"
          >
            <div className="mx-auto max-w-7xl px-6 py-4 grid grid-cols-2 gap-1">
              {links.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-[#0F172A] rounded-md hover:bg-black/10"
                  >
                    <Icon className="w-4 h-4 text-[#0F172A]/80 shrink-0" />
                    <span>{l.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

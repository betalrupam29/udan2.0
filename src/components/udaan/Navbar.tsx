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
  Users,
  ChevronDown,
  GraduationCap,
  UserCog,
  Download,
  Crown,
  Star,
  Shield,
} from "lucide-react";
import { Logos } from "./Logo";

const links = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: Info },
  { href: "#tracks", label: "Tracks", icon: Layers },
  { href: "#dates", label: "Important Dates", icon: Calendar },
  { href: "#guidelines", label: "Rules & Guidelines", icon: FileText },
  { href: "#awards", label: "Awards", icon: Trophy },
  { href: "#download", label: "Download", icon: Download },
  { href: "#faq", label: "FAQ", icon: HelpCircle },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [memberOpen, setMemberOpen] = useState(false);

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
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 bg-[#EAD8B7] border-b-2 border-[#1E293B] transition-all ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 sm:h-24 items-center justify-between">

          <a href="#home" className="shrink-0">
            <Logos size="lg" whiteBg={true} />
          </a>

          {/* Desktop Navbar */}
          <nav className="hidden xl:flex items-center gap-1 min-w-0">

            {links.slice(0, 7).map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-[#0F172A] hover:bg-black/5"
                >
                  <Icon size={16} />
                  {link.label}
                </a>
              );
            })}

            {/* Members Dropdown */}
            <div className="relative group">

              <button
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-[#0F172A] hover:bg-black/5"
              >
                <Users size={16} />
                Members
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

              <div
                className="
                  invisible opacity-0 translate-y-3
                  group-hover:visible
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  absolute top-full left-0 mt-2
                  w-56
                  rounded-2xl
                  border border-black/10
                  bg-[#EAD8B7]
                  shadow-xl
                  transition-all
                  duration-300
                  z-50
                "
              >
                <a href="#members" className="flex items-center gap-3 px-5 py-3.5 hover:bg-black/5 rounded-t-2xl">
                  <Crown size={17} className="text-amber-500" />
                  <span className="text-sm font-semibold">Chief Patron</span>
                </a>
                <a href="#members" className="flex items-center gap-3 px-5 py-3.5 hover:bg-black/5">
                  <Star size={17} className="text-violet-500" />
                  <span className="text-sm font-semibold">Patrons</span>
                </a>
                <a href="#members" className="flex items-center gap-3 px-5 py-3.5 hover:bg-black/5">
                  <Shield size={17} className="text-teal-500" />
                  <span className="text-sm font-semibold">Advisory</span>
                </a>
                <a href="#faculty" className="flex items-center gap-3 px-5 py-3.5 hover:bg-black/5">
                  <UserCog size={17} className="text-green-600" />
                  <span className="text-sm font-semibold">Faculty</span>
                </a>
                <a href="#students" className="flex items-center gap-3 px-5 py-3.5 hover:bg-black/5 rounded-b-2xl">
                  <GraduationCap size={17} className="text-blue-500" />
                  <span className="text-sm font-semibold">Students</span>
                </a>
              </div>

            </div>

            {links.slice(7).map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-[#0F172A] hover:bg-black/5"
                >
                  <Icon size={16} />
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden p-2 rounded-md"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="xl:hidden overflow-hidden bg-[#EAD8B7] border-t"
          >
            <div className="px-6 py-4">

              {links.slice(0, 7).map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 py-3"
                  >
                    <Icon size={18} />
                    {link.label}
                  </a>
                );
              })}

              {/* Mobile Members */}

              <button
                onClick={() => setMemberOpen(!memberOpen)}
                className="flex justify-between items-center w-full py-3"
              >
                <span className="flex items-center gap-3">
                  <Users size={18} />
                  Members
                </span>

                <ChevronDown
                  size={18}
                  className={`transition ${
                    memberOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {memberOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-8 overflow-hidden"
                  >
                    <a href="#members" onClick={() => setOpen(false)} className="flex items-center gap-3 py-2.5">
                      <Crown size={17} className="text-amber-500" />
                      <span className="text-sm font-semibold">Chief Patron</span>
                    </a>
                    <a href="#members" onClick={() => setOpen(false)} className="flex items-center gap-3 py-2.5">
                      <Star size={17} className="text-violet-500" />
                      <span className="text-sm font-semibold">Patrons</span>
                    </a>
                    <a href="#members" onClick={() => setOpen(false)} className="flex items-center gap-3 py-2.5">
                      <Shield size={17} className="text-teal-500" />
                      <span className="text-sm font-semibold">Advisory</span>
                    </a>
                    <a href="#faculty" onClick={() => setOpen(false)} className="flex items-center gap-3 py-2.5">
                      <UserCog size={17} className="text-green-600" />
                      <span className="text-sm font-semibold">Faculty</span>
                    </a>
                    <a href="#students" onClick={() => setOpen(false)} className="flex items-center gap-3 py-2.5">
                      <GraduationCap size={17} className="text-blue-500" />
                      <span className="text-sm font-semibold">Students</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              {links.slice(7).map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 py-3"
                  >
                    <Icon size={18} />
                    {link.label}
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
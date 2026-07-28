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
  ChevronRight,
  GraduationCap,
  UserCog,
  Download,
  Crown,
  Star,
  Shield,
} from "lucide-react";
import { Logos } from "./Logo";

import {
  chiefPatrons,
  patrons,
  advisory,
  faculty,
  studentVolunteers,
  juryMembers,
} from "../../data/memberData";

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

const downloadItems = [
  { label: "Download Brochure", href: "/documents/brochure.pdf" },
  { label: "Download Theme", href: "/documents/SDG_Mapping (1).pdf" },
];

const memberGroups = [
  {
    id: "chief",
    label: "Chief Patron",
    icon: Crown,
    color: "text-amber-500",
    members: chiefPatrons,
  },
  {
    id: "patrons",
    label: "Patrons",
    icon: Star,
    color: "text-violet-500",
    members: patrons,
  },
  {
    id: "advisory",
    label: "Advisory",
    icon: Shield,
    color: "text-teal-500",
    members: advisory,
  },
  {
    id: "faculty",
    label: "Faculty Coordinator",
    icon: UserCog,
    color: "text-green-600",
    members: faculty,
  },
  {
    id: "students",
    label: "Student Volunteers",
    icon: GraduationCap,
    color: "text-blue-500",
    members: studentVolunteers,
  },
  {
    id: "jury",
    label: "Jury Members",
    icon: Trophy,
    color: "text-yellow-500",
    members: juryMembers,
  },
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

            {/* Download Dropdown */}
            <div className="relative group">
              <button
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-[#0F172A] hover:bg-black/5"
              >
                <Download size={16} />
                Download
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
                  w-48
                  rounded-2xl
                  border border-black/10
                  bg-[#EAD8B7]
                  shadow-xl
                  transition-all
                  duration-300
                  z-50
                "
              >
                {downloadItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-5 py-3 hover:bg-black/5 text-black text-sm font-semibold first:rounded-t-xl last:rounded-b-xl"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

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
    w-60
    rounded-2xl
    border border-black/10
    bg-[#EAD8B7]
    shadow-xl
    transition-all
    duration-300
    z-50
  "
>
  {memberGroups.map((group) => {
    const Icon = group.icon;

    return (
      <div
        key={group.id}
        className="group/item relative"
      >
        <a
          href={`#${group.id}`}
          className="flex items-center justify-between px-5 py-3 hover:bg-black/5 text-black"
        >
          <div className="flex items-center gap-3">
            <Icon
              size={17}
              className={group.color}
            />

            <span className="text-sm font-semibold">
              {group.label}
            </span>
          </div>

          <ChevronRight size={15} />
        </a>

        {/* Flyout */}
        <div
          className="
            absolute left-full top-0 ml-2
            w-80
            max-h-[70vh]
            overflow-y-auto
            rounded-2xl
            border border-black/10
            bg-[#EAD8B7]
            shadow-xl

            opacity-0
            invisible
            translate-x-2

            transition-all
            duration-200

            group-hover/item:opacity-100
            group-hover/item:visible
            group-hover/item:translate-x-0
          "
        >
          {group.members.map((member) => (
            <div
              key={member.name}
              className="px-4 py-3 border-b border-black/10 last:border-0 hover:bg-black/5"
            >
              <p className="font-semibold text-sm text-black">
                {member.name}
              </p>

              <p className="text-xs text-black/60 mt-1 leading-relaxed">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  })}
</div>

            </div>

            {links.slice(6).map((link) => {
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

              {links.slice(0, 6).map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 py-3 text-black"
                  >
                    <Icon size={18} />
                    {link.label}
                  </a>
                );
              })}

              {/* Mobile Members */}

              <button
                onClick={() => setMemberOpen(!memberOpen)}
                className="flex justify-between items-center w-full py-3 text-black"
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
                    <a href="#chief" onClick={() => setOpen(false)} className="flex items-center gap-3 py-2.5 text-black">
                      <Crown size={17} className="text-amber-500" />
                      <span className="text-sm font-semibold">Chief Patron</span>
                    </a>
                    <a href="#patrons" onClick={() => setOpen(false)} className="flex items-center gap-3 py-2.5 text-black">
                      <Star size={17} className="text-violet-500" />
                      <span className="text-sm font-semibold">Patrons</span>
                    </a>
                    <a href="#advisory" onClick={() => setOpen(false)} className="flex items-center gap-3 py-2.5 text-black">
                      <Shield size={17} className="text-teal-500" />
                      <span className="text-sm font-semibold">Advisory</span>
                    </a>
                    <a href="#faculty" onClick={() => setOpen(false)} className="flex items-center gap-3 py-2.5 text-black">
                      <UserCog size={17} className="text-green-600" />
                      <span className="text-sm font-semibold">Faculty Coordinator</span>
                    </a>
                    <a href="#students" onClick={() => setOpen(false)} className="flex items-center gap-3 py-2.5 text-black">
                      <GraduationCap size={17} className="text-blue-500" />
                      <span className="text-sm font-semibold">Student Volunteers</span>
                    </a>
                    <a href="#jury" onClick={() => setOpen(false)} className="flex items-center gap-3 py-2.5 text-black">
                      <Trophy size={17} className="text-yellow-500" />
                      <span className="text-sm font-semibold">Jury Members</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Download Items */}
              <button
                onClick={() => setMemberOpen(false)}
                className="flex items-center gap-3 py-3 text-black w-full"
              >
                <Download size={18} />
                Download
              </button>
              {downloadItems.map((item) => (
                <a key={item.label} href={item.href} className="flex items-center gap-3 py-2 pl-11 text-black text-sm">
                  {item.label}
                </a>
              ))}

              {links.slice(6).map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 py-3 text-black"
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
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Star, Shield, GraduationCap, UserCog } from "lucide-react";

const chiefPatrons = [
  {
    name: "Shri H.K. Chaudhary",
    role: "Chairman, Vikram Solar Ltd. and Chairman, Board of Trustees, Kalyan Bharti Trust (KBT), Kolkata",
  },
];

const patrons = [
  { name: "Shri P R Agarwala", role: "Chairman, Board of Governors, HIT & Chairman, Rupa & Co Ltd" },
  { name: "Shri Sajjan Bhajanka", role: "Chairman, Century Plyboards (India) Ltd" },
  { name: "Shri Probir Roy", role: "Director, Kalyan Bharti Trust" },
  { name: "Shri P K Agarwal", role: "Chief Executive Officer, Kalyan Bharti Trust" },
  { name: "Prof Basab Chaudhuri", role: "Principal, Heritage Institute of Technology" },
];

const advisory = [
  {
    name: "Prof. Sujit Kumar Barua",
    role: "Registrar and HOD, Department of Computer Science & Business System, Heritage Institute of Technology",
  },
  {
    name: "Prof. Sandip Chatterjee",
    role: "IQAC-HITK Coordinator, Joint Registrar (Academic), Associate Dean (Student Affairs) and HOD, Mathematics at Heritage Institute of Technology",
  },
  {
    name: "Prof. Subhashis Majumdar",
    role: "Dean UG Program, HOD, Department of Computer Science and Engineering, Heritage Institute of Technology",
  },
  { name: "Mr. Arvind Srivastav", role: "Joint Registrar at Heritage Institute of Technology" },
  {
    name: "Prof. Nandan Kumar Jana",
    role: "President, Institution Innovation Council, Associate Professor, Dept. of Biotechnology, Heritage Institute of Technology",
  },
];

const faculty = [
  { name: "Rituparna Sinha", role: "Information Technology" },
  { name: "Nandan Kumar Jana", role: "Biotechnology" },
  { name: "Avijit Ghosh", role: "Chemical Engineering" },
  { name: "Puja Basu Chaudhuri", role: "Civil Engineering" },
  { name: "Nabamita Banerjee Roy", role: "Associate Professor" },
  { name: "Pramita Sen", role: "Information Technology" },
  { name: "Deep Malya Mukhopadhyay", role: "Information Technology" },
  { name: "Santanu Roy", role: "Information Technology" },
  { name: "Jhalak Dutta", role: "Computer Science and Engineering" },
];

const students = [
  { name: "Rupam Betal", role: "Information Technology" },
  { name: "Animesh Manna", role: "Information Technology" },
  { name: "Priya Das", role: "Information Technology" },
  { name: "Rahul Singh", role: "Information Technology" },
  { name: "Sneha Roy", role: "Information Technology" },
  { name: "Ankit Kumar", role: "Information Technology" },
  { name: "Sourav Ghosh", role: "Information Technology" },
  { name: "Ananya Chakraborty", role: "Information Technology" },
  { name: "Debjit Mondal", role: "Information Technology" },
  { name: "Ishita Sen", role: "Information Technology" },
];

const tabs = [
  { id: "chief", label: "Chief Patron", icon: Crown, color: "text-amber-400", border: "border-amber-400", glow: "hover:border-amber-400/40", bg: "bg-amber-500/20", activeBg: "bg-amber-400/10" },
  { id: "patrons", label: "Patrons", icon: Star, color: "text-violet-400", border: "border-violet-400", glow: "hover:border-violet-400/40", bg: "bg-violet-500/20", activeBg: "bg-violet-400/10" },
  { id: "advisory", label: "Advisory", icon: Shield, color: "text-teal-400", border: "border-teal-400", glow: "hover:border-teal-400/40", bg: "bg-teal-500/20", activeBg: "bg-teal-400/10" },
  { id: "faculty", label: "Faculty", icon: UserCog, color: "text-green-400", border: "border-green-400", glow: "hover:border-green-400/40", bg: "bg-green-500/20", activeBg: "bg-green-400/10" },
  { id: "students", label: "Students", icon: GraduationCap, color: "text-blue-400", border: "border-blue-400", glow: "hover:border-blue-400/40", bg: "bg-blue-500/20", activeBg: "bg-blue-400/10" },
];

const dataMap: Record<string, { name: string; role: string }[]> = {
  chief: chiefPatrons,
  patrons,
  advisory,
  faculty,
  students,
};

const hashToTab: Record<string, keyof typeof dataMap> = {
  chief: "chief",
  patrons: "patrons",
  advisory: "advisory",
  faculty: "faculty",
  students: "students",
};

function MemberCard({
  person,
  index,
  tab,
}: {
  person: { name: string; role: string };
  index: number;
  tab: (typeof tabs)[0];
}) {
  const Icon = tab.icon;
  return (
    <motion.div
      key={person.name}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 ${tab.glow}`}
    >
      <div className="flex items-start gap-4">
        <div className={`h-12 w-12 shrink-0 rounded-full ${tab.bg} flex items-center justify-center`}>
          <Icon size={22} className={tab.color} />
        </div>
        <div>
          <h4 className="font-bold text-lg text-white leading-snug">{person.name}</h4>
          <p className="text-white/55 text-sm mt-0.5 leading-relaxed">{person.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Members() {
  const [activeTab, setActiveTab] = useState("chief");
  const tab = tabs.find((t) => t.id === activeTab)!;
  const members = dataMap[activeTab];

  const anchorClassName = "block h-0 scroll-mt-28";

  useEffect(() => {
    const syncTabFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      const nextTab = hashToTab[hash];

      if (nextTab) {
        setActiveTab(nextTab);
      }
    };

    syncTabFromHash();
    window.addEventListener("hashchange", syncTabFromHash);

    return () => window.removeEventListener("hashchange", syncTabFromHash);
  }, []);

  const handleTabClick = (nextTab: keyof typeof dataMap) => {
    setActiveTab(nextTab);
    window.history.replaceState(null, "", `#${nextTab}`);
  };

  return (
    <section id="members" className="relative py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            <span className="h-1 w-1 rounded-full bg-gold animate-glow-pulse" />
            Team
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold">
            Meet Our{" "}
            <span className="text-gradient-gold">Members</span>
          </h2>
          <p className="mt-4 text-white/70">
            Our leadership, advisors, faculty mentors and student coordinators.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {tabs.map((t) => {
            const TIcon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => handleTabClick(t.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  isActive
                    ? `${t.activeBg} ${t.border} ${t.color} shadow-lg`
                    : "border-white/10 text-white/50 hover:border-white/20 hover:text-white/80"
                }`}
              >
                <TIcon size={15} />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Hash anchors for navbar dropdown links */}
        <div id="chief" className="block h-0 scroll-mt-28" />
        <div id="patrons" className="block h-0 scroll-mt-28" />
        <div id="advisory" className="block h-0 scroll-mt-28" />
        <div id="faculty" className="block h-0 scroll-mt-28" />
        <div id="students" className="block h-0 scroll-mt-28" />

        {/* Section label */}
        <div className="mt-10 mb-6 flex items-center gap-3">
          {(() => { const TIcon = tab.icon; return <TIcon className={tab.color} size={30} />; })()}
          <h3 className="text-2xl sm:text-3xl font-bold">{tab.label}</h3>
        </div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`grid gap-5 ${
              members.length === 1
                ? "grid-cols-1 max-w-xl"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {members.map((person, i) => (
              <MemberCard key={person.name} person={person} index={i} tab={tab} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

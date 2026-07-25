import { motion } from "framer-motion";
import { GraduationCap, UserCog } from "lucide-react";

const students = [
  { name: "Rupam Betal", dept: "Information Technology" },
  { name: "Animesh Manna", dept: "Information Technology" },
  { name: "Priya Das", dept: "Information Technology" },
  { name: "Rahul Singh", dept: "Information Technology" },
  { name: "Sneha Roy", dept: "Information Technology" },
  { name: "Ankit Kumar", dept: "Information Technology" },
  { name: "Sourav Ghosh", dept: "Information Technology" },
  { name: "Ananya Chakraborty", dept: "Information Technology" },
  { name: "Debjit Mondal", dept: "Information Technology" },
  { name: "Ishita Sen", dept: "Information Technology" },
];

const faculty = [
  { name: "Rituparna Sinha", dept: "Information Technology" },
  { name: "Nandan Kumar Jana", dept: "Biotechnology" },
  { name: "Avijit Ghosh", dept: "Chemical Engineering" },
  { name: "Puja Basu Chaudhuri", dept: "Civil Engineering" },
  { name: "Nabamita Banerjee Roy", dept: "Associate professor" },
  { name: "Pramita Sen", dept: "Information Technology" },
  { name: "Deep Malya Mukhopadhyay", dept: "Information Technology" },
  { name: "Santanu Roy", dept: "Information Technology" },
  { name: "Jhalak Dutta", dept: "Computer Science and Engineering" },
];

export function Members() {
  return (
    <section
      id="members"
      className="relative py-24 sm:py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            <span className="h-1 w-1 rounded-full bg-gold animate-glow-pulse" />
            Team
          </div>

          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold">
            Meet Our{" "}
            <span className="text-gradient-gold">
              Members
            </span>
          </h2>

          <p className="mt-4 text-white/70">
            Our faculty mentors and student coordinators.
          </p>
        </motion.div>
        
        <section
          id="faculty"
          className="mt-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <UserCog
              className="text-green-400"
              size={36}
            />

            <h3 className="text-3xl font-bold">
              Faculty Coordinators
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {faculty.map((teacher, index) => (

              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.45,
                }}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  back-blur-xl
                  p-6
                  hover:border-green-400/40
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                <div className="flex items-center gap-4">

                  <div className="h-14 w-14 rounded-full bg-green-500/20 flex items-center justify-center">
                    <UserCog
                      size={28}
                      className="text-green-400"
                    />
                  </div>

                  <div>

                    <h4 className="font-bold text-lg">
                      {teacher.name}
                    </h4>

                    <p className="text-white/60 text-sm">
                      {teacher.dept}
                    </p>

                  </div>

                </div>
              </motion.div>

            ))}

          </div>

        </section>

        {/* Students */}

        <section
          id="students"
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap
              className="text-blue-400"
              size={36}
            />

            <h3 className="text-3xl font-bold">
              Student Coordinators
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {students.map((student, index) => (

              <motion.div
                key={student.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                  duration: .45,
                }}
                viewport={{ once: true }}
                className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                back-blur-xl
                p-6
                hover:border-blue-400/40
                hover:-translate-y-2
                transition-all
                duration-300
                "
              >
                <div className="flex items-center gap-4">

                  <div className="h-14 w-14 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <GraduationCap
                      size={28}
                      className="text-blue-400"
                    />
                  </div>

                  <div>

                    <h4 className="font-bold text-lg">
                      {student.name}
                    </h4>

                    <p className="text-white/60 text-sm">
                      {student.dept}
                    </p>

                  </div>

                </div>
              </motion.div>

            ))}

          </div>

        </section>
               


      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import profile from "../data/profile";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-stone-800">
      <div className="max-w-5xl mx-auto">

        <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-10">
          Who I am
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            {...fadeUp}
            className="space-y-4 text-stone-400 leading-relaxed"
          >
            <p>
              I'm a backend-focused full stack engineer based in Auckland with 6
              years of experience building production systems on{" "}
              <span className="text-white">.NET and Azure</span>. My primary
              focus is designing and delivering clean, scalable REST APIs and
              backend services that are built to last.
            </p>
            <p>
              I naturally look beyond the code to understand the bigger picture
              — shaping solutions that make sense in practice, not just in
              theory. My background spans both{" "}
              <span className="text-white">
                Computer Applications and Business Informatics
              </span>
              , which means I think about engineering problems with commercial
              context in mind.
            </p>
            <p>
              Currently exploring <span className="text-white">Agentic AI</span>{" "}
              and how it applies to real-world backend systems. Not actively
              looking, but always open to interesting problems.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="space-y-6">
            <div>
              <p className="text-white text-base font-semibold mb-3">
                What I'm growing into
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 border border-stone-600 text-stone-400 rounded-full"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white text-base font-semibold mb-3">
                Education
              </p>
              <div className="space-y-2">
                {profile.education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="border border-stone-800 rounded-lg p-4 flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <div>
                      <p className="text-white text-base font-medium">
                        {edu.degree}
                      </p>
                      <p className="text-stone-500 text-sm mt-1">
                        {edu.institution} · {edu.location} · {edu.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white text-base font-semibold mb-3">
                Certifications
              </p>
              {profile.certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="border border-stone-800 rounded-lg p-4 flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-white text-base font-medium">
                      {cert.name}
                    </p>
                    <p className="text-stone-500 text-sm mt-1">
                      {cert.issuer} · Issued {cert.issued}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div {...fadeUp}>
          <p className="text-white text-base font-semibold mb-6">Tech Stack</p>
          <div className="space-y-4">
            {profile.stack.map((group) => (
              <div
                key={group.category}
                className="flex flex-col sm:flex-row sm:items-start gap-3"
              >
                <span className="text-stone-500 text-sm w-24 shrink-0 pt-1 font-mono">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 border border-amber-400/30 text-amber-400 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

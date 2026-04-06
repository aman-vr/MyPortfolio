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
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Row 1: Bio + Interests (left) · Education (right) */}
        <div>
          <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-10">
            Who I am
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeUp} className="space-y-6">
              <div className="space-y-4 text-stone-400 leading-relaxed">
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
              </div>
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
            </motion.div>

            <motion.div {...fadeUp} className="space-y-3">
              <p className="text-white text-base font-semibold mb-3">Education</p>
              {profile.education.map((edu) => (
                <div
                  key={edu.degree}
                  className="border border-stone-800 rounded-lg p-4 flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-white text-sm font-semibold leading-snug">
                      {edu.degree}
                    </p>
                    <p className="text-stone-400 text-sm mt-1">{edu.institution}</p>
                    <p className="text-stone-500 text-xs mt-0.5">
                      {edu.location} · {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Row 2: Certifications */}
        <motion.div {...fadeUp}>
          <p className="text-white text-base font-semibold mb-6">Certifications</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {profile.certifications.map((cert) => {
              const inner = (
                <>
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <div className="flex-1">
                    <p className="text-white text-sm font-semibold">{cert.name}</p>
                    <p className="text-stone-400 text-sm mt-1">
                      {cert.issuer} · Issued {cert.issued}
                    </p>
                  </div>
                  {cert.url && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </>
              );

              return cert.url ? (
                <a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-stone-800 rounded-lg p-4 flex items-start gap-3 hover:border-stone-600 transition-colors duration-200"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={cert.name}
                  className="border border-stone-800 rounded-lg p-4 flex items-start gap-3"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Row 3: Tech Stack */}
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

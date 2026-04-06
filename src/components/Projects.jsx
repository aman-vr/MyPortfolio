// Projects.jsx — "What I've Built" section with project cards.
// Reads: profile.projects

import { motion } from "framer-motion";
import profile from "../data/profile";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-stone-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-10">
          What I've Built
        </motion.h2>
        <div className="space-y-8">
          {profile.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-stone-800 rounded-lg p-5 sm:p-8 hover:border-stone-600 transition-colors duration-200"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  {project.featured && (
                    <p className="text-amber-400 text-sm font-mono mb-1">
                      Featured Project
                    </p>
                  )}
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    {project.note && (
                      <span className="text-xs px-2 py-0.5 bg-stone-800 text-stone-400 rounded-full">
                        {project.note}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
              <p className="text-stone-400 text-base mb-3">
                {project.oneliner}
              </p>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-stone-900 text-amber-400 rounded-full border border-stone-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

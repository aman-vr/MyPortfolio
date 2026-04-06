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
              className="border border-stone-800 rounded-lg p-8 hover:border-stone-600 transition-colors duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  {project.featured && (
                    <p className="text-amber-400 text-sm font-mono mb-1">
                      Featured Project
                    </p>
                  )}
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-stone-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-stone-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
              <p className="text-stone-400 text-base mb-3">{project.oneliner}</p>
              <p className="text-stone-500 text-base leading-relaxed mb-6">
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
          <motion.div
            {...fadeUp}
            className="border border-dashed border-stone-800 rounded-lg p-8 text-center"
          >
            <p className="text-stone-600 text-sm">More projects coming soon</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

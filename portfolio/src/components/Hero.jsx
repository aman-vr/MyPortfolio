import { motion } from "framer-motion";
import profile from "../data/profile";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-5xl w-full mx-auto pt-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <div className="flex-1">
            <motion.p
              {...fadeUp(0.1)}
              className="text-amber-400 text-sm font-mono mb-4 tracking-widest uppercase"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
            >
              {profile.name}
              <span className="text-amber-400">.</span>
            </motion.h1>
            <motion.h2
              {...fadeUp(0.3)}
              className="text-3xl md:text-4xl font-bold text-stone-500 mb-8 leading-tight"
            >
              I build backend systems
              <br className="hidden md:block" /> that scale.
            </motion.h2>
            <motion.p
              {...fadeUp(0.4)}
              className="text-stone-400 text-lg max-w-xl mb-10 leading-relaxed"
            >
              {profile.bio.short}
            </motion.p>
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-amber-400 text-stone-950 font-semibold rounded hover:bg-amber-300 transition-colors duration-200"
              >
                View My Work
              </a>
              <a
                href="#about"
                className="px-6 py-3 border border-stone-700 text-stone-300 rounded hover:border-stone-400 hover:text-white transition-colors duration-200"
              >
                About Me
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-stone-700 text-stone-300 rounded hover:border-stone-400 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="/AmanVerma-CV.pdf"
                download
                className="px-6 py-3 border border-stone-700 text-stone-300 rounded hover:border-stone-400 hover:text-white transition-colors duration-200"
              >
                Download CV
              </a>
            </motion.div>
          </div>
          <motion.div
            {...fadeUp(0.6)}
            className="flex justify-center md:justify-end shrink-0 pb-5 pr-5"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <img
                src="/aman.jpg"
                alt={profile.name}
                className="absolute inset-0 w-full h-full object-cover rounded-lg z-10"
              />
              <div className="absolute rounded-lg border-2 border-amber-400/40 inset-0 translate-x-0 translate-y-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

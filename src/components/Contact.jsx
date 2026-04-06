import { motion } from "framer-motion";
import profile from "../data/profile";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-stone-800">
      <div className="max-w-5xl mx-auto text-center">

        <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-4">
          Get In Touch
        </motion.h2>
        <motion.p
          {...fadeUp}
          className="text-stone-400 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Not actively looking, but always open to interesting problems,
          collaborations, or just a good conversation about software
          architecture.
        </motion.p>
        <motion.div {...fadeUp}>
          <a
            href={`mailto:${profile.social.email}`}
            className="inline-block px-8 py-4 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-950 rounded font-semibold transition-all duration-200 mb-12"
          >
            Send an Email
          </a>
        </motion.div>
        <motion.div
          {...fadeUp}
          className="flex items-center justify-center gap-8"
        >
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-stone-500 hover:text-white text-base transition-colors duration-200"
          >
            GitHub
          </a>
          <span className="text-stone-800">·</span>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-stone-500 hover:text-white text-base transition-colors duration-200"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}

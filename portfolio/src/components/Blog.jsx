import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 border-t border-stone-800">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp} className="text-amber-400 text-sm font-mono mb-2">
          04. Blog
        </motion.p>
        <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-4">
          Thoughts & Writing
        </motion.h2>
        <motion.p {...fadeUp} className="text-stone-400 mb-10">
          I write about backend architecture, .NET, Azure, and things I'm
          figuring out as I go.
        </motion.p>
        <motion.div
          {...fadeUp}
          className="border border-dashed border-stone-800 rounded-lg p-12 text-center"
        >
          <p className="text-stone-600 text-sm">First post coming soon</p>
        </motion.div>
      </div>
    </section>
  );
}

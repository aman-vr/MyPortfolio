// Blog.jsx — "Thoughts & Writing" section: one card per post, newest first.
// Reads: profile.blogBlurb, posts metadata (src/data/posts.js)

import { motion } from "framer-motion";
import { Link } from "react-router";
import profile from "../data/profile";
import posts, { formatPostDate } from "../data/posts";

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
        <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-10">
          Thoughts & Writing
        </motion.h2>
        <motion.p
          {...fadeUp}
          className="text-stone-400 text-base leading-relaxed mb-10 text-justify hyphens-auto"
        >
          {profile.blogBlurb}
        </motion.p>

        {posts.length === 0 ? (
          <motion.div
            {...fadeUp}
            className="border border-dashed border-stone-800 rounded-lg p-8 sm:p-12 text-center"
          >
            <p className="text-stone-500 text-sm">First post coming soon</p>
          </motion.div>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <motion.div key={post.slug} {...fadeUp}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block border border-stone-800 rounded-lg p-6 sm:p-8 hover:border-amber-400/60 transition-colors duration-200"
                >
                  <p className="text-stone-500 text-xs font-mono mb-3 tracking-wider">
                    {formatPostDate(post.date)}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-stone-400 mb-5">{post.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-stone-400 border border-stone-700 rounded px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

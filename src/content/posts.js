// posts.js — Markdown bodies for blog posts, keyed by slug.
// Metadata lives in src/data/posts.js; this module only resolves the body text.

const bodiesByPath = import.meta.glob("./posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export function getPostBody(slug) {
  return bodiesByPath[`./posts/${slug}.md`] ?? null;
}

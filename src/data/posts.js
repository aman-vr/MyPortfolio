/**
 * posts.js
 *
 * Metadata for every blog post, newest first. The Markdown body for each post lives in
 * src/content/posts/<slug>.md and post assets (diagrams, OG image) in public/images/blog/<slug>/.
 *
 * Kept as plain ESM with no Vite-only imports so scripts/og-pages.mjs can import it at build
 * time to generate per-post Open Graph pages.
 *
 * Fields:
 *  - slug         → URL (/blog/<slug>) and the Markdown file name
 *  - title        → page heading, browser tab, og:title
 *  - subtitle     → shown under the title and on the blog card
 *  - description  → meta description and og:description (social previews)
 *  - date         → publish date, ISO format (YYYY-MM-DD)
 *  - tags         → shown on the blog card
 *  - ogImage      → 1200x630 preview image path under /public
 */

const posts = [
  {
    slug: "governed-ai-agent-ecosystem",
    title: "If AI is coming for my job, it can start with the parts I hate",
    subtitle: "I automated one chore and ended up with ten AI skills and an ecosystem to stop them going rogue.",
    description:
      "How keeping my DevOps board up to date turned into ten Copilot skills, guardrails enforced in code, a skill that checks the others and 100+ tests, and what it taught me about adopting AI safely.",
    date: "2026-11-15",
    tags: ["Agentic AI", "GitHub Copilot", "MCP", "Guardrails"],
    ogImage: "/images/blog/governed-ai-agent-ecosystem/og.png",
  },
];

export function findPost(slug) {
  return posts.find((post) => post.slug === slug) ?? null;
}

export function formatPostDate(isoDate) {
  // Parsed as UTC, so format in UTC too; otherwise the day shifts in timezones west of Greenwich.
  return new Date(isoDate).toLocaleDateString("en-NZ", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default posts;

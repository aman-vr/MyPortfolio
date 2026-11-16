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
 *  - discussUrl   → optional LinkedIn post URL for the "Discuss on LinkedIn" button (defaults to the profile)
 */

const posts = [
  {
    slug: "governed-ai-agent-ecosystem",
    title: "Building AI skills I can actually trust",
    subtitle: "What I learned turning everyday dev chores into AI skills, without letting them go rogue.",
    description:
      "How keeping my DevOps board up to date turned into ten Copilot skills, rules enforced in code rather than prompts, a skill that checks the others and 100+ tests, and what it taught me about adopting AI safely.",
    date: "2026-11-16",
    tags: ["AI", "GitHub Copilot", "MCP", "Developer workflow"],
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

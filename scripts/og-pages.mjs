/**
 * og-pages.mjs
 *
 * Runs after `vite build` (see the build script in package.json).
 *
 * Social crawlers (LinkedIn, Slack, X) don't run JavaScript, so they only ever see the static
 * tags in index.html. For each post this writes dist/blog/<slug>.html: a copy of the built
 * index.html with the post's title, description, canonical URL and Open Graph tags baked in.
 * With "cleanUrls" in vercel.json, /blog/<slug> serves that file before the SPA rewrite, so
 * crawlers get the right preview and readers still get the normal React app.
 */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import posts from "../src/data/posts.js";
import profile from "../src/data/profile.js";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function readSiteUrl(html) {
  // og:url in index.html is %VITE_APP_URL%, which Vite fills in from .env at build time.
  const siteUrl = html.match(/<meta\s+property="og:url"\s+content="([^"]*)"/)?.[1] ?? "";
  if (!siteUrl.startsWith("http")) {
    throw new Error(
      `og-pages: og:url in dist/index.html is "${siteUrl}". Set VITE_APP_URL (e.g. https://aman-vr.vercel.app) before building.`
    );
  }
  return siteUrl.replace(/\/$/, "");
}

function setTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttribute(title)}</title>`);
}

// Replaces the content of a <meta name|property="key"> tag, or adds one before </head>.
function upsertMeta(html, attribute, key, value) {
  const tag = `<meta ${attribute}="${key}" content="${escapeAttribute(value)}" />`;
  const existing = new RegExp(`<meta\\s+${attribute}="${key}"\\s+content="[^"]*"\\s*/?>`);
  return existing.test(html) ? html.replace(existing, tag) : html.replace("</head>", `  ${tag}\n</head>`);
}

function addCanonical(html, url) {
  return html.replace("</head>", `  <link rel="canonical" href="${escapeAttribute(url)}" />\n</head>`);
}

function buildPostHtml(templateHtml, siteUrl, post) {
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const pageTitle = `${post.title} | ${profile.name}`;

  let html = setTitle(templateHtml, pageTitle);
  html = upsertMeta(html, "name", "description", post.description);
  html = upsertMeta(html, "name", "author", profile.name);
  html = upsertMeta(html, "property", "og:title", post.title);
  html = upsertMeta(html, "property", "og:description", post.description);
  html = upsertMeta(html, "property", "og:url", postUrl);
  html = upsertMeta(html, "property", "og:type", "article");
  html = upsertMeta(html, "property", "og:image", `${siteUrl}${post.ogImage}`);
  html = upsertMeta(html, "property", "article:published_time", post.date);
  html = upsertMeta(html, "name", "twitter:card", "summary_large_image");
  return addCanonical(html, postUrl);
}

const templateHtml = await readFile(path.join(distDir, "index.html"), "utf8");
const siteUrl = readSiteUrl(templateHtml);

for (const post of posts) {
  const outputDir = path.join(distDir, "blog");
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, `${post.slug}.html`), buildPostHtml(templateHtml, siteUrl, post));
  console.log(`og-pages: dist/blog/${post.slug}.html`);
}

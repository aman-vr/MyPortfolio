// useDocumentMeta.js — Sets the browser tab title and meta description for the current page.
// Social crawlers don't run JavaScript: per-post Open Graph tags are baked in at build time
// by scripts/og-pages.mjs. This hook covers the browser and search engines that do render.

import { useEffect } from "react";

export default function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [title, description]);
}

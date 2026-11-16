// NotFoundPage.jsx — Shown for unknown routes and unknown post slugs.

import { Link } from "react-router";
import useDocumentMeta from "../hooks/useDocumentMeta";
import profile from "../data/profile";

export default function NotFoundPage() {
  useDocumentMeta(`Not found | ${profile.name}`, profile.metaDescription);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-amber-400 text-sm font-mono mb-4 tracking-widest uppercase">404</p>
        <h1 className="text-3xl font-bold text-white mb-6">This page doesn't exist.</h1>
        <Link
          to="/"
          className="px-6 py-3 border border-stone-700 text-stone-300 rounded hover:border-stone-400 hover:text-white transition-colors duration-200"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}

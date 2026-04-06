// Footer.jsx — Bottom bar. Reads: profile.name

import profile from "../data/profile";

export default function Footer() {
  return (
    <footer id="footer" className="py-12 px-6 border-t border-stone-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <p className="text-stone-600 text-sm">
          Designed & built by{" "}
          <span className="text-stone-400">{profile.name}</span>
        </p>
        <p className="text-stone-600 text-sm font-mono">{profile.location}</p>
      </div>
    </footer>
  );
}

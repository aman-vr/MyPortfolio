// Footer.jsx — Bottom bar with social links. Reads: profile.name, profile.social

import profile from "../data/profile";

export default function Footer() {
  return (
    <footer id="footer" className="py-12 px-6 border-t border-stone-800">
      <div className="max-w-5xl mx-auto flex items-center justify-center">
        <p className="text-stone-600 text-sm">
          Designed & built by{" "}
          <span className="text-stone-400">{profile.name}</span>
        </p>
      </div>
    </footer>
  );
}

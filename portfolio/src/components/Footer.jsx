// Footer.jsx — Bottom bar with social links. Reads: profile.name, profile.social

import profile from "../data/profile";

export default function Footer() {
  return (
    <footer id="footer" className="py-12 px-6 border-t border-stone-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-stone-600 text-sm">
          Designed & built by{" "}
          <span className="text-stone-400">{profile.name}</span>
        </p>
        <div className="flex gap-6">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-stone-600 hover:text-white text-sm transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-stone-600 hover:text-white text-sm transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

// Navbar.jsx — Fixed top nav with mobile menu. Reads: profile.social.github

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import profile from "../data/profile";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["About", "Experience", "Projects", "Blog", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-950/80 backdrop-blur-sm border-b border-stone-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-white font-bold text-xl tracking-tight">
          aman<span className="text-amber-400">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-stone-400 hover:text-white text-sm transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-4 py-2 border border-stone-600 text-stone-400 hover:border-white hover:text-white rounded transition-all duration-200"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="/AmanVerma-CV.pdf"
              download
              className="text-sm px-4 py-2 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-950 rounded transition-all duration-200"
            >
              Resume
            </a>
          </li>
        </ul>
        <button
          className="md:hidden text-stone-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-stone-800 px-6 py-4 flex flex-col gap-4 bg-stone-950">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-stone-400 hover:text-white text-sm transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-stone-400 hover:text-white text-sm transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="/AmanVerma-CV.pdf"
            download
            className="text-amber-400 hover:text-amber-300 text-sm transition-colors duration-200"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

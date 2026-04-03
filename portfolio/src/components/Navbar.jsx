import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["About", "Projects", "Blog"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-white font-bold text-xl tracking-tight">
          aman<span className="text-emerald-400">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/aman-vr"
              target="_blank"
              rel="noreferrer"
              className="text-sm px-4 py-2 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-950 rounded transition-all duration-200"
            >
              GitHub
            </a>
          </li>
        </ul>
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "X" : "Menu"}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 px-6 py-4 flex flex-col gap-4 bg-gray-950">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <a
            href="https://github.com/aman-vr"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-400 text-sm"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}

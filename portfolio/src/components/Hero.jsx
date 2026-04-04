export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-5xl w-full mx-auto pt-20">
        <p className="text-amber-400 text-sm font-mono mb-4 tracking-widest uppercase">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Aman Verma<span className="text-amber-400">.</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-stone-500 mb-8 leading-tight">
          I build backend systems
          <br className="hidden md:block" /> that scale.
        </h2>
        <p className="text-stone-400 text-lg max-w-xl mb-10 leading-relaxed">
          Backend-focused full stack engineer specialising in{" "}
          <span className="text-white">.NET and Azure</span>. I care about clean
          architecture, API design, and systems that are built to last. Based in
          Auckland, open to interesting problems.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-amber-400 text-stone-950 font-semibold rounded hover:bg-amber-300 transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="px-6 py-3 border border-stone-700 text-stone-300 rounded hover:border-stone-400 hover:text-white transition-colors duration-200"
          >
            About Me
          </a>
          <a
            href="https://linkedin.com/in/aman-vr"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-stone-700 text-stone-300 rounded hover:border-stone-400 hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

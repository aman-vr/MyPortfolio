export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-5xl w-full mx-auto pt-20">
        <p className="text-emerald-400 text-sm font-mono mb-4">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Aman Verma<span className="text-emerald-400">.</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mb-6">
          Backend Engineer & Full Stack Dev
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">
          I build scalable backend systems and cloud infrastructure on .NET and
          Azure. Occasionally, I venture into the frontend too.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-emerald-400 text-gray-950 font-semibold rounded hover:bg-emerald-300 transition-colors duration-200"
          >
            View My Work
          </a>

          <a
            href="https://linkedin.com/in/aman-vr"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-gray-600 text-gray-300 rounded hover:border-white hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

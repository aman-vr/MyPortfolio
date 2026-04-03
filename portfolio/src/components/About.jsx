export default function About() {
  const strengths = [".NET & C#", "REST APIs", "Clean Architecture", "Azure"];
  const interests = ["System Design", "Solution Architecture", "Agentic AI"];

  return (
    <section id="about" className="py-24 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <p className="text-emerald-400 text-sm font-mono mb-2">01. About Me</p>
        <h2 className="text-3xl font-bold text-white mb-10">Who I am</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I'm a backend-focused full stack engineer based in Auckland with 6
              years of experience building production systems on{" "}
              <span className="text-white">.NET and Azure</span>. My primary
              focus is designing and delivering clean, scalable REST APIs and
              backend services that are built to last.
            </p>
            <p>
              Over the last few years my responsibilities have shifted toward
              system design and architecture — thinking about how systems fit
              together, not just how individual components work.
            </p>
            <p>
              Currently exploring <span className="text-white">Agentic AI</span>{" "}
              and how it applies to real-world backend systems. Not actively
              looking, but always open to interesting problems.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-white text-sm font-semibold mb-3">
                What I work with
              </p>
              <div className="flex flex-wrap gap-2">
                {strengths.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 border border-emerald-400/30 text-emerald-400 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-3">
                What I'm growing into
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 border border-gray-600 text-gray-400 rounded-full"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

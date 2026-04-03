export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <p className="text-emerald-400 text-sm font-mono mb-2">03. Blog</p>
        <h2 className="text-3xl font-bold text-white mb-4">
          Thoughts & Writing
        </h2>
        <p className="text-gray-400 mb-10">
          I write about backend architecture, .NET, Azure, and things I'm
          figuring out as I go.
        </p>
        <div className="border border-dashed border-gray-800 rounded-lg p-12 text-center">
          <p className="text-gray-600 text-sm">First post coming soon</p>
        </div>
      </div>
    </section>
  );
}

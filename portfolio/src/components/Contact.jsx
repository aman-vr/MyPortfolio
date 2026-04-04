import profile from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-stone-800">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-amber-400 text-sm font-mono mb-2">05. Contact</p>
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-stone-400 max-w-lg mx-auto mb-10 leading-relaxed">
          Not actively looking, but always open to interesting problems,
          collaborations, or just a good conversation about software
          architecture.
        </p>

        <a
          href={`mailto:${profile.social.email}`}
          className="inline-block px-8 py-4 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-950 rounded font-semibold transition-all duration-200 mb-12"
        >
          Say Hello
        </a>
        <div className="flex items-center justify-center gap-8">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-stone-500 hover:text-white text-sm transition-colors duration-200"
          >
            GitHub
          </a>
          <span className="text-stone-800">·</span>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-stone-500 hover:text-white text-sm transition-colors duration-200"
          >
            LinkedIn
          </a>
          <span className="text-stone-800">·</span>
          <a
            href={`mailto:${profile.social.email}`}
            className="text-stone-500 hover:text-white text-sm transition-colors duration-200"
          >
            {profile.social.email}
          </a>
        </div>
      </div>
    </section>
  );
}

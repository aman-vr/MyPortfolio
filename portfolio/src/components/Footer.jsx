export default function Footer() {
  return (
    <footer id="footer" className="py-12 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          Designed & built by <span className="text-gray-400">Aman Verma</span>
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/aman-vr"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-white text-sm transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/aman-vr"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-white text-sm transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

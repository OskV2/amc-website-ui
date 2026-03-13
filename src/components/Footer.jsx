const Footer = ({ githubProfile }) => {
  return (
    <footer className="border-t border-zinc-800/40 py-8">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/images/amc_white.svg" alt="AMC" className="w-20 opacity-40" />
          <span className="text-xs text-zinc-600">
            © {new Date().getFullYear()}
          </span>
        </div>

        <a
          className="flex items-center gap-2 text-xs text-zinc-500 hover:text-amber-400/70 transition-colors"
          href={githubProfile || "https://github.com/OskV2"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/github.png"
            alt="GitHub"
            width={16}
            height={16}
            className="opacity-50"
          />
          <span>OskV2</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
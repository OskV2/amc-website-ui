const Footer = ({ githubProfile }) => {
  return (
    <footer className="px-0 lg:px-24 py-6">
      <div className="container flex flex-col items-center lg:items-end">
        <p className="text-white/50 mb-2">Page designed and developed by:</p>
        <a
          className="flex justify-end items-center"
          href={githubProfile || "https://github.com/OskV2"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/github.png" alt="Github icon" width={24} height={24} />
          <p className="text-white hover:text-amber-100 ml-2.5">github.com/OskV2</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

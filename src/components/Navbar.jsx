import { useEffect, useState } from "react";
import pkg from "react-collapse";
const { Collapse } = pkg;

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const controlNavbar = () => {
    const currentY = window.scrollY;
    setShow(currentY <= lastScrollY || currentY < 100);
    setScrolled(currentY > 50);
    setLastScrollY(currentY);
  };

  const handleLinkClick = () => setIsOpen(false);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const linkClasses =
    "text-sm tracking-widest uppercase text-zinc-400 hover:text-amber-300 transition-colors duration-300";

  const navLinks = [
    { label: "Usługi", href: "#services" },
    { label: "Renowacje", href: "#restoration" },
    { label: "Kontakt", href: "#contact" },
  ];

  return (
    <>
      {/* Desktop */}
      <header
        className={
          `hidden lg:block fixed w-full z-50 transition-all duration-500 ` +
          (scrolled ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 " : "bg-transparent ") +
          (show ? "translate-y-0" : "-translate-y-full")
        }
      >
        <nav className="max-w-6xl mx-auto px-12 py-5 flex justify-between items-center">
          <a href="/" className="group">
            <img
              src="/images/amc_white.svg"
              alt="AMC Logo"
              className="w-36 opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </a>
          <div className="flex gap-10">
            {navLinks.map((link) => (
              <a key={link.href} className={linkClasses} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile */}
      <header className="flex flex-col lg:hidden fixed w-full z-50 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/30">
        <div className="flex justify-between items-center px-6 py-4">
          <a href="/">
            <img src="/images/amc_white.svg" alt="AMC Logo" className="w-28" />
          </a>
          <button
            className="w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {isOpen ? (
              <img src="/images/close.svg" alt="" className="w-7 h-7 opacity-70" />
            ) : (
              <img src="/images/burger.svg" alt="" className="w-7 h-7 opacity-70" />
            )}
          </button>
        </div>
        <Collapse isOpened={isOpen}>
          <nav className="flex flex-col items-center gap-8 py-12 pb-16">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="text-lg tracking-widest uppercase text-zinc-300 hover:text-amber-300 transition-colors"
                href={link.href}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Collapse>
      </header>
    </>
  );
};

export default Navbar;
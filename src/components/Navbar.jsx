import { useEffect, useState } from "react";
import pkg from "react-collapse";

const { Collapse } = pkg;

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = "text-neutral-300 hover:text-amber-100";
  const iconClasses = "w-10 h-10";

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const links = (
    <>
      <a className={linkClasses} href="#services" onClick={handleLinkClick}>
        Usługi
      </a>
      <a className={linkClasses} href="#restoration" onClick={handleLinkClick}>
        Renowacje
      </a>
      <a className={linkClasses} href="#social" onClick={handleLinkClick}>
        Social Media
      </a>
      <a className={linkClasses} href="#contact" onClick={handleLinkClick}>
        Kontakt
      </a>
    </>
  );

  return (
    <>
      {/* Desktop navbar */}
      <header
        className={
          `hidden lg:block fixed w-full px-24 py-6 z-10 transition-all duration-400 backdrop-blur` +
          ` ${show ? "top-0" : "-top-32"}`
        }
      >
        <nav className="container flex justify-between items-center">
          <a href="/">
            <img src="/images/amc_white.svg" alt="AMC Logo" className="w-40" />
          </a>
          <div className="flex gap-12">{links}</div>
        </nav>
      </header>

      {/* Mobile navbar */}
      <header className="flex flex-col lg:hidden fixed w-full z-10 bg-black/50 backdrop-blur">
        <div className="container relative">
          <button
            className="absolute top-4 right-4 w-fit h-fit"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <img src="/images/close.svg" alt="Zamknij menu" className={iconClasses} />
            ) : (
              <img src="/images/burger.svg" alt="Otwórz menu" className={iconClasses} />
            )}
          </button>
        </div>
        <Collapse isOpened={isOpen}>
          <nav className="flex flex-col items-center h-full">
            <a className="mt-16" href="/">
              <img src="/images/amc_white.svg" alt="AMC Logo" className="w-40" />
            </a>
            <div className="flex flex-col items-center mt-24 mb-auto gap-12">
              {links}
            </div>
          </nav>
        </Collapse>
      </header>
    </>
  );
};

export default Navbar;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Collapse } from "react-collapse";

import Logo from "../public/amc_white.svg";
import BurgerIcon from "../public/burger.svg";
import CloseIcon from "../public/close.svg";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const linkClasses: string = "text-neutral-300 hover:text-amber-100";
  const iconClasses: string = "w-10 h-10";

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the nav
  };

  const links = (
    <>
      <Link className={linkClasses} href="#services" onClick={handleLinkClick}>
        Usługi
      </Link>
      <Link className={linkClasses} href="#restoration" onClick={handleLinkClick}>
        Renowacje
      </Link>
      <Link className={linkClasses} href="#social" onClick={handleLinkClick}>
        Social Media
      </Link>
      <Link className={linkClasses} href="#contact" onClick={handleLinkClick}>
        Kontakt
      </Link>
    </>
  );

  return (
    <>
      <header
        className={
          `hidden lg:block fixed w-full px-24 py-6 z-10 transition-all duration-400 backdrop-blur` +
          ` ${show ? "top-0" : "-top-32"}`
        }
      >
        <nav className="container flex justify-between items-center">
          <Link href="/">
            <Logo className="w-40" />
          </Link>
          <div className="flex gap-12">{links}</div>
        </nav>
      </header>

      <header className="flex flex-col lg:hidden fixed w-full z-10 bg-black/50 backdrop-blur">
        <div className="container relative">
          <button
            className="absolute top-4 right-4 w-fit h-fit"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <CloseIcon className={iconClasses} />
            ) : (
              <BurgerIcon className={iconClasses} />
            )}
          </button>
        </div>
        <Collapse isOpened={isOpen}>
          <nav className="flex flex-col items-center h-full">
            <Link className="mt-16" href="/">
              <Logo className="w-40" />
            </Link>
            <div className="flex flex-col items-center mt-24 mb-auto gap-12">{links}</div>
          </nav>
        </Collapse>
      </header>
    </>
  );
};

export default Navbar;
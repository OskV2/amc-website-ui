"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../public/amc_white.svg";

const Navbar = () => {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const linkClasses : string = 'text-neutral-300 hover:text-amber-100'

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { 
      setShow(false); // if scroll down hide the navbar
    } else { 
      setShow(true);  // if scroll up show the navbar
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  /* 
  * TODO:
  * - burger for s/xs devices or even bigger
  */

  return (
    <header className={`fixed w-full px-24 py-6 z-10 transition-all duration-400 backdrop-blur` + ` ${show ? 'top-0' : '-top-32'}`}>
      <nav className="container flex justify-between items-center">
        <Link href="/">
          <Logo className="w-40" />
        </Link>
        <div className="flex gap-12">
          <Link className={linkClasses} href="#services">Usługi</Link>
          <Link className={linkClasses} href="#restoration">Renowacje</Link>
          <Link className={linkClasses} href="#social">Social Media</Link>
          <Link className={linkClasses} href="#contact">Kontakt</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


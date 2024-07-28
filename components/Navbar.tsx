import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../public/amc_white.svg";

const Navbar = () => {

  const linkClasses : string = 'text-neutral-300 hover:text-amber-100'

  /* 
  * TODO:
  * - hiding header when scrolling down and showing when scrolling up
  * - burger for s/xs devices or even bigger
  */

  return (
    <header className="fixed w-full px-24 py-6 z-10">
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

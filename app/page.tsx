"use client"
import About from "@/components/About";
import Services from "@/components/Services";
import Dialog from "../components/ui/Modal"
import Contact from "@/components/Contact";
import Location from "../components/Location";
import Restoration from "@/components/Restoration";
import BeforeAndAfter from "@/components/BeforeAndAfter";

import SocialMedia from "@/components/SocialMedia";

const Home = () => {
  return (
    <>
      <About />
      <Services />
      <Restoration />
      <BeforeAndAfter />
      <SocialMedia />
      {/* <Location /> */}
      {/* <Contact /> */}
    </>
  );
};

export default Home;

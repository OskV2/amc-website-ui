"use client"
import About from "@/components/About";
import Services from "@/components/Services";
import Restoration from "@/components/Restoration";
import Contact from "@/components/Contact";
import Location from "../components/Location";

import SocialMedia from "@/components/SocialMedia";

const Home = () => {
  return (
    <>
      <About />
      <Services />
      <Restoration />
      <SocialMedia />
      {/* <Location /> */}
      {/* <Contact /> */}
    </>
  );
};

export default Home;

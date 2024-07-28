import React from "react";
import Background from "./ui/Background";
import { H1 } from "./ui/Typography";
import Counter from "./ui/Counter";

import MercedesBackground from "../public/r107.jpg";

const About = () => {
  return (
    <section className="relative w-full pt-96 pb-60" id="about">
      <Background
        src={MercedesBackground}
        alt={`Mercedes Benz r107 slc as background image`}
        darkOverlay={true}
      />
      <div className="container flex items-start content-center">
        <H1 className="w-6/12 text-left text-wrap">
          AUTO MOTO CENTRUM<br/>
          <span className="text-7xl text-amber-100">
            <Counter from={0} to={25} /> 
          </span> LAT NA RYNKU
        </H1>
      </div>
    </section>
  );
};

export default About;
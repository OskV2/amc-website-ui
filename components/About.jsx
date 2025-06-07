import React from "react";
import Background from "./ui/Background";
import { H1 } from "./ui/Typography";
import Counter from "./ui/Counter";

const About = () => {
  return (
    <section className="flex items-center relative w-full h-[400px] lg:h-[700px]" id="about">
      <Background
        src="/r107.jpg"
        alt={`Mercedes Benz r107 slc as background image`}
        darkOverlay={true}
      />
      <div className="container flex items-start content-center px-12 sm:px-0">
        <H1 className="w-full md:w-6/12 text-left text-wrap">
          AUTO MOTO CENTRUM<br/>
          <span className="text-3xl lg:text-7xl text-amber-100">
            <Counter from={0} to={25} /> 
          </span> LAT NA RYNKU
        </H1>
      </div>
    </section>
  );
};

export default About;
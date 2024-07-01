import React from "react";
import Background from "./ui/Background";
import { H1 } from "./ui/Typography";

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
          <span className="text-7xl text-amber-100">25 </span> LAT NA RYNKU
        </H1>
        {/* <p className="w-9/12 text-justify">
          Nasz warsztat samochodowy działa nieprzerwanie od ponad 30 lat,
          oferując najwyższej jakości usługi motoryzacyjne. Obecnie zarządzany
          przez jednego mechanika, który przejął firmę po swoim ojcu, nasz
          zakład kontynuuje tradycję rzetelności i pasji do motoryzacji.
          Specjalizujemy się w kompleksowej naprawie samochodów osobowych oraz
          dostawczych, w tym w diagnostyce komputerowej, serwisie układów
          hamulcowych i zawieszenia, a także w wymianie olejów i płynów
          eksploatacyjnych. Nasz mechanik, z wieloletnim doświadczeniem,
          podchodzi indywidualnie do każdego klienta, zapewniając fachowe
          doradztwo i szybkie terminy realizacji zleceń. Zapraszamy do
          skorzystania z naszych usług i przekonania się o jakości, którą
          oferujemy!
        </p> */}
      </div>
    </section>
  );
};

export default About;
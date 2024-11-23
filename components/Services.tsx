import React, { ReactElement, ReactNode } from "react";
import Service from "./Service";
import Image from "next/image";
import Link from "next/link";
import { H2 } from "../components/ui/Typography";

import ScrewdriverAndWrenchIcon from "../public/screwdriver-wrench.svg";
import EngineIcon from "../public/engine.svg";
import BrakesIcon from "../public/brakes.svg";
import ExhaustIcon from "../public/exhaust.svg";
import SuspensionIcon from "../public/suspension.svg";
import BatteryIcon from "../public/battery.svg";
import OilIcon from "../public/oil.svg";


type ServiceType = {
  id: number;
  image: ReactElement;
  name: string;
  description?: string
  jsxContent?: ReactNode;
};

const serviceIconClasses: string = "service-icon aspect-square"

const services: ServiceType[] = [
  {
    id: 1,
    image: <EngineIcon className={serviceIconClasses} />,
    name: "Układ napędowy",
    jsxContent: (
      <>
        <p>Układ napędowy:</p>
      </>
    )
  },
  {
    id: 2,
    image: <BrakesIcon className={serviceIconClasses} />,
    name: "Hamulce",
    jsxContent: (
      <>
        <p>Układ napędowy:</p>
      </>
    )
  },
  {
    id: 3,
    image: <ExhaustIcon className={serviceIconClasses} />,
    name: "Układy wydechowe",
    jsxContent: (
      <>
        <p>Układ napędowy:</p>
      </>
    )
  },
  {
    id: 4,
    image: <SuspensionIcon className={serviceIconClasses} />,
    name: "Zawieszenie",
    jsxContent: (
      <>
        <p>Układ napędowy:</p>
      </>
    )
  },
  {
    id: 5,
    image: <BatteryIcon className={serviceIconClasses} />,
    name: "Układ elektryczny",
    jsxContent: (
      <>
        <p>Układ napędowy:</p>
      </>
    )
  },
  {
    id: 6,
    image: <OilIcon className={serviceIconClasses} />,
    name: "Diagnostyka",
    jsxContent: (
      <>
        <p>Układ napędowy:</p>
      </>
    )
  },
];

const Services = () => {
  return (
    <section className="container my-12 px-12 sm:px-0" id="services">

        <H2 className="flex mb-5 gap-5 items-center">
          Sprawdź nasze usługi
          <ScrewdriverAndWrenchIcon className="w-10 h-10"/>
        </H2>
        
      <div className=" grid grid-cols-1 min-[520px]:grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 mb-8">
        {services.map((service: ServiceType) => (
          <Service
            key={service.id}
            image={service.image}
            name={service.name}
            title={service.name}
            jsxContent={service.jsxContent}
          />
        ))}
      </div>
      <p className="text-white/50">Jeżeli poszukiwana przez Ciebie usługa nie została wymieniona w żadnej z powyższych kategorii <Link className="text-white hover:text-amber-100" href="#contact">skontaktuj się z nami.</Link></p>
      <p className="text-white/50">Ceny poszczególnych usług ustalane są indywidualnie w zależności od złożoności problemu.</p>
    </section>
  );
};

export default Services;
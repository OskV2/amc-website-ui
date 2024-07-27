import React, { ReactElement } from "react";
import Service from "./Service";
import Image from "next/image";
import Link from "next/link";
import { H2 } from "../components/ui/Typography";

import screwdriverAndWrenchIcon from "../public/screwdriver-wrench.svg";
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
  modalContent: { title: string; description: string };
};

const serviceIconClasses: string = "service-icon aspect-square"

const services: ServiceType[] = [
  {
    id: 1,
    image: <EngineIcon className={serviceIconClasses} />,
    name: "Układ napędowy",
    modalContent: {
      title: "Title some service 1",
      description: "Description of some service 1",
    },
  },
  {
    id: 2,
    image: <BrakesIcon className={serviceIconClasses} />,
    name: "Hamulce",
    modalContent: {
      title: "Title some service 2",
      description: "Description of some service 2",
    },
  },
  {
    id: 3,
    image: <ExhaustIcon className={serviceIconClasses} />,
    name: "Układy wydechowe",
    modalContent: {
      title: "Title some service 3",
      description: "Description of some service 3",
    },
  },
  {
    id: 4,
    image: <SuspensionIcon className={serviceIconClasses} />,
    name: "Zawieszenie",
    modalContent: {
      title: "Title some service 4",
      description: "Description of some service 4",
    },
  },
  {
    id: 5,
    image: <BatteryIcon className={serviceIconClasses} />,
    name: "Układ elektryczny",
    modalContent: {
      title: "Title some service 5",
      description: "Description of some service 5",
    },
  },
  {
    id: 6,
    image: <OilIcon className={serviceIconClasses} />,
    name: "Diagnostyka",
    modalContent: {
      title: "Title some service 6",
      description: "Description of some service 6",
    },
  },
];


/*
* TODO:
* - add href to link to contact section
*/


const Services = () => {
  return (
    <section className="container my-12" id="services">
      <div className="flex mb-5 gap-5">
        <H2>Sprawdź nasze usługi</H2>
        <Image src={screwdriverAndWrenchIcon} alt={`Screwdriver and wrench icon`} width={40} height={40}/>
      </div>
      <div className=" grid grid-cols-6 gap-3 mb-8">
        {services.map((service: ServiceType) => (
          <Service
            key={service.id}
            image={service.image}
            name={service.name}
            modalContent={service.modalContent}
          />
        ))}
      </div>
      <p className="text-white/50">Jeżeli poszukiwana przez Ciebie usługa nie została wymieniona w żadnej z powyższych kategorii <Link className="text-white hover:text-amber-100" href="">skontaktuj się z nami.</Link></p>
      <p className="text-white/50">Ceny poszczególnych usług ustalane są indywidualnie w zależności od złożoności problemu.</p>
    </section>
  );
};

export default Services;
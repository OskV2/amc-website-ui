import React from "react";
import Service from "./Service";
import Image, { StaticImageData } from "next/image";
import { H2 } from "../components/ui/Typography";

import playIcon from "../public/play.svg";
import screwdriverAndWrenchIcon from "../public/screwdriver-wrench.svg";

type ServiceType = {
  id: number;
  image: StaticImageData;
  name: string;
  modalContent: { title: string; description: string };
};

const services = [
  {
    id: 1,
    image: playIcon,
    name: "Układ napędowy",
    modalContent: {
      title: "Title some service 1",
      description: "Description of some service 1",
    },
  },
  {
    id: 2,
    image: playIcon,
    name: "Hamulce",
    modalContent: {
      title: "Title some service 2",
      description: "Description of some service 2",
    },
  },
  {
    id: 3,
    image: playIcon,
    name: "Układy wydechowe",
    modalContent: {
      title: "Title some service 3",
      description: "Description of some service 3",
    },
  },
  {
    id: 4,
    image: playIcon,
    name: "Zawieszenie",
    modalContent: {
      title: "Title some service 4",
      description: "Description of some service 4",
    },
  },
  {
    id: 5,
    image: playIcon,
    name: "Układ elektryczny",
    modalContent: {
      title: "Title some service 5",
      description: "Description of some service 5",
    },
  },
  {
    id: 6,
    image: playIcon,
    name: "Diagnostyka",
    modalContent: {
      title: "Title some service 6",
      description: "Description of some service 6",
    },
  },
];

const Services = () => {
  return (
    <section className="container my-12" id="services">
      <div className="flex mb-5 gap-5">
        <H2>Sprawdź nasze usługi</H2>
        <Image src={screwdriverAndWrenchIcon} alt={`Screwdriver and wrench icon`} width={40} height={40}/>
      </div>
      <div className=" grid grid-cols-6 gap-3 mb-6">
        {services.map((service: ServiceType) => (
          <Service
            key={service.id}
            image={service.image}
            name={service.name}
            modalContent={service.modalContent}
          />
        ))}
      </div>
      <p className="text-white/50">Jeżeli poszukiwana przez ciebie usługa nie została wymieniona w żadnej z powyższych kategorii skontaktuj się z nami.</p>
      <p className="text-white/50">Ceny poszczególnych usług ustalane są indywidualnie.</p>
    </section>
  );
};

export default Services;

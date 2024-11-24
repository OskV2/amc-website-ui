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
const listClasses: string = "max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 mb-5"

const services: ServiceType[] = [
  {
    id: 1,
    image: <EngineIcon className={serviceIconClasses} />,
    name: "Układ napędowy",
    jsxContent: (
      <>
        <ul className={listClasses}>
          <li>Wymiana sprzęgła</li>
          <li>Naprawa lub wymiana skrzyni biegów</li>
          <li>Wymiana półosi napędowych</li>
          <li>Regeneracja lub wymiana wału napędowego</li>
          <li>Naprawa lub wymiana mostu napędowego</li>
          <li>Wymiana oleju w skrzyni biegów</li>
          <li>Wymiana elementów układu różnicowego</li>
          <li>Naprawa układu przeniesienia napędu</li>
          <li>Wymiana łożysk w układzie napędowym</li>
          <li>Wymiana uszczelnień w układzie napędowym</li>
          <li>Regeneracja mechanicznego układu paliwowego</li>
          <li>Itp.</li>
        </ul>
        <p>Usługi związane z silnikiem</p>
        <ul className={listClasses}>
          <li>Wymiana silnika</li>
          <li>Naprawa mechaniczna silnika</li>
          <li>Regeneracja głowicy silnika</li>
          <li>Wymiana rozrządu </li>
          <li>Wymiana uszczelki pod głowicą</li>
          <li>Wymiana turbo (turbosprężarki) </li>
          <li>Wymiana układu chłodzenia silnika</li>
          <li>Naprawa lub wymiana układu wtryskowego</li>
          <li>Wymiana pasków i łańcuchów napędowych</li>
          <li>Regeneracja układu zapłonowego</li>
          <li>Itp.</li>
        </ul>
      </>
    )
  },
  {
    id: 2,
    image: <BrakesIcon className={serviceIconClasses} />,
    name: "Układ hamulcowy",
    jsxContent: (
      <>
        <ul className={listClasses}>
          <li>Wymiana klocków hamulcowych </li>
          <li>Wymiana tarcz hamulcowych </li>
          <li>Wymiana płynu hamulcowego </li>
          <li>Naprawa zacisków hamulcowych </li>
          <li>Wymiana przewodów hamulcowych</li>
          <li>Wymiana bębnów i szczęk hamulcowych </li>
          <li>Regeneracja systemu ABS </li>
          <li>Wymiana pompy hamulcowej </li>
          <li>Wymiana serwa hamulcowego </li>
          <li>Itp.</li>
        </ul>
      </>
    )
  },
  {
    id: 3,
    image: <ExhaustIcon className={serviceIconClasses} />,
    name: "Układ wydechowy",
    jsxContent: (
      <>
        <ul className={listClasses}>
          <li>Wymiana tłumika.</li>
          <li>Wymiana katalizatora.</li>
          <li>Uszczelnianie układu wydechowego.</li>
          <li>Spawanie elementów układu wydechowego.</li>
          <li>Montaż sportowego układu wydechowego.</li>
          <li>Wymiana lub naprawa kolektora wydechowego.</li>
          <li>Czyszczenie lub regeneracja filtra cząstek stałych (DPF/FAP).</li>
          <li>Diagnostyka nieszczelności układu wydechowego.</li>
          <li>Montaż nowego tłumika końcowego.</li>
          <li>Usuwanie nadmiernych hałasów i wibracji w układzie wydechowym.</li>
          <li>Itp.</li>
        </ul>
      </>
    )
  },
  {
    id: 4,
    image: <SuspensionIcon className={serviceIconClasses} />,
    name: "Zawieszenie",
    jsxContent: (
      <>
        <ul className={listClasses}>
          <li>Wymiana amortyzatorów</li>
          <li>Regeneracja amortyzatorów</li>
          <li>Wymiana sprężyn zawieszenia</li>
          <li>Naprawa wahaczy</li>
          <li>Wymiana łożysk kół</li>
          <li>Wymiana sworzni wahaczy</li>
          <li>Naprawa tulei zawieszenia</li>
          <li>Ustawianie geometrii kół (zbieżność)</li>
          <li>Wymiana drążków kierowniczych i końcówek</li>
          <li>Itp.</li>
        </ul>
      </>
    )
  },
  {
    id: 5,
    image: <BatteryIcon className={serviceIconClasses} />,
    name: "Układ elektryczny",
    jsxContent: (
      <>
        <ul className={listClasses}>
          <li>Diagnostyka komputerowa</li>
          <li>Wymiana akumulatora </li>
          <li>Naprawa alternatora </li>
          <li>Naprawa rozrusznika </li>
          <li>Wymiana świec zapłonowych/żarowych </li>
          <li>Naprawa instalacji elektrycznej</li>
          <li>Montaż/wymiana czujników</li>
          <li>Naprawa/wymiana wiązek elektrycznych</li>
          <li>Wymiana bezpieczników i przekaźników</li>
          <li>Naprawa oświetlenia </li>
          <li>Regeneracja/wymiana modułów sterujących </li>
          <li>Montaż systemów alarmowych i immobilizerów </li>
          <li>Naprawa centralnego zamka </li>
          <li>Kalibracja czujników i systemów wspomagających</li>
          <li>Instalacja dodatkowego wyposażenia elektrycznego</li>
          <li>Itp.</li>
        </ul>
      </>
    )
  },
  {
    id: 6,
    image: <OilIcon className={serviceIconClasses} />,
    name: "Inne",
    jsxContent: (
      <>
        <ul className={listClasses}>
          <li>Chip tuning</li>
          <li>Naprawa liczników</li>
          <li>Programowanie kluczyków</li>
          <li>Rozkodowywanie radia</li>
          <li>Itp.</li>
        </ul>
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
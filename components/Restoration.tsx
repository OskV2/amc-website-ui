import { useState } from "react";
import { H2 } from "./ui/Typography";
import Modal from "./ui/Modal";
import BeforeAfter from "./ui/BeforeAfter";
import Gallery from "./ui/Gallery";

const Audi_Before = {
  imageUrl: "/audi_after.jpg",
}
const Audi_After = {
  imageUrl: "/audi_side.jpg"
}

const Audi_Before_43 = {
  imageUrl: "/audi_after_43.jpg",
}
const Audi_After_43 = {
  imageUrl: "/audi_side_43.jpg"
}

const images = [
  "/mercedes-1.jpg",
  "/mercedes-2.jpg",
  "/mercedes-3.jpg",
  "/mercedes-4.jpg",
  "/mercedes-5.jpg",
  "/mercedes-6.jpg",
  "/mercedes-7.jpg",
  "/mercedes-8.jpg",
  "/mercedes-9.jpg",
  "/mercedes-10.jpg",
];

const modalContent = {
  title: "Renowacja pojazdów zabytkowych",
  description:
    "Renowacja samochodu to proces przywracania pojazdu do pierwotnego stanu, zarówno pod względem mechanicznym, jak i estetycznym. Rozpoczyna się od dokładnej diagnostyki, podczas której ocenia się stan silnika, układu hamulcowego, zawieszenia i nadwozia. Następnie następuje demontaż elementów, usunięcie rdzy oraz naprawa lub wymiana uszkodzonych podzespołów. Renowacja wnętrza obejmuje odnawianie tapicerki i deski rozdzielczej, co podnosi komfort użytkowania. Ostatecznie nadwozie jest malowane, co nie tylko poprawia jego wygląd, ale także chroni przed czynnikami zewnętrznymi. Po zakończeniu prac przeprowadzane są testy, aby upewnić się, że wszystkie systemy działają prawidłowo. Renowacja samochodu to satysfakcjonujące zajęcie, które przekształca stary pojazd w unikalne dzieło sztuki, łączące klasykę z nowoczesnością.",
};

const Restoration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <section className="container mb-12 px-12 sm:px-0" id="restoration">
        <H2>Renowacja pojazdów</H2>
        <p className="text-white/50 my-4">
          Warsztat wykonuje usługi związane z renowacją pojazdów zabytkowych.{" "}
          <span
            className="cursor-pointer text-white hover:text-amber-100"
            onClick={handleClick}
          >
            Dowiedz się więcej.
          </span>
        </p>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2 h-fit">
            <p>Audi V8 D11</p>
            <p>Opis do dokończenia</p>
            <BeforeAfter firstImage={Audi_Before_43} secondImage={Audi_After_43} />
          </div>
          <div className="w-full lg:w-1/2 h-fit">
            <p>Mercedes R107</p>
            <p>Opis do dokończenia</p>
            <Gallery images={images} />
          </div>
        </div>
      </section>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalContent.title}
          description={modalContent.description}
        />
      )}
    </>
  );
};

export default Restoration;

import { useState } from "react";
import { H2 } from "./ui/Typography";
import Modal from "./ui/Modal"
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const FIRST_IMAGE = {
  imageUrl:
    "https://smeleshkin.github.io/react-before-after-slider-component//assets/image1.jpg",
};
const SECOND_IMAGE = {
  imageUrl:
    "https://smeleshkin.github.io/react-before-after-slider-component//assets/image2.jpg",
};

const modalContent = {
  title: "Renowacja pojazdów zabytkowych",
  description: "Pan mechanik z pasją zajmuje się renowacją samochodów zabytkowych, przekształcając klasyczne pojazdy w prawdziwe dzieła sztuki. Na razie przeprowadził pełną renowację jednego własnego auta, przywracając mu dawny blask i oryginalny wygląd. Obecnie pracuje nad drugim zabytkowym pojazdem, który jest w trakcie intensywnych prac. Jego doświadczenie i precyzja gwarantują, że każdy szczegół zostanie starannie odtworzony, co sprawia, że jego renowacje są wyjątkowe i cenione przez miłośników klasycznych samochodów.",
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
      <section className="container mb-12" id="restoration">
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
        <ReactBeforeSliderComponent
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
        />
      </section>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          content={modalContent}
        />
      )}
    </>
  );
};

export default Restoration;

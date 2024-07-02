import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import chevronRight from "../public/chevron_right.svg";
import Modal from "../components/ui/Modal"

type ServiceProps = {
  image: StaticImageData;
  name: string;
  modalContent: { title: string; description: string };
};

/*
* TODO: 
* - add hover effect (change color) on svg icon - normally it should be white and amber-100 on hover
* https://codesandbox.io/s/svg-hover-change-color-t2l3b?file=/src/App.js
*/

const Service = ({ image, name, modalContent }: ServiceProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(event)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="cursor-pointer" onClick={handleClick}>
        <div className="bg-neutral-800 aspect-square p-8 rounded-lg">
          <div className="bg-amber-200/25 p-5 rounded-lg">
            <Image className="aspect-square" src={image} alt="Icon" />
          </div>
        </div>
        <div className="flex justify-between items-center pl-3">
          <p>{name}</p>
          <button className="flex justify-center items-center rounded-br-lg bg-amber-100 w-9 h-9">
            <Image src={chevronRight} alt="" width={12} height={18} />
          </button>
        </div>
      </div>
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

export default Service;

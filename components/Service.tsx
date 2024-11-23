import { ReactElement, useState, ReactNode } from "react";
import Image from "next/image";

import ChevronRight from "../public/chevron_right.svg";
import Modal from "./ui/Modal"
import EngineIcon2 from "../public/engine.svg"

type ServiceProps = {
  image: ReactElement;
  name: string;
  title: string;
  description?: string
  jsxContent?: ReactNode;
};

/*
* TODO: 
* - svg images should be thiccer
*/

const Service = ({ image, name, description, jsxContent }: ServiceProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
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
            {image}
          </div>
        </div>
        <div className="flex justify-between items-center pl-3">
          <p>{name}</p>
          <button className="flex justify-center items-center rounded-br-lg bg-amber-100 w-9 h-9">
            {/* <Image src={chevronRight} alt="" width={12} height={18} /> */}
            <ChevronRight className="w3 h-5" />
          </button>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={name}
          description={description}
          jsxContent={jsxContent}
        />
      )}
    </>
  );
};

export default Service;

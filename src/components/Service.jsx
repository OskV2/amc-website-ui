import { useState } from "react";
import Modal from "./ui/Modal";

const Service = ({ icon, name, items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const listClasses =
    "max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 mb-5";

  const modalContent = (
    <>
      {items.map((group, idx) => (
        <div key={idx}>
          {group.subtitle && <p className="mt-3 mb-1 text-white/70">{group.subtitle}</p>}
          <ul className={listClasses}>
            {group.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );

  return (
    <>
      <div className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
        <div className="bg-neutral-800 aspect-square p-8 rounded-lg">
          <div className="bg-amber-200/25 p-5 rounded-lg">
            <img src={icon} alt={name} className="service-icon aspect-square" />
          </div>
        </div>
        <div className="flex justify-between items-center pl-3">
          <p>{name}</p>
          <button className="flex justify-center items-center rounded-br-lg bg-amber-100 w-9 h-9">
            <img src="/images/chevron_right.svg" alt="" className="w-3 h-5" />
          </button>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={name}
          jsxContent={modalContent}
        />
      )}
    </>
  );
};

export default Service;

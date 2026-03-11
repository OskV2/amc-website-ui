import { useState } from "react";
import Modal from "./ui/Modal";

const Service = ({ icon, name, items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalContent = (
    <div className="space-y-4">
      {items.map((group, idx) => (
        <div key={idx}>
          {group.subtitle && (
            <p className="text-amber-300/80 text-sm font-semibold tracking-wide uppercase mb-2">
              {group.subtitle}
            </p>
          )}
          <ul className="space-y-1.5">
            {group.list.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-amber-400/60 mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <button
        className="group text-left rounded-xl bg-zinc-900/80 border border-zinc-800/50 hover:border-amber-400/30 transition-all duration-300 overflow-hidden"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Icon area */}
        <div className="aspect-square p-6 flex items-center justify-center">
          <div className="w-full aspect-square rounded-lg bg-amber-400/5 group-hover:bg-amber-400/10 p-4 transition-colors duration-300 flex items-center justify-center">
            <img
              src={icon}
              alt={name}
              className="w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Name */}
        <div className="px-4 pb-4 flex items-center justify-between">
          <p className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">
            {name}
          </p>
          <span className="w-7 h-7 rounded-full bg-amber-400/10 group-hover:bg-amber-400/20 flex items-center justify-center transition-all duration-300">
            <svg className="w-3 h-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </button>

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
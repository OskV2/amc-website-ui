import { useState } from "react";
import Modal from "./ui/Modal";
import Gallery from "./ui/Gallery";

const Restoration = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!data) return null;

  return (
    <>
      <section className="py-24 border-t border-zinc-800/40" id="restoration">
        {/* Header — contained */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-amber-400/70 mb-3">
            Przywracamy do życia
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            Renowacja pojazdów
          </h2>
          <div className="w-16 h-0.5 bg-amber-400/30 mb-6" />
          <p className="text-zinc-400 max-w-xl leading-relaxed">
            {data.short_description}{" "}
            <button
              className="text-amber-400/80 hover:text-amber-300 transition-colors underline underline-offset-4 decoration-amber-400/30"
              onClick={() => setIsModalOpen(true)}
            >
              Dowiedz się więcej
            </button>
          </p>
        </div>

        {/* Gallery — fullwidth */}
        <div className="w-full">
          <Gallery images={data.gallery_images} />
        </div>
      </section>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={data.title}
          description={data.full_description}
        />
      )}
    </>
  );
};

export default Restoration;
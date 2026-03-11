import { useState } from "react";
import { H2 } from "./ui/Typography";
import Modal from "./ui/Modal";
import BeforeAfter from "./ui/BeforeAfter";
import Gallery from "./ui/Gallery";

const Restoration = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!data) return null;

  const beforeAfterDesktop = {
    first: { imageUrl: data.before_after.before_image_mobile },
    second: { imageUrl: data.before_after.after_image_mobile },
  };

  return (
    <>
      <section className="container mb-12 px-12 sm:px-0" id="restoration">
        <H2>Renowacja pojazdów</H2>
        <p className="text-white/50 my-4">
          {data.short_description}{" "}
          <span
            className="cursor-pointer text-white hover:text-amber-100"
            onClick={() => setIsModalOpen(true)}
          >
            Dowiedz się więcej.
          </span>
        </p>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2 h-fit">
            <BeforeAfter
              firstImage={beforeAfterDesktop.first}
              secondImage={beforeAfterDesktop.second}
            />
          </div>
          <div className="w-full lg:w-1/2 h-fit">
            <Gallery images={data.gallery_images} />
          </div>
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

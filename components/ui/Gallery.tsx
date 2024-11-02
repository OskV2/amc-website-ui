import React, { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
import "@splidejs/react-splide/css";

type GalleryProps = {
  images: string[];
  className?: string;
};

const splideOptionsDesktop: Options = {
  type: "loop",
  perPage: 1,
  perMove: 1,
  gap: "1rem",
  pagination: false,
  height: "450px",
  speed: 750,
  padding: "2rem",
  autoplay: true,
  interval: 6000,
};

const splideOptionsMobile: Options = {
  type: "loop",
  perPage: 1,
  perMove: 1,
  gap: "1rem",
  pagination: false,
  width: "100vw",
  speed: 750,
  padding: "2rem",
  autoplay: true,
  interval: 6000,
};

const thumbsOptions: Options = {
  type: "slide",
  rewind: true,
  gap: "1rem",
  pagination: false,
  fixedWidth: 110,
  fixedHeight: 70,
  cover: true,
  focus: "center",
  isNavigation: true,
  arrows: false,
};

const Gallery = ({ images, className }: GalleryProps) => {
  const mainRef = useRef<Splide | null>(null);
  const thumbsRef = useRef<Splide | null>(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current) {
      const mainSplide = mainRef.current.splide;
      const thumbsSplide = thumbsRef.current.splide;

      if (mainSplide && thumbsSplide) {
        mainSplide.sync(thumbsSplide);
      }
    }
  }, []);

  return (
    // DESKTOP
    <div className={className + ` ` + `h-fit`}>
      <Splide
        className="hidden sm:block"
        options={splideOptionsDesktop}
        ref={mainRef}
      >
        {images.map((id, index) => (
          <SplideSlide key={index} className="border border-solid border-amber-100 bg-[#413C3F]">
            <div className="flex justify-center p-2">
              <img
                className="h-[430px]"
                key={index}
                src={id}
                alt={`Slide ${index}`}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* MOBILE */}
      <Splide
        className="block sm:hidden"
        options={splideOptionsMobile}
      >
        {images.map((id, index) => (
          <SplideSlide key={index} className="flex items-center border border-solid border-amber-100 bg-[#413C3F]">
            <div className="p-2">
              <img key={index} src={id} alt={`Slide ${index}`} />
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <Splide
        className="mt-4 hidden sm:block"
        options={thumbsOptions}
        ref={thumbsRef}
      >
        {images.map((id, index) => (
          <SplideSlide key={index} className="cursor-pointer">
            <img
              className="w-full h-full object-cover "
              key={index}
              src={id}
              alt={`Thumbnail ${index}`}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Gallery;

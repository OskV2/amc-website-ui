import React from "react";
// import { StaticImageData } from "next/image";

import ReactBeforeSliderComponent from "react-before-after-slider-component";
import { Image } from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

type BeforeAfterProps = {
  firstImage: Image;
  secondImage: Image;
  className?: string;
};

const BeforeAfter = ({
  firstImage,
  secondImage,
  className,
}: BeforeAfterProps) => {
  return (
    <div className={className + ` ` + `h-fit lg:h-[536px]`}>
      <div className="relative"></div>
        <ReactBeforeSliderComponent
          className="h-full max-h-[536px]"
          firstImage={firstImage}
          secondImage={secondImage}
        />
    </div>
  );
};

export default BeforeAfter;

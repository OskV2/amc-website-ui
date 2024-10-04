import React from "react";

import ExclamationIcon from "../../public/exclamation.svg";

const SinglePostError = () => {

  const iconClasses: string = "absolute z-10 top-5 left-5 w-10 h-10";

  return (
    <>
      <div className="aspect-square overflow-hidden relative">
        <div className="inline-block size-full bg-gray-100/25">
          <ExclamationIcon className={iconClasses} />

          <div className="absolute w-4/5 bottom-5 left-5">
            <div className="w-full grid grid-cols-5 gap-4">
              <div className="h-2 bg-red-100 rounded col-span-2"></div>
              <div className="h-2 bg-red-100 rounded col-span-3"></div>
              <div className="h-2 bg-red-100 rounded col-span-3"></div>
              <div className="h-2 bg-red-100 rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePostError;

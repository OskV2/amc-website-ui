import React from "react";

const SinglePostLoading = () => {
  return (
    <>

      <div className="aspect-square animate-pulse overflow-hidden relative">
        <div className="inline-block size-full bg-amber-100/25">
          <div className="absolute top-5 left-5 rounded-full bg-amber-100 h-10 w-10"></div>

          <div className="absolute w-4/5 bottom-5 left-5">
            <div className="w-full grid grid-cols-5 gap-4">
              <div className="h-2 bg-amber-100 rounded col-span-2"></div>
              <div className="h-2 bg-amber-100 rounded col-span-3"></div>
              <div className="h-2 bg-amber-100 rounded col-span-3"></div>
              <div className="h-2 bg-amber-100 rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePostLoading;
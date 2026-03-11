import { useState } from "react";
import { motion } from "framer-motion";

const SinglePost = ({ postData }) => {
  const [hoverActive, setHoverActive] = useState(false);
  const [hoverActive2, setHoverActive2] = useState(false);

  let caption;
  if (postData.caption && postData.caption.includes("#")) {
    caption = postData.caption.split("#")[0];
  } else {
    caption = postData.caption || "";
  }

  const onMouseOver = (e) => {
    e.target.play();
    setHoverActive(true);
  };

  const onMouseOut = (e) => {
    e.target.pause();
    setHoverActive(false);
  };

  const openInNewTabBox = (
    <motion.div
      className="absolute inset-x-0 mx-auto z-10 w-fit h-fit px-5 py-2.5 rounded-full bg-black/50 backdrop-blur-2xl"
      initial={{ top: "-50px" }}
      animate={{ top: hoverActive2 ? "15px" : "-50px" }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <p>Otwórz w nowej karcie</p>
    </motion.div>
  );

  return (
    <div className="aspect-square overflow-hidden relative">
      <a
        className="inline-block size-full"
        href={postData.permalink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseOver={() => setHoverActive2(true)}
        onMouseOut={() => setHoverActive2(false)}
      >
        {openInNewTabBox}
        {(postData.media_type === "IMAGE" ||
          postData.media_type === "CAROUSEL_ALBUM") && (
          <div className="inline-block size-full bg-black">
            <img
              className="absolute inset-0 my-auto"
              src={postData.media_url}
              alt={postData.caption}
            />
          </div>
        )}
        {postData.media_type === "VIDEO" && (
          <div className="inline-block size-full bg-black">
            {hoverActive ? (
              <img src="/images/play.svg" alt="" className="absolute z-10 mt-6 ml-6 w-8 h-8" />
            ) : (
              <img src="/images/pause.svg" alt="" className="absolute z-10 mt-6 ml-6 w-8 h-8" />
            )}
            <video
              className="absolute inset-y-0 my-auto"
              src={postData.media_url}
              poster={postData.thumbnail_url}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
              muted
            />
          </div>
        )}
        <div className="h-10 pl-3 bottom-0 w-full bg-amber-200/25 absolute z-10">
          <p className="leading-10">{caption}</p>
        </div>
      </a>
    </div>
  );
};

export default SinglePost;

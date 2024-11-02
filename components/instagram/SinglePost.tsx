import Link from "next/link";
import Image from "next/image";
import React, { useState, ReactElement } from "react";
import { motion } from "framer-motion";

import PauseIcon from "../../public/pause.svg";
import PlayIcon from "../../public/play.svg";

type InstagramPostType = {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  media_type: string;
  thumbnail_url: string;
  timestamp: Date;
};

type InstagramPostProps = {
  postData: InstagramPostType;
};

const SinglePost: React.FC<InstagramPostProps> = ({ postData }) => {
  const [hoverActive, setHoverActive] = useState<boolean>(false); //  THIS ONE IS FOR VIDEOS PLAYING ON HOVER
  const [hoverActicve2, setHoverActive2] = useState(false); // THIS ONE IS FOR "openInNewTabBox" SHOWING ON HOVER
  const iconClasses: string = "absolute z-10 mt-6 ml-6 w-8 h-8";
  let caption: string;

  if (postData.caption.includes("#")) {
    caption = postData.caption.split("#")[0];
  } else {
    caption = postData.caption;
  }

  const onMouseOver = (e: React.MouseEvent<HTMLVideoElement> | any) => {
    e.target.play();
    setHoverActive(true);
  };

  const onMouseOut = (e: React.MouseEvent<HTMLVideoElement> | any) => {
    e.target.pause();
    setHoverActive(false);
  };

  const openInNewTabBox: ReactElement = (
    <motion.div
      className="absolute inset-x-0 mx-auto z-10 w-fit h-fit px-5 py-2.5 rounded-full bg-black/50 backdrop-blur-2xl"
      initial={{ top: "-50px" }}
      animate={{ top: hoverActicve2 ? "15px" : "-50px" }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <p>Otwórz w nowej karcie</p>
    </motion.div>
  );

  return (
    <div className="aspect-square overflow-hidden relative">
      <Link
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
              <PlayIcon className={iconClasses} />
            ) : (
              <PauseIcon className={iconClasses} />
            )}
            <video
              className="absolute inset-y-0 my-auto"
              src={postData.media_url}
              poster={postData.thumbnail_url}
              onMouseOver={(e) => onMouseOver(e)}
              onMouseOut={(e) => onMouseOut(e)}
              muted
            />
          </div>
        )}
        <div className="h-10 pl-3 bottom-0 w-full bg-amber-200/25 absolute z-10">
          <p className="leading-10">{caption}</p>
        </div>
      </Link>
    </div>
  );
};

export default SinglePost;

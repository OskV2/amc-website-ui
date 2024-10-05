import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchInstagramPosts } from "../utils/http";
import { H2 } from "./ui/Typography";
import { useQuery } from "@tanstack/react-query";
import { TypeAnimation } from "react-type-animation";

import SinglePost from "./instagram/SinglePost";
import SinglePostLoading from "./instagram/SinglePostLoading";
import SinglePostError from "./instagram/SinglePostError";

import InstagramIcon from "../public/Instagram_color.svg";

type InstagramPostType = {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  media_type: string;
  thumbnail_url: string;
  timestamp: Date;
};

/*
 * TODO:
 * - add href to link to instagram account
 */

const SocialMedia: React.FC = () => {
  let content;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["instagramPosts"],
    queryFn: fetchInstagramPosts,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 1,
    retryDelay: 3000,
  });

  if (isLoading) {
    content = Array.from({ length: 3 }).map((_, index) => (
      <SinglePostLoading />
    ));
  }

  if (isError) {
    content = (
      <>
        <SinglePostError />

        <TypeAnimation
          sequence={[
            "Wystąpił błąd. Nie udało się załadować postów.",
            3000,
            ":(",
            3000,
            "Spróbój ponownie później.",
            3000,
          ]}
          wrapper="span"
          speed={50}
          className="text-white/50 my-4 w-full md:w-2/3 flex justify-center items-center"
          repeat={Infinity}
        />
      </>
    );
  }

  if (data) {
    content = (
      <>
        {data.map((post: InstagramPostType) => (
          <SinglePost key={post.id} postData={post} />
        ))}
      </>
    );
  }

  return (
    <section className="container mb-12 px-12 sm:px-0" id="social">
      {/* <H2 className="flex">
        Sprawdź naszego
        <span>&nbsp;</span>
        <Link
          href=""
          className="flex items-center gap-5 bg-white hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-transparent bg-clip-text font-bold"
        >
          instagrama
          <InstagramIcon className="w-10 h-10" />
        </Link>
      </H2> */}
      <p className="text-white/50 my-4">
        Bądź na biezaco / zobacz nasze realizacje czy cos takiego cn
      </p>
      {!isError && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-0 sm:px-24 md:px-0">
          {content}
        </div>
      )}
      {isError && (
        <div className="flex flex-col md:flex-row gap-3 px-0 sm:px-24 md:px-0">
          {content}
        </div>
      )}
    </section>
  );
};

export default SocialMedia;

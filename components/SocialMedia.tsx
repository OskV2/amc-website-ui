import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchInstagramPosts } from "../utils/instagram";
import { H2 } from "./ui/Typography";
import InstagramPost from "./InstagramPost";

import instagramIcon from "../public/Instagram_color.svg";

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
  const [posts, setPosts] = useState<InstagramPostType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetchInstagramPosts();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <section className="container mb-12" id="social">
      <H2 className="flex">
        Sprawdź naszego
        <span>&nbsp;</span>
        <Link
          href=""
          className="flex gap-5 bg-white hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-transparent bg-clip-text font-bold"
        >
          instagrama
          <Image
            src={instagramIcon}
            alt="Instagram icon"
            height={40}
            width={40}
          />
        </Link>
      </H2>
      <p className="text-white/50 my-4">
        Bądź na biezaco / zobacz nasze realizacje czy cos takiego cn
      </p>
      <div className="grid grid-cols-3 gap-3">
        {posts.map((post: InstagramPostType) => (
          <InstagramPost key={post.id} postData={post} />
        ))}
      </div>
    </section>
  );
};

export default SocialMedia;

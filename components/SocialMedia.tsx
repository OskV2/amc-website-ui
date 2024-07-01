import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchInstagramPosts } from "../utils/instagram";
import InstagramPost from "./InstagramPost";

import instagramIcon from '../public/instagram.svg'

type InstagramPostType = {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  media_type: string;
  thumbnail_url: string;
  timestamp: Date;
};

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
    <section className="container" id="social">
      <div className="flex">
        <h2 className="text-6xl">Sprawdź naszego instagrama</h2>
        <Image src={instagramIcon} alt="Instagram icon" height={20} width={20} />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {posts.map((post: InstagramPostType) => (
          <InstagramPost key={post.id} postData={post} />
        ))}
      </div>
    </section>
  );
};

export default SocialMedia;

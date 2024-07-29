
import { QueryClient } from '@tanstack/react-query';
export const queryClient = new QueryClient();

const INSTAGRAM_ACCESS_TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;

export const fetchInstagramPosts = async () => {
  const URL: string = "https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url,timestamp&access_token="
  const response = await fetch(URL + `${INSTAGRAM_ACCESS_TOKEN}`);

  if (!response.ok) {
    throw new Error('Failed to fetch Instagram posts');
  }

  const data = await response.json();
  return data.data.slice(0,6);
};
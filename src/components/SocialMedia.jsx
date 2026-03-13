import { QueryClientProvider, QueryClient, useQuery } from "@tanstack/react-query";
import { TypeAnimation } from "react-type-animation";
import { H2 } from "./ui/Typography";
import SinglePost from "./instagram/SinglePost";
import SinglePostLoading from "./instagram/SinglePostLoading";
import SinglePostError from "./instagram/SinglePostError";

const queryClient = new QueryClient();

const INSTAGRAM_ACCESS_TOKEN = import.meta.env.PUBLIC_INSTAGRAM_ACCESS_TOKEN;

const fetchInstagramPosts = async () => {
  const URL =
    "https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url,timestamp&access_token=";
  const response = await fetch(URL + INSTAGRAM_ACCESS_TOKEN);

  if (!response.ok) {
    throw new Error("Failed to fetch Instagram posts");
  }

  const data = await response.json();
  return data.data.slice(0, 6);
};

const SocialMediaContent = () => {
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
      <SinglePostLoading key={index} />
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
        {data.map((post) => (
          <SinglePost key={post.id} postData={post} />
        ))}
      </>
    );
  }

  return (
    <section className="container mb-12 px-12 sm:px-0" id="social">
      <H2 className="flex gap-5">
        Sprawdź naszego instagrama
        <img src="/images/Instagram_color.svg" alt="Instagram" className="w-10 h-10" />
      </H2>

      <p className="text-white/50 my-4">
        Bądź na bieżaco i zobacz nasze realizacje.
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

// Wrapper z QueryClientProvider
const SocialMedia = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SocialMediaContent />
    </QueryClientProvider>
  );
};

export default SocialMedia;

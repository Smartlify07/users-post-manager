import { getUrl } from "./getUrl";

export const fetchPosts = async () => {
  try {
    const { postsUrl } = getUrl();
    const response = await fetch(postsUrl);

    const posts = await response.json();
    console.log(posts);

    return { posts };
  } catch (error) {
    console.error(error);
  }
};

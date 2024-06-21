import { getUrl } from "./getUrl";

export const fetchSinglePost = async ({ params }) => {
  try {
    const { id } = params;
    const { postsUrl } = getUrl();
    const response = await fetch(postsUrl + id);

    const post = await response.json();
    console.log(post);

    return { post };
  } catch (error) {
    console.error(error);
  }
};

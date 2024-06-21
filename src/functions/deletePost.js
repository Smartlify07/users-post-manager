import { getUrl } from "./getUrl";

export const deletePost = async (id, setPosts) => {
  const { postsUrl } = getUrl();

  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  };

  const postsResponse = await fetch(postsUrl + id, requestOptions);
  if (!postsResponse.ok) {
    throw new Error(
      "Request failed with status code " + postsResponse.statusText
    );
  } else {
    setPosts((prevState) => prevState.filter((post) => post.id !== id));

    console.log(await postsResponse.json());
  }
};

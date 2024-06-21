import { generateUid } from "./generateUid";
import { getUrl } from "./getUrl";

export const createPost = async (title, body, setPosts, navigate) => {
  const userId = generateUid();
  const { postsUrl } = getUrl();
  const newPost = {
    userId: userId,
    title: title,
    body: body,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(newPost),
  };

  const postsResponse = await fetch(postsUrl, requestOptions);
  if (!postsResponse.ok) {
    throw new Error(
      "Request failed with status code " + postsResponse.statusText
    );
  } else {
    setPosts((prevState) => [newPost, ...prevState]);
    navigate("/");
  }
};

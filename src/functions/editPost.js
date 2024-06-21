import { getUrl } from "./getUrl";

export const editPost = async (id, title, body, setPosts, navigate) => {
  const { postsUrl } = getUrl();
  const editedPost = {
    title: title,
    body: body,
  };

  console.log(title, body);

  const requestOptions = {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(editedPost),
  };

  const postsResponse = await fetch(postsUrl + id, requestOptions);
  if (!postsResponse.ok) {
    throw new Error(
      "Request failed with status code " + postsResponse.statusText
    );
  } else {
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === id ? { ...post, title: title, body: body } : post
      )
    );

    navigate("/");

    console.log(await postsResponse.json());
  }
};

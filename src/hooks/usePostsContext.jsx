import { useContext } from "react";
import { PostsContext } from "../Context/PostsContext";

const usePostsContext = () => {
  const { page, loading, posts, error, setPosts, setPage, setError } =
    useContext(PostsContext);
  return { page, loading, posts, error, setPosts, setPage, setError };
};

export default usePostsContext;

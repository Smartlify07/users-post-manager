/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { fetchLimitedPosts } from "../functions/fetchLimitedPosts";

export const PostsContext = createContext();
const PostsProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchLimitedPosts(setPosts, setLoading, setError, page);
  }, [page]);
  return (
    <PostsContext.Provider
      value={{ page, loading, posts, error, setPage, setPosts, setError }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;

import usePostsContext from "../hooks/usePostsContext";
import Post from "./Post";

const PostList = () => {
  const { posts } = usePostsContext();

  return (
    <div className="flex flex-col py-5 items-center 1 w-full  gap-3 lg:py-10">
      {posts.map((item) => (
        <Post key={item.id} {...item} />
      ))}
    </div>
  );
};

export default PostList;

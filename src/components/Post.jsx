/* eslint-disable react/prop-types */

import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { deletePost } from "../functions/deletePost";
import usePostsContext from "../hooks/usePostsContext";

const Post = ({ title, body, userId, id }) => {
  const { setPosts } = usePostsContext();
  return (
    <div className="border rounded-sm font-rubik w-11/12 py-6 px-4 flex flex-col gap-2 lg:w-9/12 xl:w-8/12">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-200">
          <FaUser className="text-slate-700" />
        </div>
        <h4 className="text-slate-700 font-semibold">User-{userId}</h4>
      </div>
      <h1 className="text-lg font-semibold text-slate-900 capitalize">
        {title}
      </h1>
      <p className="text-slate-600">{body}</p>

      <div className="flex items-center justify-end mt-4 gap-4">
        <Link
          to={`edit/${id}`}
          className="bg-blue-500 px-4 py-1 rounded-sm  text-white font-semibold"
        >
          Edit
        </Link>

        <button
          onClick={async () => {
            await deletePost(id, setPosts);
          }}
          className="bg-red-500 rounded-sm py-1 px-4 text-white font-semibold"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;

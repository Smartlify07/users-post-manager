import PostList from "../components/PostList";
import usePostsContext from "../hooks/usePostsContext";
const Home = () => {
  const { page, loading, setPage } = usePostsContext();

  const nextPage = () => {
    setPage((prevState) => prevState + 10);
  };
  const previousPage = () => {
    if (page !== 0) {
      setPage((prevState) => prevState - 10);
    }
  };
  return (
    <main className="flex flex-col items-center">
      {loading && (
        <h1 className="text-center text-2xl font-semibold">
          {" "}
          Loading Posts...
        </h1>
      )}

      {!loading && <PostList />}

      <div className="flex items-center gap-4 py-6 justify-center w-full">
        <button
          disabled={page === 0}
          onClick={previousPage}
          className="bg-slate-800 text-white font-rubik py-3 px-5 font-semibold disabled:bg-slate-100 disabled:text-slate-900"
        >
          Prev
        </button>
        <button
          onClick={nextPage}
          className="bg-slate-900 text-white font-rubik py-3 px-5 font-semibold disabled:bg-slate-50 disabled:text-slate-900"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Home;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-6 px-6 flex flex-col items-center justify-around gap-5 w-full font-rubik lg:flex-row lg:gap-10">
      <h1 className="text-3xl font-semibold text-slate-950">Users Dashboard</h1>

      <Link
        className="bg-slate-900 font-semibold text-white px-4 py-3 rounded-sm"
        to={"/create"}
      >
        Create Post
      </Link>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import SearchList from "../searchList/SearchList";

const Header = () => {
  return (
    <>
      <header className="p-8 relative md:flex-row flex-col  h-auto bg-[#1c2d1d] shadow-xl text-white flex justify-between  items-center">
        <Link to="/">
          <div className="flex flex-col mb-4 items-center justify-center cursor-pointer">
            <h1 className="tracking-widest text-4xl  font-semibold">
              MoviePalace
            </h1>
            <p className="text-xs tracking-widest">
              Where Every Frame Tells a Story
            </p>
          </div>
        </Link>
        <div className="md:w-96 w-auto">
          <input
            className="p-2 px-4 bg-gray-100 text-black w-full rounded-full focus:outline-emerald-700 outline-none"
            type="search"
            name="search"
            placeholder="Search for movies..."
            id="search"
          />
          <SearchList />
        </div>
        <nav className="hidden lg:inline">
          <ul className="flex text-2xl space-x-4">
            <Link
              className="text-base hover:bg-green-800 font-medium transition-all
            ease-in-out duration-300 rounded-md p-2 hover:rounded-md hover:text-white"
              to="/"
            >
              <li>Home</li>
            </Link>
            <li
              className="text-base cursor-pointer hover:bg-green-800 font-medium transition-all
            ease-in-out duration-300 rounded-md p-2 hover:rounded-md hover:text-white"
            >
              About
            </li>
            <li
              className="text-base cursor-pointer hover:bg-green-800 font-medium transition-all
            ease-in-out duration-300 rounded-md p-2 hover:rounded-md hover:text-white"
            >
              Contact Us
            </li>
            <li
              className="text-base cursor-pointer hover:bg-green-800 font-medium transition-all>Signup</li>
            <li             ease-in-out duration-300 rounded-md p-2 hover:rounded-md hover:text-white"
            >
              Login
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

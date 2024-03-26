import { Link } from "react-router-dom";
import SearchList from "../searchList/SearchList";
import { useDispatch } from "react-redux";
import { searchHandler } from "../../store/searchResultSlice";
import { useEffect, useState } from "react";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const dispatch = useDispatch();
  let blurTime;

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      dispatch(searchHandler(searchText.split(" ").join("%20")));
    }, 1000);
    return () => clearTimeout(debounceSearch);
  }, [searchText]);

  const handleInputFocus = () => {
    clearTimeout(blurTime);
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    blurTime = setTimeout(() => {
      setIsInputFocused(false);
    }, 500);
  };

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
        <div className="w-96">
          <input
            className="p-2 px-4 bg-gray-100 text-black w-full rounded-full focus:outline-emerald-700 outline-none"
            type="search"
            name="search"
            value={searchText}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search for movies..."
            id="search"
          />
          {isInputFocused && <SearchList isInputFocused={isInputFocused} />}
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { sideMenuToggle } from "../../store/sideMenuSlice";

const SideMenu = () => {
  const dispatch = useDispatch();
  const [showMoviesDropdown, setShowMoviesDropdown] = useState(false);
  const sideMenu = useSelector((state) => state.sideMenu);

  const handleCloseButtonClick = (e) => {
    e.stopPropagation();
    dispatch(sideMenuToggle());
  };

  return (
    <div
      className="fixed z-10 duration-500 bg-opacity-[50%] inset-0 bg-black"
      onClick={() => dispatch(sideMenuToggle())}
    >
      <div
        className={`flex justify-center items-center top-0 w-48 md:w-96 h-[100vh] fixed z-40 ease-in-out  duration-1000 left-0 bg-white  ${
          sideMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={handleCloseButtonClick}
          className="absolute z-20 top-4 right-6"
        >
          <CloseIcon fontSize="large" />
        </button>
        <ul className="flex flex-col gap-y-3 items-center justify-center text-3xl font-semibold  tracking-wide">
          <Link to="/">
            <li className="hover:bg-green-800 px-3 py-2 rounded-lg ease-in duration-300 hover:text-white transition-all cursor-pointer">
              HOME
            </li>
          </Link>

          <li
            className="hover:bg-green-800 px-3 py-2 rounded-lg ease-in duration-300 hover:text-white text-center transition-all cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setShowMoviesDropdown(!showMoviesDropdown);
            }}
          >
            MOVIES
          </li>

          <ul
            className={`${
              showMoviesDropdown ? "block" : "hidden"
            } flex overflow-hidden flex-col gap-y-3 items-center justify-center text-xl font-semibold tracking-wide`}
          >
            <Link to="/movies/popular">
              <li className="hover:bg-green-800 px-3 py-2 rounded-lg ease-in duration-300 hover:text-white transition-all cursor-pointer">
                Popular
              </li>
            </Link>
            <Link to="/movies/upcoming">
              <li className="hover:bg-green-800 px-3 py-2 rounded-lg ease-in duration-300 hover:text-white transition-all cursor-pointer">
                Upcoming
              </li>
            </Link>
            <Link to="/movies/top_rated">
              <li className="hover:bg-green-800 px-3 py-2 rounded-lg ease-in duration-300 hover:text-white transition-all cursor-pointer">
                Top Rated
              </li>
            </Link>
          </ul>

          <Link>
            <li className="hover:bg-green-800 px-3 py-2 rounded-lg ease-in duration-300 hover:text-white transition-all cursor-pointer">
              TV SERIES
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;

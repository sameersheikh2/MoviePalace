import React from "react";
import { useSelector } from "react-redux";
import { movieImageLink } from "../../utils/constant";
import { Link } from "react-router-dom";

const SearchList = ({ isInputFocused }) => {
  const movieResults = useSelector((state) => state.searchResults);

  return (
    <div
      className={`h-[340px] ${isInputFocused ? `block` : `hidden`} ${
        movieResults.length != 0 && movieResults ? `block` : `hidden`
      } scroll-smooth no-scrollbar overflow-y-auto absolute z-10 w-96 bg-black bg-opacity-[90%] rounded-lg mt-2 text-white`}
    >
      <ul className="flex flex-col justify-center pt-1 items-left px-4  w-full">
        {movieResults &&
          movieResults.slice(0, 10).map((movie) => (
            <Link key={movie.id} to={"/movie/" + movie.id}>
              <li className="py-1 flex items-center justify-start my-2 cursor-pointer px-2 hover:bg-gray-700 hover:bg-opacity-[40%]">
                <img
                  loading="lazy"
                  className="w-20 mr-2 h-auto"
                  src={movieImageLink + movie.poster_path}
                  alt={movie.title}
                />
                <div className="flex flex-col items-start ">
                  <h1 className="text-lg font-medium">{movie.title}</h1>
                  <span className="text-sm text-gray-400">
                    {movie.release_date}
                  </span>
                </div>
              </li>
              <hr className="w-full m-auto bg-gray-600 border-0 h-[1px]" />
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default SearchList;

import React, { useState, useEffect } from "react";
// import MovieCard from "./MovieCard";
// import Carousel from "../carousel/Carousel";
import MovieCarousel from "../carousel/MovieCarousel";
import useMovies from "../../utils/useMovies";
import { Link } from "react-router-dom";

const PopularMovies = () => {
  const movies = useMovies("popular");
  const upcomingMovies = useMovies("upcoming");
  const topRatedMovies = useMovies("top_rated");

  return (
    <>
      <section>
        <div className="flex bg-[#1c2d1d] text-white justify-between items-center px-4 py-2 my-6">
          <h1 className="text-2xl font-semibold ">Popular Movies - </h1>
          <button type="button">view all &gt;</button>
        </div>
        <MovieCarousel items={movies && movies} />;
      </section>
      <section>
        <div className="flex bg-[#1c2d1d] text-white justify-between items-center px-4 py-2 my-6">
          <h1 className="text-2xl font-semibold ">Upcoming Movies - </h1>
          <button type="button">view all &gt;</button>
        </div>
        <MovieCarousel items={upcomingMovies && upcomingMovies} />;
      </section>
      <section>
        <div className="flex bg-[#1c2d1d] text-white justify-between items-center px-4 py-2 my-6">
          <h1 className="text-2xl font-semibold ">Top Rated Movies - </h1>
          <Link
            className="text-base hover:bg-green-800 font-medium transition-all
            ease-in-out duration-300 rounded-md p-2 hover:rounded-md hover:text-white"
            to="/"
          >
            View all &gt;
          </Link>
        </div>
        <MovieCarousel items={topRatedMovies && topRatedMovies} />;
      </section>
    </>
  );
};

export default PopularMovies;

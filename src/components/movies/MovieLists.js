import React, { useEffect } from "react";
import MovieCarousel from "../carousel/MovieCarousel";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/movieListsSlice";

const MovieLists = () => {
  const upcomingMovies = useSelector((state) => state.movieLists.upcoming);
  const popularMovies = useSelector((state) => state.movieLists.popular);
  const topRatedMovies = useSelector((state) => state.movieLists.top_rated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies("upcoming", 1));
    dispatch(fetchMovies("popular", 1));
    dispatch(fetchMovies("top_rated", 1));
  }, []);

  return (
    <>
      <section>
        <div className="flex bg-[#1c2d1d] text-white justify-between items-center px-4 py-2 my-6">
          <h1 className="text-2xl font-semibold ">Popular Movies </h1>
          <Link
            className="text-base hover:bg-green-800 font-medium transition-all
            ease-in-out duration-300 rounded-md p-2 hover:rounded-md hover:text-white"
            to={"/movies/" + "popular"}
          >
            View all &gt;
          </Link>
        </div>
        <MovieCarousel items={popularMovies && popularMovies} />;
      </section>
      <section>
        <div className="flex bg-[#1c2d1d] text-white justify-between items-center px-4 py-2 my-6">
          <h1 className="text-2xl font-semibold ">Upcoming Movies </h1>
          <Link
            className="text-base hover:bg-green-800 font-medium transition-all
            ease-in-out duration-300 rounded-md p-2 hover:rounded-md hover:text-white"
            to={"/movies/" + "upcoming"}
          >
            View all &gt;
          </Link>
        </div>
        <MovieCarousel items={upcomingMovies && upcomingMovies} />;
      </section>
      <section>
        <div className="flex bg-[#1c2d1d] text-white justify-between items-center px-4 py-2 my-6">
          <h1 className="text-2xl font-semibold ">Top Rated Movies </h1>
          <Link
            className="text-base hover:bg-green-800 font-medium transition-all
            ease-in-out duration-300 rounded-md p-2 hover:rounded-md hover:text-white"
            to={"/movies/" + "top_rated"}
          >
            View all &gt;
          </Link>
        </div>
        <MovieCarousel items={topRatedMovies && topRatedMovies} />
      </section>
    </>
  );
};

export default MovieLists;

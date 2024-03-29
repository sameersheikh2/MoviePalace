import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const formatOverview = (overview) => {
    let substring;
    if (overview.length > 35) {
      substring = overview.substring(0, 35) + "...";
    }
    return substring;
  };

  return (
    <Link
      to={"/movie/" + movie.id}
      className="flex bg-transparent justify-center items-center flex-col h-[420px] border-2  movie-2 cursor-pointer rounded-lg shadow-lg w-60"
    >
      <div className="w-full rounded-t-lg overflow-hidden">
        <img
          className="object-cover w-full hover:scale-105 ease-in duration-150"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="mt-2 bg text-left m-4">
        <h1 className="text-2xl font-bold">{movie.title}</h1>
        <p className="text-sm">{movie && formatOverview(movie.overview)}</p>
      </div>
    </Link>
  );
};

export default MovieCard;

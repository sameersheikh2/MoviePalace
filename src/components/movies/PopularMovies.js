import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const bearerToken = process.env.MY_BEARER_TOKEN;

  const fetchMovies = async () => {
    const nextPage = page + 1;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
    };
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${nextPage}`,
        options
      );
      const data = await res.json();
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <div className="flex flex-wrap mt-10 gap-6 justify-center items-center">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <div className="flex justify-center w-full mt-6">
        <button
          className="text-base bg-green-900 hover:bg-green-700 font-medium transition-all ease-in-out duration-300 rounded-md p-2 px-3 hover:rounded-md text-white"
          onClick={handleLoadMore}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default PopularMovies;

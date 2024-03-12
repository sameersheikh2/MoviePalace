import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const bearerToken = process.env.MY_BEARER_TOKEN;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
    };

    const fetchMovies = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          options
        );
        const data = await res.json();
        console.log(data.results);
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default PopularMovies;

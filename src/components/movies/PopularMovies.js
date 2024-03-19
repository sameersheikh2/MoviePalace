import { useState, useEffect, useRef } from "react";
import MovieCard from "./MovieCard";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // const page = useRef(1);
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
      console.log(data);
      // page.current += 1;
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
      // fetchMovies();
      setPage((prevPage) => prevPage + 1);
    }
  };
  console.log(page);

  return (
    <div className="flex flex-wrap mt-10 gap-6 justify-center items-center">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default PopularMovies;

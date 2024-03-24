import React, { useState, useEffect } from "react";

const useMovies = (type) => {
  const [movies, setMovies] = useState([]);
  const bearerToken = process.env.MY_BEARER_TOKEN;

  const fetchMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
    };
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`,
        options
      );
      const data = await res.json();
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return movies;
};

export default useMovies;

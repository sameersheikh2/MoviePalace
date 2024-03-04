import { useState, useEffect } from "react";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const bearerToken = process.env.MY_BEARER_TOKEN;

  console.log(bearerToken);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: { bearerToken },
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
        console.log(movies);
      })
      .catch((err) => console.error(err));
  }, []);

  const formatOverview = (overview) => {
    let substring;
    if (overview.length > 35) {
      substring = overview.substring(0, 35) + "...";
    }
    return substring;
  };

  return (
    <div className="flex flex-wrap justify-center items-center">
      {movies.map((movie) => {
        return (
          <div className="flex m-3 flex-col h-[420px] border-2 w-60 movie-2 cursor-pointer rounded-lg shadow-lg">
            <div className="w-full overflow-hidden">
              <img
                width={"100%"}
                className="bg-cover hover:scale-105 ease-in duration-150"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
            </div>
            <div className="mt-2 text-left ml-4">
              <h1 className="text-2xl font-bold">{movie.title}</h1>
              <p className="text-sm">{formatOverview(movie.overview)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PopularMovies;

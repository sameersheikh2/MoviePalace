import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovies } from "../store/movieListsSlice";
import MovieCard from "../components/movies/MovieCard";

const AllMovies = () => {
  const { movieListType } = useParams();
  const page = useRef(1);
  const movieData = useSelector((state) => state.movieLists);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchMovies(movieListType, page.current));
  }, [movieListType]);

  const loadMoreHandler = () => {
    const nextPage = page.current + 1;
    dispatch(fetchMovies(movieListType, nextPage));
    page.current = nextPage;
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {movieData[movieListType] &&
          movieData[movieListType].lenght !== 0 &&
          movieData[movieListType].map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={loadMoreHandler}
          className="mt-10 bg-green-800 px-3 py-2 text-2xl font-medium rounded-lg hover:bg-green-700 text-white ease-in duration-200"
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default AllMovies;

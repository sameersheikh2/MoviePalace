import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/movies/MovieInfo";
import ShimmerMovieDetail from "../UI/ShimmerMovieDetail";
import useMovieInfo from "../utils/useMovieInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetail } from "../store/movieInfoSlice";

const Movie = () => {
  const { movie_id } = useParams();
  const movieDetail = useSelector((state) => state.movieInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieDetail(movie_id));
  }, [movie_id]);

  // const movieDetail = useMovieInfo(movie_id);

  return (
    <>
      {typeof movieDetail !== "undefined" ? (
        <div className="m-auto w-4/5 mt-16">
          <MovieInfo
            title={movieDetail.title}
            rating={movieDetail.vote_average}
            genre={movieDetail.genres}
            poster={movieDetail.poster_path}
            videos={movieDetail.videos?.results}
            images={movieDetail.images}
            description={movieDetail.overview}
            credits={movieDetail?.credits?.cast}
            similar={movieDetail?.similar?.results}
          />
        </div>
      ) : (
        <ShimmerMovieDetail />
      )}
    </>
  );
};

export default Movie;

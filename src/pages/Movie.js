import React from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/movies/MovieInfo";
import ShimmerMovieDetail from "../UI/ShimmerMovieDetail";
import useMovieInfo from "../utils/useMovieInfo";

const Movie = () => {
  const { movie_id } = useParams();

  const movieDetail = useMovieInfo(movie_id);

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

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/movies/MovieInfo";
import ShimmerMovieDetail from "../UI/ShimmerMovieDetail";

const Movie = () => {
  const { movie_id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  useEffect(() => {
    const fetchMovieDetail = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + process.env.MY_BEARER_TOKEN,
        },
      };
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movie_id +
            "?append_to_response=videos%2Cimages%2Ccredits",
          options
        );
        const data = await res.json();
        console.log(data);
        window.scrollTo(0, 0);
        setMovieDetail(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetail();
  }, [movie_id]);

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
          />
        </div>
      ) : (
        <ShimmerMovieDetail />
      )}
    </>
  );
};

export default Movie;

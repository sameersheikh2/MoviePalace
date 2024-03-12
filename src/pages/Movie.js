import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import MovieInfo from "../components/movies/MovieInfo";

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
            "?append_to_response=videos%2Cimages&language=en-US",
          options
        );
        const data = await res.json();
        console.log(data);
        setMovieDetail(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetail();
  }, []);

  return (
    <>
      {movieDetail ? (
        <div className="m-auto w-4/5 mt-16">
          <MovieInfo
            title={movieDetail.title}
            rating={movieDetail.vote_average}
            genre={movieDetail.genres}
            poster={movieDetail.poster_path}
            videos={movieDetail.videos?.results}
            description={movieDetail.overview}
          />
        </div>
      ) : null}
    </>
  );
};

export default Movie;

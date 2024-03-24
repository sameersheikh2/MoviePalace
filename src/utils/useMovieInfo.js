import React, { useEffect, useState } from "react";

const useMovieInfo = (movie_id) => {
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
            "?append_to_response=videos%2Cimages%2Ccredits%2Csimilar",
          options
        );
        const data = await res.json();
        window.scrollTo(0, 0);
        setMovieDetail(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetail();
  }, [movie_id]);

  return movieDetail;
};

export default useMovieInfo;

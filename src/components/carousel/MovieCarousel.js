import React from "react";
import MovieCard from "../movies/MovieCard";

const MovieCarousel = ({ items }) => {
  return (
    <swiper-container
      spaceBetween={30}
      slidesPerView={5}
      centeredSlides={true}
      navigation="true"
      breakpoints={JSON.stringify({
        1024: {
          slidesPerView: 5,
        },
        780: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 2,
        },
      })}
    >
      {items &&
        items.map((movie) => (
          <swiper-slide
            lazy="true"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={movie.id}
          >
            <MovieCard movie={movie} />
          </swiper-slide>
        ))}
    </swiper-container>
  );
};

export default MovieCarousel;

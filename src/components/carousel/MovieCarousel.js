import React from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MovieCard from "../movies/MovieCard";

const MovieCarousel = ({ items }) => {
  const SampleNextArrow = ({ onClick }) => {
    return (
      <ArrowForwardIosIcon
        sx={{ width: "3.1rem", height: "3.1rem" }}
        className="absolute cursor-pointer text-white z-10 top-44 right-3"
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = ({ onClick }) => {
    return (
      <ArrowBackIosIcon
        sx={{ width: "3.1rem", height: "3.1rem" }}
        className="absolute cursor-pointer text-white z-10 top-44 left-6"
        onClick={onClick}
      />
    );
  };

  const settings = {
    className: "center",
    centerMode: "true",
    dots: false,
    arrows: true,
    slidesToShow: 5,
    infinite: true,
    slidesToScroll: 1,
    speed: 500,
    pauseOnHover: false,
    // cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          initialSlide: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {items.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Slider>
  );
};

export default MovieCarousel;

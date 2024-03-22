import React from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import MovieCard from "../movies/MovieCard";

const Carousel = ({ items, type }) => {
  const SampleNextArrow = ({ onClick }) => {
    return (
      <ArrowForwardIosIcon
        sx={{ width: "3.1rem", height: "3.1rem" }}
        className="absolute cursor-pointer text-white z-10 top-[50%] right-0"
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = ({ onClick }) => {
    return (
      <ArrowBackIosIcon
        sx={{ width: "3.1rem", height: "3.1rem" }}
        className="absolute cursor-pointer text-white z-10 top-[50%] left-3"
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items
          ? type === "image"
            ? items.map((item, index) => (
                <div key={index} className="overflow-hidden w-full h-full">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${item?.file_path}`}
                    alt={item?.title}
                  />
                </div>
              ))
            : items
                .filter((movie) => movie.backdrop_path !== null)
                .map((movie) => (
                  <Link key={movie.id} to={"/movie/" + movie.id}>
                    <div className="overflow-hidden  w-full h-full relative">
                      <div className="absolute w-full h-full bg-gradient-to-r from-black"></div>
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover"
                        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                        alt={movie?.title}
                      />
                      <div className="absolute w-full bottom-[5%] p-4 md:p-8 ">
                        <h1 className="text-3xl inline-block cursor-pointer md:text-5xl text-white font-bold mb-2">
                          {movie?.title}
                        </h1>
                        <p className="text-gray-400 text-sm">
                          Relese: {movie?.release_date}
                        </p>
                        <span className="text-gray-400 text-sm">
                          Rating : {movie?.vote_average.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))
          : null}
      </Slider>
    </div>
  );
};

export default Carousel;

import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import Slider from "react-slick";

const Carousel = ({ items, type }) => {
  var settings = {
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="overflow-hidden relative">
      {items
        ? type === "image"
          ? items.map((item, index) => (
              <div
                key={index}
                style={{ width: "auto", height: "100%", overflow: "hidden" }}
              >
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
                <div
                  key={movie.id}
                  style={{
                    width: "auto",
                    height: "auto",
                    overflow: "hidden",
                  }}
                >
                  <Link to={"/movie/" + movie.id}>
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
                </div>
              ))
        : null}
    </Slider>
  );
};

export default Carousel;

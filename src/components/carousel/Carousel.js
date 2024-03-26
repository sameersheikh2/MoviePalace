import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const Carousel = ({ items, type }) => {
  return (
    <main>
      <swiper-container
        navigation="true"
        autoplay-delay="2000"
        auto-height="true"
        id="my-swiper"
        autoplay-disable-on-interaction="false"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {items
          ? type === "image"
            ? items.map((item, index) => (
                <swiper-slide
                  key={index}
                  style={{ width: "auto", overflow: "hidden" }}
                  lazy="true"
                >
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${item?.file_path}`}
                    alt={item?.title}
                  />
                </swiper-slide>
              ))
            : items
                .filter((movie) => movie.backdrop_path !== null)
                .map((movie) => (
                  <swiper-slide
                    key={movie.id}
                    style={{
                      width: "auto",
                      height: "100vh",
                      overflow: "hidden",
                    }}
                    lazy="true"
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
                  </swiper-slide>
                ))
          : null}
      </swiper-container>
    </main>
  );
};

export default Carousel;

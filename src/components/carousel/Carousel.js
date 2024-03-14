import React from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Carousel = ({ items, type }) => {
  const SampleNextArrow = ({ onClick }) => {
    return (
      <ArrowForwardIosIcon
        sx={{ width: "50px", height: "50px" }}
        className="absolute cursor-pointer text-white z-10 top-[50%] right-0"
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = ({ onClick }) => {
    return (
      <ArrowBackIosIcon
        sx={{ width: "50px", height: "50px" }}
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
    adaptiveHeight: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items
          ? type === "video"
            ? items.map((item) => (
                <div
                  className="relative overflow-hidden w-[500px] h-[600px]"
                  key={item.id}
                >
                  <iframe
                    loading="lazy"
                    className=" w-[100%] h-[100%]"
                    src={"https://www.youtube.com/embed/" + item.key}
                    title="Code 8 Part II | Official Trailer | Netflix"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              ))
            : items.map((item) => (
                <div key={item.id} className="overflow-hidden w-full h-full">
                  {/* <div className="absolute w-full h-full bg-gradient-to-r from-black"></div> */}
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${item?.file_path}`}
                    alt={item?.title}
                  />
                </div>
              ))
          : null}
      </Slider>
    </div>
  );
};

export default Carousel;

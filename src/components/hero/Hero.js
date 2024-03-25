import { useEffect, useState } from "react";
import ShimmerHero from "../../UI/ShimmerHero";
import Slider from "react-slick";
import Carousel from "../carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/movieListsSlice";

const Hero = () => {
  const nowPlaying = useSelector((state) => state.movieLists.now_playing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies("now_playing"));
  }, []);

  const settings = {
    dots: false,
    lazyLoad: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    adaptiveHeight: true,
  };

  return (
    <section className="w-full h-full text-white relative">
      {nowPlaying.length != 0 ? (
        <Carousel items={nowPlaying} />
      ) : (
        <ShimmerHero />
      )}
    </section>
  );
};

export default Hero;

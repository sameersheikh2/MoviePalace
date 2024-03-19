import { useEffect, useState } from "react";
import ShimmerHero from "../../UI/ShimmerHero";
import Slider from "react-slick";
import Carousel from "../carousel/Carousel";

const Hero = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const token = process.env.MY_BEARER_TOKEN;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
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

  const fetchNowPlaying = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      );
      const data = await res.json();
      setNowPlaying(data.results);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  return (
    <section className="w-full h-full text-white relative">
      <Slider {...settings}>
        {nowPlaying.length != 0 ? (
          <Carousel items={nowPlaying} />
        ) : (
          <ShimmerHero />
        )}
      </Slider>
    </section>
  );
};

export default Hero;

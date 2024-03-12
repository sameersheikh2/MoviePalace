import { useEffect, useState } from "react";
import ShimmerHero from "../../helper/ShimmerHero";
import Slider from "react-slick";

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
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    cssEase: "linear",
    adaptiveHeight: true,
  };

  const fetchPopularMovie = async () => {
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
    fetchPopularMovie();
  }, []);

  return (
    <section className="w-full h-full text-white relative">
      <Slider {...settings}>
        {nowPlaying.length != 0 ? (
          nowPlaying.map((movie) => {
            return (
              <div key={movie.id} className=" w-full h-full relative">
                <div className="absolute w-full h-full bg-gradient-to-r from-black"></div>
                <img
                  className="h-full w-full object-cover"
                  src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                  alt={movie?.title}
                />
                <div className="absolute w-full bottom-[10%] p-4 md:p-8 ">
                  <h1 className="text-3xl inline-block cursor-pointer md:text-5xl font-bold mb-2">
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
            );
          })
        ) : (
          <ShimmerHero />
        )}
      </Slider>
    </section>
  );
};

export default Hero;

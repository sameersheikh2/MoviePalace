import { useEffect } from "react";
import ShimmerHero from "../../UI/ShimmerHero";
import Carousel from "../carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/movieListsSlice";

const Hero = () => {
  const nowPlaying = useSelector((state) => state.movieLists.now_playing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies("now_playing", 1));
  }, []);

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

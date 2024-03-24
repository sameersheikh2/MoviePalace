import { Suspense } from "react";
import Hero from "../components/hero/Hero";
import PopularMovies from "../components/movies/PopularMovies";
import ShimmerHero from "../UI/ShimmerHero";

const Home = () => {
  return (
    <>
      <Suspense fallback={<ShimmerHero />}>
        <Hero />
      </Suspense>
      <PopularMovies />
    </>
  );
};

export default Home;

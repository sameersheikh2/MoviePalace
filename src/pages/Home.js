import { Suspense } from "react";
import Hero from "../components/hero/Hero";
import MovieLists from "../components/movies/MovieLists";
import ShimmerHero from "../UI/ShimmerHero";

const Home = () => {
  return (
    <>
      <Suspense fallback={<ShimmerHero />}>
        <Hero />
      </Suspense>
      <MovieLists />
    </>
  );
};

export default Home;

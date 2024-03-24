import { Suspense } from "react";
import Hero from "../components/hero/Hero";
import MovieLists from "../components/movies/MovieLists";
import ShimmerHero from "../UI/ShimmerHero";
import ShimmerCard from "../UI/ShimmerCard";

const Home = () => {
  return (
    <>
      <Suspense fallback={<ShimmerHero />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<ShimmerCard />}>
        <MovieLists />
      </Suspense>
    </>
  );
};

export default Home;

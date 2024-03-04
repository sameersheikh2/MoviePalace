import Header from "./components/header/Header";
import PopularMovies from "./components/movies/PopularMovies";

const App = () => {
  return (
    <>
      <Header />
      <PopularMovies />
    </>
  );
};

export default App;

/**
 * Body -
 *    -header
 *    -hero
 *    -movies
 *        -featured movies
 *          -movie card
 *        -popular movies
 *          -movie card
 *  ON search
 *   - movies
 *     -search reasults
 *      -filters
 *      -movie card
 *    -footer
 *
 *
 *
 *
 */

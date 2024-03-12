import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Movie from "./pages/Movie";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:movie_id",
        element: <Movie />,
      },
    ],
  },
]);

export default appRoute;

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

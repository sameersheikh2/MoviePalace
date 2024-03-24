import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Movie from "./pages/Movie";
import Error from "./pages/Error/Error";
import CastInfo from "./components/cast/CastInfo";
import React from "react";

const App = () => {
  return (
    <React.StrictMode>
      <Header />
      <Outlet />
      <Footer />
    </React.StrictMode>
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
      { path: "/cast/:cast_id", element: <CastInfo /> },
    ],
    errorElement: <Error />,
  },
]);

export default appRoute;

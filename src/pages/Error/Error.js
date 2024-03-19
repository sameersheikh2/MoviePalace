import React from "react";
import { Link } from "react-router-dom";

const vid = new URL(`Error_page.mp4`, import.meta.url);

//https://parceljs.org/recipes/react/#images
//You can reference external images/videos from JSX using the URL constructor.
//Check the above docs for more info

const Error = () => {
  return (
    <>
      <video
        autoPlay={true}
        loop
        muted
        className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
        src={vid}
      ></video>
      <main className="flex justify-center items-center h-screen z-10">
        <div className="text-center text-white">
          <p className="text-base font-semibold">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Error;

import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Carousel from "../carousel/Carousel";
import Cast from "../cast/Cast";
import { Link } from "react-router-dom";

const MovieInfo = ({
  title,
  genre,
  rating,
  poster,
  images,
  videos,
  description,
  credits,
  similar,
}) => {
  const trailer_url = videos
    ? videos.find((video) => video.type === "Trailer").key
    : "";
  return (
    <>
      <section className="flex sm:flex-row flex-col justify-between items-center">
        <div>
          <Link
            className="text-base hover:bg-green-800 font-medium transition-all
            ease-in-out duration-300 rounded-md p-2 hover:rounded-md hover:text-white"
            to="/"
          >
            Back to home
          </Link>
          <h1 className="text-6xl mt-4 font-bold">{title}</h1>
          {genre && (
            <p className="text-sm mt-4">
              {genre.map((genre) => genre.name).join(", ")}
            </p>
          )}
        </div>
        <div className="flex w-full mt-2 sm:mt-0 sm:w-auto justify-start items-start sm:items-center font-semibold sm:justify-center">
          <StarIcon sx={{ color: "yellow", fontSize: "44px" }} />
          <h1 className="text-5xl">{rating && rating.toFixed(1)}</h1>
          <span className="self-end text-md mb-[2px] text-gray-600">/10</span>
        </div>
      </section>
      <div className="my-20 overflow-hidden items-center flex-col lg:flex-row gap-6 justify-center flex ">
        <img
          width={300}
          height={500}
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          alt="poster"
        />
        <iframe
          loading="lazy"
          className="w-[650px]  h-[450px]"
          src={"https://www.youtube.com/embed/" + trailer_url}
          title="Code 8 Part II | Official Trailer | Netflix"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <p className="text-center text-xl ">"{description}"</p>
      </div>
      <div className="w-full h-full mt-20 flex flex-col gap-10">
        <Carousel type="image" items={images && images.backdrops} />
      </div>
      <div className="mt-20 text-center">
        <h1 className="text-4xl font-semibold mb-3">Top Cast</h1>
        <div className="flex justify-center items-center flex-wrap  gap-1">
          {credits &&
            credits.slice(0, 15).map((cast) => (
              <div
                key={cast.id}
                className="w-[22rem] flex items-center justify-center rounded-md border-2 shadow-xl cursor-pointer hover:bg-gray-300 h-44"
              >
                <Cast
                  id={cast.id}
                  name={cast?.name}
                  character={cast?.character}
                  profile_path={cast?.profile_path}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-2xl font-semibold mb-3">Similar to {title} : </h1>
        <Carousel items={similar} />
      </div>
    </>
  );
};

export default MovieInfo;

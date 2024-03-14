import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Carousel from "../carousel/Carousel";
import Cast from "../Cast/Cast";

const MovieInfo = ({
  title,
  genre,
  rating,
  poster,
  images,
  videos,
  description,
  credits,
}) => {
  console.log(videos && videos.find((video) => video.type === "Trailer"));
  const trailer_url = videos
    ? videos.find((video) => video.type === "Trailer").key
    : "";
  return (
    <>
      <section autoFocus className="flex justify-between items-center">
        <div>
          <h1 className="text-6xl font-bold">{title}</h1>
          {genre && (
            <p className="text-sm mt-4">
              {genre.map((genre) => genre.name).join(", ")}
            </p>
          )}
        </div>
        <div className="flex items-center font-semibold justify-center">
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
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <p className="text-center text-xl ">"{description}"</p>
      </div>
      <div className="w-full h-full mt-20 flex flex-col gap-10">
        <Carousel type="image" items={images && images.backdrops} />
        <Carousel
          type="video"
          items={
            videos &&
            videos.filter(
              (video) => video.type === "Teaser" || video.type === "Trailer"
            )
          }
        />
      </div>
      <div className="flex mt-20 justify-center items-center flex-wrap gap-11">
        {credits &&
          credits.slice(0, 15).map((cast) => (
            <div className="w-[320px] flex items-center justify-center rounded-md border-2 shadow-xl cursor-pointer hover:bg-gray-300 h-[170px]">
              <Cast
                name={cast?.name}
                character={cast?.character}
                profile_path={cast?.profile_path}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default MovieInfo;

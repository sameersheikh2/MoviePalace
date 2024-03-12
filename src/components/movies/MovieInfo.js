import React from "react";
import StarIcon from "@mui/icons-material/Star";

const MovieInfo = ({ title, genre, rating, poster, videos, description }) => {
  const trailer_url = videos ? videos[0].key : "";
  return (
    <>
      <section className="flex justify-between items-center">
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
      <div className="my-20 items-center gap-6 justify-center flex ">
        <img
          width={300}
          height={500}
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          alt="poster"
        />
        <iframe
          className="w-[650px] h-[450px]"
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
    </>
  );
};

export default MovieInfo;

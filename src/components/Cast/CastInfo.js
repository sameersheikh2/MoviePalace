import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../carousel/Carousel";

const CastInfo = () => {
  const [castInfo, setCastInfo] = useState({});
  const token = process.env.MY_BEARER_TOKEN;
  const navigate = useNavigate();
  const { cast_id } = useParams();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/person/" +
            cast_id +
            "?append_to_response=movie_credits",
          options
        );
        const data = await res.json();
        setCastInfo(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  console.log(castInfo);
  return (
    <>
      {castInfo && (
        <div className="mt-6">
          <div className="w-[85%] m-auto">
            <button
              className="text-base hover:bg-green-800 font-medium transition-all
            ease-in-out duration-300 rounded-md p-2 hover:rounded-md hover:text-white"
              onClick={() => {
                navigate(-1);
              }}
            >
              Go back
            </button>
            <h1 className="text-6xl mt-4 font-bold">{castInfo.name}</h1>
            <p className="text-gray-600 font-semibold text-sm">
              {castInfo.known_for_department}
            </p>
            <span className="text-gray-600 font-semibold text-sm">
              Birthday : {castInfo.birthday}
            </span>
          </div>
          <div className="my-20 overflow-hidden items-center flex-col md:flex-row gap-4 justify-evenly flex-wrap flex ">
            <img
              width={300}
              height={400}
              className="object-cover rounded-md overflow-hidden"
              src={`https://image.tmdb.org/t/p/original/${castInfo.profile_path}`}
              alt="profile"
            />
            <p className="md:w-[50%] mx-6 text-base font-semibold">
              {castInfo.biography}
            </p>
          </div>
          <div>
            <h1 className="m-auto w-full text-center text-4xl font-bold tracking-wider my-7">
              Movies
            </h1>
            <Carousel items={castInfo && castInfo?.movie_credits?.cast} />
          </div>
        </div>
      )}
    </>
  );
};

export default CastInfo;

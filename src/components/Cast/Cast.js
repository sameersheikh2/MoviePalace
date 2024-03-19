import React from "react";
import { Link } from "react-router-dom";

const Cast = ({ id, profile_path, name, character }) => {
  return (
    <Link to={"/cast/" + id}>
      <div className="flex gap-7 w-full p-3 justify-evenly items-center">
        <img
          className="w-24 rounded-md h-full object-cover overflow-hidden "
          src={"https://image.tmdb.org/t/p/original/" + profile_path}
          alt={name}
        />
        <div className="flex justify-start items-start flex-col">
          <h1 className="font-semibold text-sm text-gray-800">Cast: </h1>
          <h1 className="text-lg font-semibold">{character}</h1>
          <h1 className="font-semibold text-sm text-gray-800">Actor: </h1>
          <h1 className="text-lg font-semibold">{name}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Cast;

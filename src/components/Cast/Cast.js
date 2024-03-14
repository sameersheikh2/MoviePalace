import React from "react";

const Cast = ({ profile_path, name, character }) => {
  return (
    <div className="flex gap-7 justify-center items-center">
      <img
        className="w-24 rounded-full h-24 object-contain overflow-hidden "
        src={"https://image.tmdb.org/t/p/original/" + profile_path}
        alt={name}
      />
      <div className="flex justify-center items-left flex-col">
        <h1 className="font-semibold text-sm text-gray-800">Cast: </h1>
        <h1 className="text-lg font-semibold">{character}</h1>
        <h1 className="font-semibold text-sm text-gray-800">Actor: </h1>
        <h1 className="text-lg font-semibold">{name}</h1>
      </div>
    </div>
  );
};

export default Cast;

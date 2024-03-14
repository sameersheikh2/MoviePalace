import React from "react";

const ShimmerHero = () => {
  return (
    <div className="animate-pulse w-full h-[100vh] relative">
      <div className="absolute w-full h-full bg-gradient-to-r from-black"></div>
      <img className="h-full w-full object-cover" alt="poster" />
      <div className="absolute w-full bottom-[10%] p-4 md:p-8 ">
        <h1 className="text-3xl inline-block cursor-pointer md:text-5xl font-bold mb-2">
          Title
        </h1>
        <p className="text-gray-400 text-sm">Relese:</p>
        <span className="text-gray-400 text-sm">Rating :</span>
      </div>
    </div>
  );
};

export default ShimmerHero;

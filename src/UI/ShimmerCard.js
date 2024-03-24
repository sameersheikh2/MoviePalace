import React from "react";

const ShimmerCard = () => {
  const arr = new Array(20).fill(null);

  return (
    <>
      <div className="flex mt-10 flex-wrap justify-center items-center gap-6">
        {arr.map((item, index) => (
          <div
            key={index}
            className="flex animate-pulse bg-slate-500 flex-col h-[400px] border-2 w-60 movie-2 cursor-pointer rounded-lg shadow-lg"
          >
            <div className="w-full rounded-t-lg overflow-hidden">
              <img
                className="object-cover w-full hover:scale-105 ease-in duration-150"
                src=""
                alt=""
              />
            </div>
            <div className="mt-2  text-left m-4">
              <h1 className="text-2xl w-11 h-9 font-bold"></h1>
              <p className="w-10 h-8 text-sm"></p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShimmerCard;

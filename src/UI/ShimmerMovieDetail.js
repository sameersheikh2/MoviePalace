import React from "react";

const ShimmerMovieDetail = () => {
  return (
    <>
      <section className="animate-pulse flex justify-between items-center">
        <div>
          <h1 className="animate-pulse text-6xl font-bold">
            Lorem ipsum dolor sit amet.
          </h1>

          <p className="animate-pulse text-sm mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="animate-pulse flex items-center font-semibold justify-center">
          <StarIcon sx={{ color: "yellow", fontSize: "44px" }} />
          <h1 className="animate-pulse text-5xl">Lorem </h1>
          <span className="animate-pulse self-end text-md mb-[2px] text-gray-600">
            /10
          </span>
        </div>
      </section>
      <div className="my-20 items-center flex-col lg:flex-row gap-6 justify-center flex ">
        <div className="w-[300px] h-[500px] animate-pulse"></div>
        <iframe
          className="animate-pulse w-[650px] h-[450px]"
          src={"https://www.youtube.com/embed/"}
          title="Code 8 Part II | Official Trailer | Netflix"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <p className="animate-pulse text-center text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse animi,
          laboriosam eveniet deleniti commodi vitae reiciendis libero iste
          pariatur, impedit vel dolorem ratione asperiores cumque.
        </p>
      </div>
    </>
  );
};

export default ShimmerMovieDetail;

import React from "react";

const ShimmerMovieDetail = () => {
  return (
    <>
      <section className="animate-pulse flex justify-between items-center">
        <div>
          <div className="w-96 mt-10 ml-7 rounded-lg h-16 bg-slate-500"></div>

          <p className="w-60 ml-7 mt-5 rounded-lg h-9 bg-slate-500"></p>
        </div>
        <div className="animate-pulse flex items-center font-semibold justify-center">
          <h1 className="w-28 mt-10 rounded-lg h-16 bg-slate-500"> </h1>
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
        <p className="w-11/12 m-auto mt-5 rounded-lg h-9 bg-slate-500 "></p>
      </div>
    </>
  );
};

export default ShimmerMovieDetail;

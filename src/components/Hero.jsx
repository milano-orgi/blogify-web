import React from "react";
import Banner from "../assets/img/Heroban.svg";

function Hero() {
  return (
    <div className="liner-hero mt-4 flex items-center justify-center px-4 sm:px-0">
      <div className="hero container flex w-full max-w-6xl flex-col-reverse sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="dec flex flex-col items-center justify-center sm:w-1/2 sm:items-start sm:justify-center">
          <h1 className="max-w-xs text-center text-4xl leading-tight font-bold sm:max-w-md sm:text-left sm:text-6xl">
            Create, Read, <span className="liner">Inspire.</span>
          </h1>
          <p className="mt-6 mb-6 max-w-xs text-center text-base text-gray-500 sm:max-w-lg sm:text-left sm:text-xl">
            Discover stories written by amazing people. Share your knowledge and
            inspire others with your unique perspective.
          </p>
          <div className="btns flex w-full flex-wrap justify-center gap-4 sm:justify-start">
            <button className="btn-liner h-12 w-full rounded-xl text-white sm:w-48">
              Explore Posts <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button className="h-12 w-full rounded-xl border-2 border-gray-200 bg-white sm:w-48">
              Get Started
            </button>
          </div>
        </div>
        <div className="mb-6 flex items-center justify-center sm:mb-0 sm:w-1/2">
          <img
            src={Banner}
            alt="Banner"
            className="w-64 max-w-xs sm:w-full sm:max-w-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

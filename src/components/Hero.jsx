import React from "react";
import Banner from "../assets/img/Heroban.svg";

function Hero() {
  return (
    <div className="liner-hero mt-4 flex items-center justify-center px-4 sm:px-0">
      <div className="hero container w-full max-w-6xl flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="dec flex flex-col justify-center items-center sm:items-start sm:justify-center sm:w-1/2">
          <h1 className="text-4xl sm:text-6xl font-bold max-w-xs sm:max-w-md leading-tight text-center sm:text-left">
            Create, Read, <span className="liner">Inspire.</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-500 max-w-xs sm:max-w-lg mt-6 mb-6 text-center sm:text-left">
            Discover stories written by amazing people. Share your knowledge and
            inspire others with your unique perspective.
          </p>
          <div className="btns flex gap-4 flex-wrap justify-center sm:justify-start w-full">
            <button className="btn-liner w-full sm:w-48 h-12 text-white rounded-xl">
              Explore Posts <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button className="bg-white w-full sm:w-48 h-12 border-gray-200 border-2 rounded-xl">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center sm:w-1/2 mb-6 sm:mb-0">
          <img
            src={Banner}
            alt="Banner"
            className="w-64 sm:w-full max-w-xs sm:max-w-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

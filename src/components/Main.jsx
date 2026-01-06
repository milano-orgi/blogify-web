import React from "react";
import Cardmain from "./Cardmain.jsx";
import Postmain from "./Postmain.jsx";
function Main() {
  return (
    <div className="mt-8 sm:mt-16 md:mt-20 lg:mt-32 mb-[128px] ">
      <h1 className="text-center text-3xl font-bold mb-2.5 md:text-4xl ">
        Why Choose Blogify?
      </h1>
      <p className="text-center ">
        Built with modern technologies and best practices to provide the best
        blogging experience.
      </p>
      <Cardmain />
      <div className="posts mb-[48px] mt-[150px] lg:mt-[256px]">
        <div className="container flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold lg:text-4xl mb-[8px]">
              Latest Posts
            </h1>
            <p className="text-[15px] lg:text-[18px] text-[#6B7280]">
              Check out our most recent articles
            </p>
          </div>
          <button className=" rounded-[12px] w-[130px] h-[44px] border-[2px] border-[#E5E7EB]">
            View All <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <Postmain />
    </div>
  );
}

export default Main;

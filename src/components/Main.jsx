import React from "react";
import Cardmain from "./Cardmain.jsx";
import Postmain from "./Postmain.jsx";
function Main() {
  return (
    <div className="mt-8 mb-[128px] sm:mt-16 md:mt-20 lg:mt-32">
      <h1 className="mb-2.5 text-center text-3xl font-bold md:text-4xl">
        Why Choose Blogify?
      </h1>
      <p className="text-center">
        Built with modern technologies and best practices to provide the best
        blogging experience.
      </p>
      <Cardmain />
      <div className="posts mt-[150px] mb-[48px] lg:mt-[256px]">
        <div className="container flex items-center justify-between">
          <div>
            <h1 className="mb-[8px] text-2xl font-bold lg:text-4xl">
              Latest Posts
            </h1>
            <p className="text-[15px] text-[#6B7280] lg:text-[18px]">
              Check out our most recent articles
            </p>
          </div>
          <button className="h-[44px] w-[130px] rounded-[12px] border-[2px] border-[#E5E7EB]">
            View All <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <Postmain />
    </div>
  );
}

export default Main;

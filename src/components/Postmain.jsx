import React from "react";
import Cal from "../assets/img/calendar.svg";
import { banner } from "../data.js";

function Postmain() {
  return (
    <div className="container flex flex-wrap gap-6  justify-center ">
      {banner.map((item) => (
        <div
          key={item.id}
          className="w-96 bg-white rounded-xl shadow-md overflow-hidden flex flex-col  items-center justify-center">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-40 object-cover mb-4"
          />
          <div className="dec p-4 w-full flex flex-col items-start">
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
              <img src={Cal} alt="calendar" className="w-4 h-4" />
              <span>{item.data}</span>
            </div>
            <h1 className="text-lg font-bold mb-1">{item.title}</h1>
            <p className="text-gray-500 text-sm mb-2">{item.dec}</p>
            <button className="text-blue-600 gap-1 mt-auto">
              Read more <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Postmain;

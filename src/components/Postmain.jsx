import React from "react";
import Cal from "../assets/img/calendar.svg";
import { banner } from "../data.js";

function Postmain() {
  return (
    <div className="container flex flex-wrap justify-center gap-6">
      {banner.map((item) => (
        <div
          key={item.id}
          className="flex w-96 flex-col items-center justify-center overflow-hidden rounded-xl bg-white shadow-md"
        >
          <img
            src={item.img}
            alt={item.title}
            className="mb-4 h-40 w-full object-cover"
          />
          <div className="dec flex w-full flex-col items-start p-4">
            <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
              <img src={Cal} alt="calendar" className="h-4 w-4" />
              <span>{item.data}</span>
            </div>
            <h1 className="mb-1 text-lg font-bold">{item.title}</h1>
            <p className="mb-2 text-sm text-gray-500">{item.dec}</p>
            <button className="mt-auto gap-1 text-blue-600">
              Read more <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Postmain;

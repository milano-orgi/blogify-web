import React from "react";
import data from "../data";

function Cardmain() {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-[64px]">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-md p-6 w-72 flex flex-col ">
          <img src={item.img} alt={item.title} className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-gray-500 ">{item.dec}</p>
        </div>
      ))}
    </div>
  );
}

export default Cardmain;

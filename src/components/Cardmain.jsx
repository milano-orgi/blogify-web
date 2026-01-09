import React from "react";
import data from "../data";

function Cardmain() {
  return (
    <div className="mt-[64px] flex flex-wrap justify-center gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex w-72 flex-col rounded-xl bg-white p-6 shadow-md"
        >
          <img src={item.img} alt={item.title} className="mb-4 h-16 w-16" />
          <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
          <p className="text-gray-500">{item.dec}</p>
        </div>
      ))}
    </div>
  );
}

export default Cardmain;

import React from "react";

function Bar() {
  return (
    <div className="container flex flex-col gap-2.5 md:hidden">
      <div className="flex flex-col gap-2.5">
        <a href="#">Home</a>
        <a href="#">Posts</a>
      </div>
      <button className="w-full rounded-2xl bg-blue-600 py-1 text-white">
        Log in
      </button>
    </div>
  );
}

export default Bar;

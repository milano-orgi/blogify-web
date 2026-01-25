import React from "react";
import { Link } from "react-router-dom";

function Bar() {
  return (
    <div className="container flex flex-col gap-2.5 pt-[20px] md:hidden">
      <div className="flex flex-col gap-2.5">
        <Link to="/">Home</Link>
        <Link to="/postspage">Posts</Link>
      </div>
      <Link to={"/login"}>
        <button className="w-full rounded-2xl bg-blue-600 py-1 text-white">
          Log in
        </button>
      </Link>
    </div>
  );
}

export default Bar;

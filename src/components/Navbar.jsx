import React from "react";
import Logo from "../assets/img/logo.svg";
import Bar from "./Bar.jsx";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="fixed top-0 right-0 left-0 bg-white/70 pb-[18px] backdrop-blur-md">
      <nav className="container flex items-center justify-between pt-[18px]">
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>

        <div className="hidden items-center gap-[32px] md:flex">
          <Link to="/">Home</Link>
          <Link to="/postspage">Posts</Link>
          <Link to={"/login"}>
            <button className="h-9 w-16 rounded-[12px] bg-[#4346EF] text-white">
              Login
            </button>
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <button onClick={() => setOpen(!open)}>
            <i className="fa-solid fa-bars cursor-pointer text-2xl"></i>
          </button>
        </div>
      </nav>
      <div className={open ? "block" : "hidden"}>
        <Bar />
      </div>
    </div>
  );
}

export default Navbar;

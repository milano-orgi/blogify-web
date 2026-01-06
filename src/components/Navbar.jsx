import React from "react";
import Logo from "../assets/img/logo.svg";
function Navbar() {
  return (
    <div>
      <nav className="container flex justify-between pt-[18px]  ">
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>
        <div className="navbar flex gap-[32px] items-center">
          <a href="">Home</a>
          <a href="">Posts</a>
          <button className="w-16 h-9  text-white  bg-[#4346EF] rounded-[12px] cursor-pointer">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

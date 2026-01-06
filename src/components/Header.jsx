import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero.jsx";

function Header() {
  return (
    <div>
      <Navbar />
      <div className="mt-[14px]"></div>
      <Hero />
    </div>
  );
}

export default Header;

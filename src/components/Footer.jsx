import React from "react";
import Logo from "../assets/img/logo.svg";
import Twiter from "../assets/img/twiter.svg";
import Githup from "../assets/img/githup.svg";
import In from "../assets/img/in.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container">
      <div className="flex flex-wrap justify-between gap-[20px]">
        <div>
          <img src={Logo} alt="logo" />
          <p className="mt-[16px] max-w-[339px] text-[10px] text-[#6B7280] md:text-[12px] lg:text-[14px]">
            Create, read, and inspire. Discover amazing stories written by
            talented creators from around the world.
          </p>
        </div>
        <div>
          <h1 className="text-[18px] font-semibold md:text-[20px] lg:text-[24px]">
            Quick Links
          </h1>
          <div className="mt-[18px] flex flex-col gap-[9.5px] text-[#6B7280]">
            <Link to={"/"}>Home</Link>
            <Link to={"/postspage"}>Post</Link>
            <a href="/login">Login</a>
          </div>
        </div>
        <div>
          <h1 className="text-[18px] font-semibold md:text-[20px] lg:text-[24px]">
            Connect
          </h1>
          <div className="mt-[18px] flex">
            <a href="#">
              <img src={Twiter} alt="" />
            </a>
            <a href="#">
              <img src={Githup} alt="" />
            </a>
            <a href="#">
              <img src={In} alt="" />
            </a>
          </div>
        </div>
      </div>
      <hr className="mt-[32px] mb-[32px] border-t-2 border-[#E5E7EB]" />
      <div className="mb-[20px] flex justify-center">
        <p className="text-[10px] text-[#6B7280] md:text-[12px] lg:text-[14px]">
          © 2025 Blogify. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;

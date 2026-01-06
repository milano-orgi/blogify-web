import React from "react";
import Logo from "../assets/img/logo.svg";
import Twiter from "../assets/img/twiter.svg";
import Githup from "../assets/img/githup.svg";
import In from "../assets/img/in.svg";

function Footer() {
  return (
    <div className="container">
      <div className="flex justify-between flex-wrap gap-[20px]">
        <div>
          <img src={Logo} alt="logo" />
          <p className=" mt-[16px] text-[10px] md:text-[12px] lg:text-[14px] max-w-[339px] text-[#6B7280] ">
            Create, read, and inspire. Discover amazing stories written by
            talented creators from around the world.
          </p>
        </div>
        <div>
          <h1 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold">
            Quick Links
          </h1>
          <div className="mt-[18px] flex flex-col gap-[9.5px] text-[#6B7280]">
            <a href="#">Home</a>
            <a href="#">Post</a>
            <a href="#">Login</a>
          </div>
        </div>
        <div>
          <h1 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold">
            Connect
          </h1>
          <div className="mt-[18px] flex ">
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
        <p className="text-[#6B7280] text-[10px] md:text-[12px] lg:text-[14px] ">
          © 2025 Blogify. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;

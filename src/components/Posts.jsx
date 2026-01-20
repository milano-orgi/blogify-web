import React from "react";
import { useEffect, useState } from "react";
// img
import Data from "../assets/img/data.svg";
// icons
import { CiSearch } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { ImTab } from "react-icons/im";
let Base = import.meta.env.VITE_BASE_URL;

function Posts() {
  let [get, setPost] = useState([]);
  let [searchvalue, setSearchvalue] = useState("");
  useEffect(() => {
    async function getPost() {
      try {
        let res = await fetch(`${Base}/api/v1/articles/`);
        if (!res.ok) {
          throw new Error("Apida xatolik");
        }
        let data = await res.json();
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    }
    getPost();
  }, []);

  let filter = get.filter((item) => {
    return item.content
      .toLowerCase()
      .includes(searchvalue.trim().toLowerCase());
  });

  return (
    <>
      <div className="flex justify-center bg-[#F5F1FE] py-[96px]">
        <div className="container flex flex-col items-center justify-center text-center">
          <h1 className="text-[60px] font-bold text-[#0F1729]">
            Explore Our Posts
          </h1>
          <p className="text-[20px] text-[#6B7280]">
            Discover amazing content from talented writers across various topics
          </p>
          <div className="mt-[32px] flex w-full max-w-[576px] items-center gap-[5px] rounded-[10px] border-[1px] border-[#E5E7EB] bg-white px-[13px] py-[15px]">
            <CiSearch className="text-xl text-[#d6c4ff] opacity-50" />
            <input
              onInput={(e) => {
                setSearchvalue(e.target.value);
              }}
              className="w-full outline-0"
              type="search"
              placeholder="Search posts..."
            />
          </div>
        </div>
      </div>

      <div className="container flex flex-wrap justify-between justify-center gap-5">
        {filter.map((item) => {
          return (
            <div
              key={item.id}
              className="mt-[32px] mb-[64px] w-full max-w-[384px] overflow-hidden rounded-[12px] border-[1px] border-[#E5E7EB]"
            >
              <div>
                <button className="absolute mt-[19px] ml-[16px] rounded-[99px] bg-[#4346EF] px-[10px] py-[2px] text-white hover:transform-[500]">
                  {item.category.name}
                </button>
                <img src={item.image} alt="" />
              </div>
              <div className="pt-[24px] pb-[24px] pl-[24px]">
                <p className="items-cennp,ter flex gap-[8px] text-[#6B7280]">
                  <img src={Data} alt="" />
                  {item.created_at.slice(0, 10)}
                </p>
                <h2 className="mt-[12px] mb-[8px] text-[20px] font-semibold text-[#0F1729]">
                  {item.title}
                </h2>
                <p className="mb-[16px] text-[14px] text-[#6B7280]">
                  {item.content}
                </p>
                <a className="content-middle flex items-center gap-1" href="#">
                  Learn more <FaArrowRightLong />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Posts;

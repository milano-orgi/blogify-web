import React from "react";
import Data from "../assets/img/data.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { ImTab } from "react-icons/im";
import { Link } from "react-router-dom";

function PostCard({ posts }) {
  console.log(posts);

  return (
    <>
      {posts.map((item) => (
        <div
          key={item.id}
          className="mt-[32px] mb-[64px] w-full max-w-[384px] overflow-hidden rounded-[12px] border-[1px] border-[#E5E7EB]"
        >
          <div>
            <button className="absolute mt-[19px] ml-[16px] rounded-[99px] bg-[#4346EF] px-[10px] py-[2px] text-white hover:transform-[500]">
              {item.category.name}
            </button>
            <img className="" src={item.image} alt="" />
          </div>
          <div className="pt-[24px] pb-[24px] pl-[24px]">
            <p className="items-cennp,ter flex gap-[8px] text-[#6B7280]">
              <img src={Data} alt="" />
              {item.created_at.slice(0, 10)}
            </p>
            <h2 className="mt-[12px] mb-[8px] text-[20px] font-semibold text-[#0F1729]">
              {item.title}
            </h2>
            <p className="mb-[16px] line-clamp-4 text-[14px] text-[#6B7280]">
              {item.content}
            </p>
            <Link
              className="content-middle flex items-center gap-1"
              to={`/postDetailPage/${item.id}`}
            >
              Learn more <FaArrowRightLong />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default PostCard;

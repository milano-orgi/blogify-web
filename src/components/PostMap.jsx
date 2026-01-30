import React from "react";
import {} from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CreatePostsContext } from "../context/PostsContext";

import Data from "../assets/img/data.svg";

function PostMap() {
  let { post, setPost } = useContext(CreatePostsContext);

  return (
    <div className="container flex flex-wrap justify-between justify-center gap-5">
      {post.slice(0, 3).map((item) => (
        <div
          key={item.id}
          className="w-full max-w-[384px] overflow-hidden rounded-[12px] border-[1px] border-[#E5E7EB]"
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
            <Link
              className="content-middle flex items-center gap-1"
              to={`/postDetailPage/${item.id}`}
            >
              Learn more <FaArrowRightLong />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostMap;

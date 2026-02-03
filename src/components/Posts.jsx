import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CreatePostsContext } from "../context/PostsContext";

// img
import Data from "../assets/img/data.svg";
// icons
import { CiSearch } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { ImTab } from "react-icons/im";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

function Posts() {
  let [search, setSearch] = useState("");
  let { post, setPost } = useContext(CreatePostsContext);

  let filter = post.filter((item) => {
    return item.content.toLowerCase().includes(search.trim().toLowerCase());
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
                setSearch(e.target.value);
              }}
              className="w-full outline-0"
              type="search"
              placeholder="Search posts..."
            />
          </div>
        </div>
      </div>

      <div className="container flex flex-wrap justify-between justify-center gap-5">
        <PostCard posts={filter} />
      </div>
    </>
  );
}

export default Posts;

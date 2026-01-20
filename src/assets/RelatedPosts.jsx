import React from "react";
import { useEffect, useState } from "react";
let BASE = import.meta.env.VITE_BASE_URL;
import { Link } from "react-router-dom";
import Data from "../assets/img/data.svg";
import { FaArrowRightLong } from "react-icons/fa6";

function RelatedPosts({ id }) {
  let [post, setPost] = useState([]);
  useEffect(() => {
    async function getAllPost() {
      try {
        let res = await fetch(`${BASE}/api/v1/articles/`);
        if (!res.ok) {
          throw new Error(`Relatedda post muammi`);
        }
        let data = await res.json();
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllPost();
  });
  return (
    <div className="mt-[128px] mb-[112px] flex flex-wrap justify-center gap-[32px]">
      {post.slice(id, id + 2).map((item) => (
        <div
          key={item.id}
          className="max-w-[526px] overflow-hidden rounded-[12px] border-[1px] border-[#E5E7EB]"
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

export default RelatedPosts;

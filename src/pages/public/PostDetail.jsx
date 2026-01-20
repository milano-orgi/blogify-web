import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
let BASE = import.meta.env.VITE_BASE_URL;

// img
import Profile from "../../assets/img/profile.svg";
import Data from "../../assets/img/calendar.svg";
import RelatedPosts from "../../assets/RelatedPosts";

function PostDetalist() {
  let { id } = useParams();
  let [post, setPost] = useState([]);

  useEffect(() => {
    async function getPostid() {
      try {
        let res = await fetch(`${BASE}/api/v1/articles/${id}`);
        if (!res.ok) {
          throw new Error("Api da xaotilik detalil page");
        }
        let data = await res.json();
        console.log(data);
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    }
    getPostid();
  }, [id]);

  return (
    <section>
      <div className="container">
        <Link
          className="flex items-center gap-[8px] px-[24px] py-[12px]"
          to={`/postspage`}
        >
          <FaArrowLeftLong />
          <span>Back to Posts</span>
        </Link>
        <div className="mx-auto w-full max-w-[832px]">
          <p className="mb-[16px] w-fit rounded-2xl bg-[#4346EF] px-[10px] py-[2px] text-[12px] text-white">
            {post?.category?.name}
          </p>
          <h1 className="text-[#0F1729 mb-[16px] w-full max-w-[832px] text-[36px] font-bold md:text-[48px] lg:text-[60px]">
            {post.title}
          </h1>
          <div className="mb-[32px] flex items-center gap-[16px]">
            <div className="flex items-center gap-[8px]">
              <img src={Profile} alt="" />
              <span className="text-[14px leading-[20px] text-[#6B7280]">
                {post?.author?.name}
              </span>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src={Data} alt="" />
              <span className="text-[14px] leading-[20px] text-[#6B7280]">
                {post?.created_at?.slice(0, 10)}
              </span>
            </div>
          </div>
          <div>
            <img className="mb-[32px] rounded-b-2xl" src={post.image} alt="" />
            <p className="text-[16px]">
              {post.content} Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Consequatur ipsum fugit doloremque odit blanditiis alias
              deserunt cupiditate, reiciendis culpa rem illo ratione voluptate
              sapiente ex laborum assumenda corporis sed at veritatis. Qui nemo
              laudantium consectetur quidem adipisci molestias doloribus
              inventore. Nesciunt sint voluptatum alias laudantium facilis iusto
              aut porro, omnis eligendi reprehenderit dolorem voluptate? Sint,
              unde accusamus? Repellat distinctio reprehenderit esse quasi nam
              quisquam unde aliquid voluptas voluptatem dolore quod et officia,
              aspernatur delectus. Quia veniam unde dolorum officiis ipsam
              voluptatibus praesentium voluptatem adipisci. Asperiores,
              quibusdam eligendi ipsam praesentium animi necessitatibus vel
              omnis porro ullam quaerat dolorum ducimus cum, aperiam nesciunt
              consectetur harum in amet ab minus perspiciatis quam tempora
              molestias! Non sapiente dolorem aut, odio quis a expedita.
              Repellendus illum vitae accusamus dolor a. Corrupti, possimus?
              Libero blanditiis aperiam temporibus nostrum at voluptatibus nihil
              illo vero, vel in tenetur enim amet quod voluptas laboriosam aut
              dicta, nulla quaerat eaque consectetur? Nihil praesentium
              dignissimos impedit quas laboriosam nemo! Labore quasi illo
              voluptas culpa libero beatae sapiente? Nam iure consectetur
              consequatur accusantium sequi reprehenderit rerum quis quas soluta
              voluptates? Amet, error exercitationem quasi quaerat vero enim
              aspernatur, rem explicabo maxime provident porro fuga libero culpa
              ea atque obcaecati dolorum quisquam. Minima?
            </p>
          </div>
        </div>
        <RelatedPosts id={id} />
      </div>
    </section>
  );
}

export default PostDetalist;

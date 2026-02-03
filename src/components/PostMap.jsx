import React from "react";
import {} from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CreatePostsContext } from "../context/PostsContext";

import Data from "../assets/img/data.svg";
import PostCard from "./PostCard";

function PostMap() {
  let { post, setPost } = useContext(CreatePostsContext);

  return (
    <div className="container flex flex-wrap justify-between justify-center gap-5">
      <PostCard posts={post.slice(0, 3)} />
    </div>
  );
}

export default PostMap;

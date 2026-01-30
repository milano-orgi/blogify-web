import { createContext, useState, useEffect } from "react";
let Base = import.meta.env.VITE_BASE_URL;

export let CreatePostsContext = createContext();
function PostsContext({ children }) {
  let [post, setPost] = useState([]);
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
  return (
    <CreatePostsContext.Provider value={{ post, setPost }}>
      {children}
    </CreatePostsContext.Provider>
  );
}
export default PostsContext;

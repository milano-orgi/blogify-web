import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PostsContext from "./context/PostsContext.jsx";

createRoot(document.getElementById("root")).render(
  <PostsContext>
    <App />
  </PostsContext>,
);

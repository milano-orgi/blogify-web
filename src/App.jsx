import React from "react";
import HomePage from "./pages/public/HomePage.jsx";
import PostsPage from "./pages/public/PostsPage.jsx";
import PostDetail from "./pages/public/PostDetail.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout.jsx";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/postspage",
          element: <PostsPage />,
        },
        {
          path: "/postDetalilPage",
          element: <PostDetail />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

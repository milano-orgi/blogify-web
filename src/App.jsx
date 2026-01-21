import React from "react";
import HomePage from "./pages/public/HomePage.jsx";
import PostsPage from "./pages/public/PostsPage.jsx";
import PostDetail from "./pages/public/PostDetail.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";

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
          path: "/postDetailPage/:id",
          element: <PostDetail />,
        },
      ],
    },
    {
      path: "/login",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <LoginPage />,
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

import React from "react";
import HomePage from "./pages/public/HomePage.jsx";
import PostsPage from "./pages/public/PostsPage.jsx";
import PostDetail from "./pages/public/PostDetail.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import CreatePosts from "./pages/admin/CreatePosts.jsx";
import AdminPost from "./pages/admin/AdminPost.jsx";

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
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "posts",
          element: <AdminPost />,
        },
        {
          path: "createpost",
          element: <CreatePosts />,
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

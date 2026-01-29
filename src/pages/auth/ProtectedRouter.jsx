import { Navigate } from "react-router-dom";

function ProtectedRouter({ children }) {
  let token = localStorage.getItem("token");
  console.log(token);
  if (!token) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return children;
}

export default ProtectedRouter;

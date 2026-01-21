import { Outlet } from "react-router-dom";
import LoginLeft from "../components/LoginLeft";
function AuthLayout() {
  return (
    <section className="flex h-screen items-center justify-center align-middle">
      <div className="h-screen lg:w-[50%]">
        <div className="container">
          <Outlet />
        </div>{" "}
      </div>
      <div className="hidden h-screen w-[50%] bg-[rgb(243,241,253)] lg:block">
        <div className="container flex h-[100vh] items-center justify-center">
          <LoginLeft />
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;

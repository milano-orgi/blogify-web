import React from "react";
import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { useRef } from "react";
let BASE = import.meta.env.VITE_BASE_URL;
// icon
import { FaArrowLeft } from "react-icons/fa6";

function LoginPage() {
  let emailRef = useRef("");
  let passwordRef = useRef("");

  async function handleSumbit(e) {
    e.preventDefault();
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    try {
      let res = await fetch(`${BASE}/auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });
      if (!res.ok) {
        throw new Error("Postda xatolik bor");
      }
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="m-auto flex h-[100vh] w-fit flex-col justify-center">
      <img className="mb-[32px] w-[100px]" src={Logo} alt="" />
      <Link
        className="mb-[32px] flex items-center gap-[8px] px-[16px] py-[10px]"
        to={"/"}
      >
        <FaArrowLeft />
        <span className="text-[12px] font-medium">Back to Home</span>
      </Link>
      <div className="rounded-[12px] border-[1px] border-[#E5E7EB] px-[32px] pt-[24px] pb-[32px]">
        <h1 className="mb-[8px] text-[30px] font-bold text-[#0F1729]">
          Welcome Back
        </h1>
        <p className="mb-[24px] text-[16px] text-[#6B7280]">
          Enter your credentials to access your account
        </p>
        <div>
          <form onSubmit={handleSumbit}>
            <label>
              <span className="text-[14px] font-medium text-[#0F1729]">
                Email
              </span>
              <div className="mt-[12px] w-full max-w-[382px] rounded-[10px] border-[1px] border-[#E5E7EB] px-[13px] py-[13px]">
                <input
                  required
                  ref={emailRef}
                  className="w-full outline-0"
                  type="email"
                  placeholder="name@example.com"
                />
              </div>
            </label>
            <label className="mt-[16px] block">
              <span className="text-[14px] font-medium text-[#0F1729]">
                Password
              </span>
              <div className="mt-[12px] w-full max-w-[382px] rounded-[10px] border-[1px] border-[#E5E7EB] px-[13px] py-[13px]">
                <input
                  required
                  ref={passwordRef}
                  className="w-full outline-0"
                  type="password"
                  placeholder="*****"
                />
              </div>
            </label>
            <button className="mt-[28px] w-full rounded-[12px] bg-[#4346EF] py-[12px] text-white">
              Login
            </button>
          </form>
        </div>
        <p className="mt-[24px] flex justify-center gap-[2px] text-[14px] text-[#6B7280]">
          Don't have an account? 
          <a className="font-medium text-[#4346EF]" href="">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

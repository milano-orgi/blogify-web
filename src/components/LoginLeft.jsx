// images
import LoginImg from "../assets/img/login-img.svg";

function LoginLeft() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="" src={LoginImg} alt="" />
      <h1 className="text-[30px] font-bold">Start Your Journey</h1>
      <p className="text-[18px] text-[#6B7280]">
        Join thousands of creators sharing their stories on Blogify
      </p>
    </div>
  );
}

export default LoginLeft;

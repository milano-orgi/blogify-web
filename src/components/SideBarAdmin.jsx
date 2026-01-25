import Logo from "../assets/img/logo.svg";
import { Link, NavLink } from "react-router-dom";

// icons
import { LuLayoutDashboard } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { LuNotepadText } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";

function SideBarAdmin() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="border-b-[1px] border-b-[#E5E7EB] p-[24px]">
        <Link to={"dashboard"}>
          <img src={Logo} alt="" />
        </Link>
        <p className="mt-[4px] text-[14px] text-[#6B7280]">Admin panel</p>
      </div>
      <div className="flex grow flex-col gap-[8px] p-[16px]">
        <NavLink
          className={({ isActive }) =>
            `flex w-full items-center gap-[12px] rounded-[12px] px-[16px] py-[12px] text-[14px] font-medium ${isActive ? "bg-[#4346EF1A] text-[#4346EF]" : ""}`
          }
          to={"dashboard"}
        >
          <LuLayoutDashboard className="h-[20px] w-[20px]" /> Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex w-full items-center gap-[12px] rounded-[12px] px-[16px] py-[12px] text-[14px] font-medium ${isActive ? "bg-[#4346EF1A] text-[#4346EF]" : ""}`
          }
          to={"posts"}
        >
          <LuNotepadText className="h-[20px] w-[20px]" /> Posts
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex w-full items-center gap-[12px] rounded-[12px] px-[16px] py-[12px] text-[14px] font-medium ${isActive ? "bg-[#4346EF1A] text-[#4346EF]" : ""}`
          }
          to={"createpost"}
        >
          <FaPlus className="h-[20px] w-[20px]" /> Create Post
        </NavLink>
      </div>
      <div className="border-t-[1px] border-t-[#E5E7EB] p-[16px]">
        <NavLink
          className={({ isActive }) =>
            `flex w-full items-center gap-[12px] rounded-2xl px-[24px] py-[12px] text-[14px] font-medium text-[#0F1729] ${isActive ? "bg-[#4346EF1A] text-[#4346EF]" : ""}`
          }
          to={"/login"}
        >
          <LuLogOut to={"/login"} />
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default SideBarAdmin;

import { Outlet } from "react-router-dom";
import SideBarAdmin from "../components/SideBarAdmin";

function AdminLayout() {
  return (
    <div className="flex">
      <div className="h-screen max-w-[25%] min-w-[225px] border-r-[1px] border-r-[#E5E7EB]">
        <SideBarAdmin />
      </div>
      <div className="container mt-[30px]">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;

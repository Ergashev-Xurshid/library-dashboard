import {
  BookOpen,
  LayoutDashboard,
  Settings2,
  TrendingUpDown,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function NavbarSite() {
  return (
    <section className="bg-[#2d2721] w-[20%] fixed bottom-0 top-0 p-5">
      <div className="flex gap-5 items-center mb-[40px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[70px] h-[70px] text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
          />
        </svg>

        <h4 className="text-4xl font-medium text-white">Kutubxona</h4>
      </div>
      <nav className="p-2">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `mb-4 flex gap-2 px-4 py-3 rounded-lg cursor-pointer border-1 border-[#2d2721]  hover:border-gray-600 text-white transition-all duration-200 ${
              isActive ? "bg-[#ff7806] text-white" : ""
            }`
          }
        >
          <LayoutDashboard />
          <p className="text-[16px] font-medium">Boshqaruv paneli</p>
        </NavLink>
        <NavLink
          to={"/books"}
          className={({ isActive }) =>
            `mb-4 flex gap-2 px-4 py-3 rounded-lg cursor-pointer border-1 border-[#2d2721]  hover:border-gray-600 text-white transition-all duration-200 ${
              isActive ? "bg-[#ff7806] text-white" : ""
            }`
          }
        >
          <BookOpen />
          <p className="text-[16px] font-medium ">Kitoblar</p>
        </NavLink>
        <NavLink
          to={"bookManagement"}
          className={({ isActive }) =>
            `mb-4 flex gap-2 px-4 py-3 rounded-lg cursor-pointer border-1 border-[#2d2721]  hover:border-gray-600 text-white transition-all duration-200 ${
              isActive ? "bg-[#ff7806] text-white" : ""
            }`
          }
        >
          <Settings2 />
          <p className="text-[16px] font-medium ">Kitoblarni boshqarish</p>
        </NavLink>
        <NavLink
          to={"/sale"}
          className={({ isActive }) =>
            `mb-4 flex gap-2 px-4 py-3 rounded-lg cursor-pointer border-1 border-[#2d2721]  hover:border-gray-600 text-white transition-all duration-200 ${
              isActive ? "bg-[#ff7806] text-white" : ""
            }`
          }
        >
          <TrendingUpDown />
          <p className="text-[16px] font-medium ">Sotuvlar bo‘limi</p>
        </NavLink>
      </nav>
    </section>
  );
}

export default NavbarSite;

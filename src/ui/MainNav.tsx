import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
const links = [
  {
    label: "Home",
    to: "/dashboard",
    icon: HiOutlineHome,
  },
  {
    label: "Bookings",
    to: "/bookings",
    icon: HiOutlineCalendarDays,
  },
  {
    label: "Cabins",
    to: "/cabins",
    icon: HiOutlineHomeModern,
  },
  {
    label: "Users",
    to: "/users",
    icon: HiOutlineUsers,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: HiOutlineCog6Tooth,
  },
];

const MainNav = () => {
  const pathname = useLocation().pathname;
  return (
    <nav className="w-full">
      <ul className="flex flex-col  gap-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`${
                pathname === link.to
                  ? " bg-slate-100 font-semibold text-slate-900"
                  : " text-slate-600 hover:bg-slate-100 hover:text-slate-800 "
              }  text-md group flex items-center  gap-4 rounded-md px-4 py-2 font-medium
              transition-all`}
            >
              <link.icon
                className={`${
                  pathname === link.to
                    ? "text-blue-600 "
                    : "text-slate-400 group-hover:text-slate-800"
                }   h-5 w-5`}
              />
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;

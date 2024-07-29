import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AiOutlineTeam } from "react-icons/ai";
import { MdHome } from "react-icons/md";
import { ImHome } from "react-icons/im";

const AdminPanel = () => {
  const location = useLocation();
  return (
    <div className="flex min-h-screen">
      <nav className="w-64 bg-indigo-950 text-white">
        <div className="flex justify-center">
          <img src="./logo.png" className="space-y-2 p-4 w-28" alt="" />
        </div>

        <ul className="space-y-2 p-4">
          <li>
            <Link
              to="/admin"
              className={`block py-2 px-4 rounded hover:bg-indigo-900  ${
                location.pathname === "/admin" ? "bg-indigo-900" : ""
              }`}
            >
              <p className="flex items-center gap-4">
                <MdHome /> Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/admin/users"
              className={`block py-2 px-4 rounded hover:bg-indigo-900 ${
                location.pathname === "/admin/users" ? "bg-indigo-900" : ""
              }`}
            >
              <p className="flex items-center gap-4">
                <AiOutlineTeam /> Users
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/properties"
              className={`block py-2 px-4 rounded hover:bg-indigo-900 ${
                location.pathname === "/admin/properties" ? "bg-indigo-900" : ""
              }`}
            >
              <p className="flex items-center gap-4">
                <ImHome />
                Properties
              </p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;

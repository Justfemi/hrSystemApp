import {
  BellDot,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  Menu,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex w-full flex-col">
      <nav className="flex w-full h-10 bg-gray-900 justify-between items-center px-8 text-[#ffffff]">
        <div className="flex space-x-4">
          <Menu />
          <BellDot />
        </div>
        <Link to="/" className="flex">
          Sign Out <LogOut className="ml-4" />
        </Link>
      </nav>
      <div className="flex px-8 justify-between bg-[#ffffff] py-2">
        <div className="flex space-x-2">
          <LayoutDashboard />
          <p>Dashboard</p>
        </div>
        <div className="flex space-x-2 ">
          <h2>Home</h2>
          <ChevronRight />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

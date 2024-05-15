import {
  BellDot,
  ChevronRight,
  CircleUserRound,
  LayoutDashboard,
  LogOut,
  Menu,
  Search,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserButtonOpen, setIsUserButtonOpen] = useState(false);

  const toggleSearchButton = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleUserButton = () => {
    setIsUserButtonOpen(!isUserButtonOpen);
  };
  return (
    <div className="py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
      <button type="button" className="text-lg text-gray-600 sidebar-toggle">
        <Menu />
      </button>
      <ul className="flex items-center text-sm ml-4">
        <li className="mr-2">
          <Link
            to="/"
            className="text-gray-400 hover:text-gray-600 font-medium"
          >
            Dashboard
          </Link>
        </li>
        <li className="text-gray-600 mr-2 font-medium">/</li>
        <li className="text-gray-600 mr-2 font-medium">Analytics</li>
      </ul>
      <ul className="ml-auto flex items-center">
        <li className="mr-1 dropdown">
          <button
            onClick={toggleSearchButton}
            type="button"
            className=" text-gray-400 w-8 h-8 rounded flex items-center justify-center relative hover:bg-gray-50 hover:text-gray-600"
          >
            {!isSearchOpen ? <Search /> : <X />}
            {/* <i className="ri-search-line"></i> */}
          </button>
          {isSearchOpen && (
            <div className="shadow-md shadow-black/5 z-30 max-w-xs w-full absolute top-10 right-10 bg-white rounded-md border border-gray-100">
              <form action="" className="p-4 border-b border-b-gray-100">
                <div className="relative w-full flex space-x-1 items-center bg-gray-50 border rounded-md focus:border-blue-500">
                  <Search className="text-gray-400 ml-2" />
                  <input
                    type="text"
                    className="py-2 pr-4 pl-2 bg-gray-50 w-full outline-none  text-sm "
                    placeholder="Search..."
                  />
                  {/* <i className="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"></i> */}
                </div>
              </form>
            </div>
          )}
        </li>

        <li className=" ml-3 relative">
          <button
            onClick={toggleUserButton}
            type="button"
            className=" flex items-center text-gray-400"
          >
            {/* <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded block object-cover align-middle"> */}
            <CircleUserRound />
          </button>
          {isUserButtonOpen && (
            <ul className="shadow-md shadow-black/5 z-30 absolute top-6 right-3  py-1.5 rounded-md bg-white border border-gray-100 w-[140px]">
              <li>
                <Link
                  to="/"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                >
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

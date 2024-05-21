import { CircleUserRound, LogOut, Menu, Search, X } from "lucide-react";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div className="py-2 px-6  flex w-full items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
      <div className="flex justify-between w-full items-center">
        <button
          type="button"
          className="text-lg flex items-center space-x-2 text-gray-600 "
        >
          <Menu />
          <Link
            to="/admin"
            className="text-gray-400 hover:text-gray-600 font-medium"
          >
            Dashboard
          </Link>
        </button>
        <button
          onClick={logout}
          className="flex text-gray-600 text-[16px] items-center font-semibold space-x-2"
        >
          <span>Log out</span> <LogOut className="h-6" />
        </button>
      </div>
      <ul className="flex items-center justify-between text-sm ml-4">
        <li className="mr-2"></li>
      </ul>
      {/* <ul className="ml-auto flex items-center">
        <li className="mr-1 dropdown">
          <button
            onClick={toggleSearchButton}
            type="button"
            className=" text-gray-400 w-8 h-8 rounded flex items-center justify-center relative hover:bg-gray-50 hover:text-gray-600"
          >
            {!isSearchOpen ? <Search /> : <X />}
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
      </ul> */}
    </div>
  );
};

export default Navbar;

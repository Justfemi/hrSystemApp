import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext"; // Default import
import { LogOut, Menu } from "lucide-react";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Navigate to login page
  };
  return (
    <div className="py-2 px-6 bg-gray-100 flex w-full items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
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
          onClick={handleLogout}
          className="flex text-gray-600 text-[16px] items-center font-semibold space-x-2"
        >
          <span>Log out</span> <LogOut className="h-6" />
        </button>
      </div>
      <ul className="flex items-center justify-between text-sm ml-4">
        <li className="mr-2"></li>
      </ul>
    </div>
  );
};

export default Navbar;

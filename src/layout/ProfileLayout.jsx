import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { LogOut } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";

const ProfileLayout = ({ children }) => {
  const { fetchUser, logout } = useContext(AuthContext);
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await fetchUser(userId);
        if (userData) {
          setUser(userData);
        } else {
          console.error("Unexpected response format:", userData);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    getUser();
  }, [fetchUser, userId]);

  if (!user) {
    return <Loader />;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      {user.role === "STAFF" && (
        <header className="w-full bg-gray-900 flex justify-between items-center text-white p-4 text-center">
          <h1 className="text-2xl">
            Welcome, <span className="text-gray-500">{user.username}</span>
          </h1>

          <Link to="/attendance-form">Add Attendance</Link>
          <Link to="/leave-request">Request Leave</Link>
          <button
            onClick={handleLogout}
            className="flex space-x-1 hover:text-gray-500"
          >
            <span>Log out</span> <LogOut className="h-6" />
          </button>
        </header>
      )}
      <div>{children}</div>
    </>
  );
};

export default ProfileLayout;

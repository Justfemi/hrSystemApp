import {
  ChevronRight,
  ChevronUp,
  CircleGauge,
  Handshake,
  NotebookIcon,
  Settings,
  Users2,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isAttendanceDropdownOpen, setIsAttendanceDropdownOpen] =
    useState(false);
  const [isUsersDropdownOpen, setIsUsersDropdownOpen] = useState(false);
  const [isDepartmentDropdownOpen, setIsDepartmentDropdownOpen] =
    useState(false);

  const toggleAttendanceDropdown = () => {
    setIsAttendanceDropdownOpen(!isAttendanceDropdownOpen);
  };

  const toggleUsersDropdown = () => {
    setIsUsersDropdownOpen(!isUsersDropdownOpen);
  };
  const toggleDepartmentDropdown = () => {
    setIsDepartmentDropdownOpen(!isDepartmentDropdownOpen);
  };
  return (
    <>
      <aside className="fixed left-0 top-0 w-64 h-full bg-gray-900 p-4 z-50 sidebar-menu transition-transform">
        <Link
          to="/admin"
          className="flex items-center pb-4 border-b border-b-gray-800"
        >
          <span className="text-lg font-bold text-white ml-3">HR System</span>
        </Link>
        <hr />
        <ul className="mt-4">
          <li className="mb-1  active">
            <Link
              to="/admin"
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md -[.active]:bg-gray-800 -[.active]:text-white -[.selected]:bg-gray-950 -[.selected]:text-gray-100"
            >
              <CircleGauge className="h-4" />
              <span className="text-sm">Dashboard</span>
            </Link>
          </li>
          <li className="mb-1 ">
            <Link
              to="#"
              className="flex items-center justify-between py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md "
              onClick={toggleDepartmentDropdown}
            >
              <div className="flex space-x-1 items-center ">
                <Handshake className="h-4" />
                <span className="text-sm">Department</span>
              </div>
              {!isDepartmentDropdownOpen ? (
                <ChevronRight className="h-4" />
              ) : (
                <ChevronUp className="h-4" />
              )}
            </Link>
            {isDepartmentDropdownOpen && (
              <ul className="pl-7 mt-2 ">
                <li className="mb-4">
                  <Link
                    to="/add-department"
                    className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                  >
                    Add department
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/departments"
                    className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                  >
                    Departments
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-1 ">
            <Link
              to="/users"
              className="flex justify-between items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md "
              onClick={toggleUsersDropdown}
            >
              <div className="flex space-x-1 items-center">
                <Users2 className="h-4" />
                <span className="text-sm">Employees</span>
              </div>

              {!isUsersDropdownOpen ? (
                <ChevronRight className="h-4" />
              ) : (
                <ChevronUp className="h-4" />
              )}
            </Link>
            {/* {isUsersDropdownOpen && (
              <ul className="pl-7 mt-2 ">
                <li className="mb-4">
                  <Link
                    to="/users"
                    className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                  >
                    Active Employees
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/users"
                    className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                  >
                    On Leave
                  </Link>
                </li>
              </ul>
            )} */}
          </li>
          <Link
            to="#"
            className="flex items-center justify-between py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md "
            onClick={toggleAttendanceDropdown}
          >
            <div className="flex space-x-1 items-center ">
              <NotebookIcon className="h-4" />
              <span className="text-sm">Attendance</span>
            </div>
            {!isAttendanceDropdownOpen ? (
              <ChevronRight className="h-4" />
            ) : (
              <ChevronUp className="h-4" />
            )}
          </Link>
          {isAttendanceDropdownOpen && (
            <ul className="pl-7 mt-2 ">
              <li className="mb-4">
                <Link
                  to="/attendance-list"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                >
                  Attendance List
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="#"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                >
                  Attendance Report
                </Link>
              </li>
            </ul>
          )}

          <li className="mb-1 ">
            <Link
              to="/leave-requests"
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md "
            >
              <Settings className="h-4" />
              <span className="text-sm">Leave Management</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;

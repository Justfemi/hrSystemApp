import {
  Building,
  ChevronRight,
  ChevronUp,
  CircleGauge,
  ClipboardPen,
  FolderKanban,
  HandCoins,
  Handshake,
  LayoutDashboard,
  List,
  NotebookIcon,
  NotebookPen,
  Power,
  Settings,
  User,
  UserX,
  Users,
  Users2,
  Zap,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isAttendanceDropdownOpen, setIsAttendanceDropdownOpen] =
    useState(false);
  const [isUsersDropdownOpen, setIsUsersDropdownOpen] = useState(false);
  const [isOrganisationDropdownOpen, setIsOrganisationDropdownOpen] =
    useState(false);

  const toggleAttendanceDropdown = () => {
    setIsAttendanceDropdownOpen(!isAttendanceDropdownOpen);
  };

  const toggleUsersDropdown = () => {
    setIsUsersDropdownOpen(!isUsersDropdownOpen);
  };
  const toggleOrganisationDropdown = () => {
    setIsOrganisationDropdownOpen(!isOrganisationDropdownOpen);
  };
  return (
    <>
      <aside className="fixed left-0 top-0 w-64 h-full bg-gray-900 p-4 z-50 sidebar-menu transition-transform">
        {/* <div className="flex flex-col items-center space-y-2 py-4">
          <h2>Human Resource</h2>
          <User className="h-12" />
          <p>Thorn Anderson</p>
          <div className="flex">
            <Settings className="h-4" />
            <Power className="h-4" />
          </div>
        </div> */}
        <Link
          to="/"
          className="flex items-center pb-4 border-b border-b-gray-800"
        >
          {/* <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover"> */}
          <span className="text-lg font-bold text-white ml-3">Logo</span>
        </Link>
        <hr />
        <ul className="mt-4">
          <li className="mb-1  active">
            <Link
              to="/"
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md -[.active]:bg-gray-800 -[.active]:text-white -[.selected]:bg-gray-950 -[.selected]:text-gray-100"
            >
              {/* <i className="ri-home-2-line mr-3 text-lg"></i>
               */}
              <CircleGauge className="h-4" />
              <span className="text-sm">Dashboard</span>
            </Link>
          </li>
          <li className="mb-1 ">
            <Link
              to="/"
              className="flex items-center justify-between py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md "
              onClick={toggleOrganisationDropdown}
            >
              <div className="flex space-x-1 items-center ">
                <Handshake className="h-4" />
                <span className="text-sm">Organisation</span>
              </div>
              {!isOrganisationDropdownOpen ? (
                <ChevronRight className="h-4" />
              ) : (
                <ChevronUp className="h-4" />
              )}
            </Link>
            {isOrganisationDropdownOpen && (
              <ul className="pl-7 mt-2 ">
                <li className="mb-4">
                  <Link
                    to="/department"
                    className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                  >
                    Department
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/designation"
                    className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                  >
                    Designation
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-1 ">
            <Link
              to="/"
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
            {isUsersDropdownOpen && (
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
            )}
          </li>
          <Link
            to="/"
            className="flex items-center justify-between py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md "
            onClick={toggleAttendanceDropdown}
          >
            {/* <i className="ri-instance-line mr-3 text-lg"></i> */}
            <div className="flex space-x-1 items-center ">
              <NotebookIcon className="h-4" />
              <span className="text-sm">Attendance</span>
            </div>
            {/* <i className="ri-arrow-right-s-line ml-auto -[.selected]:rotate-90"></i> */}
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
                  to="/"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                >
                  Attendance List
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                >
                  Add Attendance
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                >
                  Attendance Report
                </Link>
              </li>
            </ul>
          )}

          <li className="mb-1 ">
            <Link
              to="/"
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md "
            >
              {/* <i className="ri-settings-2-line mr-3 text-lg"></i> */}
              <Settings className="h-4" />
              <span className="text-sm">Settings</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;

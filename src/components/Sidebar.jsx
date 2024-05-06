import {
  Building,
  ChevronRight,
  ClipboardPen,
  FolderKanban,
  HandCoins,
  LayoutDashboard,
  NotebookPen,
  Power,
  Settings,
  User,
  UserX,
  Users,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="w-56 overflow-y-auto pb-4 flex-col gap-2 px-2 flex">
        <div className="flex flex-col items-center space-y-2 py-4">
          <h2>Human Resource</h2>
          <User className="h-12" />
          <p>Thorn Anderson</p>
          <div className="flex">
            <Settings className="h-4" />
            <Power className="h-4" />
          </div>
        </div>
        <hr />
        {/* <CircleAlertIco /> */}
        <div className="flex flex-col space-y-3">
          <Link to="/dashboard" className="flex">
            <LayoutDashboard className="mr-2" />
            <p>Dashboard</p>
          </Link>
          <Link
            to="/organisation"
            className="flex justify-between items-center"
          >
            <div className="flex">
              <Building className="mr-2" />
              <p>Organisation</p>
            </div>

            <ChevronRight />
          </Link>
          <Link
            to="/organisation"
            className="flex justify-between items-center"
          >
            <div className="flex">
              <Users className="mr-2" />
              <p>Employees</p>
            </div>

            <ChevronRight />
          </Link>
          <Link
            to="/organisation"
            className="flex justify-between items-center"
          >
            <div className="flex">
              <ClipboardPen className="mr-2" />
              <p>Attendance</p>
            </div>

            <ChevronRight />
          </Link>
          <Link
            to="/organisation"
            className="flex justify-between items-center"
          >
            <div className="flex">
              <UserX className="mr-2" />
              <p>Attendance</p>
            </div>

            <ChevronRight />
          </Link>
          <Link
            to="/organisation"
            className="flex justify-between items-center"
          >
            <div className="flex">
              <Building className="mr-2" />
              <p>Leave</p>
            </div>

            <ChevronRight />
          </Link>
          <Link
            to="/organisation"
            className="flex justify-between items-center"
          >
            <div className="flex">
              <FolderKanban className="mr-2" />
              <p>Project</p>
            </div>

            <ChevronRight />
          </Link>
          <Link
            to="/organisation"
            className="flex justify-between items-center"
          >
            <div className="flex">
              <HandCoins className="mr-2" />
              <p>Payroll</p>
            </div>

            <ChevronRight />
          </Link>
          <Link
            to="/organisation"
            className="flex justify-between items-center"
          >
            <div className="flex">
              <NotebookPen className="mr-2" />
              <p>Notice</p>
            </div>

            <ChevronRight />
          </Link>
        </div>

        {/* <Link to="/organisation" className="flex justify-between items-center">
          <div className="flex">
            <Building className="mr-2" />
            <p>Organisation</p>
          </div>

          <ChevronRight />
        </Link>
        <Link to="/organisation" className="flex justify-between items-center">
          <div className="flex">
            <Building className="mr-2" />
            <p>Organisation</p>
          </div>

          <ChevronRight />
        </Link>
        <Link to="/organisation" className="flex justify-between items-center">
          <div className="flex">
            <Building className="mr-2" />
            <p>Organisation</p>
          </div>

          <ChevronRight />
        </Link> */}
      </aside>
    </>
  );
};

export default Sidebar;

import { FilePenLine, Menu, Plus, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const employees = [
    {
      id: 1,
      name: "John Doe",
      pin: "1234",
      email: "john@example.com",
      contact: "123-456-7890",
      userType: "Regular",
    },
    {
      id: 2,
      name: "Jane Smith",
      pin: "5678",
      email: "jane@example.com",
      contact: "987-654-3210",
      userType: "Admin",
    },
    {
      id: 3,
      name: "Michael Johnson",
      pin: "2468",
      email: "michael@example.com",
      contact: "456-789-0123",
      userType: "Regular",
    },
    {
      id: 4,
      name: "Emily Davis",
      pin: "1357",
      email: "emily@example.com",
      contact: "789-012-3456",
      userType: "Regular",
    },
    {
      id: 5,
      name: "William Brown",
      pin: "3692",
      email: "william@example.com",
      contact: "321-654-9870",
      userType: "Admin",
    },
    {
      id: 6,
      name: "Olivia Wilson",
      pin: "8024",
      email: "olivia@example.com",
      contact: "654-987-3210",
      userType: "Regular",
    },
    {
      id: 7,
      name: "James Lee",
      pin: "5791",
      email: "james@example.com",
      contact: "987-321-6540",
      userType: "Regular",
    },
    {
      id: 8,
      name: "Sophia Martinez",
      pin: "4682",
      email: "sophia@example.com",
      contact: "321-789-6540",
      userType: "Admin",
    },
    {
      id: 9,
      name: "Daniel Taylor",
      pin: "1579",
      email: "daniel@example.com",
      contact: "654-012-9873",
      userType: "Regular",
    },
    {
      id: 10,
      name: "Isabella Thomas",
      pin: "2468",
      email: "isabella@example.com",
      contact: "012-345-6789",
      userType: "Admin",
    },
  ];
  return (
    <div className="p-6">
      <div className="flex space-x-2 items-center pb-4">
        <Link
          to="/add_new_user"
          className="flex items-center py-2 px-4 space-x-1 bg-blue-500 text-[#ffffff]"
        >
          <Plus /> <span>Add Employee</span>
        </Link>
        <button className="flex items-center py-2 px-4 space-x-1 bg-purple-500 text-[#ffffff]">
          <Menu /> <span> Leave</span>
        </button>
      </div>
      <div className="overflow-x-auto   ">
        <div className=" flex items-center justify-between  text-gray-400 py-2  bg-gray-50">
          <div className="flex space-x-1 mb-2 items-center font-medium">
            <User /> <h4>Employee List</h4>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 border-b outline-none pt-2 "
              name=""
              id=""
            />
          </div>
        </div>
        <hr />
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="text-[12px] uppercase tracking-wide 50 text-left rounded-tl-md rounded-bl-md">
                Employee Name
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                PIN
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                Email
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                Contact
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                User Type
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="py-2 px-4 border border-b-gray-50">
                  <span className="text-[13px] font-medium text-gray-400">
                    {employee.name}
                  </span>
                </td>
                <td className="py-2 px-4 border border-b-gray-50">
                  <span className="text-[13px] font-medium text-gray-400">
                    {employee.pin}
                  </span>
                </td>
                <td className="py-2 px-4 border border-b-gray-50">
                  <span className="text-[13px] font-medium text-gray-400">
                    {employee.email}
                  </span>
                </td>
                <td className="py-2 px-4 border border-b-gray-50">
                  <span className="text-[13px] font-medium text-gray-400">
                    {employee.contact}
                  </span>
                </td>
                <td className="py-2 px-4 border border-b-gray-50">
                  <span className="text-[13px] font-medium text-gray-400">
                    {employee.userType}
                  </span>
                </td>
                <td className="py-2 px-4 border border-b-gray-50">
                  <Link to={`/users/${employee.id}`}>
                    <FilePenLine className="text-[13px] font-medium text-white bg-purple-800 m-2" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

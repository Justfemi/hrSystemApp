import { Delete, FilePenLine, Menu, Plus, User } from "lucide-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Users = () => {
  const { adminData, deleteUser } = useContext(AuthContext);
  const users = adminData.users;

  return (
    <div className="p-6">
      <div className=" w-[max-content] pb-4">
        <Link
          to="/add_new_user"
          className="flex items-center py-2 px-4 space-x-1 bg-gray-900 text-[#ffffff]"
        >
          <Plus /> <span>Add Employee</span>
        </Link>
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
        {users && users.length > 0 ? (
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="text-[12px] uppercase tracking-wide 50 text-left rounded-tl-md rounded-bl-md">
                  Name
                </th>

                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Email
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Contact
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  User Role
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Department
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="py-1 px-2 border-b ">
                    <span className="text-[13px] font-medium text-gray-400">
                      {user.name}
                    </span>
                  </td>
                  <td className="py-1 px-2 border-b ">
                    <span className="text-[13px] font-medium text-gray-400">
                      {user.email}
                    </span>
                  </td>
                  <td className="py-1 px-2 border-b ">
                    <span className="text-[13px] font-medium text-gray-400">
                      {user.contact}
                    </span>
                  </td>
                  <td className="py-1 px-2 border-b ">
                    <span className="text-[13px] font-medium text-gray-400">
                      {user.role}
                    </span>
                  </td>
                  <td className="py-1 px-2 border-b ">
                    <span className="text-[13px] font-medium text-gray-400">
                      {user.department}
                    </span>
                  </td>
                  <td className="py-1 px-2 border-b ">
                    <Link to={`/edit_user/${user.id}`}>
                      <FilePenLine className="text-[13px] font-medium text-white bg-purple-800 m-2" />
                    </Link>
                  </td>
                  <td className="py-1 px-2 border-b ">
                    <button>
                      <Delete
                        onClick={() => deleteUser(user.id)}
                        className="text-[13px] font-medium text-white bg-purple-800 m-2"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
};

export default Users;

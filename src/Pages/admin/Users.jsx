import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Plus, Trash2, User } from "lucide-react";

const Users = () => {
  const { fetchUsers, deleteUser } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetchUsers();
        if (response && Array.isArray(response.results)) {
          setUsers(response.results);
        } else {
          setUsers([]);
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    getUsers();
  }, [fetchUsers]);

  // Delete user
  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      // Update the local state to remove the deleted user
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      `${user.first_name} ${user.last_name}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className=" w-[max-content] pb-4">
        <Link
          to="/add-user"
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
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <hr />
        {filteredUsers && filteredUsers.length > 0 ? (
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="text-[12px] uppercase tracking-wide 50 text-left rounded-tl-md rounded-bl-md">
                  Email
                </th>

                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Name
                </th>

                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  User name
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Mobile number
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Role
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="py-1 px-2 border-b ">
                    <span className="text-[13px] font-medium text-gray-400">
                      <Link to={`/users/${user.id}`}>{user.email}</Link>
                    </span>
                  </td>
                  <td className="py-1 px-2 border-b ">
                    <span className="text-[13px] font-medium text-gray-400">
                      {user.first_name} {user.last_name}
                    </span>
                  </td>

                  <td className="py-1 px-2 border-b ">
                    <span className="text-[13px] font-medium text-gray-400">
                      {user.username}
                    </span>
                  </td>
                  <td className="py-1 px-2 border-b ">
                    <span className="text-[13px] font-medium text-gray-400">
                      {user.mobile_number}
                    </span>
                  </td>
                  <td className="py-1 px-2 border-b ">
                    <span className="text-[13px] font-medium text-gray-400">
                      {user.role}
                    </span>
                  </td>

                  <td className="py-1 px-2 border-b ">
                    <button>
                      <Trash2
                        onClick={() => handleDelete(user.id)}
                        className="text-red-400"
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

import { User } from "lucide-react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const AddNewUser = () => {
  const { addUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    id: Date.now(),

    name: "",
    email: "",
    department: "",
    role: "",
    gender: "",
    contactNumber: "",
    password: "",
    dateOfBirth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(newUser);
    navigate("/users");
  };

  const handleCancel = () => {
    navigate("/users");
  };
  return (
    <div className="max-w-[960px] mx-auto">
      <div className="flex space-x-1 mb-2 items-center n  text-gray-400  font-medium py-4">
        <User /> <h4>Add new Employee</h4>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md grid grid-cols-2 gap-2 rounded px-8 pt-6 pb-8 mb-3"
      >
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter name"
            name="name"
            value={newUser.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="department"
          >
            Department
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="department"
            type="text"
            placeholder="Employee Department"
            name="department"
            value={newUser.department}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            Role
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="role"
            name="role"
            value={newUser.role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="admin">Administrator</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="gender"
            name="gender"
            value={newUser.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contactNumber"
          >
            Contact Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contactNumber"
            type="text"
            placeholder="Contact Number"
            name="contactNumber"
            value={newUser.contactNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contactNumber"
          >
            Set Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="Set Password"
            name="password"
            value={newUser.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dateOfBirth"
          >
            Date of Birth
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dateOfBirth"
            type="date"
            placeholder="Date of Birth"
            name="dateOfBirth"
            value={newUser.dateOfBirth}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-start space-x-2">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewUser;

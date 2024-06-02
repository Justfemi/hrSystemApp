import { User } from "lucide-react";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const AddUser = () => {
  // State to manage form fields
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    mobileNumber: "",
    role: "STAFF",
    password: "",
    confirmPassword: "",
  });

  const { addUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const profileDetails = JSON.parse(localStorage.getItem("profileDetails"));
    const staffDetails = JSON.parse(localStorage.getItem("staffDetails"));

    const newUser = { ...user, ...profileDetails, ...staffDetails };

    try {
      await addUser(newUser);
      localStorage.removeItem("profileDetails");
      localStorage.removeItem("staffDetails");
      navigate("/users");
    } catch (error) {
      if (error.response) {
        console.error("Failed to add user:", error.data.response);
        alert(`Error: ${error.response.data.message}`);
      } else {
        console.log("Failed to add user:", error.message);
      }
    }
  };

  return (
    <div className="max-w-[960px] mx-auto mt-8 p-4 border rounded-lg shadow-md">
      <div className="flex space-x-1 mb-2 items-center n  text-gray-400  font-medium py-4">
        <User /> <h4>Add new Employee</h4>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md grid grid-cols-2 gap-2 rounded px-8 pt-6 pb-8 mb-3"
      >
        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block font-semibold mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
            placeholder="Enter first name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block font-semibold mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
            placeholder="Enter last name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            placeholder="Enter username"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        {/* Mobile Number */}
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block font-semibold mb-2">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={user.mobileNumber}
            onChange={handleInputChange}
            placeholder="Enter mobile number"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        {/* Role */}
        <div className="mb-4">
          <label htmlFor="role" className="block font-semibold mb-2">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={user.role}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="STAFF">STAFF</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>
        {/* password */}
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            placeholder="Enter password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        {/* confirm password */}
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block font-semibold mb-2">
            Confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        {/* Submit Button */}
        {/* <button
          type="submit"
          className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:ring "
        >
          Add User
        </button> */}

        <button
          type="button"
          onClick={() => navigate("/profile-details")}
          className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:ring"
        >
          Complete Profile
        </button>
      </form>
    </div>
  );
};

export default AddUser;

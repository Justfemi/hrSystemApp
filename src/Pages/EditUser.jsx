import { User } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";

const EditUser = () => {
  const { id } = useParams();
  const { adminData, editUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    role: "",
    department: "",
  });

  useEffect(() => {
    const userToEdit = adminData.users.find((user) => user.id === Number(id));
    if (userToEdit) {
      setUser(userToEdit);
    }
  }, [adminData.users, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   editUser(user);
  //   navigate("/users");
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      // await editUser(user);
      // toast.success("User updated successfully");
      // navigate("/users");
      const updatedUserData = await editUser(user); // Update user data in backend
      setUser(updatedUserData); // Update local state with updated user data
      toast.success("User updated successfully");
    } catch (error) {
      toast.error("Failed to update user");
    }
  };

  const handleCancel = () => {
    navigate("/users");
  };

  return (
    <div className="max-w-[960px] mx-auto">
      <div className="flex space-x-1 mb-2 items-center text-gray-400 font-medium py-4">
        <User /> <h4>Edit User</h4>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md grid grid-cols-2 gap-2 rounded px-8 pt-6 pb-8 mb-3"
      >
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
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
            value={user.email}
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
            placeholder="Department"
            name="department"
            value={user.department}
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
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="role"
            type="text"
            placeholder="Role"
            name="role"
            value={user.role}
            onChange={handleChange}
          />
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
            value={user.gender}
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
            value={user.contactNumber}
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
            name="dateOfBirth"
            value={user.dateOfBirth}
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
            type="button"
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

export default EditUser;

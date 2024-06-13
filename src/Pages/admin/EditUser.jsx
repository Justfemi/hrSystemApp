import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

const EditUser = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    mobileNumber: "",
    role: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`users/${id}`); // Fetch user details by ID
        setUser(response.data);
        setFormData(response.data); // Populate form data with fetched user details
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`users/${id}`, formData); // Update user details in the backend
      console.log("User details updated successfully");
    } catch (error) {
      console.error("Failed to update user details:", error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded"
          />
        </div>
        {/* Add other input fields for last name, username, mobile number, role */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditUser;

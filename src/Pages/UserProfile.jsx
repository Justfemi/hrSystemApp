import React, { useState } from "react";

const ProfilePage = () => {
  // Sample user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    password: "********",
    dob: "1990-01-01",
    department: "Engineering",
    contactNumber: "123-456-7890",
    gender: "Male",
  });

  // State to manage edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit edited user data to the server or update local storage
    // Reset edit mode
    setIsEditing(false);
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            disabled={!isEditing}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* Other input fields go here */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isEditing ? "hidden" : ""
            }`}
          >
            Edit
          </button>
          <button
            type="submit"
            className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isEditing ? "" : "hidden"
            }`}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const UserDashboard = () => {
  const { user, logout } = useContext(AuthContext);


  // State to manage edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-gray-900 text-white p-4 text-center">
        <div
          className="flex items-center justify-between px-10
        "
        >
          <h1 className="text-2xl">Welcome, {user?.name}</h1>
          <button onClick={logout} className="text-white">
            Logout
          </button>
        </div>
      </header>

      <main className="  bg-red-500 w-full">
        <div className="h-[100vh] p-6 grid grid-cols-3 gap-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center bg-gray-200 rounded-lg  col-span-2 "
          >
            <h2>user profile</h2>
            <h2>{user.name}</h2>
            <h2>{user.id}</h2>
            <div className="flex space-x-4">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
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
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="flex">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
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
          <div>
            <Link
              to={`/apply-leave`}
              className="m-4 p-4 bg-gray-900 text-white rounded"
            >
              Apply for Leave
            </Link>
            <Link
              to={`/attendance`}
              className="m-4 p-4 bg-gray-900 text-white rounded"
            >
              Check Attendance
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;

// import React, { useState } from 'react';

// const ProfilePage = () => {
//   // Sample user data
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     password: '********',
//     dob: '1990-01-01',
//     department: 'Engineering',
//     contactNumber: '123-456-7890',
//     gender: 'Male',
//   });

//   // State to manage edit mode
//   const [isEditing, setIsEditing] = useState(false);

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit edited user data to the server or update local storage
//     // Reset edit mode
// //     setIsEditing(false);
//   };

//   // Function to handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Profile</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={user.name}
//             onChange={handleChange}
//             disabled={!isEditing}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         {/* Other input fields go here */}
//         <div className="flex items-center justify-between">
//           <button
//             type="button"
//             onClick={() => setIsEditing(!isEditing)}
//             className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
//               isEditing ? 'hidden' : ''
//             }`}
//           >
//             Edit
//           </button>
//           <button
//             type="submit"
//             className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
//               isEditing ? '' : 'hidden'
//             }`}
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ProfilePage;

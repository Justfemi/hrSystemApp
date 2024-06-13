import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StaffDetails = () => {
  const [staffDetails, setStaffDetails] = useState({
    employeeId: "",
    startDate: "",
    contractStatus: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStaffDetails({
      ...staffDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save staff details to local storage or state management
    localStorage.setItem("staffDetails", JSON.stringify(staffDetails));
    navigate("/add-user");
  };

  return (
    <div className="max-w-[960px] mx-auto mt-8 p-4 border rounded-lg shadow-md">
      <h4 className="text-gray-400 font-medium py-4">Staff Details</h4>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md grid grid-cols-2 gap-2 rounded px-8 pt-6 pb-8 mb-3"
      >
        {/* Form fields for staff details */}
        <div className="mb-4">
          <label htmlFor="employeeId" className="block font-semibold mb-2">
            Employee ID
          </label>
          <input
            type="text"
            id="employeeId"
            name="employeeId"
            value={staffDetails.employeeId}
            onChange={handleInputChange}
            placeholder="Enter employee ID"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="startDate" className="block font-semibold mb-2">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={staffDetails.startDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contractStatus" className="block font-semibold mb-2">
            Contract status
          </label>
          <select
            id="contractStatus"
            name="contractStatus"
            value={staffDetails.contractStatus}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value=" ACTIVE"> ACTIVE</option>
            <option value="PENDING">PENDING</option>
            <option value="ENDED">ENDED</option>
            <option value="SUSPENDED">SUSPENDED</option>
            <option value="TERMINATED">TERMINATED</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:ring"
        >
          Finish
        </button>
      </form>
    </div>
  );
};

export default StaffDetails;

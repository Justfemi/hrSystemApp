// src/components/AddDepartmentPage.js
import React, { useState } from "react";

function AddDepartmentPage() {
  const [department, setDepartment] = useState("");
  const [departments, setDepartments] = useState([]);

  const handleAddDepartment = () => {
    if (department) {
      setDepartments([...departments, department]);
      setDepartment("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-start pt-10 justify-center">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-5 h-[200px] rounded-sm">
          <h2 className="text-2xl font-bold mb-4">Add Department</h2>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-4"
            placeholder="Enter department name"
          />
          <button
            onClick={handleAddDepartment}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>
        <div className="bg-white p-5 rounded-sm">
          <h2 className="text-2xl font-bold mb-4">Departments List</h2>
          <ul className="list-disc pl-5">
            {departments.map((dept, index) => (
              <li key={index} className="mb-2">
                {dept}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AddDepartmentPage;

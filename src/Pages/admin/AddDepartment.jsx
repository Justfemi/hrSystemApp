import React, { useState } from "react";

const AddDepartment = () => {
  const [formData, setFormData] = useState({
    organization: "",
    name: "",
    headOfDepartment: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Add Department</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Organization:</label>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label>Head of Department:</label>
          <input
            type="text"
            name="headOfDepartment"
            value={formData.headOfDepartment}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Department
        </button>
      </form>
    </div>
  );
};

export default AddDepartment;

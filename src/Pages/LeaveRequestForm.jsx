import { useState, useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const LeaveRequestForm = () => {
  const { addLeaveRequest } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    start_date: "",
    end_date: "",
    notes: "",
    cover: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addLeaveRequest(formData);
      setFormData({
        start_date: "",
        end_date: "",
        notes: "",
        cover: "",
      });
    } catch (error) {
      console.error("Failed to add leave request:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Leave Request</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            name="start_date"
            value={formData.start_date}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            type="date"
            name="end_date"
            value={formData.end_date}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Cover
          </label>
          <input
            type="text"
            name="cover"
            value={formData.cover}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-gray-700 hover:bg-gray-900 text-white rounded"
        >
          Add Leave Request
        </button>
      </form>
    </div>
  );
};

export default LeaveRequestForm;

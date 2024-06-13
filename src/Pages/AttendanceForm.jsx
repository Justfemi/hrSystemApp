import { useState, useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const AttendanceForm = () => {
  const { addAttendance } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    employee: "",
    date: "",
    check_in: "",
    check_out: "",
    notes: "",
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
      await addAttendance(formData);
      setFormData({
        employee: "",
        date: "",
        check_in: "",
        check_out: "",
        notes: "",
      });
    } catch (error) {
      console.error("Failed to add attendance:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Attendance</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Employee
          </label>
          <input
            type="text"
            name="employee"
            value={formData.employee}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Check In
          </label>
          <input
            type="time"
            name="check_in"
            value={formData.check_in}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Check Out
          </label>
          <input
            type="time"
            name="check_out"
            value={formData.check_out}
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
        <button
          type="submit"
          className="px-4 py-2  bg-gray-700 hover:bg-gray-900  text-white rounded"
        >
          Add Attendance
        </button>
      </form>
    </div>
  );
};

export default AttendanceForm;

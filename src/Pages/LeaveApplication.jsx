import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const LeaveApplication = () => {
  const { user, applyLeave } = useContext(AuthContext);
  const [leaveDetails, setLeaveDetails] = useState({
    userId: user.id,
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeaveDetails({ ...leaveDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Ensure end date is after start date
    if (new Date(leaveDetails.endDate) < new Date(leaveDetails.startDate)) {
      alert("End date must be after start date.");
      return;
    }

    // Validation: Ensure start date is in the future
    if (new Date(leaveDetails.startDate) < new Date()) {
      alert("Start date must be in the future.");
      return;
    }

    await applyLeave(leaveDetails);
    alert("Leave request submitted successfully");

    // Reset form after submission
    setLeaveDetails({
      userId: user.id,
      startDate: "",
      endDate: "",
      reason: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-gray-900 text-white p-4 text-center">
        <h1 className="text-2xl">Apply for Leave</h1>
      </header>

      <div className="w-full  py-5 px-10">
        {/* <Link
          to={`users/${user.id}`}
          className="py-1.5 px-3 bg-gray-300 rounded-md"
        >
          Back
        </Link> */}
      </div>
      <main className="flex-grow flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md w-full max-w-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={leaveDetails.startDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">End Date</label>
            <input
              type="date"
              name="endDate"
              value={leaveDetails.endDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Reason</label>
            <textarea
              name="reason"
              value={leaveDetails.reason}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white p-2 rounded"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default LeaveApplication;

import { useEffect, useState, useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const LeaveRequests = () => {
  const { fetchLeaveRequests, deleteLeaveRequest, updateLeaveRequest } =
    useContext(AuthContext);
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    fetchLeaveRequests().then(setLeaveRequests);
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteLeaveRequest(id);
      setLeaveRequests(leaveRequests.filter((leave) => leave.id !== id));
    } catch (error) {
      console.error("Failed to delete leave request:", error);
    }
  };

  const handleUpdateStatus = async (id, status) => {
    try {
      await updateLeaveRequest(id, { status });
      setLeaveRequests(
        leaveRequests.map((leave) =>
          leave.id === id ? { ...leave, status } : leave
        )
      );
    } catch (error) {
      console.error(
        `Failed to update leave request status to ${status}:`,
        error
      );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Ongoing Leave Requests</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Employee</th>
            <th className="py-2 px-4 border-b">Start Date</th>
            <th className="py-2 px-4 border-b">End Date</th>
            <th className="py-2 px-4 border-b">Notes</th>
            <th className="py-2 px-4 border-b">Cover</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((leave) => (
            <tr key={leave.id}>
              <td className="py-2 px-4 border-b">{leave.employee}</td>
              <td className="py-2 px-4 border-b">{leave.start_date}</td>
              <td className="py-2 px-4 border-b">{leave.end_date}</td>
              <td className="py-2 px-4 border-b">{leave.notes}</td>
              <td className="py-2 px-4 border-b">{leave.cover}</td>
              <td className="py-2 px-4 border-b">{leave.status}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded mr-2"
                  onClick={() => handleDelete(leave.id)}
                >
                  Delete
                </button>
                <button
                  className="px-2 py-1 bg-green-500 text-white rounded mr-2"
                  onClick={() => handleUpdateStatus(leave.id, "APPROVED")}
                >
                  Approve
                </button>
                <button
                  className="px-2 py-1 bg-yellow-500 text-white rounded"
                  onClick={() => handleUpdateStatus(leave.id, "DENIED")}
                >
                  Deny
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveRequests;

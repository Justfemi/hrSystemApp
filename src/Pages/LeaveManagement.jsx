import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { DeleteIcon } from "lucide-react";

const LeaveManagement = () => {
  const { adminData, handleLeaveRequest } = useContext(AuthContext);

  const handleApprove = (leaveId) => {
    handleLeaveRequest(leaveId, "approved");
  };

  const handleDeny = (leaveId) => {
    handleLeaveRequest(leaveId, "denied");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-gray-900 rounded-md text-white p-4 text-center">
        <h1 className="text-2xl">Leave requests</h1>
      </header>
      <div className="flex w-full  py-5 px-5">
        <button className="py-1.5 px-3 bg-gray-300 rounded-md">Back</button>
      </div>
      <main className="flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full ">
          {adminData.leaves.length === 0 ? (
            <p>No leave requests available.</p>
          ) : (
            <table className="w-[760px] bg-white">
              <thead>
                <tr>
                  <th className="text-[12px] uppercase tracking-wide 50 text-center rounded-tl-md rounded-bl-md">
                    User
                  </th>
                  <th className="text-[12px] uppercase tracking-wide 50 text-center rounded-tl-md rounded-bl-md">
                    Start Date
                  </th>
                  <th className="text-[12px] uppercase tracking-wide 50 text-center rounded-tl-md rounded-bl-md">
                    End Date
                  </th>
                  <th className="text-[12px] uppercase tracking-wide 50 text-center rounded-tl-md rounded-bl-md">
                    Reason
                  </th>
                  <th className="text-[12px] uppercase tracking-wide 50 text-center rounded-tl-md rounded-bl-md">
                    Status
                  </th>
                  <th className="text-[12px] uppercase tracking-wide 50 text-center rounded-tl-md rounded-bl-md">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {adminData.leaves.map((leave) => (
                  <tr key={leave.id}>
                    <td className="py-2 px-4 border-b">{leave.userName}</td>
                    <td className="py-2 px-4 border-b">{leave.startDate}</td>
                    <td className="py-2 px-4 border-b">{leave.endDate}</td>
                    <td className="py-2 px-4 border-b">{leave.reason}</td>
                    <td className="py-2 px-4 border-b">{leave.status}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleApprove(leave.id)}
                        className="bg-green-500 text-white px-2 py-1 rounded mr-5"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDeny(leave.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Deny
                      </button>
                    </td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleDelete(leave.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
};

export default LeaveManagement;

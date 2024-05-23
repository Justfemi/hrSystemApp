// import React, { useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";

// const AttendanceManagement = () => {
//   const { adminData } = useContext(AuthContext);

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center">
//       <header className="w-full bg-gray-900 text-white p-4 text-center rounded-md">
//         <h1 className="text-2xl">Attendance Management</h1>
//       </header>
//       <div className="flex w-full py-5 px-5">
//         <button className="py-1.5 px-3 bg-gray-300 rounded-md">Back</button>
//       </div>
//       <main className="flex flex-col items-center justify-center">
//         <div className="bg-white p-8 rounded shadow-md w-full">
//           {adminData.attendance.length === 0 ? (
//             <p>No attendance records available.</p>
//           ) : (
//             <table className="w-[760px] bg-white">
//               <thead>
//                 <tr>
//                   <th className="text-[12px] uppercase tracking-wide text-center rounded-tl-md rounded-bl-md">
//                     User
//                   </th>
//                   <th className="text-[12px] uppercase tracking-wide text-center">
//                     Date
//                   </th>
//                   <th className="text-[12px] uppercase tracking-wide text-center rounded-tr-md rounded-br-md">
//                     Status
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {adminData.attendance.map((record) => (
//                   <tr key={record.id}>
//                     <td className="py-2 px-4 border-b">
//                       {
//                         adminData.users.find((u) => u.id === record.userId)
//                           ?.name
//                       }
//                     </td>
//                     <td className="py-2 px-4 border-b">{record.date}</td>
//                     <td className="py-2 px-4 border-b">{record.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AttendanceManagement;
// src/components/Dashboard.jsx
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const AttendanceManagement = () => {
  const { adminData } = useContext(AuthContext);
  const { attendance } = adminData;

  return (
    <div className="p-4 bg-white shadow-md rounded mt-4">
      <h2 className="text-xl mb-4">Attendance</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Sign In Time</th>
            <th className="border px-4 py-2">Sign Out Time</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{record.username}</td>
              <td className="border px-4 py-2">{record.signInTime}</td>
              <td className="border px-4 py-2">
                {record.signOutTime || "Still Signed In"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceManagement;

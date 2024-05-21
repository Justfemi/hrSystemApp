import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Attendance = () => {
  const { user, checkInAttendance } = useContext(AuthContext);
  const [attendanceDetails, setAttendanceDetails] = useState({
    userId: user.id,
    date: new Date().toISOString().split("T")[0],
    status: "present",
  });

  const handleCheckIn = async () => {
    const currentTime = new Date().toLocaleTimeString();
    const updatedDetails = {
      ...attendanceDetails,
      time: currentTime,
    };
    await checkInAttendance(updatedDetails);
    alert("Attendance checked in successfully at " + currentTime);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-blue-500 text-white p-4 text-center">
        <h1 className="text-2xl">Check-In Attendance</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-xl mb-4">Hello, {user.name}</h2>
          <p>Date: {attendanceDetails.date}</p>
          {/* <p>Time: {attendanceDetails.time}</p> */}
          <button
            onClick={handleCheckIn}
            className="w-full bg-blue-500 text-white p-2 rounded mt-4"
          >
            Check In
          </button>
        </div>
      </main>
    </div>
  );
};

export default Attendance;

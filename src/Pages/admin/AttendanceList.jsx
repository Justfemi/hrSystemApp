import { useState, useEffect, useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const AttendanceList = () => {
  const { token, fetchAttendance } = useContext(AuthContext);
  const [attendanceData, setAttendanceData] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    if (token) {
      fetchAttendanceData("/api/attendance/");
    }
  }, [token]);

  const fetchAttendanceData = async (url) => {
    try {
      const data = await fetchAttendance(url);
      setAttendanceData(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Attendance Records</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Employee</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Check In</th>
              <th className="px-4 py-2 border">Check Out</th>
              <th className="px-4 py-2 border">Total Time</th>
              <th className="px-4 py-2 border">Notes</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((attendance) => (
              <tr key={attendance.id}>
                <td className="px-4 py-2 border">{attendance.employee}</td>
                <td className="px-4 py-2 border">{attendance.date}</td>
                <td className="px-4 py-2 border">{attendance.check_in}</td>
                <td className="px-4 py-2 border">{attendance.check_out}</td>
                <td className="px-4 py-2 border">{attendance.total_time}</td>
                <td className="px-4 py-2 border">{attendance.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        {previous && (
          <button
            onClick={() => fetchAttendanceData(previous)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Previous
          </button>
        )}
        {next && (
          <button
            onClick={() => fetchAttendanceData(next)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default AttendanceList;

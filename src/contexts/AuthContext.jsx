import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [adminData, setAdminData] = useState({
    users: [],
    reports: [],
    leaves: [],
    attendance: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
    fetchLeaves();
    fetchAttendance();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`http://localhost:5000/users`);
    const data = await response.json();

    setAdminData((prevState) => ({
      ...prevState,
      users: data,
    }));
  };

  const fetchLeaves = async () => {
    const leavesResponse = await fetch(`http://localhost:5000/leaves`);
    const leavesData = await leavesResponse.json();

    setAdminData((prevState) => ({
      ...prevState,
      leaves: leavesData,
    }));
  };

  const fetchAttendance = async () => {
    try {
      const response = await fetch(`http://localhost:5000/attendance`);
      const attendanceData = await response.json();
      setAdminData((prevState) => ({
        ...prevState,
        attendance: attendanceData,
      }));
    } catch (error) {
      console.error("Failed to fetch attendance:", error);
    }
  };

  const login = (name, password) => {
    console.log("Attempting login with", name, password);
    const authenticatedUser = adminData.users.find(
      (u) => u.name === name && u.password === password
    );

    if (authenticatedUser) {
      setUser(authenticatedUser);
      console.log("Login successful for user:", authenticatedUser);
      if (authenticatedUser.role === "admin") {
        navigate("/admin");
      } else {
        navigate(`/users/${authenticatedUser.id}`);
      }
    } else {
      console.log("Login failed. Invalid credentials.");
      alert("Invalid username or password");
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  const addUser = async (newUser) => {
    const response = await fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    setAdminData((prevState) => ({
      ...prevState,
      users: [...prevState.users, data],
    }));
  };

  const deleteUser = async (userId) => {
    await fetch(`http://localhost:5000/users/${userId}`, {
      method: "DELETE",
    });
    setAdminData((prevState) => ({
      ...prevState,
      users: prevState.users.filter((user) => user.id !== userId),
    }));
  };

  const editUser = async (updatedUser) => {
    const response = await fetch(
      `http://localhost:5000/users/${updatedUser.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      }
    );
    const data = await response.json();
    setAdminData((prevState) => ({
      ...prevState,
      users: prevState.users.map((user) => (user.id === data.id ? data : user)),
    }));
  };

  const applyLeave = async (leaveRequest) => {
    try {
      const response = await fetch(`http://localhost:5000/leaves`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leaveRequest),
      });
      const data = await response.json();
      setAdminData((prevState) => ({
        ...prevState,
        leaves: [...prevState.leaves, data],
      }));
    } catch (error) {
      console.error("Failed to apply for leave:", error);
    }
  };

  const handleLeaveRequest = async (leaveId, status) => {
    try {
      const response = await fetch(`http://localhost:5000/leaves/${leaveId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      const data = await response.json();
      setAdminData((prevState) => ({
        ...prevState,
        leaves: prevState.leaves.map((leave) =>
          leave.id === leaveId ? data : leave
        ),
      }));
    } catch (error) {
      console.error(`Failed to ${status} leave request:`, error);
    }
  };
  const checkInAttendance = async (attendanceRecord) => {
    try {
      const response = await fetch(`http://localhost:5000/attendance`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(attendanceRecord),
      });
      const data = await response.json();
      setAdminData((prevState) => ({
        ...prevState,
        attendance: [...prevState.attendance, data],
      }));
    } catch (error) {
      console.error("Failed to check in attendance:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        adminData,
        addUser,
        deleteUser,
        editUser,
        applyLeave,
        handleLeaveRequest,
        checkInAttendance,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

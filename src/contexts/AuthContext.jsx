import { createContext, useState, useEffect } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("access_token"));
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const payload = getJwtPayload(token);
      if (payload) {
        fetchUser(payload.user_id).then(setUser).catch(logout);
      } else {
        logout();
      }
    }
  }, [token]);

  const getJwtPayload = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded;
    } catch (error) {
      console.error("Failed to decode JWT token", error);
      return null;
    }
  };

  const login = async (email, password) => {
    try {
      const response = await api.post("/token/", { email, password });
      if (response.status === 201 || response.status === 200) {
        const { access } = response.data;
        localStorage.setItem("access_token", access);
        setToken(access);
        const payload = getJwtPayload(access);
        if (payload) {
          const user = await fetchUser(payload.user_id);
          setUser(user);

          // Navigate based on role
          if (user.role === "ADMIN") {
            navigate("/admin");
          } else if (user.role === "STAFF") {
            navigate(`/user/employee/${payload.user_id}`);
          } else {
            console.log("Role not defined or unrecognized:", user.role);
          }
        }
      }
    } catch (error) {
      console.error("Failed to login:", error);
      throw error;
    }
  };

  // Fetch user

  const fetchUser = async (userId) => {
    if (token) {
      try {
        const response = await api.get(`/user/employee/${userId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        return response.data;
      } catch (error) {
        console.error("Failed to fetch user:", error);
        throw error;
      }
    } else {
      throw new Error("No access token available");
    }
  };

  // Fetch users
  const fetchUsers = async () => {
    if (token) {
      const access_token = localStorage.getItem("access_token");
      console.log(access_token, "token from local storage");
      try {
        console.log("Fetching users with token:", token);
        const response = await api.get("/user/employee", {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "content-type": "application/json",
            Accept: "application/json",
          },
        });
        console.log(response.data);

        return response.data;
      } catch (error) {
        console.error("Failed to fetch users:", error);
        throw error;
      }
    } else {
      throw new Error("No access token available");
    }
  };

  // Add user
  const addUser = async (newUser) => {
    if (token) {
      const access_token = localStorage.getItem("access_token");
      try {
        await api.post(
          "/user/employee/",
          {
            email: newUser.email,
            first_name: newUser.firstName,
            last_name: newUser.lastName,
            username: newUser.username,
            mobile_number: newUser.mobileNumber,
            role: newUser.role,
            password: newUser.password,
            profile: {
              gender: newUser.gender,
              date_of_birth: newUser.dateOfBirth,
              marital_status: newUser.maritalStatus,
              nationality: newUser.nationality,
              national_id: newUser.nationalId,
              alternative_email: newUser.alternativeEmail,
              country: newUser.country,
              address: newUser.address,
              city: newUser.city,
              zip_code: newUser.zipCode,
            },
            staff_details: {
              employee_id: newUser.employeeId,
              start_date: newUser.startDate,
              contract_status: newUser.contractStatus,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
      } catch (error) {
        console.error("Failed to add user:", error);
        throw error;
      }
    } else {
      throw new Error("No access token available");
    }
  };

  const deleteUser = async (userId) => {
    if (token) {
      const access_token = localStorage.getItem("access_token");
      try {
        await api.delete(`/user/employee/${userId}/`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
      } catch (error) {
        console.error("Failed to delete user:", error);
        throw error;
      }
    } else {
      throw new Error("No access token available");
    }
  };

  // Fetch departments
  const fetchDepartments = async () => {
    if (token) {
      const access_token = localStorage.getItem("access_token");
      try {
        const departmentsResponse = await api.get("/org/department/", {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        console.log(departmentsResponse.data.results);
        return departmentsResponse.data.results;
      } catch (error) {
        console.error("Failed to fetch departments:", error);
        throw error;
      }
    } else {
      throw new Error("No access token available");
    }
  };

  const addDepartment = async (newDepartment) => {
    if (token) {
      const access_token = localStorage.getItem("access_token");
      try {
        await api.post("/departments/", newDepartment, {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
      } catch (error) {
        console.error("Failed to add department:", error);
        throw error;
      }
    } else {
      throw new Error("No access token available");
    }
  };

  const fetchOrganizations = async () => {
    if (token) {
      try {
        const response = await api.get("/org/organization/", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        // console.log(response.data.results);
        return response.data.results;
      } catch (error) {
        console.error("Failed to fetch organizations:", error);
        throw error;
      }
    } else {
      throw new Error("No access token available");
    }
  };

  // Attendace methods
  const fetchAttendance = async () => {
    if (token) {
      try {
        const response = await api.get("/attendance/", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        return response.data;
      } catch (error) {
        console.error("Failed to fetch attendance:", error);
        throw error;
      }
    } else {
      throw new Error("No access token available");
    }
  };

  const addAttendance = async (attendanceData) => {
    if (token) {
      const access_token = localStorage.getItem("access_token");
      try {
        await api.post("/attendance/", attendanceData, {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
      } catch (error) {
        console.error("Failed to add attendance:", error);
        throw error;
      }
    } else {
      throw new Error("No access token available");
    }
  };

  const fetchLeaveRequests = async () => {
    if (token) {
      try {
        const response = await api.get("/leave/", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        console.log(response.data.results);
        return response.data.results;
      } catch (error) {
        console.error("Failed to fetch leave requests:", error);
        throw error;
      }
    } else {
      throw new Error("No access token available");
    }
  };

  const addLeaveRequest = async (leaveData) => {
    if (token) {
      const access_token = localStorage.getItem("access_token");
      try {
        await api.post("/leave/", leaveData, {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
      } catch (error) {
        console.error("Failed to add leave request:", error);
        throw error;
      }
    } else {
      throw new Error("No access token available");
    }
  };

  const deleteLeaveRequest = async (id) => {
    if (token) {
      const access_token = localStorage.getItem("access_token");
      try {
        await api.delete(`/leave/${id}/`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
      } catch (error) {
        console.error("Failed to delete leave request:", error);
        throw error;
      }
    } else {
      throw new Error("No access token available");
    }
  };

  // const updateLeaveRequest = async (id, leaveData) => {
  //   if (token) {
  //     const access_token = localStorage.getItem("access_token");
  //     try {
  //       await api.put(`/leave-requests/${id}/`, leaveData, {
  //         headers: {
  //           Authorization: `Bearer ${access_token}`,
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //       });
  //     } catch (error) {
  //       console.error("Failed to update leave request:", error);
  //       throw error;
  //     }
  //   } else {
  //     throw new Error("No access token available");
  //   }
  // };

  const logout = () => {
    localStorage.removeItem("access_token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        fetchUsers,
        fetchUser,
        addUser,
        deleteUser,
        fetchDepartments,
        addDepartment,
        fetchOrganizations,
        fetchAttendance,
        addAttendance,
        fetchLeaveRequests,
        addLeaveRequest,
        // updateLeaveRequest,
        deleteLeaveRequest,

        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

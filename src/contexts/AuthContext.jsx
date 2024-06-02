import { createContext, useState, useEffect } from "react";
import api from "../api";
import { useNavigate, useParams } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("access_token"));
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await api.post("/token/", { email, password });
      console.log(response, "Response on log in");
      if (response.status === 201 || response.status === 200) {
        localStorage.setItem("access_token", response.data.access);
        console.log("token set", response.data.access);
      }

      // Fetch user info immediately after login

      const userResponse = await api.get(`user/employee/`, {
        headers: {
          Authorization: `Bearer ${response.data.access}`,
          "Content-Type": "application/json",
          // Accept: "application/json",
        },
      });

      const users = userResponse.data.results;
      setUser(users);
      console.log(users);

      const employee = users.find((emp) => emp.email === email);
      console.log(employee);

      // setUser(userResponse.data.results);

      // console.log(userResponse.data.results);

      // const employee = userResponse.data.results.find(
      //   (emp) => emp.email === email
      // );

      console.log(employee);

      if (employee && employee.role === "ADMIN") {
        console.log("Navigating to admin dashboard");
        navigate("/admin");
      } else if (employee && employee.role === "STAFF") {
        console.log("Navigating to user dashboard");

        navigate(`/user/employee/${employee.id}`);
      } else {
        console.log("Employee not found or role not defined:", employee);
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
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import AddNewUser from "./Pages/AddNewUser";
import Users from "./Pages/Users";
import AddDepartmentPage from "./Pages/AddDepartmentPage";
import LoginPage from "./Pages/LoginPage";
import HomeLayout from "./layout/HomeLayout";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import UserDashboard from "./Pages/UserDashboard";
import LeaveApplication from "./Pages/LeaveApplication";
import Attendance from "./Pages/Attendance";
import EditUser from "./Pages/EditUser";
import LeaveManagement from "./Pages/LeaveManagement";
import AttendanceManagement from "./Pages/AttendanceManagement";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<LoginPage />} />
      <Route index element={<Navigate to="/login" />} />
      {/* <Route path="*" element={<Navigate to="/login" />} />  */}

      <Route element={<PrivateRoute roles={["user"]} />}>
        <Route path="/users/:id" element={<UserDashboard />} />
        <Route path="/apply-leave" element={<LeaveApplication />} />
        <Route path="/attendance" element={<Attendance />} />
      </Route>

      <Route element={<PrivateRoute roles={["admin"]} />}>
        <Route
          path="/admin"
          element={
            <MainLayout>
              <HomeLayout />
            </MainLayout>
          }
        />
        <Route
          path="/department"
          element={
            <MainLayout>
              <AddDepartmentPage />
            </MainLayout>
          }
        />
        <Route
          path="/users"
          element={
            <MainLayout>
              <Users />
            </MainLayout>
          }
        />
        <Route
          path="/add_new_user"
          element={
            <MainLayout>
              <AddNewUser />
            </MainLayout>
          }
        />
        <Route
          path="/edit_user/:id"
          element={
            <MainLayout>
              <EditUser />
            </MainLayout>
          }
        />
        <Route
          path="/leave-management"
          element={
            <MainLayout>
              <LeaveManagement />
            </MainLayout>
          }
        />
        <Route
          path="/attendance-management"
          element={
            <MainLayout>
              <AttendanceManagement />
            </MainLayout>
          }
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

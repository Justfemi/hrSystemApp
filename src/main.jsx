import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import MainLayout from "./layout/MainLayout";

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
import AddUser from "./Pages/admin/AddUser";
import Users from "./Pages/admin/Users";
import UserProfile from "./Pages/UserProfile";
import AddDepartment from "./Pages/admin/AddDepartment";
import Departments from "./Pages/admin/Departments";
import ProfileDetails from "./Pages/admin/ProfileDetails";
import StaffDetails from "./Pages/admin/StaffDetails";
import AttendanceList from "./Pages/admin/AttendanceList";
import AttendanceForm from "./Pages/AttendanceForm";
import LeaveRequests from "./Pages/admin/LeaveRequests";
import LeaveRequestForm from "./Pages/LeaveRequestForm";
import ProfileLayout from "./layout/ProfileLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="" element={<PrivateRoute />}>
        <Route
          path="/departments"
          element={
            <MainLayout>
              <Departments />
            </MainLayout>
          }
        />
        <Route
          path="/attendance-form"
          element={
            <ProfileLayout>
              <AttendanceForm />
            </ProfileLayout>
          }
        />
        <Route
          path="/leave-request"
          element={
            <ProfileLayout>
              <LeaveRequestForm />
            </ProfileLayout>
          }
        />
        <Route
          path="/leave-requests"
          element={
            <MainLayout>
              <LeaveRequests />
            </MainLayout>
          }
        />
        <Route
          path="/admin"
          element={
            <MainLayout>
              <HomeLayout />
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
          path="/add-user"
          element={
            <MainLayout>
              <AddUser />
            </MainLayout>
          }
        />

        <Route
          path="/profile-details"
          element={
            <MainLayout>
              <ProfileDetails />
            </MainLayout>
          }
        />
        <Route
          path="/staff-details"
          element={
            <MainLayout>
              <StaffDetails />
            </MainLayout>
          }
        />

        <Route
          path="/departments"
          element={
            <MainLayout>
              <Departments />
            </MainLayout>
          }
        />

        <Route
          path="/add-department"
          element={
            <MainLayout>
              <AddDepartment />
            </MainLayout>
          }
        />
        <Route
          path="/attendance-list"
          element={
            <MainLayout>
              <AttendanceList />
            </MainLayout>
          }
        />

        <Route
          path="/user/employee/:userId"
          element={
            <ProfileLayout>
              <UserProfile />
            </ProfileLayout>
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

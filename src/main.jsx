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
import UserDashboard from "./Pages/UserDashboard";
import AddUser from "./Pages/admin/AddUser";
import Users from "./Pages/admin/Users";
import UserProfile from "./Pages/UserProfile";
import AddDepartment from "./Pages/admin/AddDepartment";
import Departments from "./Pages/admin/Departments";
import ProfileDetails from "./Pages/admin/ProfileDetails";
import StaffDetails from "./Pages/admin/StaffDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/departments"
        element={
          <MainLayout>
            <Departments />
          </MainLayout>
        }
      />

      <Route element={<PrivateRoute roles={["STAFF"]} />}>
        <Route path="/users/:id" element={<UserDashboard />} />
        <Route
          path="/user/employee/:userId"
          element={
            <MainLayout>
              <UserProfile />
            </MainLayout>
          }
        />
        {/* <Route path="/apply-leave" element={<LeaveApplication />} />
        <Route path="/attendance" element={<Attendance />} /> */}
      </Route>

      <Route element={<PrivateRoute roles={["ADMIN"]} />}>
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
          path="/user/employee/:userId"
          element={
            <MainLayout>
              <UserProfile />
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
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

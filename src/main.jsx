import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import AddNewUser from "./Pages/AddNewUser";
import Users from "./Pages/Users";
import AddDepartmentPage from "./Pages/AddDepartmentPage";
import LoginPage from "./Pages/LoginPage";
// import MainLayout from "./layout/MainLayout";
import HomeLayout from "./layout/HomeLayout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/"
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
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

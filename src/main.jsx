import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
// import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import HomePage from "./Pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index={true} path="/" element={<SignUpPage />} />
      <Route path="/home" element={<HomePage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full pl-2 md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <>
      {/* <div className="text-xl font-bold text-red-600">
      Welcome to the HomePage Page
    </div> */}
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        {/* <Sidebar /> */}
        <div className="flex flex-col">
          {/* <Navbar />/ */}
          {/* <Projects /> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;

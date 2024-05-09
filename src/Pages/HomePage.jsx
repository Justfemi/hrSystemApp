import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import ActiveCards from "../Components/ActiveCards";
import Projects from "../Components/Projects";

const HomePage = () => {
  return (
    <>
      {/* <div className="text-xl font-bold text-red-600">
      Welcome to the HomePage Page
    </div> */}
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <Sidebar />
        <div className="flex flex-col">
          <Navbar />
          <ActiveCards />
          <Projects />
        </div>
      </div>
    </>
  );
};

export default HomePage;

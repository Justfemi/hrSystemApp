import { AuthProvider } from "./contexts/AuthContext";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AuthProvider>
        <div>
          <Outlet />
        </div>
      </AuthProvider>
      <ToastContainer />
    </>
  );
}

export default App;

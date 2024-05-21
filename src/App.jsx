import AuthProvider from "./contexts/AuthContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <div>
        <Outlet />
      </div>
    </AuthProvider>
  );
}

export default App;

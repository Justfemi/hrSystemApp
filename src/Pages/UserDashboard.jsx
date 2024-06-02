import React, { useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";

const UserDashboard = () => {
  const { user, token, login, logout } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      console.log("User data:", user);
    }
  }, [user]);

  return (
    <div>
      <h1>My Component</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login("email@example.com", "password")}>
          Login
        </button>
      )}
    </div>
  );
};

export default UserDashboard;

import loginImg from "../assets/login.jpg";

import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name, password);
  };
  return (
    <div className="grid grid-cols-2 h-[100vh] ">
      <div
        className="
       h-full"
      >
        <img
          className="w-full h-full object-cover"
          src={loginImg}
          alt="login image"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded shadow-md flex flex-col justify-center"
      >
        <h2 className="text-2xl mb-4">Login</h2>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mt-4">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-900 text-white p-2 mt-4 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

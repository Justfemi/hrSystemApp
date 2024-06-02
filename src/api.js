// api.js - Wrapper for HTTP requests with Axios
import axios from "axios";

// Create axios instance
const api = axios.create({
  baseURL: "https://groupb.pythonanywhere.com/api/",
});

// Add an interceptor for all requests
api.interceptors.request.use((config) => {
  // Retrieve the access token from local storage or another secure storage
  const accessToken = localStorage.getItem("access_token");

  if (accessToken) {
    // Add the access token to the Authorization header
    console.log("Setting Authorization header:", accessToken);
    config.headers.Authorization = `Bearer ${accessToken}`;
  } else {
    console.log("No access token found");
  }

  return config;
});

export default api;

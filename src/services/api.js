// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/", // replace with your actual base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor (optional - auth token)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

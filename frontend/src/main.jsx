import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import axios from "axios";

// Ambil konfigurasi dari .env
const API_URL = import.meta.env.VITE_API_URL;
const API_TIMEOUT = import.meta.env.VITE_API_TIMEOUT || 10000; // Default 10s

if (!API_URL) {
  console.error("❌ VITE_API_URL tidak tersedia! Pastikan .env sudah dikonfigurasi.");
}

// Konfigurasi axios
axios.defaults.baseURL = API_URL;
axios.defaults.timeout = API_TIMEOUT;
axios.defaults.headers.post["Content-Type"] = "application/json"; // Prefer JSON over x-www-form-urlencoded
axios.defaults.withCredentials = true; // Jika API butuh autentikasi (misal, login session)

// Interceptor untuk menangani error global
axios.interceptors.response.use(
  response => response, // Response handler
  error => {
    if (error.response) {
      // Jika server merespons dengan error
      console.error("API Error:", error.response.status, error.response.data);
    } else if (error.request) {
      // Jika tidak ada respons dari server
      console.error("No response from server:", error.request);
    } else {
      // Error lainnya
      console.error("Error in Axios setup:", error.message);
    }
    return Promise.reject(error); // Re-throw error untuk ditangani di tempat lain
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

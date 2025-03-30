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
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.withCredentials = true; // Jika API butuh autentikasi (misal, login session)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

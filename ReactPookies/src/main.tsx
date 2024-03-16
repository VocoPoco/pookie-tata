import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./user/login/login.tsx";
import RegisterPage from "./user/signup/register.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} /> {}
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} /> {}
          <Route path="home/" element={<App />} /> {}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
);
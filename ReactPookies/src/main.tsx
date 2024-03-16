import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Games from "../pages/Games.tsx";
import AboutUs from "../pages/AboutUs.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./user/login/login.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Games />} /> {}
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<LoginPage />} /> {}
          <Route path="games/" element={<App />} /> {}
          <Route path="aboutus/" element={<AboutUs />} /> {}

        </Routes>
      </BrowserRouter>
    </React.StrictMode>
);
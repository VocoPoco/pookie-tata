import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./user/login/login.tsx";
import Home from "../pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/api/",
    element: <Home />,
  },
  {
    path: "/api/auth/signin",
    element: <LoginPage />,
  },
  {
    path: "/api/auth/signup",
    element: <LoginPage />,
  },
  {
    path: "/api/home",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

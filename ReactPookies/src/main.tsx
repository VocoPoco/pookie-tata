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
    element: <LoginPage />,
    children: [
      {
        path: "auth/",
        children: [
          {
            path: "signin/",
            element: <LoginPage />
          },
          {
            path: "signup/",
            element: <LoginPage />
          }
        ]
      },
      {
        path: "home/",
        element: <App />
      }
    ]

  },  // {
  //   path: "/api/",
  //   element: <Home />,
  // },
  // {
  //   path: "/pasd",
  //   element: <LoginPage />,
  // },
  // {
  //   path: "/api/auth/signup",
  //   element: <LoginPage />,
  // },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

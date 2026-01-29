import { createBrowserRouter } from "react-router";

import LayoutAuth from "../components/layout/layout-auth";
import LayoutDashboard from "../components/layout/layout-dashboard";
import Login from "../pages/auth/login";
import ForgotPassword from "../pages/auth/forgot-password";
import Dashboard from "../pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutAuth />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },

  {
    path: "/dashboard/*",
    element: <LayoutDashboard />,
    children: [
      {
      index: true,
      element: <Dashboard />,
      },
    ]
  }
]);



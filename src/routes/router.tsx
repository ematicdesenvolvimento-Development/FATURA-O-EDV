import { createBrowserRouter } from "react-router";

import LayoutAuth from "../components/layout/layout-auth";
import LayoutDashboard from "../components/layout/layout-dashboard";
import Login from "../pages/auth/login/login";
import ForgotPassword from "../pages/auth/forgot-password/forgot-password";
import Dashboard from "../pages/dashboard";
import Gestao from "../pages/dashboard/gestao/gestao";
import Facturacao from "../pages/dashboard/facturacao/facturacao";
import POS from "../pages/dashboard/pos/pos";
import AGT from "../pages/dashboard/agt/agt";
import Configuracoes from "../pages/dashboard/configuracoes/configuracoes";

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
    path: "/dashboard",
    element: <LayoutDashboard />,
    children: [
      {
      index: true,
      element: <Dashboard />,
      },
      {
        path: "gestao",
        element: <Gestao />,
      },
      {
        path: "facturacao",
        element: <Facturacao />,
      },
      {
        path: "pos",
        element: <POS />,
      },
      {
        path: "agt",
        element: <AGT />,
      },
      {
        path: "configuracoes",
        element: <Configuracoes />,
      },
    ]
  }
]);



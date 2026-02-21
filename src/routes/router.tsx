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
import DetalhesCartao from "../pages/dashboard/gestao/cartao-consumo/detalhes/detalhes-cartao";
import NovoCartao from "../pages/dashboard/gestao/cartao-consumo/novo/novo-cartao";
import CartoesConsumo from "../pages/dashboard/gestao/cartao-consumo/cartoes-consumo";
import NovaLoja from "../pages/dashboard/gestao/lojas/nova/nova-loja";
import Lojas from "../pages/dashboard/gestao/lojas/lojas";
import DetalhesLoja from "../pages/dashboard/gestao/lojas/detalhes/detalhes-loja";
import NovoCaixa from "../pages/dashboard/gestao/lojas/novo-caixa/novo-caixa";

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
        children: [
          {
            path: "cartoes",
            element: <CartoesConsumo />,
          },
          {
            path: "cartoes/novo",
            element: <NovoCartao />,
          },
          {
            path: "cartoes/:id",
            element: <DetalhesCartao />,
          },
          {
            path: "lojas",
            element: <Lojas />,
          },
          {
            path: "lojas/nova",
            element: <NovaLoja />,
          },
          {
            path: "lojas/:id/novo-caixa",
            element: <NovoCaixa />,
          },
          {
            path: "lojas/:id",
            element: <DetalhesLoja />,
          }
        ]
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



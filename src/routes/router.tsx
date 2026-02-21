import { createBrowserRouter } from "react-router";

import LayoutAuth from "../components/layout/layout-auth";
import LayoutDashboard from "../components/layout/layout-dashboard";
import Login from "../pages/auth/login/login";
import ForgotPassword from "../pages/auth/forgot-password/forgot-password";
import Dashboard from "../pages/dashboard"; 
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
import DetalhesConta from "../pages/dashboard/contas/detalhes/detalhes-conta";
import NovaConta from "../pages/dashboard/contas/nova/nova-conta";
import Descontos from "../pages/dashboard/contas/descontos/descontos";
import ContaCorrente from "../pages/dashboard/contas/conta-corrente/conta-corrente";
import MovimentoCaixa from "../pages/dashboard/contas/movimento-caixa/movimento-caixa";
import Relatorios from "../pages/dashboard/contas/relatorios/relatorios";
import LayoutContas from "../pages/dashboard/contas/layout-contas";
import LayoutGestao from "../pages/dashboard/gestao/layout-gestao";
import ContasBancarias from "../pages/dashboard/contas/contas-bancarias";

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
        element: <LayoutGestao />,
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
        path: "contas",
        element: <LayoutContas />,
        children: [
          {
            path: "contas-bancarias",
            element: <ContasBancarias />,
          },
          {
            path: "contas-bancarias/nova",
            element: <NovaConta />,
          },
          {
            path: "contas-bancarias/:id",
            element: <DetalhesConta />,
          },
          {
            path: "conta-corrente",
            element: <ContaCorrente />,
          },
          {
            path: "descontos",
            element: <Descontos />,
          },
          {
            path: "movimento-caixa",
            element: <MovimentoCaixa />,
          },
          {
            path: "relatorios",
            element: <Relatorios />,
          },
          
        ],
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



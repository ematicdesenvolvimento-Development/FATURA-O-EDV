import type { MenuGroup } from "../types/navigation-types";

export const MAIN_MENU: MenuGroup[] = [
  {
    id: "1",
    label: "Estatísticas",
    collapsible: true,
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: "layout-dashboard",
        path: "/dashboard",
      },
      {
        id: "aquisicoes",
        label: "Aquisições",
        icon: "trending-up",
        path: "/dashboard/aquisicoes",
      },
      {
        id: "vendidos",
        label: "Vendidos",
        icon: "trending-down",
        path: "/dashboard/vendidos",
      },
      {
        id: "rentaveis",
        label: "Rentáveis",
        icon: "dollar-sign",
        path: "/dashboard/rentaveis",
      },
    ],
  },
  {
    id: "2",
    label: "Gestão",
    collapsible: true,
    items: [
      {
        id: "gestao-dashboard",
        label: "Visão Geral",
        icon: "pie-chart",
        path: "/dashboard/gestao",
      },
      {
        id: "documentos",
        label: "Documentos",
        icon: "file-text",
        path: "/dashboard/gestao/documentos",
      },
      {
        id: "clientes-fornecedores",
        label: "Clientes/Fornecedores",
        icon: "users",
        path: "/dashboard/gestao/clientes-fornecedores",
      },
      {
        id: "produtos-servicos",
        label: "Produtos/Serviços",
        icon: "package",
        path: "/dashboard/gestao/produtos-servicos",
      },
      {
        id: "descontos",
        label: "Descontos",
        icon: "tag",
        path: "/dashboard/gestao/descontos",
      },
      {
        id: "relatorios",
        label: "Relatórios",
        icon: "bar-chart",
        path: "/dashboard/gestao/relatorios",
      },
    ],
  },
  {
    id: "3",
    label: "Facturação",
    collapsible: true,
    items: [
      {
        id: "faturas",
        label: "Faturas",
        icon: "receipt",
        path: "/faturacao/faturas",
      },
      {
        id: "recibos",
        label: "Recibos",
        icon: "credit-card",
        path: "/faturacao/recibos",
      },
      {
        id: "guias-transporte",
        label: "Guias de Transporte",
        icon: "truck",
        path: "/faturacao/guias-transporte",
      },
      {
        id: "notas-credito",
        label: "Notas de Crédito",
        icon: "file-minus",
        path: "/faturacao/notas-credito",
      },
    ],
  },
  {
    id: "4",
    label: "POS",
    collapsible: true,
    items: [
      {
        id: "caixa",
        label: "Caixa",
        icon: "shopping-cart",
        path: "/pos/caixa",
      },
      {
        id: "vendas",
        label: "Vendas",
        icon: "shopping-bag",
        path: "/pos/vendas",
      },
      {
        id: "produtos-pos",
        label: "Produtos",
        icon: "box",
        path: "/pos/produtos",
      },
      {
        id: "clientes-pos",
        label: "Clientes",
        icon: "user",
        path: "/pos/clientes",
      },
    ],
  },
  {
    id: "5",
    label: "AGT",
    collapsible: true,
    items: [
      {
        id: "agencias",
        label: "Agências",
        icon: "building",
        path: "/agt/agencias",
      },
      {
        id: "veiculos",
        label: "Veículos",
        icon: "car",
        path: "/agt/veiculos",
      },
      {
        id: "rotas",
        label: "Rotas",
        icon: "map",
        path: "/agt/rotas",
      },
      {
        id: "motoristas",
        label: "Motoristas",
        icon: "user",
        path: "/agt/motoristas",
      },
    ],
  },
  {
    id: "6",
    label: "Configuração",
    collapsible: true,
    items: [
      {
        id: "utilizadores",
        label: "Utilizadores",
        icon: "user-cog",
        path: "/configuracao/utilizadores",
      },
      {
        id: "empresa",
        label: "Empresa",
        icon: "building",
        path: "/configuracao/empresa",
      },
      {
        id: "parametros",
        label: "Parâmetros",
        icon: "settings",
        path: "/configuracao/parametros",
      },
      {
        id: "backup",
        label: "Backup",
        icon: "database",
        path: "/configuracao/backup",
      },
    ],
  },
];

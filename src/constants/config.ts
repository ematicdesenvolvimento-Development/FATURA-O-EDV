export const APP_NAME = "+Faturas";
export const APP_DESCRIPTION =
  "Sistema de facturação inteligente para gestão empresarial, emissão de documentos fiscais e controlo financeiro.";

export const APP_DOMAIN =
  import.meta.env.VITE_APP_DOMAIN || "http://localhost:5173";

export const APP_DEFAULT_IMAGE = `${APP_DOMAIN}/logo.png`;

export const IS_PRODUCTION = import.meta.env.PROD;

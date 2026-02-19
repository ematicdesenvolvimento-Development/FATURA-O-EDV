import { StrictMode } from 'react'
import { HelmetProvider } from "react-helmet-async";
import { createRoot } from 'react-dom/client'
import AppRouter from './context/app-router'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <HelmetProvider><StrictMode>

    <AppRouter />

  </StrictMode></HelmetProvider>,
)

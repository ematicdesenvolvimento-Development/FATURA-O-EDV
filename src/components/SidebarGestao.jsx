import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Users,
  Package,
  Percent,
  Truck,
  BarChart2,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom"; // <-- importa o Link

export default function SidebarGestao() {
  const [openMenus, setOpenMenus] = useState({
    documentos: false,
    produtos: false,
    relatorios: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <aside className="w-52 bg-white text-black h-[90vh] shadow-lg fixed left-64 top-10 ml-4 rounded-2xl">
      <div className="p-4 font-bold text-lg border-b border-gray-300 flex items-center justify-between rounded-t-2xl">
        Gestão
      </div>

      <nav className="p-4 space-y-2">
        {/* Dashboard */}
        <a
          href="#"
          className="flex items-center gap-2 px-3 py-2 rounded transition hover:text-blue-600"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </a>

        {/* Documentos */}
        <div>
          <button
            onClick={() => toggleMenu("documentos")}
            className="flex items-center justify-between w-full px-3 py-2 rounded transition hover:text-blue-600"
          >
            <span className="flex items-center gap-2">
              <FileText size={18} /> Documentos
            </span>
            {openMenus.documentos ? <ChevronDown /> : <ChevronRight />}
          </button>
          {openMenus.documentos && (
            <div className="ml-6 mt-1 space-y-1">
              <a href="#" className="block px-2 py-1 rounded transition hover:text-blue-600">
                Novo documento
              </a>
              <a href="#" className="block px-2 py-1 rounded transition hover:text-blue-600">
                Listar todos
              </a>
            </div>
          )}
        </div>

        {/* Clientes */}
        <Link
          to="/adicionar"   // <-- aqui apontas para a rota do teu Adicionar.jsx
          className="flex items-center gap-2 px-3 py-2 rounded transition hover:text-blue-600"
        >
          <Users size={18} />
          Clientes
        </Link>

        {/* Produtos/Serviços */}
        <div>
          <button
            onClick={() => toggleMenu("produtos")}
            className="flex items-center justify-between w-full px-3 py-2 rounded transition hover:text-blue-600"
          >
            <span className="flex items-center gap-2">
              <Package size={18} /> Produtos\Serviços
            </span>
            {openMenus.produtos ? <ChevronDown /> : <ChevronRight />}
          </button>
          {openMenus.produtos && (
            <div className="ml-6 mt-1 space-y-1">
              <a href="#" className="block px-2 py-1 rounded transition hover:text-blue-600">
                Listar todos
              </a>
              <a href="#" className="block px-2 py-1 rounded transition hover:text-blue-600">
                Movimentos de stock
              </a>
            </div>
          )}
        </div>

        {/* Descontos */}
        <a
          href="#"
          className="flex items-center gap-2 px-3 py-2 rounded transition hover:text-blue-600"
        >
          <Percent size={18} />
          Descontos
        </a>

        {/* Fornecedores */}
        <a
          href="#"
          className="flex items-center gap-2 px-3 py-2 rounded transition hover:text-blue-600"
        >
          <Truck size={18} />
          Fornecedores
        </a>

        {/* Relatórios */}
        <div>
          <button
            onClick={() => toggleMenu("relatorios")}
            className="flex items-center justify-between w-full px-3 py-2 rounded transition hover:text-blue-600"
          >
            <span className="flex items-center gap-2">
              <BarChart2 size={18} /> Relatórios
            </span>
            {openMenus.relatorios ? <ChevronDown /> : <ChevronRight />}
          </button>
          {openMenus.relatorios && (
            <div className="ml-6 mt-1 space-y-1">
              <a href="#" className="block px-2 py-1 rounded transition hover:text-blue-600">
                ?
              </a>
              <a href="#" className="block px-2 py-1 rounded transition hover:text-blue-600">
                ?
              </a>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}

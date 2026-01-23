import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChartPie,
  FaFolderOpen,
  FaFileInvoice,
  FaCashRegister,
  FaCog,
  FaBuilding
} from "react-icons/fa";
import userImg from "../img/user.png";

export default function Sidebar() {
  const [active, setActive] = useState(null);

  const menu = [
    { name: "Estatísticas", icon: <FaChartPie />, to: "/dashboard" },
    { name: "Gestão", icon: <FaFolderOpen />, to: "/cartao-detalhe/1" },
    { name: "Facturação", icon: <FaFileInvoice />, to: "/cartoes" },
    { name: "POS", icon: <FaCashRegister />, to: "/pos" },
    { name: "AGT", icon: <FaBuilding />, to: "/agt" },
    { name: "Configurações", icon: <FaCog />, to: "/config" },
  ];

  return (
    <aside
      className="
        bg-[#005193] text-white
        w-64
        fixed top-0 left-0
        h-screen
        flex flex-col items-center py-6 shadow-lg
      "
    >
      {/* Perfil */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            src={userImg}
            alt="Usuário"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="mt-3 text-sm font-semibold">ADMINISTRADOR</h1>
      </div>

      {/* Menus */}
      <nav className="flex flex-col gap-2 w-full px-4">
        {menu.map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            onClick={() => setActive(idx)}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-md text-sm
              transition-all duration-300 ease-in-out
              ${active === idx 
                ? "bg-transparent" 
                : "bg-[#0466c8]/40 hover:bg-[#0466c8]/80"
              }
            `}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // ajuste o caminho se necessário

export default function Dashboard() {
  useEffect(() => {
    setTimeout(() => {
      const chartLines = document.querySelectorAll(".chart-line");
      chartLines.forEach((line) => {
        line.style.animation = "drawChart 1.5s ease-in-out forwards";
      });
    }, 300);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen font-['Inter',sans-serif]">
      <div className="flex">
        {/* 👉 Sidebar */}
        <Sidebar />

        {/* Conteúdo principal */}
        <main className="flex-1 ml-64 p-6">
          {/* Topbar */}
          <div className="px-5 md:px-8 pt-5">
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-3">
                <button className="top-stat px-4 py-3 rounded-xl font-medium text-white bg-[#005193] hover:brightness-110 shadow-sm transition">
                  AQUISIÇÕES
                </button>
                <button className="top-stat px-4 py-3 rounded-xl font-medium text-white bg-[#005193] hover:brightness-110 shadow-sm transition">
                  VENDIDOS
                </button>
                <button className="top-stat px-4 py-3 rounded-xl font-medium text-white bg-[#005193] hover:brightness-110 shadow-sm transition">
                  RENTÁVEIS
                </button>
                <button className="top-stat px-4 py-3 rounded-xl font-medium text-white bg-[#005193] hover:brightness-110 shadow-sm transition">
                  Outros
                </button>
              </div>

              {/* Ícones topo direito */}
              <div className="flex items-center gap-4">
                {/* Redireciona para adicionar cliente */}
                <Link
                  to="/adicionar"
                  className="w-10 h-10 rounded-full bg-[#005193] text-white text-2xl leading-none grid place-items-center shadow hover:bg-blue-900 transition"
                >
                  +
                </Link>

                {/* Redireciona para perfil */}
                <Link to="/perfil" className="flex items-center gap-3">
                  <div className="text-right hidden md:block">
                    <div className="text-sm font-semibold text-gray-700">
                      António André
                    </div>
                    <div className="text-xs text-gray-500">
                      Caixas Atilce ›{" "}
                      <span className="text-[#005193] font-semibold">Perfil</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#005193] flex items-center justify-center text-white text-lg shadow">
                    <i className="fas fa-user"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Grades principais */}
          <div className="px-5 md:px-8 pb-8">
            <div className="grid grid-cols-12 gap-5 mt-5">
              {/* coluna chips */}
              <div className="hidden lg:flex lg:flex-col lg:gap-4 col-span-2">
                <div className="bg-white rounded-xl shadow p-3 text-[#005193] font-medium text-sm select-none">
                  STOCK <span className="text-gray-400 font-normal">15%</span>
                </div>
                <div className="bg-white rounded-xl shadow p-3 text-[#005193] font-medium text-sm select-none">
                  Vendas Hoje
                </div>
                <div className="bg-white rounded-xl shadow p-3 text-[#005193] font-medium text-sm select-none">
                  Filtro Semestral
                </div>
                <div className="bg-white rounded-xl shadow p-3 text-[#005193] font-medium text-sm select-none">
                  Vendas Ontem
                </div>
                <div className="bg-white rounded-xl shadow p-3 text-[#005193] font-medium text-sm select-none">
                  Vendas Por Loja
                </div>
              </div>

              {/* estatística */}
              <div className="col-span-12 lg:col-span-7">
                <div className="bg-white rounded-2xl shadow p-4 md:p-5 h-[280px] overflow-hidden">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="font-semibold text-gray-700">Estatística</div>
                    <div className="flex items-center gap-4">
                      <span className="text-[#005193] font-medium cursor-pointer">
                        Baixar
                      </span>
                      <span className="text-green-600 font-medium cursor-pointer">
                        Filtro
                      </span>
                      <span>Março 2024</span>
                    </div>
                  </div>
                  <div className="mt-3 h-[210px]">
                    <svg viewBox="0 0 600 210" className="w-full h-full">
                      <defs>
                        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#9DB2CE" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#9DB2CE" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <rect x="35" y="60" width="28" height="120" fill="url(#barGrad)" />
                      <rect x="70" y="25" width="28" height="155" fill="url(#barGrad)" />
                      <rect x="105" y="95" width="28" height="85" fill="url(#barGrad)" />

                      <path
                        d="M35,160 C85,120 120,135 160,115 C210,90 270,120 310,110 C360,98 410,120 460,105 C510,88 555,130 585,150"
                        fill="none"
                        stroke="#005193"
                        strokeWidth="3"
                        className="chart-line"
                      />
                      <path
                        d="M35,130 C80,150 120,90 160,140 C205,190 260,135 310,150 C360,165 420,120 470,140 C510,155 560,125 590,110"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3"
                        className="chart-line"
                      />

                      <text x="40" y="200" fontSize="11" fill="#64748B">
                        Jan
                      </text>
                      <text x="90" y="200" fontSize="11" fill="#64748B">
                        Fev
                      </text>
                      <text x="140" y="200" fontSize="11" fill="#64748B">
                        Mar
                      </text>
                      <text x="190" y="200" fontSize="11" fill="#64748B">
                        Abr
                      </text>
                      <text x="240" y="200" fontSize="11" fill="#64748B">
                        Mai
                      </text>
                      <text x="290" y="200" fontSize="11" fill="#64748B">
                        Jun
                      </text>
                      <text x="340" y="200" fontSize="11" fill="#64748B">
                        Jul
                      </text>
                      <text x="390" y="200" fontSize="11" fill="#64748B">
                        Ago
                      </text>
                      <text x="440" y="200" fontSize="11" fill="#64748B">
                        Set
                      </text>
                      <text x="490" y="200" fontSize="11" fill="#64748B">
                        Out
                      </text>
                      <text x="540" y="200" fontSize="11" fill="#64748B">
                        Nov
                      </text>
                      <text x="590" y="200" fontSize="11" fill="#64748B">
                        Dez
                      </text>

                      <rect x="92" y="80" width="40" height="22" rx="6" fill="#CBD5E1" />
                      <text x="100" y="95" fontSize="12" fill="#0F172A" fontWeight="700">
                        20D
                      </text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* banner */}
              <div className="col-span-12 lg:col-span-3">
                <div className="bg-white rounded-2xl shadow p-4 md:p-5 h-[280px] flex flex-col">
                  <div className="flex-1 grid place-items-center">
                    <svg viewBox="0 0 160 120" className="w-44">
                      <path d="M10,10 L70,0 L70,52 L10,52 Z" fill="#F97316" />
                      <path d="M80,0 L150,10 L150,52 L80,52 Z" fill="#22C55E" />
                      <path d="M10,62 L70,62 L70,120 L10,110 Z" fill="#60A5FA" />
                      <path d="M80,62 L150,62 L150,110 L80,120 Z" fill="#FACC15" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                  </div>
                </div>
                <div className="text-right text-xs text-gray-400 mt-1 pr-1">
                  Banner publicitário
                </div>
              </div>

              {/* tabela */}
              <div className="col-span-12 lg:col-span-10 lg:col-start-3">
                <div className="bg-white rounded-2xl shadow p-4 md:p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-800">
                      Clientes <span className="text-green-500">TOP</span>
                    </h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead className="text-left text-gray-500">
                        <tr>
                          <th className="py-2 pr-3 w-10">
                            <input type="checkbox" className="accent-[#005193]" />
                          </th>
                          <th className="py-2 pr-3">Clientes</th>
                          <th className="py-2 pr-3">Dados de Registro</th>
                          <th className="py-2 pr-3">Lojas</th>
                          <th className="py-2 pr-3">Estado</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 pr-3">
                            <input type="checkbox" className="accent-[#005193]" />
                          </td>
                          <td className="py-3 pr-3">
                            <div className="flex items-center gap-3">
                              <span className="w-3 h-3 rounded-full bg-[#005193] inline-block"></span>
                              <span className="text-gray-700 font-medium">
                                Alfonso Dias
                              </span>
                            </div>
                          </td>
                          <td className="py-3 pr-3 text-gray-600">
                            04.02.2024 — 10:24
                          </td>
                          <td className="py-3 pr-3 text-gray-600">
                            Luanda, Angola
                          </td>
                          <td className="py-3 pr-3">
                            <span className="status-pill px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold border border-green-200">
                              Ativo
                            </span>
                          </td>
                        </tr>
                        {/* ...mais linhas conforme necessário... */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

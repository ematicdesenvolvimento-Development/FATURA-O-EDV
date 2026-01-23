import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../components/Sidebar";
import SidebarGestao from "../components/SidebarGestao";

export default function CartaoConsumo() {
  const [cartoes] = useState([
    { numero: "D045686", cliente: "Nenhum", montante: "1000 Kz", saldo: "500 Kz", estado: "Activo" },
    { numero: "D045687", cliente: "Nenhum", montante: "1000 Kz", saldo: "500 Kz", estado: "Inactivo" },
    { numero: "D045688", cliente: "Nenhum", montante: "1000 Kz", saldo: "0 Kz", estado: "Inactivo" },
    { numero: "D045689", cliente: "Cliente X", montante: "2000 Kz", saldo: "1500 Kz", estado: "Activo" },
    { numero: "D045690", cliente: "Cliente Y", montante: "1000 Kz", saldo: "0 Kz", estado: "Inactivo" },
  ]);

  const [opcaoAberta, setOpcaoAberta] = useState(null);
  const [busca, setBusca] = useState("");

  const cartoesFiltrados = cartoes.filter(c =>
    c.numero.toLowerCase().includes(busca.toLowerCase()) ||
    c.cliente.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Primeiro Sidebar */}
      <Sidebar />

      {/* Segundo Sidebar cinza */}
      <SidebarGestao />

      <main className="flex-1 ml-[32rem] p-6">
        {/* Cabeçalho */}
        <div className="flex justify-between items-center mb-6">
          <motion.h2
            className="text-xl font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Cartão de Consumo / Listagem
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            + Adicionar Cartão
          </motion.button>
        </div>

        {/* Caixa de busca */}
        <motion.input
          type="text"
          placeholder="Pesquisar..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-4 focus:ring-2 focus:ring-blue-500 outline-none transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />

        {/* Tabela */}
        <div className="overflow-x-auto shadow bg-white rounded-lg">
          <table className="w-full min-w-[800px] border-collapse">
            <thead className="bg-gray-200 text-left">
              <tr>
                <th className="p-3 border">Número</th>
                <th className="p-3 border">Cliente</th>
                <th className="p-3 border">Montante</th>
                <th className="p-3 border">Saldo</th>
                <th className="p-3 border">Estado</th>
                <th className="p-3 border">Opções</th>
              </tr>
            </thead>
            <tbody>
              {cartoesFiltrados.map((c, index) => (
                <motion.tr
                  key={index}
                  className="hover:bg-gray-100 transition"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <td className="p-3 border">{c.numero}</td>
                  <td className="p-3 border">{c.cliente}</td>
                  <td className="p-3 border">{c.montante}</td>
                  <td className="p-3 border">{c.saldo}</td>
                  <td className="p-3 border">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                        c.estado === "Activo"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {c.estado}
                    </span>
                  </td>
                  <td className="p-3 border relative">
                    <button
                      onClick={() => setOpcaoAberta(opcaoAberta === index ? null : index)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
                    >
                      ⋮
                    </button>
                    <AnimatePresence>
                      {opcaoAberta === index && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10"
                        >
                          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Editar</button>
                          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Remover</button>
                          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Detalhes</button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginação */}
        <div className="mt-6 flex justify-end gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 transition"
          >
            ◀ Anterior
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 transition"
          >
            Próximo ▶
          </motion.button>
        </div>
      </main>
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Plus } from "lucide-react"; // <-- Ícones
import Sidebar from "../components/Sidebar";       // <-- Sidebar global
import SidebarGestao from "../components/SidebarGestao"; // <-- Sidebar Gestão

export default function AdicionarCliente() {
  const [numero, setNumero] = useState("972479927");
  const [cliente, setCliente] = useState("");
  const [montante, setMontante] = useState("1000.000");
  const navigate = useNavigate();

  const handleGuardar = (e) => {
    e.preventDefault();
    console.log({ numero, cliente, montante });
    alert("Cliente guardado com sucesso!");
  };

  return (
    <div className="flex bg-gray-100 min-h-screen relative">
      {/* Sidebar global */}
      <Sidebar />

      {/* Sidebar Gestão */}
      <SidebarGestao />

      {/* Ícones no canto superior direito */}
      <div className="absolute top-4 right-6 flex gap-4">
        {/* Ícone Usuário */}
        <button className="bg-blue-600 shadow-md rounded-full p-3 hover:bg-blue-700 transition">
          <User className="w-6 h-6 text-white" />
        </button>

        {/* Ícone Adicionar */}
        <button className="bg-blue-600 shadow-md rounded-full p-3 hover:bg-blue-700 transition">
          <Plus className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Conteúdo principal */}
      <main className="flex-1 ml-[330px] p-8">
        <div className="bg-white shadow-lg rounded-lg w-[600px] p-6 mx-auto mt-2">
          {/* Cabeçalho */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">CARTÃO DE CONSUMO /</h2>
            <span className="text-gray-500">Adicionar</span>
          </div>

          {/* Formulário */}
          <form onSubmit={handleGuardar} className="space-y-4">
            {/* Número e Cliente */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700">Número</label>
                <input
                  type="text"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-600"
                  disabled
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700">Clientes</label>
                <input
                  type="text"
                  placeholder="Nenhum"
                  value={cliente}
                  onChange={(e) => setCliente(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-600"
                />
              </div>
            </div>

            {/* Montante */}
            <div>
              <label className="block text-sm text-gray-700">Montante</label>
              <div className="flex">
                <input
                  type="text"
                  value={montante}
                  onChange={(e) => setMontante(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-l px-3 py-2 text-gray-600"
                />
                <span className="bg-gray-200 border border-gray-300 rounded-r px-4 flex items-center">
                  KZ
                </span>
              </div>
            </div>

            {/* Botões */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                VOLTAR
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                GUARDAR
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

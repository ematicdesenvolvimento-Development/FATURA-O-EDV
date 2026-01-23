import React, { useState } from "react";
import Sidebar from "../components/Sidebar";


export default function Perfil() {
  const [perfil, setPerfil] = useState({
    nomeCompleto: "Melquesedeque Ngola",
    email: "melque@gmail.com",
    utilizador: "Zadik",
    telefone: "972471997",
    ativo: true,
    numeroDocumento: "945689045",
    permissoes: {
      administrador: true,
      actualizar: true,
      excluir: false,
      adicionar: true,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePermissao = (perm) => {
    setPerfil((prev) => ({
      ...prev,
      permissoes: {
        ...prev.permissoes,
        [perm]: !prev.permissoes[perm],
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Atualizar perfil:", perfil);
    alert("Perfil atualizado!");
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
    

      <main className="flex-1 ml-[330px] p-8">
        <div className="bg-white rounded-lg shadow p-8 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Definições de Perfil</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* --- Sidebar de perfil esquerdo --- */}
            <div className="border-r pr-4 space-y-4">
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                carregar foto
              </div>
              <div>
                <p className="font-semibold">{perfil.nomeCompleto}</p>
                <p className="text-sm text-gray-500">Nº {perfil.numeroDocumento}</p>
                <p className="text-sm text-gray-500">
                  {perfil.ativo ? "Ativo" : "Inativo"}
                </p>
              </div>
            </div>

            {/* --- Formulário principal --- */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700">Nome Completo</label>
                    <input
                      type="text"
                      name="nomeCompleto"
                      value={perfil.nomeCompleto}
                      onChange={handleChange}
                      className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={perfil.email}
                      onChange={handleChange}
                      className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">Nome de Utilizador</label>
                    <input
                      type="text"
                      name="utilizador"
                      value={perfil.utilizador}
                      onChange={handleChange}
                      className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">Telefone</label>
                    <input
                      type="text"
                      name="telefone"
                      value={perfil.telefone}
                      onChange={handleChange}
                      className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                </div>

                {/* Permissões */}
                <div>
                  <p className="text-sm text-gray-700 mb-2">Permissões</p>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(perfil.permissoes).map(([key, valor]) => (
                      <label key={key} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={valor}
                          onChange={() => togglePermissao(key)}
                          className="accent-blue-600"
                        />
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

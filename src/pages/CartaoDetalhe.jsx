import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar"; 
import "../styles/CartaoDetalhe.css"; 
import SidebarGestao from "../components/SidebarGestao";

export default function CartaoDetalhe() {
  const { id } = useParams();

  useEffect(() => {
    const container = document.querySelector(".content");
    if (container) {
      container.style.opacity = 0;
      setTimeout(() => {
        container.style.transition = "opacity 0.8s ease-in-out";
        container.style.opacity = 1;
      }, 100);
    }
  }, []);

  // Mock de dados
  const dadosCartao = {
    numero: id,
    montante: "1.000.000,00 Kz",
    saldo: "1.000,00 Kz",
    cliente: {
      nome: "Cliente 1",
      telefone: "900000000",
      email: "cliente1@email.com",
    },
    historico: [
      { data: "2025/09/01", obs: "Compra supermercado", usado: "100 Kz" },
      { data: "2025/09/02", obs: "Pagamento restaurante", usado: "200 Kz" },
      { data: "2025/09/03", obs: "Serviço X", usado: "50 Kz" },
      { data: "2025/09/04", obs: "Compra online", usado: "300 Kz" },
    ],
  };

  return (
    <div className="page">
      <div className="flex layout">
        {/* 👉 Sidebar global */}
        <Sidebar /> 
        {/* 👉 Segundo Sidebar */}
        <SidebarGestao />
        
        {/* Conteúdo principal */}
        <main className="flex-1 p-6 content">
          <div className="flex flex-col items-end gap-4">
            
            {/* Cabeçalho ALINHADO */}
            <div className="header flex justify-between items-center w-[80%]">
              <h2>Cartão de Consumo / {dadosCartao.numero}</h2>
              <Link to="/cartoes" className="btn-voltar">
                Voltar
              </Link>
            </div>

            {/* Detalhes */}
            <div className="card card-grid w-[80%]">
              <div>
                <h3>Número</h3>
                <p>{dadosCartao.numero}</p>
              </div>
              <div>
                <h3>Montante</h3>
                <p>{dadosCartao.montante}</p>
              </div>
              <div>
                <h3>Saldo</h3>
                <p className="saldo">{dadosCartao.saldo}</p>
              </div>
            </div>

            {/* Cliente */}
            <div className="card w-[80%]">
              <h3>Cliente</h3>
              <div className="card-grid">
                <div>
                  <h4>Nome</h4>
                  <p>{dadosCartao.cliente.nome}</p>
                </div>
                <div>
                  <h4>Telefone</h4>
                  <p>{dadosCartao.cliente.telefone}</p>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>{dadosCartao.cliente.email}</p>
                </div>
              </div>
            </div>

            {/* Resumo */}
            <div className="card card-grid w-[80%]">
              <div>
                <p>Montante</p>
                <p>{dadosCartao.montante}</p>
              </div>
              <div>
                <p>Saldo</p>
                <p className="saldo">{dadosCartao.saldo}</p>
              </div>
            </div>

            {/* Histórico */}
            <div className="card w-[80%]">
              <h3>Histórico</h3>
              <table>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Observação</th>
                    <th>Usado</th>
                  </tr>
                </thead>
                <tbody>
                  {dadosCartao.historico.map((item, i) => (
                    <tr key={i}>
                      <td>{item.data}</td>
                      <td>{item.obs}</td>
                      <td className="usado">{item.usado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Paginação fake */}
              <div style={{ marginTop: "1rem", textAlign: "right" }}>
                <button className="btn-voltar">1 / 2</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

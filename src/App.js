import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import LoginForm from "./pages/LoginForm"; 
import Dashboard from "./pages/Dashboard";
import CartaoConsumo from "./pages/CartaoConsumo"; 
import CartaoDetalhe from "./pages/CartaoDetalhe";
import AdicionarCliente from "./pages/AdicionarCliente"; // <-- nome igual   
import Perfil from "./pages/Perfil"; // importa a página de perfil



export default function App() {
  return (
    <Router>
      <Routes> 
        {/* Página inicial → Login */}
        <Route path="/" element={<LoginForm />} />

        {/* Página dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Listagem dos cartões */}
        <Route path="/cartoes" element={<CartaoConsumo />} /> 

        {/* Detalhe do cartão */}
        <Route path="/cartao-detalhe/:id" element={<CartaoDetalhe />} />

        {/* Página de adicionar cliente */}
        <Route path="/adicionar" element={<AdicionarCliente />} />  
 {/* Página de perfil cliente */}
        <Route path="/perfil" element={<Perfil />} />   
      </Routes>
    </Router>
  );
}

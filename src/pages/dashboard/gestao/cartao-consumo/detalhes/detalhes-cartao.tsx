import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router";

import Seo from "../../../../../components/common/seo";
import { HistoricoCartaoConsumoTable } from "../../../../../components/tables/historico-cartao-consumo-table";

export default function DetalhesCartao() {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <>
            <Seo
                title="Detalhes do Cartão"
                description="Consulte o histórico de transações, saldo disponível e movimentos detalhados deste cartão."
            />

            <div className="w-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Cartão de Consumo / {id}</h1>
                    <button onClick={() => navigate(-1)} type="button" className="button-secondary-sm">
                        <ArrowLeft size={14} /> Voltar
                    </button>
                </div>

                <div className="w-full rounded-md bg-white p-8 shadow-sm">
                    <div className="grid grid-cols-3 gap-8">
                        <div>
                            <p className="text-gray-600 font-medium text-sm mb-1">Número</p>
                            <p className="text-gray-900 font-semibold">0001</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-medium text-sm mb-1">Montante</p>
                            <p className="text-gray-900 font-semibold">1.000.000,00 Kz</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-medium text-sm mb-1">Saldo</p>
                            <p className="font-bold text-green-600">1.000,00 Kz</p>
                        </div>
                    </div>
                </div>

                <div className="w-full rounded-md bg-white p-8 shadow-sm">
                    <h2 className="font-bold text-gray-900 mb-6">Cliente</h2>
                    <div className="grid grid-cols-3 gap-8">
                        <div>
                            <p className="text-gray-600 font-medium text-sm mb-1">Nome</p>
                            <p className="text-gray-900 font-semibold">Cliente 1</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-medium text-sm mb-1">Telefone</p>
                            <p className="text-gray-900 font-semibold">+244 900000000</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-medium text-sm mb-1">Email</p>
                            <p className="text-gray-900 font-semibold">cliente1@email.com</p>
                        </div>
                    </div>
                </div>

                <HistoricoCartaoConsumoTable />

            </div>
        </>
    );
}
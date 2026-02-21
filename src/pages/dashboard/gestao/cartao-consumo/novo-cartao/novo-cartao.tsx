import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

import Seo from "../../../../../components/common/seo";
import { CartaoConsumoForm } from "../../../../../components/features/cartao-consumo-form";

export default function NovoCartao() {
    const navigate = useNavigate();

    return (
        <>
            <Seo
                title="Novo Cartão de Consumo"
                description="Registe um novo cartão de consumo no sistema para atribuição a clientes ou funcionários."
            />

            <div className="w-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Novo Cartão de Consumo</h1>
                    <button onClick={() => navigate(-1)} type="button" className="button-secondary-sm">
                        <ArrowLeft size={14} /> Voltar
                    </button>
                </div>

                <CartaoConsumoForm />

            </div>
        </>
    );
}
import { useNavigate } from "react-router";

import Seo from "../../../../components/common/seo";
import { CartaoConsumoTable } from "../../../../components/tables/cartao-consumo-table";

export default function CartoesConsumo() {
    const navigate = useNavigate();

    return (
        <>
            <Seo
                title="Cartões de Consumo"
                description="Visualize e gira todos os cartões de consumo ativos no sistema +Faturas."
            />

            <div className="w-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Cartão de Consumo / Listagem</h1>
                    <button onClick={() => navigate("/dashboard/gestao/cartoes/novo")} className="button-default-sm">
                        + Adicionar Cartão
                    </button>
                </div>

                <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="input"
                />

                <CartaoConsumoTable />
            </div>
        </>
    );
}
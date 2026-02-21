import { useNavigate } from "react-router";
import { Plus } from "lucide-react";

import Seo from "../../../../components/common/seo";
import { LojasTable } from "../../../../components/tables/lojas-table";

export default function Lojas() {
    const navigate = useNavigate();

    return (
        <>
            <Seo
                title="Lojas"
                description="Consulte todas as lojas cadastradas no sistema."
            />

            <div className="w-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Lojas / Listagem</h1>
                    <button onClick={() => navigate("/dashboard/gestao/lojas/nova")} className="button-default-sm">
                        <Plus size={14} />
                        Adicionar armazém
                    </button>
                </div>

                <LojasTable />
            </div>
        </>
    )
}
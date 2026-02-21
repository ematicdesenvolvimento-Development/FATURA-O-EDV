import { useNavigate } from "react-router";
import { Plus } from "lucide-react";

import Seo from "../../../components/common/seo";
import { ContasBancariasTable } from "../../../components/tables/conta-bancaria-table";

export default function ContasBancarias() {
    const navigate = useNavigate();

    return (
        <>
            <Seo
                title="Contas Bancárias"
                description="Gestão e integração com AGT no +Faturas. Configure parâmetros fiscais e cumpra as obrigações tributárias com segurança."
            />

            <div className="w-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Contas Bancárias / Listagem</h1>
                    <button onClick={() => navigate("/dashboard/contas/contas-bancarias/nova")} className="button-default-sm">
                        <Plus size={14} />
                        Adicionar conta bancária
                    </button>
                </div>

                <ContasBancariasTable />
            </div>

        </>
    );
}

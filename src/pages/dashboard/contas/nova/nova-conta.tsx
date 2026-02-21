import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

import Seo from "../../../../components/common/seo";
import { ContaBancariaForm } from "../../../../components/features/conta-bancaria-form";

export default function NovaConta() {
    const navigate = useNavigate();
    
    return (
        <>
            <Seo
                title="Nova Conta Bancária"
                description="Gestão e integração com AGT no +Faturas. Configure parâmetros fiscais e cumpra as obrigações tributárias com segurança."
            />

            <div className="w-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Nova Conta Bancária</h1>
                    <button onClick={() => navigate(-1)} type="button" className="button-secondary-sm">
                        <ArrowLeft size={14} /> Voltar
                    </button>
                </div>

                <ContaBancariaForm />


            </div>

        </>
    );
}

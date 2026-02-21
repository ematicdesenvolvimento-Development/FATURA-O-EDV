import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

import Seo from "../../../../../components/common/seo";
import { LojaCaixaForm } from "../../../../../components/features/loja-caixa-form";

export default function NovoCaixa() {
    const navigate = useNavigate();

    return (
        <>
            <Seo
                title="Novo Caixa"
                description="Crie um novo caixa no sistema."
            />

            <div className="w-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Novo Caixa</h1>
                    <button onClick={() => navigate(-1)} type="button" className="button-secondary-sm">
                        <ArrowLeft size={14} /> Voltar
                    </button>
                </div>

                <LojaCaixaForm />

            </div>
        </>
    )
}
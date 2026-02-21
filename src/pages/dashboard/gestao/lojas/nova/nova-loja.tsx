import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

import Seo from "../../../../../components/common/seo";
import { LojaForm } from "../../../../../components/features/loja-form";

export default function NovaLoja() {
    const navigate = useNavigate();

    return (
        <>
            <Seo
                title="Nova Loja"
                description="Crie uma nova loja no sistema."
            />

            <div className="w-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Nova Loja</h1>
                    <button onClick={() => navigate(-1)} type="button" className="button-secondary-sm">
                        <ArrowLeft size={14} /> Voltar
                    </button>
                </div>

                <LojaForm />

            </div>
        </>
    )
}
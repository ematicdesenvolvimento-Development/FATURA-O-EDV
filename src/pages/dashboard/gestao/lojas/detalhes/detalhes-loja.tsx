import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Plus, Edit2 } from 'lucide-react';
import { useState } from 'react';

import Seo from "../../../../../components/common/seo";
import { LojaCaixasTable } from "../../../../../components/tables/loja-caixas-table";

interface Loja {
    id: string;
    nome: string;
    principal: boolean;
    ativo: boolean;
    dataCriacao: string;
}

export default function DetalhesLoja() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [loja] = useState<Loja>({
        id: id || '1',
        nome: 'Loja Principal',
        principal: true,
        ativo: true,
        dataCriacao: '2025-01-15',
    });


    return (
        <>
            <Seo
                title="Detalhes da Loja"
                description="Consulte as informações detalhadas da loja, incluindo localização, contato e histórico de vendas."
            />

            <div className="w-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Loja / {id}</h1>
                    <div className="flex gap-2.5">
                        <button
                            onClick={() => navigate(`/dashboard/gestao/lojas-editar/${loja.id}`)}
                            className="button-default-sm"
                        >
                            <Edit2 size={14} />
                            Editar
                        </button>
                        <button onClick={() => navigate(-1)} type="button" className="button-secondary-sm">
                            <ArrowLeft size={14} /> Voltar
                        </button>
                    </div>
                </div>

                <div className="w-full rounded-md bg-white p-8 shadow-sm">
                    <div>
                        <h1 className="font-bold text-gray-900">{loja.nome}</h1>
                        <div className="mt-4 grid grid-cols-3 gap-6">
                            <div>
                                <p className="text-sm text-gray-600">Status</p>
                                <p className="font-semibold text-gray-900">
                                    {loja.ativo ? 'Ativo' : 'Inativo'}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Data de Criação</p>
                                <p className="font-semibold text-gray-900">{loja.dataCriacao}</p>
                            </div>
                            {loja.principal && (
                                <div>
                                    <p className="text-sm text-gray-600">Tipo</p>
                                    <p className="font-semibold text-gray-900">Principal</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full mt-2">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Caixas</h2>
                        <button
                            className="button-default-sm"
                            onClick={() => navigate(`/dashboard/gestao/lojas/${loja.id}/novo-caixa`)}
                        >
                            <Plus size={14} />
                            Adicionar Caixa
                        </button>
                    </div>

                    <LojaCaixasTable />
                </div>
            </div>
        </>
    )
}
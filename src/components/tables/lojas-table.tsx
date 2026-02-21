import { Edit2, MoreVertical, Power, Trash2, View } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

interface Caixa {
    id: string;
    nome: string;
}

interface Loja {
    id: string;
    nome: string;
    principal: boolean;
    ativo: boolean;
    caixas: Caixa[];
}

export function LojasTable() {
    const navigate = useNavigate();
    
    const lojas: Loja[] = [
        {
            id: '1',
            nome: 'Loja Maxi',
            principal: true,
            ativo: true,
            caixas: [
                { id: '1-1', nome: 'caixa 01' },
                { id: '1-2', nome: 'caixa 02' },
                { id: '1-3', nome: 'caixa 03' },
            ],
        },
        {
            id: '2',
            nome: 'Loja Kero',
            principal: false,
            ativo: true,
            caixas: [
                { id: '2-1', nome: 'caixa 01' },
                { id: '2-2', nome: 'caixa 02' },
                { id: '2-3', nome: 'caixa 03' },
            ],
        },
    ];

    const [openMenu, setOpenMenu] = useState<string | null>(null);

    return (
        <div className="space-y-8 ">
            {lojas.map(loja => (
                <div key={loja.id} className="border-l-4 border-primary pl-6 rounded-md bg-white shadow-sm p-4"> 
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-lg font-bold text-gray-900">{loja.nome}</h3>
                                {loja.principal && (
                                    <span className="text-sm text-gray-500">Loja principal</span>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-sm text-gray-600">Ativo</p>
                                <p className="font-semibold text-gray-900">
                                    {loja.ativo ? 'sim' : 'não'}
                                </p>
                            </div>
                            <div className="relative">
                                <button
                                    onClick={() => setOpenMenu(openMenu === loja.id ? null : loja.id)}
                                    className="rounded-lg p-2 hover:bg-gray-100"
                                >
                                    <MoreVertical size={20} className="text-gray-600" />
                                </button>
                                {openMenu === loja.id && (
                                    <div className="absolute right-0 top-10 z-10 w-48 rounded-lg border border-gray-200 bg-white shadow-lg">
                                        <Link
                                            to={`/dashboard/gestao/lojas/${loja.id}`}
                                            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50"
                                        >
                                            <View size={14} />
                                            Ver
                                        </Link>

                                        <Link
                                            to={`/dashboard/gestao/lojas-editar/${loja.id}`}
                                            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50"
                                        >
                                            <Edit2 size={14} />
                                            Editar
                                        </Link>
                                        <button 
                                            className="flex w-full items-center gap-3 px-4 py-3 text-left text-gray-700 hover:bg-gray-50"
                                        >
                                            <Power size={14} />
                                            {loja.ativo ? 'Desativar' : 'Ativar'}
                                        </button>
                                        <button
                                            //onClick={() => handleRemoveLoja(loja.id)}
                                            className="flex w-full items-center gap-3 px-4 py-3 text-left text-red-600 hover:bg-red-50"
                                        >
                                            <Trash2 size={14} />
                                            Remover
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Caixas */}
                    <div className="space-y-2 mb-4">
                        {loja.caixas.map(caixa => (
                            <div
                                key={caixa.id}
                                className="py-2 text-gray-700 border-b border-gray-200"
                            >
                                {caixa.nome}
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => navigate(`/dashboard/gestao/lojas/${loja.id}/novo-caixa`)}
                        className="button-secondary-sm"
                    >
                        Adicionar caixa
                    </button>
                </div>
            ))}
        </div>
    )
}
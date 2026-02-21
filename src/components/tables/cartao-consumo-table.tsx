'use client';

import { Eye, Trash } from "lucide-react";
import { useNavigate } from "react-router";

interface Cards {
    id: number;
    numero: string;
    cliente: string;
    montante: string;
    saldo: string;
    estado: 'Ativo' | 'Inativo';

}

const cartoes: Cards[] = [
    { id: 1, numero: 'D045686', cliente: 'Nenhum', montante: '1000 Kz', saldo: '500 Kz', estado: 'Ativo' },
    { id: 2, numero: 'D045687', cliente: 'Nenhum', montante: '1000 Kz', saldo: '500 Kz', estado: 'Inativo' },
    { id: 3, numero: 'D045688', cliente: 'Nenhum', montante: '1000 Kz', saldo: '0 Kz', estado: 'Inativo' },
    { id: 4, numero: 'D045689', cliente: 'Cliente X', montante: '2000 Kz', saldo: '1500 Kz', estado: 'Ativo' },
    { id: 5, numero: 'D045690', cliente: 'Cliente Y', montante: '1000 Kz', saldo: '0 Kz', estado: 'Inativo' },
];

export function CartaoConsumoTable() {
    const navigate = useNavigate();

    return (
        <div className="rounded-md bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200 bg-gray-50">
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Número</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Cliente</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Montante</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Saldo</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Estado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartoes.map((card) => (
                            <tr key={card.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-600">{card.numero}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="size-1.5 rounded-full bg-primary"></div>
                                        <span className="font-medium text-sm text-gray-900">{card.cliente}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{card.montante}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{card.saldo}</td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${card.estado === 'Ativo'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-red-100 text-red-700'
                                            }`}
                                    >
                                        {card.estado}
                                    </span>
                                </td>
                                <td className="px-6 py-4 flex gap-4 items-center justify-center text-gray-500">
                                    <button type="button" onClick={() => navigate(`/dashboard/gestao/cartoes/${card.id}`)} className="cursor-pointer hover:text-green-600 transition-colors duration-300">
                                        <Eye size={14} />
                                    </button>

                                    <button type="button" className="cursor-pointer hover:text-red-600 transition-colors duration-300">
                                        <Trash size={14} />
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
'use client';

import { Eye, Trash } from "lucide-react";
import { useNavigate } from "react-router";

interface Banco {
    id: number;
    bank: string;
    account: string;
    iban: string;
    active: boolean;
}

const contasBancarias: Banco[] = [
    { id: 1, bank: 'Banco BAI', account: '00404500000478', iban: 'A006.000.00.000', active: true },
    { id: 2, bank: 'Banco BFA', account: '00404500000478', iban: 'A006.000.01.111', active: true },
    { id: 3, bank: 'Banco BIC', account: '99999999999999', iban: 'A222.222.22.222', active: false },
];

export function ContasBancariasTable() {
    const navigate = useNavigate();

    return (
        <div className="rounded-md bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200 bg-gray-50">
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Id</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Banco</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Conta</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">IBAN</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Estado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {contasBancarias.map((conta) => (
                            <tr key={conta.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-600">{conta.id}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="size-1.5 rounded-full bg-primary"></div>
                                        <span className="font-medium text-sm text-gray-900">{conta.bank}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{conta.account}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{conta.iban}</td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${conta.active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                                    >
                                        {conta.active ? 'Ativo' : 'Inativo'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 flex gap-4 items-center justify-center text-gray-500">
                                    <button type="button" onClick={() => navigate(`/dashboard/contas/contas-bancarias/${conta.id}`)} className="cursor-pointer hover:text-green-600 transition-colors duration-300">
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
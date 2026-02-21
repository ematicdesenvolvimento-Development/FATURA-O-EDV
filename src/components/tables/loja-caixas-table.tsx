import { Trash2 } from "lucide-react";

interface Caixa {
    id: string;
    nome: string;
    referencia: string;
}

const caixas: Caixa[] = [
    { id: '1', nome: 'Caixa 01', referencia: 'CX-001' },
    { id: '2', nome: 'Caixa 02', referencia: 'CX-002' },
    { id: '3', nome: 'Caixa 03', referencia: 'CX-003' },
];

export function LojaCaixasTable() {
    return (
        <div className="rounded-md bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200 bg-gray-50">
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Id</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Nome</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Referência</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {caixas.map((caixa) => (
                            <tr key={caixa.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-600">{caixa.id}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="size-1.5 rounded-full bg-primary"></div>
                                        <span className="font-medium text-sm text-gray-900">{caixa.nome}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{caixa.referencia}</td>
                                <td>
                                    <button type="button" className="cursor-pointer text-red-600"><Trash2 size={14}/></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
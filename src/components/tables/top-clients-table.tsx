'use client';

interface Client {
    id: string;
    name: string;
    date: string;
    location: string;
    status: 'Ativo' | 'Inativo';
}

const clients: Client[] = [
    {
        id: '1',
        name: 'Alfonso Dias',
        date: '04.02.2024 — 10:24',
        location: 'Luanda, Angola',
        status: 'Ativo',
    },
    {
        id: '2',
        name: 'Maria Silva',
        date: '03.02.2024 — 14:30',
        location: 'Benguela, Angola',
        status: 'Ativo',
    },
    {
        id: '3',
        name: 'João Santos',
        date: '02.02.2024 — 09:15',
        location: 'Huambo, Angola',
        status: 'Inativo',
    },
];

export function TopClientsTable() {
    return (
        <div className="mt-8 rounded-md bg-white shadow-sm">
            <div className="border-b border-gray-200 px-6 py-4">
                <h3 className="flex items-center gap-2 text-base font-semibold text-gray-900">
                    Clientes <span className="text-green-600">TOP</span>
                </h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200 bg-gray-50">
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Clientes</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Dados de Registro</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Lojas</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client) => (
                            <tr key={client.id} className="border-b border-gray-100 hover:bg-gray-50">

                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="size-1.5 rounded-full bg-primary"></div>
                                        <span className="font-medium text-sm text-gray-900">{client.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{client.date}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{client.location}</td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${client.status === 'Ativo'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-red-100 text-red-700'
                                            }`}
                                    >
                                        {client.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

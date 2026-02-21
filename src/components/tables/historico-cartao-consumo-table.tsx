
interface Historico {
    data: string;
    observacao: string;
    usado: string;
}

const data: Historico[] = [
    { data: '2025/09/01', observacao: 'Compra supermercado', usado: '100 Kz' },
    { data: '2025/09/02', observacao: 'Pagamento restaurante', usado: '200 Kz' },
    { data: '2025/09/03', observacao: 'Serviço X', usado: '50 Kz' },
    { data: '2025/09/04', observacao: 'Compra online', usado: '300 Kz' },
];

export function HistoricoCartaoConsumoTable() {
    return (
        <div className="rounded-md bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200 bg-gray-50">
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Data</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Obs</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((history) => (
                            <tr key={history.data} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="size-1.5 rounded-full bg-primary"></div>
                                        <span className="font-medium text-sm text-gray-900">{history.data}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{history.observacao}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{history.usado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
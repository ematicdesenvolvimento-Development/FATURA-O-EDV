'use client';

import { Bar, Line, XAxis, Tooltip, ResponsiveContainer, ComposedChart } from 'recharts';

const data = [
    { name: 'Jan', sales: 180, revenue: 2400 },
    { name: 'Fev', sales: 2400, revenue: 2210 },
    { name: 'Mar', sales: 290, revenue: 180 },
    { name: 'Abr', sales: 2290, revenue: 2000 },
    { name: 'Mai', sales: 250, revenue: 240 },
    { name: 'Jun', sales: 230, revenue: 2500 },
    { name: 'Jul', sales: 240, revenue: 2000 },
    { name: 'Ago', sales: 220, revenue: 2100 },
    { name: 'Set', sales: 2100, revenue: 220 },
    { name: 'Out', sales: 250, revenue: 2100 },
    { name: 'Nov', sales: 230, revenue: 2100 },
    { name: 'Dez', sales: 2181, revenue: 250 },
];

export function StatsChart() {
    return (
        <div className="rounded-md bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-900">Estatística</h3>
                <div className="flex gap-4 text-sm">
                    <button className="text-secondary hover:text-secondary/80">Baixar</button>
                    <button className="text-green-600 hover:text-green-700">Filtro</button>
                    <span className="text-gray-600">Março 2024</span>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={data}> 
                    <XAxis dataKey="name" /> 
                    <Tooltip />
                    <Bar dataKey="sales" fill="#e0e7ff" />
                    <Line type="monotone" dataKey="revenue" stroke="#109ece" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="sales" stroke="#085068" strokeWidth={2} dot={false} />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}

import { StatsChart } from "../../components/charts/stats-chart";
import { TopClientsTable } from "../../components/tables/top-clients-table";

export default function Dashboard() {
    return (
        <>
            <div className="grid grid-cols-4 gap-6">
                <div className="col-span-3 grid grid-cols-3 gap-6">
                    <div className="space-y-4 col-span-full lg:col-span-1">
                        <div className="rounded-md bg-white p-4 shadow-sm">
                            <p className="text-sm font-semibold text-secondary">STOCK 15%</p>
                        </div>
                        <button className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                            Vendas Hoje
                        </button>
                        <button className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                            Filtro Semestral
                        </button>
                        <button className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                            Vendas Ontem
                        </button>
                        <button className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                            Vendas Por Loja
                        </button>
                    </div>

                    <div className="lg:col-span-2 col-span-full">
                        <StatsChart />
                    </div></div>

                <div className="space-y-4 rounded-md h-fit bg-white p-4 shadow-sm">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-32 rounded-lg bg-orange-500 shadow-sm"></div>
                        <div className="h-32 rounded-lg bg-green-500 shadow-sm"></div>
                        <div className="h-32 rounded-lg bg-blue-500 shadow-sm"></div>
                        <div className="h-32 rounded-lg bg-yellow-400 shadow-sm"></div>
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                        <div className="size-2 rounded-full bg-gray-300"></div>
                        <div className="size-2 rounded-full bg-gray-500"></div>
                        <div className="size-2 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="text-center text-sm text-gray-400">
                        Banner publicitário
                    </div>
                </div>
            </div>

            <TopClientsTable />
        </>
    )
}
import { BanknoteArrowDown, HandCoins, Landmark, Notebook, PiggyBank } from "lucide-react";
import { Link, useLocation } from "react-router";

import { cn } from "../../utils/cn";

export function SidebarContas() {
    const location = useLocation();

    const menuItems = [
        { label: 'Movimento de Caixa', path: '/dashboard/contas/movimento-caixa', icon: BanknoteArrowDown },
        { label: 'Contas Bancárias', path: '/dashboard/contas/contas-bancarias', icon: Landmark },
        { label: 'Conta Corrente', path: '/dashboard/contas/conta-corrente', icon: PiggyBank },
        { label: 'Relatórios', path: '/dashboard/contas/relatorios', icon: Notebook },
        { label: 'Descontos', path: '/dashboard/contas/descontos', icon: HandCoins },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="border border-gray-200 h-[86lvh] rounded-lg shadow">
            <div className="divide-y divide-gray-200 ">
                {menuItems.map((item, idx) => {
                    const active = isActive(item.path)
                    return (
                        <Link to={item.path} key={idx} className={cn("flex items-center gap-1.5 py-4 px-6 text-gray-600 hover:bg-gray-100 transition-colors duration-300",
                            active && "bg-gray-100"
                        )}>
                            <item.icon size={14} />
                            <span className="text-sm text-nowrap">{item.label}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
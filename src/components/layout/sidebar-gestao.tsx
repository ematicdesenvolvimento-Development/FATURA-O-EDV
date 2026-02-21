import { Boxes, CreditCard, Store } from "lucide-react";
import { Link, useLocation } from "react-router";
import { cn } from "../../utils/cn";

export function SidebarGestao() {
    const location = useLocation();

    const menuItems = [
        { label: 'Cartões de consumo', path: '/dashboard/gestao/cartoes', icon: CreditCard },
        { label: 'Lojas', path: '/dashboard/gestao/lojas', icon: Store },
        { label: 'Itens 1', path: '/dashboard/gestao', icon: Boxes },
        { label: 'Itens 2', path: '/dashboard/gestao', icon: Boxes },
        { label: 'Itens 3', path: '/dashboard/gestao', icon: Boxes },
        { label: 'Itens 4', path: '/dashboard/gestao', icon: Boxes },
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
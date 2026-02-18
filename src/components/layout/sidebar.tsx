'use client';
 
import {
    BarChart3,
    Boxes,
    FileText,
    Grid3x3,
    Settings,
    ShoppingCart,
    User,
} from 'lucide-react';
import { Link } from 'react-router';

export function Sidebar() { 
    const menuItems = [
        { label: 'Estatísticas', icon: BarChart3 },
        { label: 'Gestão', icon: Boxes },
        { label: 'Facturação', icon: FileText },
        { label: 'POS', icon: ShoppingCart },
        { label: 'AGT', icon: Grid3x3 },
        { label: 'Configurações', icon: Settings },
    ];

    return (
        <div className="fixed left-0 top-0 h-screen w-20 bg-secondary text-white shadow-lg transition-all duration-300 md:w-80">
            <div className="border-b border-white/10 p-4 text-center md:p-8">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 md:mb-4 md:h-20 md:w-20">
                    <User size={24} className="md:size-10" />
                </div>
                <h2 className="hidden text-lg font-bold md:block">ADMINISTRADOR</h2>
            </div>

            <nav className="mt-4 space-y-1 px-2 md:px-4">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.label}
                            to="#"
                            className="group flex items-center justify-center gap-4 rounded-lg px-2 py-4 text-white transition-colors hover:bg-white/10 md:justify-start md:px-6"
                        >
                            <Icon size={20} />
                            <span className="hidden text-base font-medium md:block">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}

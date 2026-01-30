import React, { useState, useEffect } from 'react';
import {
    Bell,
    Box,
    ChevronDown,
    HelpCircle,
    LogOut,
} from 'lucide-react';
import { useNavigate, useLocation, NavLink } from 'react-router';

import { MAIN_MENU } from '../../constants/navigation-constants';
import { cn } from '../../utils/cn';

interface HeaderProps {
    onMenuClick?: () => void;
    isSidebarOpen?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, isSidebarOpen = false }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    useEffect(() => {
        const currentPath = location.pathname;

        for (const menu of MAIN_MENU) {
            if (menu.items) {
                const hasActiveItem = menu.items.some(item =>
                    item.path && currentPath.startsWith(item.path.split('/').slice(0, 3).join('/'))
                );

                if (hasActiveItem) {
                    setActiveMenu(menu.id);
                    return;
                }
            }
        }

        // Se não encontrou, usar primeiro menu
        setActiveMenu(MAIN_MENU[0]?.id || null);
    }, [location.pathname]);

    const handleMenuClick = (menuId: string) => {
        setActiveMenu(menuId);

        // Se o menu tem itens e não está colapsado, navega para o primeiro item
        const menu = MAIN_MENU.find(m => m.id === menuId);
        if (menu?.items && menu.items.length > 0) {
            const firstItem = menu.items[0];
            if (firstItem.path && firstItem.path !== location.pathname) {
                navigate(firstItem.path);
            }
        }
    };

    const getActiveMenuItems = () => {
        const menu = MAIN_MENU.find(m => m.id === activeMenu);
        return menu?.items || [];
    };

    const handleLogout = () => {
        navigate('/', { replace: true });
    };

    return (
        <header className="sticky top-0 z-40 px-4 lg:px-4 py-3 bg-gray-50">
            <div className="w-full flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                        {MAIN_MENU.map((menu) => (
                            <div className="flex flex-col items-center relative group" key={menu.id}>
                                <button
                                    onClick={() => handleMenuClick(menu.id)}
                                    className={cn(
                                        'text-sm transition-all flex items-center gap-1',
                                        activeMenu === menu.id
                                            ? 'font-medium text-primary'
                                            : 'text-gray-700 hover:text-gray-900'
                                    )}
                                >
                                    {menu.label}
                                    {menu.items && menu.items.length > 0 && (
                                        <ChevronDown
                                            size={12}
                                            className={cn(
                                                'transition-transform',
                                                activeMenu === menu.id ? 'rotate-180' : ''
                                            )}
                                        />
                                    )}
                                </button>

                                {activeMenu === menu.id && (
                                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <button
                                onClick={() => setNotificationsOpen(!notificationsOpen)}
                                className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 relative"
                            >
                                <Bell size={20} />
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                    2
                                </span>
                            </button>
                        </div>

                        <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                            <HelpCircle size={20} />
                        </button>

                        <button
                            onClick={handleLogout}
                            className="p-2 text-red-600 rounded-lg hover:bg-red-50"
                        >
                            <LogOut size={16} />
                        </button>


                    </div>
                </div>

                <nav className="w-full bg-white p-2 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center gap-4">
                        {getActiveMenuItems().map((item) => (
                            <NavLink
                                key={item.id}
                                to={item.path || '#'}
                                className={({ isActive }) =>
                                    cn(
                                        'flex flex-col items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors',
                                        isActive
                                            ? 'bg-primary text-white'
                                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                                    )
                                }
                                end={item.path === '/dashboard'}
                            >
                                {item.icon && <Box name={item.icon} size={24} />}
                                <span>{item.label}</span>
                            </NavLink>
                        ))}

                        {getActiveMenuItems().length === 0 && (
                            <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
                                Selecione um menu para ver as opções
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
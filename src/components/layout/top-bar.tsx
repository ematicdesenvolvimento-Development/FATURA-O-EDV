'use client';

import { User } from 'lucide-react';

interface TopBarProps {
    userName?: string;
    userRole?: string;
}

export function TopBar({ userName = 'António André', userRole = 'Caixas Alice' }: TopBarProps) {
    return (
        <div className="flex items-center justify-end px-8 py-4 shadow-xs">
            <div className="flex items-center gap-3">
                <div className="text-right">
                    <p className="font-semibold text-gray-900 text-sm leading-4">{userName}</p>
                    <p className="text-xs text-gray-600">{userRole} › Perfil</p>
                </div>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 transition-colors hover:bg-gray-400">
                    <User size={20} className="text-gray-700" />
                </button>
            </div>
        </div>
    );
}

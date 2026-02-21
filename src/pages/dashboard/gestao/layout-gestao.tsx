import { Outlet } from "react-router";

import Seo from "../../../components/common/seo";
import { SidebarGestao } from "../../../components/layout/sidebar-gestao";

export default function LayoutGestao() {
    return (
        <>
            <Seo
                title="Gestão"
                description="Administre clientes, produtos, fornecedores e stock no +Faturas com eficiência e organização."
            />

            <div className="flex gap-6 h-full w-full p-6">
                <SidebarGestao />
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

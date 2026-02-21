import { Outlet } from "react-router";

import Seo from "../../../components/common/seo"; 
import { SidebarContas } from "../../../components/layout/sidebar-contas";

export default function LayoutContas() {
    return (
        <>
            <Seo
                title="Contas"
                description="Administre clientes, produtos, fornecedores e stock no +Faturas com eficiência e organização."
            />

            <div className="flex gap-6 h-full w-full p-6">
                <SidebarContas />
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

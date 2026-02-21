import { Outlet } from "react-router";
import { Sidebar } from "./sidebar";
import { TopBar } from "./top-bar";

export default function LayoutDashboard() {
    return (
        <div className="w-full flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="ml-20 h-full w-full flex-1 transition-all duration-300 md:ml-70">
                <TopBar />
                <main className="w-full">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
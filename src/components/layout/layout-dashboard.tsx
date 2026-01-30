import { Outlet } from "react-router";
import Header from "./header";

export default function LayoutDashboard() {
    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1 p-4">
                <div className="w-full">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
import { Outlet } from "react-router";

export default function LayoutAuth() {
    return (
        <div className="w-full h-screen bg-background flex items-center justify-center"> 
            <Outlet />
        </div>
    )
}
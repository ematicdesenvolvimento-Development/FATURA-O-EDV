import { Outlet } from "react-router";

export default function LayoutDashboard() {
    return (
        <div>
            <h1>Layout Dashboard Component</h1>
            <Outlet />
        </div>
    )
}
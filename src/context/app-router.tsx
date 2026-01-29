import { RouterProvider } from "react-router";

import { router } from "../routes/router";

export default function AppRouter() {
    return <RouterProvider router={router} />
}
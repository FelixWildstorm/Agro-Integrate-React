import React from "react";
import Dashboard from "../layouts/Dashboard";

const protectedRoutes = [
    { path: "dashboard/", element: <Dashboard /> },
]

export default protectedRoutes;
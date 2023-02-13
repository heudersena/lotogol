import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

// import { DashboardPage } from "../pages";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
}

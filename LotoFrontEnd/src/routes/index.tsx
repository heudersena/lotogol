import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import EquipePage from "../pages/EquipePage";
import GamePage from "../pages/GamePage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

// import { DashboardPage } from "../pages";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/equipe" element={<EquipePage />} />
                <Route path="/game" element={<GamePage />} />
            </Routes>
        </BrowserRouter>
    );
}

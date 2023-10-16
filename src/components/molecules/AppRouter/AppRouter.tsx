// Modules
import React from "react";
import { Route, Routes } from "react-router-dom";

// pages
import { Home } from "pages/Home/Home";
import { Repos } from "pages/Repos/Repos"
import { PageNotFound } from "pages/PageNotFound/PageNotFound";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:username" element={<Repos />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

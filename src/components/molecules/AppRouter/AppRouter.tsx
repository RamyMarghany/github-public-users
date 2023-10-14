// Modules
import { Route, Routes } from "react-router-dom";

// Components
import { Home } from "pages/Home/Home";
import { PageNotFound } from "pages/PageNotFound/PageNotFound";


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

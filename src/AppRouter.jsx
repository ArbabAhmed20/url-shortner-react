import NavBar from "./components/NavBar.jsx";
import {Toaster} from "react-hot-toast";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import Login from "./components/Login.jsx";
import DashboardLayout from "./dashboard/DashboardLayout.jsx";
import Footer from "./components/Footer.jsx";

const AppRouter = () => {
    return (
        <>
            <NavBar/>
            <Toaster position={"bottom-center"}/>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<DashboardLayout />} />
            </Routes>
            <Footer/>
        </>
    )
}

import React from 'react'
import ShortenURlPage from "./components/ShortenURlPage.jsx";

export const SubDomainRouter = () => {
    return (
        <Routes>
            <Route path="/:url" element={<ShortenURlPage />} />
        </Routes>
    )
}

export default AppRouter;
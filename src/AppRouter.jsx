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
                <Route path="/register" element={<PrivateRoute publicPage={true}><RegisterPage /></PrivateRoute>} />
                <Route path="/login" element={<PrivateRoute publicPage={true}><Login /></PrivateRoute>} />
                <Route path="/dashboard" element={<PrivateRoute publicPage={false}><DashboardLayout /></PrivateRoute>} />
                <Route path="/*" element={<ErrorPage message={"Page Not Found!"} />} />
                <Route path="/error" element={<ErrorPage />} />
            </Routes>
            <Footer/>
        </>
    )
}

import React from 'react'
import ShortenURlPage from "./components/ShortenURlPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

export const SubDomainRouter = () => {
    return (
        <Routes>
            <Route path="/:urlshortnr" element={<ShortenURlPage />} />
        </Routes>
    )
}

export default AppRouter;
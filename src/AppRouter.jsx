import NavBar from "./components/NavBar.jsx";
import {Toaster} from "react-hot-toast";
import {Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import Login from "./components/Login.jsx";
import DashboardLayout from "./dashboard/DashboardLayout.jsx";
import Footer from "./components/Footer.jsx";
import ShortenURlPage from "./components/ShortenURlPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

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
                <Route path="/error" element={<ErrorPage />} />
                <Route path="/:url" element={<ShortenURlPage />} />
                <Route path="/*" element={<ErrorPage message={"Page Not Found!"} />} />
            </Routes>
            <Footer/>
        </>
    )
}

export const SubDomainRouter = () => {
    return (
        <Routes>
            <Route path="/:url" element={<ShortenURlPage />} />
        </Routes>
    )
}

export default AppRouter;
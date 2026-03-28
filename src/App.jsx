import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import {Toaster} from "react-hot-toast";
import Login from "./components/Login.jsx";
import DashboardLayout from "./dashboard/DashboardLayout.jsx";

function App() {
  

  return (
      <div>
          <BrowserRouter>
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
          </BrowserRouter>
      </div>
  )
}

export default App

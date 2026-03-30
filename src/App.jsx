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
import {getApps} from "./utills/Helper.js";

function App() {
  const CurrentApp = getApps();

  return (
      <div>
          <BrowserRouter>
              <CurrentApp />
          </BrowserRouter>
      </div>
  )
}

export default App

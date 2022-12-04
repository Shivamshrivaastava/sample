import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ForgetPasswordPage from "./components/pages/ForgetPasswordPage";
import HomePage from "./components/pages/HomePage";
import NoPage from "./components/pages/NoPage";

import "./App.css";
import LandScape from "./components/pages/LandScape";
import WelcomePage from "./components/pages/WelcomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/landscape"
          element={
            <>
              <LandScape />
              <WelcomePage />
            </>
          }
        />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

const Footer = () => {
  return (
    <p className="text-center" style={FooterStyle}>
      Designed & coded by{" "}
      <a
        href="https://github.com/Shivamshrivaastava"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shivam shrivastava
      </a>
    </p>
  );
};

const FooterStyle = {
  background: "#222",
  fontSize: ".8rem",
  color: "#fff",
  position: "absolute",
  bottom: 0,
  padding: "1rem",
  margin: 0,
  width: "100%",
  opacity: ".5"
};

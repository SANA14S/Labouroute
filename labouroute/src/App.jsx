import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Wages from "./pages/Wages";
import AboutLabouroute from "./pages/about-labouroute"; 
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import "./App.css";


function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wages" element={<Wages />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-labouroute" element={<AboutLabouroute />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Index";
import Faqs from "./pages/faqs";
import Services from "./pages/services";
import JoinUs from "./pages/joinus";
import ContactUs from "./pages/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar/Index";
import GovernmentSubsidy from "./pages/governmentSubsidy";
import Contact from "./pages/contact";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/government-subsidy" element={<GovernmentSubsidy />} />
      </Routes>
      <Footer isHomePage={isHomePage} />
    </>
  );
}

export default App;

import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './pages/home';
import Faqs from "./pages/faqs";
import Services from "./pages/services";
import Energypedestal from "./pages/energypedestal";
import CharjNetwork from "./pages/charjNetwork";
import JoinUs from "./pages/joinus";
import ContactUs from "./pages/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar/Index";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/"
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/charj-network" element={<CharjNetwork />} />
        <Route path="/padestal-energy" element={<Energypedestal />} />
      </Routes>
      <Footer className={isHomePage ? "mt-[-70px] relative z-10" : ""} isHomePage={isHomePage} />
    </>
  )
}

export default App

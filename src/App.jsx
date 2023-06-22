import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/home/Index';
import Faqs from "./pages/faqs";
import Services from "./pages/services";
import Energypedestal from "./pages/energypedestal";
import JoinUs from "./pages/joinus";
import ContactUs from "./pages/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar/Index";
import GovernmentSubsidy from "./pages/governmentSubsidy";

function App() {

  return (
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/government-subsidy" element={<GovernmentSubsidy />} />
        <Route path="/padestal-energy" element={<Energypedestal />} />
      </Routes>
      <Footer/>
      </>
  )
}

export default App

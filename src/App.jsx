import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Projects from "./Components/Services";
import Team from "./Components/Team";
import FAQ from "./Components/FAQ";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Layout from "./Components/Layout";
import ScrollToTop from "./Components/ScrollToTop";

// Homepage content
const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Portfolio isHomepage={true} />
      <Team />
      <FAQ />
      <ContactUs />
      {/* <Footer /> */}
    </>
  );
};

// Standalone Portfolio Page with solid white background
const PortfolioPage = () => {
  return (
    <div className="w-full bg-white min-h-screen px-4 sm:px-6 lg:px-8">
      <Portfolio />
    </div>
  );
};

// Responsive standalone Team Page with full screen background and centered content
const TeamPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#F4F2F8] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-screen-xl">
        <Team />
      </div>
    </div>
  );
};

// Standalone Contact Page with full width white background
const ContactPage = () => {
  return (
    <div className="w-full bg-white min-h-screen px-4 sm:px-6 lg:px-8">
      <ContactUs />
    </div>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Nav />
      <Layout key={location.pathname}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<Projects />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/footer" element={<Footer />} /> */}
        </Routes>
      </Layout>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;

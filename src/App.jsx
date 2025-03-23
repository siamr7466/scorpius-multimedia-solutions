import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Projects from "./Components/Services";
import Team from "./Components/Team";
import FAQ from "./Components/FAQ";
import ContactUs from "./Components/ContactUs";
// import Footer from "./Components/Footer";
import Layout from "./Components/Layout";
import ScrollToTop from "./Components/ScrollToTop";

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Portfolio isHomepage={true} />
      <Team />
      <FAQ/>
      <ContactUs/>
      {/* <Footer/> */}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Projects />} />
        <Route path="/team" element={<Team/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      </Layout>
    </Router>
  );
};

export default App;

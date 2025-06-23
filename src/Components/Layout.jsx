import React from "react";
import Navbar from "./Nav";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow px-4 py-8">
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;

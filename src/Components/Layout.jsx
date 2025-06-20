import React from "react";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen z-10">
      <ParticleBackground />
      <main className="flex-grow relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

import React from "react";
import Navbar from "./Nav";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#000015]">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Navbar />
        {/* Remove py-8 to avoid top/bottom blank space */}
        <main className="flex-grow w-full">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

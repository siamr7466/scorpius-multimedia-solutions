import React from "react";
import Footer from "./Footer"; // Import Footer component

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main> {/* Page content */}
      <Footer /> {/* Footer always appears */}
    </div>
  );
};

export default Layout;
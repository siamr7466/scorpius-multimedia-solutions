import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white px-4 py-4 relative z-10">
      <div className="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2025 <a href="/" className="hover:underline">Scorpius Multimedia™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li><a href="#" className="hover:underline me-4 md:me-6">About</a></li>
          <li><a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

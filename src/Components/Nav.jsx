import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              Scorpius<span className="text-red-700">.</span>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX /> : <FiAlignJustify />}
            </button>
          </div>

          <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-gray-600 text-[#1a1a1a]">Home</Link></li>
              <li><Link to="/services" className="hover:text-gray-600 text-[#1a1a1a]">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-gray-600 text-[#1a1a1a]">Portfolio</Link></li>
              <li><Link to="/team" className="hover:text-gray-600 text-[#1a1a1a]">Team</Link></li>
              <li><Link to="/contact" className="text-[#1a1a1a] hover:text-gray-600">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-15 left-0 w-full bg-blue-700 z-50">
          <ul className="space-y-4">
            <li><Link to="/" className="block text-white py-2 px-6" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/services" className="block text-white py-2 px-6" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/portfolio" className="block text-white py-2 px-6" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
            <li><Link to="/team" className="block text-white py-2 px-6" onClick={() => setIsOpen(false)}>Team</Link></li>
            <li><Link to="/contact" className="block text-white py-2 px-6" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

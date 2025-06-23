import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.65);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome, location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Team", path: "/team" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 rounded-xl
          ${scrolled
            ? "bg-white/40 backdrop-blur-none shadow-lg px-6 py-3 max-w-7xl w-[95%]"
            : "px-6 py-4 max-w-7xl w-[95%] text-white"
          }
        `}
        style={{ maxWidth: "96rem" }}
      >
        <div className="flex justify-between items-center mx-auto">
          <Link
            to="/"
            className={`text-2xl font-extrabold transition-colors duration-500 ${scrolled ? "text-[#111111]" : "text-white"
              }`}
          >
            Scorpius<span className="text-[#FF007A]">.</span>
          </Link>

          <ul
            className={`hidden md:flex space-x-10 font-medium transition-colors duration-300 ${scrolled ? "text-[#111111]" : "text-white"
              }`}
          >
            {navItems.map(({ name, path }) => (
              <li key={name} className="relative group">
                <Link
                  to={path}
                  className="transition-colors duration-300 text-inherit group-hover:text-[#33B8ED]"
                >
                  {name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#33B8ED] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsOpen(true)}
            className={`md:hidden focus:outline-none z-50 ${scrolled ? "text-[#111111]" : "text-white"
              }`}
            aria-label="Open menu"
          >
            <FiMenu size={28} />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center space-y-10">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-[#111111] focus:outline-none"
            aria-label="Close menu"
          >
            <FiX size={32} />
          </button>

          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-semibold text-[#111111] hover:text-[#FF007A] transition"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;

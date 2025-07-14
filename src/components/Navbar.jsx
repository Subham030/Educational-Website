import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/eec_logo.png";
import { NAV_LINKS } from "../data/navLinks";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="absolute top-0 left-0 w-full font-tektur z-50 bg-transparent text-white px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto bg-white p-1 rounded shadow-sm"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center flex-wrap gap-x-12 gap-y-2 text-base md:text-lg font-bold">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`transition duration-300 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] ${
                location.pathname === item.path
                  ? "text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
                  : "text-black"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          {mobileMenuOpen ? (
            <FiX
              className="w-7 h-7 text-black hover:text-white cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            />
          ) : (
            <FiMenu
              className="w-7 h-7 text-black hover:text-white cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden bg-white rounded-b-3xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-5 font-bold text-base">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`transition duration-300 hover:text-white hover:drop-shadow-[0_0_6px_rgba(133,128,227,1)] ${
                    location.pathname === item.path
                      ? "text-white drop-shadow-[0_0_6px_rgba(133,128,227,1)]"
                      : "text-black"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

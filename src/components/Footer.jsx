import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Features", path: "/features" },
    { label: "Benefits", path: "/benefits" },
    { label: "Services", path: "/services" },
    { label: "Modules", path: "/modules" },
    { label: "Gallery", path: "/gallery" },
    { label: "About", path: "/about" },
    { label: "Career", path: "/career" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10 px-6 font-tektur">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="hover:text-yellow-400 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Get in Touch with Us</h3>
          <div className="flex space-x-4 mb-4 text-xl">
            <a href="https://www.facebook.com/share/16aNPQY94N/" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/its_eec_?igsh=aG5oNnU4bGM0ZGFq" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/electronic-educare-eec/" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="flex items-center space-x-2 text-sm mb-2">
            <FaPhoneAlt className="text-yellow-400" />
            <span>+91 9830590929</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <FaEnvelope className="text-yellow-400" />
            <span>eec@electroniceducare.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Electronic Educare. All rights reserved. $RC
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          CryptoDash
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
          <Link to="/news" className="hover:text-blue-600">News</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white">
          <Link to="/" className="block hover:text-blue-600" onClick={toggleMenu}>Home</Link>
          <Link to="/dashboard" className="block hover:text-blue-600" onClick={toggleMenu}>Dashboard</Link>
          <Link to="/news" className="block hover:text-blue-600" onClick={toggleMenu}>News</Link>
          <Link to="/about" className="block hover:text-blue-600" onClick={toggleMenu}>About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

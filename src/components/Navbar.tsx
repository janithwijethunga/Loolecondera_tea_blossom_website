
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Ceylon_Tea_-_looleconera_v_1x.png'; 


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="tea-container">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Tea Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300">
              Home
            </Link>
            <Link to="/products" className="font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300">
              Our Products
            </Link>
            <Link to="/specialties" className="font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300">
              Specialties
            </Link>
            <Link to="/history" className="font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300">
              History
            </Link>
            <Link to="/touring" className="font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300">
              Tea Touring
            </Link>
            <Link to="/contact" className="font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300">
              Contact
            </Link>
            <Link to="/investintea" className="font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300">
            Invest in Tea
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-tea-dark-green"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-md animate-fade-in">
          <div className="tea-container flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Products
            </Link>
            <Link 
              to="/specialties" 
              className="font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Specialties
            </Link>
            <Link 
              to="/history" 
              className="font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              History
            </Link>
            <Link 
              to="/touring" 
              className="font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tea Touring
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

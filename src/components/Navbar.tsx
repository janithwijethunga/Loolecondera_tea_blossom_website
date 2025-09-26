
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import { images } from '../assets/assets';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  <header className="bg-white shadow-sm sticky top-0 z-[2000]">
      <div className="tea-container">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <img src={images.logoTea} alt="Tea Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => `font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300 ${isActive ? 'text-tea-gold font-semibold underline decoration-tea-gold decoration-2 underline-offset-4' : ''}`}>
              Home
            </NavLink>
            <a href="https://store.loolecondera.lk/products" className="font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300">
              Our Products
            </a>
            <NavLink to="/specialties" className={({ isActive }) => `font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300 ${isActive ? 'text-tea-gold font-semibold underline decoration-tea-gold decoration-2 underline-offset-4' : ''}`}>
              Specialties
            </NavLink>
            <NavLink to="/history" className={({ isActive }) => `font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300 ${isActive ? 'text-tea-gold font-semibold underline decoration-tea-gold decoration-2 underline-offset-4' : ''}`}>
              History
            </NavLink>
            {/* <NavLink to="/touring" className={({ isActive }) => `font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300 ${isActive ? 'text-tea-gold font-semibold underline decoration-tea-gold decoration-2 underline-offset-4' : ''}`}>
              Tea Touring
            </NavLink> */}
            <a href="https://store.loolecondera.lk/contact" className={`font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300  'text-tea-gold underline decoration-tea-gold decoration-2 underline-offset-4' : ''}`}>
              Contact
            </a>
            {/* <NavLink to="/investintea" className={({ isActive }) => `font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300 ${isActive ? 'text-tea-gold font-semibold underline decoration-tea-gold decoration-2 underline-offset-4' : ''}`}>
              Invest in Tea
            </NavLink> */}
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
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300 py-2 ${isActive ? 'text-tea-gold font-semibold underline decoration-tea-gold decoration-2 underline-offset-4' : ''}`}
            >
              Home
            </NavLink>
            <a
              href="https://store.loolecondera.lk/products"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300 py-2"
            >
              Our Products
            </a>
            <NavLink
              to="/specialties"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300 py-2 ${isActive ? 'text-tea-gold font-semibold underline decoration-tea-gold decoration-2 underline-offset-4' : ''}`}
            >
              Specialties
            </NavLink>
            <NavLink
              to="/history"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300 py-2 ${isActive ? 'text-tea-gold font-semibold underline decoration-tea-gold decoration-2 underline-offset-4' : ''}`}
            >
              History
            </NavLink>
            <NavLink
              to="/touring"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300 py-2 ${isActive ? 'text-tea-gold font-semibold underline decoration-tea-gold decoration-2 underline-offset-4' : ''}`}
            >
              Tea Touring
            </NavLink>
            <a
              href="https://store.loolecondera.lk/contact"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-tea-dark-green hover:text-tea-gold transition-colors duration-300 py-2"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

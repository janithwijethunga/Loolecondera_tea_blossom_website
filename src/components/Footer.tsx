import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tea-dark-green text-white pt-12 pb-6">
      <div className="tea-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Loolecondera
            </h3>
            <p className="mb-4 text-sm">
              Premium Ceylon tea direct from the source. Experience the rich
              heritage and exquisite flavor profiles of Sri Lanka's finest teas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-tea-gold transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-tea-gold transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-tea-gold transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl font-playfair font-bold mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="hover:text-tea-gold transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="hover:text-tea-gold transition-colors duration-300"
              >
                Our Products
              </Link>
              <Link
                to="/specialties"
                className="hover:text-tea-gold transition-colors duration-300"
              >
                Specialties
              </Link>
              <Link
                to="/history"
                className="hover:text-tea-gold transition-colors duration-300"
              >
                History
              </Link>
              <Link
                to="/touring"
                className="hover:text-tea-gold transition-colors duration-300"
              >
                Tea Touring
              </Link>
              <Link
                to="/contact"
                className="hover:text-tea-gold transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl font-playfair font-bold mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <p>12, 2nd Lane, Beddagana Road, Pitakotte, Sri Lanka</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <p>+94 763006555</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <p>info@boswingroup.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-tea-light-green/30 pt-6 mt-6">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="font-medium">
                © {new Date().getFullYear()} Loolecondera Ceylon Tea. All rights
                reserved.
              </p>
              <p className="mt-2 text-sm">The finest premium teas since 1867</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

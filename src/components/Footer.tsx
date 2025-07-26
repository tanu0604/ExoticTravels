import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-blue-400" />
              <div>
                <span className="text-2xl font-bold text-white">Exotic</span>
                <span className="text-2xl font-bold text-amber-400">
                  Travels
                </span>
              </div>
            </Link>
            <p className="text-gray-300 mb-4">
              Your trusted partner for unforgettable travel experiences across
              India and beyond. Creating memories that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/indian-trips"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Indian Trips
                </Link>
              </li>
              <li>
                <Link
                  to="/foreign-trips"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Foreign Trips
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/indian/goa"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Goa
                </Link>
              </li>
              <li>
                <Link
                  to="/indian/kerala"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Kerala
                </Link>
              </li>
              <li>
                <Link
                  to="/indian/manali"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Manali
                </Link>
              </li>
              <li>
                <Link
                  to="/foreign/bali"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Bali
                </Link>
              </li>
              <li>
                <Link
                  to="/foreign/maldives"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Maldives
                </Link>
              </li>
              <li>
                <Link
                  to="/foreign/dubai"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Dubai
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300">
                    GD-36, 1312 Rajdanga Main Road Behind Mahasweta Devi
                    Shangraha Shala Rashbehari Avenue Connector, Kolkata
                    <br />
                    West Bengal 700016
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                {/* Phone Numbers */}
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <p className="text-gray-300">+91 90880 19480</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <p className="text-gray-300">+91 80166 05108</p>
                </div>

                {/* Email Addresses */}
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <p className="text-gray-300">
                    contact.exotictravels@gmail.com
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <p className="text-gray-300">
                    support.exotictravels@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center w-full">
              <p className="text-gray-400 text-sm">
                © 2024 Exotic Travels. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-2 text-center">
                Powered by{" "}
                <span className="font-semibold text-amber-400">
                  ExoticTravels
                </span>{" "}
                — Your Gateway to Memorable Journeys
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/refund"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

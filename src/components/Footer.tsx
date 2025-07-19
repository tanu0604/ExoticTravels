import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 particle-bg"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
          {/* Company Info */}
          <div className="animate-fade-in-left">
            <Link to="/" className="flex items-center space-x-2 mb-4 group hover-grow">
              <MapPin className="h-8 w-8 text-blue-400 animate-float group-hover:animate-heartbeat" />
              <div>
                <span className="text-2xl font-bold text-white animate-glow">Exotic</span>
                <span className="text-2xl font-bold text-amber-400 animate-glow">Travels</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-4 animate-fade-in">
              Your trusted partner for unforgettable travel experiences across India and beyond. 
              Creating memories that last a lifetime.
            </p>
            <div className="flex space-x-4 stagger-animation">
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 animate-bounce-in">
                <Facebook className="h-5 w-5 hover:animate-heartbeat" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 animate-bounce-in">
                <Instagram className="h-5 w-5 hover:animate-heartbeat" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 animate-bounce-in">
                <Twitter className="h-5 w-5 hover:animate-heartbeat" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 animate-bounce-in">
                <Youtube className="h-5 w-5 hover:animate-heartbeat" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up">
            <h3 className="text-lg font-semibold mb-4 animate-glow">Quick Links</h3>
            <ul className="space-y-2 stagger-animation">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 hover:animate-glow">Home</Link></li>
              <li><Link to="/indian-trips" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 hover:animate-glow">Indian Trips</Link></li>
              <li><Link to="/foreign-trips" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 hover:animate-glow">Foreign Trips</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 hover:animate-glow">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 hover:animate-glow">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 hover:animate-glow">Contact</Link></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="animate-fade-in-down">
            <h3 className="text-lg font-semibold mb-4 animate-glow">Popular Destinations</h3>
            <ul className="space-y-2 stagger-animation">
              <li><Link to="/indian/goa" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 hover:animate-glow">Goa</Link></li>
              <li><Link to="/indian/kerala" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 hover:animate-glow">Kerala</Link></li>
              <li><Link to="/indian/manali" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 hover:animate-glow">Manali</Link></li>
              <li><Link to="/foreign/bali" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 hover:animate-glow">Bali</Link></li>
              <li><Link to="/foreign/maldives" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 hover:animate-glow">Maldives</Link></li>
              <li><Link to="/foreign/dubai" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 hover:animate-glow">Dubai</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-right">
            <h3 className="text-lg font-semibold mb-4 animate-glow">Contact Us</h3>
            <div className="space-y-3 stagger-animation">
              <div className="flex items-start space-x-3 hover-grow">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 animate-float" />
                <div>
                  <p className="text-gray-300 animate-fade-in">
                    123 Park Street, Kolkata<br />
                    West Bengal 700016
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 hover-grow">
                <Phone className="h-5 w-5 text-blue-400 animate-float" />
                <p className="text-gray-300 animate-fade-in">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3 hover-grow">
                <Mail className="h-5 w-5 text-blue-400 animate-float" />
                <p className="text-gray-300 animate-fade-in">info@exotictravels.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 animate-fade-in-up">
          <div className="flex flex-col md:flex-row justify-between items-center stagger-animation">
            <p className="text-gray-400 text-sm animate-fade-in">
              © 2024 Exotic Travels. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 stagger-animation">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:animate-glow">
                Terms of Service
              </Link>
              <Link to="/refund" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:animate-glow">
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
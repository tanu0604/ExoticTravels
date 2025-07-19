import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, MessageCircle, Sparkles, Star } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Indian Trips', path: '/indian-trips' },
    { name: 'Foreign Trips', path: '/foreign-trips' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-700 animate-slide-down ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100 animate-pulse-glow' 
          : 'bg-white/90 backdrop-blur-md shadow-lg animate-float'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 animate-fade-in">
            {/* Enhanced Logo */}
            <Link to="/" className="flex items-center space-x-3 group animate-bounce-in">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 animate-gradient">
                  <MapPin className="h-6 w-6 text-white animate-float" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles className="h-2 w-2 text-white animate-spin" />
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl font-bold animate-fade-in-right">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Exotic</span>
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Travels</span>
                </div>
                <div className="text-xs text-gray-500 font-medium animate-typewriter">Explore • Dream • Discover</div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 animate-fade-in stagger-animation">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-link hover-lift ${isActive(item.path) ? 'active text-blue-600 animate-glow' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-6 animate-fade-in-left">
              <div className="flex items-center space-x-2 text-gray-600 hover-grow">
                <Phone className="h-4 w-4 animate-float" />
                <span className="font-medium">+91 98765 43210</span>
              </div>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl animate-shimmer relative overflow-hidden"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 animate-bounce-in"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? 
                <X className="h-6 w-6 animate-rotate-in" /> : 
                <Menu className="h-6 w-6 animate-scale-in" />
              }
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl animate-slide-down">
            <div className="px-4 pt-4 pb-6 space-y-3 stagger-animation">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 hover-lift ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600 animate-pulse-glow'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 hover:scale-105'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 animate-fade-in-up">
                <div className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover-grow">
                  <Phone className="h-4 w-4 animate-float" />
                  <span className="font-medium">+91 98765 43210</span>
                </div>
                <Link
                  to="/contact"
                  className="block mx-4 mt-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 animate-shimmer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-40 animate-bounce-in-up">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block"
        >
          <div className="relative">
            <div className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-500 transform hover:scale-110 animate-float group-hover:animate-heartbeat">
              <MessageCircle className="h-6 w-6 animate-float-delayed" />
            </div>
            
            {/* Multiple Pulse Rings */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-15" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute inset-0 bg-green-300 rounded-full animate-ping opacity-10" style={{ animationDelay: '1s' }}></div>
            
            {/* Floating Stars */}
            <Star className="absolute -top-2 -right-2 h-4 w-4 text-yellow-400 animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Star className="absolute -bottom-2 -left-2 h-3 w-3 text-yellow-300 animate-float-delayed opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Enhanced Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-3 rounded-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap shadow-xl animate-slide-in-left">
            Chat with us on WhatsApp
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Navbar;
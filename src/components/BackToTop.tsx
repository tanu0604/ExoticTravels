import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-500 z-40 animate-bounce-in-up hover:scale-110 group animate-float"
        >
          <ArrowUp className="h-6 w-6 group-hover:animate-bounce transition-transform duration-300" />
          
          {/* Pulse rings */}
          <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-15" style={{ animationDelay: '0.5s' }}></div>
        </button>
      )}
    </>
  );
};

export default BackToTop;
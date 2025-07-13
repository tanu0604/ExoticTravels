import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Camera, Heart, Star, Users, Clock } from 'lucide-react';

interface StickyScrollItem {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  stats?: {
    label: string;
    value: string;
  }[];
}

interface StickyScrollProps {
  items: StickyScrollItem[];
}

const StickyScroll: React.FC<StickyScrollProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate which item should be active based on scroll position
      const scrollProgress = Math.max(0, Math.min(1, 
        (scrollY - containerTop + windowHeight / 2) / containerHeight
      ));

      const newActiveIndex = Math.min(
        items.length - 1,
        Math.floor(scrollProgress * items.length)
      );

      setActiveIndex(newActiveIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items.length]);

  return (
    <div ref={containerRef} className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Content Side - Scrollable */}
        <div className="space-y-16 lg:space-y-32">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`transition-all duration-700 ${
                activeIndex === index 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-50 transform translate-y-8'
              }`}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 card-hover">
                {/* Icon Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Stats (if available) */}
                {item.stats && (
                  <div className="grid grid-cols-2 gap-4">
                    {item.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Image Side - Sticky */}
        <div className="lg:sticky lg:top-24 lg:h-screen lg:flex lg:items-center">
          <div className="relative w-full h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            {items.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  activeIndex === index 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Image Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>4.8</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>2K+ Travelers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Progress Indicator */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-2">
              {items.map((_, index) => (
                <div
                  key={index}
                  className={`w-1 h-8 rounded-full transition-all duration-500 ${
                    activeIndex === index 
                      ? 'bg-white shadow-lg' 
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyScroll;
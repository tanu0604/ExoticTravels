import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, DollarSign, MapPin, Star, Users, ArrowRight } from 'lucide-react';

interface DestinationCardProps {
  id: string;
  name: string;
  image: string;
  price: string;
  duration: string;
  description: string;
  category: 'indian' | 'foreign';
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  id,
  name,
  image,
  price,
  duration,
  description,
  category
}) => {
  return (
    <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden card-hover animate-scale-in border border-gray-100">
      {/* Image Container with Elegant Overlay */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
        
        {/* Elegant Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-white/20">
            {category === 'indian' ? (
              <span className="flex items-center space-x-1">
                <span>🇮🇳</span>
                <span>India</span>
              </span>
            ) : (
              <span className="flex items-center space-x-1">
                <span>✈️</span>
                <span>International</span>
              </span>
            )}
          </div>
        </div>

        {/* Premium Rating Badge */}
        <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 flex items-center space-x-1 shadow-lg border border-white/20">
          <Star className="h-4 w-4 text-amber-500 fill-current" />
          <span className="text-sm font-bold text-gray-800">4.8</span>
        </div>

        {/* Elegant Hover Content */}
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
            <div className="flex items-center justify-between text-gray-700">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">2-6 People</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Guided</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content with Clean Typography */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{description}</p>
        </div>
        
        {/* Clean Price and Duration Layout */}
        <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-xl">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Clock className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Duration</p>
              <p className="text-sm font-bold text-gray-800">{duration}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <DollarSign className="h-4 w-4 text-green-600" />
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 font-medium">Starting from</p>
              <p className="text-lg font-bold text-green-600">{price}</p>
            </div>
          </div>
        </div>
        
        {/* Sophisticated Action Button */}
        <Link
          to={`/${category}-trips/${id}`}
          className="group/btn w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
        >
          <span>Explore Details</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-1 -left-1 w-12 h-12 bg-gradient-to-tr from-amber-50 to-orange-50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
    </div>
  );
};

export default DestinationCard;
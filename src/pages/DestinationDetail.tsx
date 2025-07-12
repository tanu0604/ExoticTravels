import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { 
  ArrowLeft, Clock, DollarSign, Calendar, Check, ChevronLeft, ChevronRight, 
  Star, Users, MapPin, Camera, Heart, Share2, Download, Phone, MessageCircle 
} from 'lucide-react';

const DestinationDetail: React.FC = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  
  // Debug logging to see what we're getting
  console.log('Route params:', { category, id });
  console.log('Available destinations:', destinations.map(d => ({ id: d.id, category: d.category })));
  
  const destination = destinations.find(dest => {
    const matchesId = dest.id === id;
    const matchesCategory = dest.category === category;
    console.log(`Checking ${dest.id} (${dest.category}): id match=${matchesId}, category match=${matchesCategory}`);
    return matchesId && matchesCategory;
  });
  
  console.log('Found destination:', destination);
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  if (!destination) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center animate-bounce-in">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
            <MapPin className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Destination Not Found</h1>
          <p className="text-gray-600 mb-6">The destination you're looking for doesn't exist.</p>
          <Link 
            to="/" 
            className="btn-primary inline-flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [destination.image, ...destination.gallery];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link 
              to={`/${category}-trips`} 
              className="hover:text-blue-600 transition-colors capitalize"
            >
              {category} Trips
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-800 font-medium">{destination.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section with Image Gallery */}
      <section className="relative">
        <div className="h-96 md:h-[500px] relative overflow-hidden">
          <img 
            src={allImages[selectedImageIndex]} 
            alt={destination.name}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">
                {destination.name}
              </h1>
              <p className="text-xl md:text-2xl opacity-90 text-shadow">
                {destination.description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                <button className="glass-effect text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>Save</span>
                </button>
                <button className="glass-effect text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
                <button className="glass-effect text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Brochure</span>
                </button>
              </div>
            </div>
          </div>

          {/* Image Navigation */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={() => setSelectedImageIndex(prev => prev === 0 ? allImages.length - 1 : prev - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setSelectedImageIndex(prev => prev === allImages.length - 1 ? 0 : prev + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedImageIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="bg-white p-4 shadow-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === selectedImageIndex 
                      ? 'ring-4 ring-blue-500 scale-105' 
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${destination.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to={`/${category}-trips`}
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-medium group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to {category === 'indian' ? 'Indian' : 'Foreign'} Trips</span>
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-slide-in-left">
              <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl mb-6">
                {[
                  { id: 'overview', label: 'Overview', icon: MapPin },
                  { id: 'highlights', label: 'Highlights', icon: Star },
                  { id: 'gallery', label: 'Gallery', icon: Camera },
                  { id: 'faq', label: 'FAQ', icon: MessageCircle }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === id
                        ? 'bg-white text-blue-600 shadow-md'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="animate-fade-in">
                {activeTab === 'overview' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{destination.overview}</p>
                  </div>
                )}

                {activeTab === 'highlights' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Highlights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {destination.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'gallery' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Photo Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {destination.gallery.map((image, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-xl aspect-square">
                          <img 
                            src={image} 
                            alt={`${destination.name} ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Camera className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'faq' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                      {destination.faqs.map((faq, index) => (
                        <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                          <h3 className="font-bold text-gray-800 mb-3 text-lg">{faq.question}</h3>
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6 animate-slide-in-right">
            {/* Quick Info */}
            <div className="glass-card rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>Quick Info</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700 font-medium">Duration</span>
                  </div>
                  <span className="font-bold text-blue-600">{destination.duration}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700 font-medium">Starting from</span>
                  </div>
                  <span className="font-bold text-green-600 text-lg">{destination.price}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700 font-medium">Best Time</span>
                  </div>
                  <span className="font-bold text-amber-600">{destination.bestTime}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700 font-medium">Group Size</span>
                  </div>
                  <span className="font-bold text-purple-600">2-8 People</span>
                </div>
              </div>
            </div>

            {/* Travel Packages */}
            <div className="glass-card rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Travel Packages</span>
              </h3>
              <div className="space-y-6">
                {destination.packages.map((pkg, index) => (
                  <div key={index} className="border-2 border-gray-100 hover:border-blue-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg group">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                        {pkg.name}
                      </h4>
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {pkg.price}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-4 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">{pkg.duration}</span>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-700 mb-3">What's Included:</p>
                      <div className="space-y-2">
                        {pkg.inclusions.map((inclusion, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="h-2.5 w-2.5 text-white" />
                            </div>
                            <span className="text-sm text-gray-600">{inclusion}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Book This Package
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Need Help Planning?</h3>
              <p className="mb-6 opacity-90">
                Our travel experts are here to help you create the perfect itinerary for your dream vacation.
              </p>
              <div className="space-y-3">
                <Link
                  to="/contact"
                  className="block w-full bg-white text-blue-600 text-center py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+919876543210"
                  className="block w-full bg-green-500 text-white text-center py-3 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import {
  ArrowLeft, Clock, DollarSign, Calendar, Check, ChevronLeft, ChevronRight,
  Star, Users, MapPin, Camera, Heart, Share2, Download, Phone, MessageCircle
} from 'lucide-react';

const DestinationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pathname = window.location.pathname;
  const category = pathname.includes('/indian/') ? 'indian' : 'foreign';

  const destination = destinations.find(dest => dest.id === id && dest.category === category);
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
          <Link to="/" className="btn-primary inline-flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [destination.image, ...destination.gallery];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden rounded-b-3xl shadow-xl">
        <img
          src={allImages[selectedImageIndex]}
          alt={destination.name}
          className="w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl font-extrabold drop-shadow-lg mb-3">{destination.name}</h1>
          <p className="text-lg opacity-90 max-w-2xl drop-shadow-md">{destination.description}</p>
        </div>
        {allImages.length > 1 && (
          <>
            <button
              onClick={() => setSelectedImageIndex(prev => prev === 0 ? allImages.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-2 rounded-full shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setSelectedImageIndex(prev => prev === allImages.length - 1 ? 0 : prev + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-2 rounded-full shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:flex lg:space-x-8">
        <div className="lg:w-2/3 space-y-10">
          {/* Tab Navigation */}
          <div className="flex space-x-2 rounded-xl bg-gray-100 p-2 shadow-sm sticky top-20 z-10 bg-opacity-90 backdrop-blur">
            {[{ id: 'overview', label: 'Overview', icon: MapPin }, { id: 'highlights', label: 'Highlights', icon: Star }, { id: 'gallery', label: 'Gallery', icon: Camera }, { id: 'faq', label: 'FAQ', icon: MessageCircle }].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex-1 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 font-medium transition ${activeTab === id ? 'bg-white shadow text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            {activeTab === 'overview' && (
              <>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{destination.overview}</p>
              </>
            )}
            {activeTab === 'highlights' && (
              <>
                <h2 className="text-2xl font-bold mb-6">Highlights</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {destination.highlights.map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <Check className="text-green-600 w-5 h-5" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {activeTab === 'gallery' && (
              <>
                <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {destination.gallery.map((img, i) => (
                    <div key={i} className="overflow-hidden rounded-xl shadow group relative">
                      <img src={img} alt="gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {activeTab === 'faq' && (
              <>
                <h2 className="text-2xl font-bold mb-6">FAQ</h2>
                <div className="space-y-4">
                  {destination.faqs.map((faq, i) => (
                    <div key={i} className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-lg text-blue-900 mb-1">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Sidebar - scrollable */}
        <div className="lg:w-1/3 max-h-[calc(100vh-7rem)] overflow-y-auto sticky top-28 self-start space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Quick Info</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 flex items-center space-x-2"><Clock className="w-4 h-4" /><span>Duration</span></span>
                <span className="font-bold text-blue-600">{destination.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 flex items-center space-x-2"><DollarSign className="w-4 h-4" /><span>Price</span></span>
                <span className="font-bold text-green-600">{destination.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 flex items-center space-x-2"><Calendar className="w-4 h-4" /><span>Best Time</span></span>
                <span className="font-bold text-orange-500">{destination.bestTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 flex items-center space-x-2"><Users className="w-4 h-4" /><span>Group Size</span></span>
                <span className="font-bold text-purple-600">2-8 People</span>
              </div>
            </div>
          </div>

          {/* Travel Packages */}
          {destination.packages && destination.packages.length > 0 && (
            <div className="bg-white p-6 rounded-2xl shadow-xl space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">Travel Packages</h3>
              {destination.packages.map((pkg, index) => (
                <div key={index} className="border p-4 rounded-xl hover:shadow transition-all space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-bold text-gray-800">{pkg.name}</h4>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">{pkg.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 flex items-center space-x-2"><Clock className="w-4 h-4" /><span>{pkg.duration}</span></p>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Inclusions:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {pkg.inclusions.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition">Book Now</button>
                </div>
              ))}
            </div>
          )}

          {/* Contact */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6 rounded-2xl space-y-4 shadow-xl">
            <h3 className="text-xl font-bold">Need Help?</h3>
            <p className="opacity-90">Our experts are here to craft your ideal travel plan.</p>
            <Link to="/contact" className="block bg-white text-blue-600 py-2 rounded-lg text-center font-semibold hover:bg-gray-100">Get Free Quote</Link>
            <a href="tel:+919876543210" className="block bg-green-500 hover:bg-green-600 py-2 rounded-lg text-center font-semibold">Call Now</a>
            <a href="https://wa.me/919876543210" className="block bg-green-600 hover:bg-green-700 py-2 rounded-lg text-center font-semibold">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;

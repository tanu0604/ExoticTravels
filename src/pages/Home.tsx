import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Globe, Shield, Heart, Play, Sparkles, MapPin, Camera, Compass, Plane, CheckCircle, TrendingUp, Clock } from 'lucide-react';
import { destinations, testimonials } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';
import TestimonialCard from '../components/TestimonialCard';
import StickyScroll from '../components/StickyScroll';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const indianDestinations = destinations.filter(dest => dest.category === 'indian').slice(0, 6);
  const foreignDestinations = destinations.filter(dest => dest.category === 'foreign').slice(0, 6);

  const heroImages = [
    'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];

  // Sticky Scroll Data
  const stickyScrollItems = [
    {
      title: "Discover Hidden Gems",
      description: "Uncover breathtaking destinations that most travelers never see. Our expert guides take you off the beaten path to experience authentic local culture, pristine natural beauty, and unforgettable moments that create lifelong memories.",
      image: "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: MapPin,
      stats: [
        { label: "Hidden Spots", value: "200+" },
        { label: "Local Guides", value: "50+" }
      ]
    },
    {
      title: "Capture Perfect Moments",
      description: "Every journey with us is a photo story waiting to be told. From sunrise over mountain peaks to sunset on pristine beaches, we ensure you're at the right place at the right time to capture Instagram-worthy shots and precious memories.",
      image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: Camera,
      stats: [
        { label: "Photo Spots", value: "500+" },
        { label: "Perfect Shots", value: "10K+" }
      ]
    },
    {
      title: "Adventure Awaits",
      description: "Whether you're seeking adrenaline-pumping activities or peaceful retreats, our adventure packages cater to every type of traveler. From mountain trekking to water sports, cultural immersion to wildlife safaris - your perfect adventure is here.",
      image: "https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: Compass,
      stats: [
        { label: "Adventures", value: "100+" },
        { label: "Thrill Seekers", value: "5K+" }
      ]
    },
    {
      title: "Seamless Travel Experience",
      description: "From the moment you book until you return home, we handle every detail. Our comprehensive travel management includes flights, accommodations, transfers, and 24/7 support, ensuring your journey is smooth and stress-free.",
      image: "https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: Plane,
      stats: [
        { label: "Countries", value: "25+" },
        { label: "Happy Travelers", value: "10K+" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <img 
                src={image} 
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Modern Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-20 text-center text-white max-w-7xl mx-auto px-4">
          <div className="animate-fade-in">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span>Trusted by 10,000+ Travelers</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="block text-white">Your Next</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-orange-400">
                Adventure
              </span>
              <span className="block text-white">Starts Here</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed font-light">
              Discover breathtaking destinations, create unforgettable memories, and experience the world like never before with our expertly curated travel packages
            </p>

            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Link
                to="/indian-trips"
                className="group relative bg-white text-gray-900 px-12 py-5 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <span className="relative z-10">Explore Destinations</span>
                <ArrowRight className="h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <button className="group flex items-center space-x-3 text-white hover:text-blue-300 transition-colors duration-300">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <Play className="h-6 w-6 ml-1" />
                </div>
                <span className="text-lg font-medium">Watch Our Story</span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { number: '15+', label: 'Years Experience', icon: Award },
                { number: '10K+', label: 'Happy Travelers', icon: Users },
                { number: '200+', label: 'Destinations', icon: Globe },
                { number: '24/7', label: 'Support', icon: Clock }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-bounce-in bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6" style={{ animationDelay: `${index * 0.2}s` }}>
                  <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-white/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modern Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75 w-4'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-500 font-medium mb-8">Trusted by travelers worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
              {['TripAdvisor', 'Google Reviews', 'Facebook', 'Instagram', 'YouTube'].map((platform, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-gray-600 font-semibold">{platform}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Scroll Experience Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <TrendingUp className="h-4 w-4" />
              <span>Why We're Different</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Experience the <span className="text-blue-600">Exotic Difference</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
              We don't just plan trips—we craft experiences that transform the way you see the world
            </p>
          </div>

          <StickyScroll items={stickyScrollItems} />
        </div>
      </section>

      {/* Featured Indian Destinations */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span>🇮🇳</span>
              <span>Incredible India</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover <span className="text-emerald-600">Incredible India</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
              From pristine beaches to majestic mountains, explore India's diverse beauty with our expertly crafted experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-animate">
            {indianDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/indian-trips"
              className="group inline-flex items-center space-x-3 bg-emerald-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span>Explore All Indian Destinations</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Foreign Destinations */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span>🌍</span>
              <span>International</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-purple-600">International</span> Adventures
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
              Experience the world's most beautiful destinations with our carefully curated international packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-animate">
            {foreignDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/foreign-trips"
              className="group inline-flex items-center space-x-3 bg-purple-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span>Explore International Destinations</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Modern Grid */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star className="h-4 w-4" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-orange-600">Exotic Travels</span>?
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
              15+ years of creating unforgettable journeys for thousands of satisfied travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-animate">
            {[
              {
                icon: Award,
                title: 'Expert Planning',
                description: '15+ years of experience crafting perfect itineraries tailored to your dreams and preferences',
                color: 'blue',
                bgColor: 'bg-blue-500',
                lightBg: 'bg-blue-50',
                textColor: 'text-blue-600'
              },
              {
                icon: Shield,
                title: '24/7 Support',
                description: 'Round-the-clock assistance throughout your journey, wherever you are in the world',
                color: 'emerald',
                bgColor: 'bg-emerald-500',
                lightBg: 'bg-emerald-50',
                textColor: 'text-emerald-600'
              },
              {
                icon: Heart,
                title: 'Personalized Service',
                description: 'Customized packages tailored to your preferences, budget, and travel style',
                color: 'purple',
                bgColor: 'bg-purple-500',
                lightBg: 'bg-purple-50',
                textColor: 'text-purple-600'
              },
              {
                icon: Users,
                title: '10,000+ Happy Customers',
                description: 'Join thousands of satisfied travelers who trust us with their dream vacations',
                color: 'orange',
                bgColor: 'bg-orange-500',
                lightBg: 'bg-orange-50',
                textColor: 'text-orange-600'
              },
              {
                icon: Globe,
                title: '200+ Destinations',
                description: 'Extensive network covering popular and offbeat destinations across the globe',
                color: 'red',
                bgColor: 'bg-red-500',
                lightBg: 'bg-red-50',
                textColor: 'text-red-600'
              },
              {
                icon: Star,
                title: 'Best Price Guarantee',
                description: 'Competitive rates with transparent pricing and best value for your money',
                color: 'teal',
                bgColor: 'bg-teal-500',
                lightBg: 'bg-teal-50',
                textColor: 'text-teal-600'
              }
            ].map((feature, index) => (
              <div key={index} className={`group relative ${feature.lightBg} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200`}>
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${feature.textColor} mb-4`}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Heart className="h-4 w-4" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What Our <span className="text-pink-600">Travelers</span> Say
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
              Real experiences from satisfied customers who have created unforgettable memories with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 grid-animate">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="section-padding bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container-width relative z-10">
          <div className="text-center animate-bounce-in">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4" />
              <span>Start Your Journey Today</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Start Your <span className="text-yellow-400">Dream Journey</span>?
            </h2>
            <p className="text-white/80 text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Book a free consultation with our travel experts and let us create your perfect itinerary. Your adventure of a lifetime is just one click away!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="group bg-white text-gray-900 px-12 py-5 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+919876543210"
                className="group flex items-center space-x-3 text-white hover:text-yellow-400 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold">Call Now</div>
                  <div className="text-sm opacity-80">+91 98765 43210</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
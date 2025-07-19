import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Globe, Shield, Heart, Play, Sparkles, MapPin, Camera, Compass, Plane, CheckCircle, TrendingUp, Clock } from 'lucide-react';
import { destinations, testimonials } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';
import TestimonialCard from '../components/TestimonialCard';
import StickyScroll from '../components/StickyScroll';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    travelDates: '',
    budget: '',
    travelers: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      // Reset form and show success message
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        destination: '',
        travelDates: '',
        budget: '',
        travelers: '',
        message: ''
      });
      
      setSubmitStatus('success');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg">
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-2000 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <img 
                src={image} 
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover animate-gradient"
              />
            </div>
          ))}
        </div>

        {/* Modern Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-levitate"></div>
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-emerald-400 rounded-full animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/6 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-morph"></div>
        </div>
        
        <div className="relative z-20 text-center text-white max-w-7xl mx-auto px-4 animate-fade-in">
          <div className="stagger-animation">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 animate-bounce-in hover:scale-105 transition-transform duration-300">
              <CheckCircle className="h-4 w-4 text-emerald-400 animate-pulse" />
              <span>Trusted by 10,000+ Travelers</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight animate-fade-in-up">
              <span className="block text-white animate-slide-in-left text-shadow">Your Next</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-orange-400 animate-gradient text-shadow animate-glow">
                Adventure
              </span>
              <span className="block text-white animate-slide-in-right text-shadow">Starts Here</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up text-shadow">
              Discover breathtaking destinations, create unforgettable memories, and experience the world like never before with our expertly curated travel packages
            </p>

            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 stagger-animation">
              <Link
                to="/indian-trips"
                className="group relative bg-white text-gray-900 px-12 py-5 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 shadow-2xl flex items-center space-x-3 overflow-hidden animate-bounce-in hover:animate-heartbeat"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="absolute inset-0 shimmer-gradient opacity-0 group-hover:opacity-100"></div>
                <span className="relative z-10">Explore Destinations</span>
                <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-110" />
              </Link>
              
              <button className="group flex items-center space-x-3 text-white hover:text-blue-300 transition-all duration-500 animate-bounce-in hover:scale-105">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 animate-float group-hover:animate-heartbeat">
                  <Play className="h-6 w-6 ml-1 animate-pulse" />
                </div>
                <span className="text-lg font-medium animate-glow">Watch Our Story</span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto stagger-animation">
              {[
                { number: '15+', label: 'Years Experience', icon: Award },
                { number: '10K+', label: 'Happy Travelers', icon: Users },
                { number: '200+', label: 'Destinations', icon: Globe },
                { number: '24/7', label: 'Support', icon: Clock }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-bounce-in bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 group" style={{ animationDelay: `${index * 0.2}s` }}>
                  <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-3 animate-float group-hover:animate-heartbeat" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-glow">{stat.number}</div>
                  <div className="text-sm md:text-base text-white/80 font-medium animate-fade-in">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modern Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30 animate-fade-in-up">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-500 hover:scale-125 ${
                index === currentSlide 
                  ? 'bg-white w-8 animate-pulse-glow' 
                  : 'bg-white/50 hover:bg-white/75 w-4 animate-float'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-b border-gray-100 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <p className="text-gray-500 font-medium mb-8 animate-fade-in">Trusted by travelers worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 stagger-animation">
              {['TripAdvisor', 'Google Reviews', 'Facebook', 'Instagram', 'YouTube'].map((platform, index) => (
                <div key={index} className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300 animate-bounce-in">
                  <Star className="h-5 w-5 text-yellow-500 fill-current animate-pulse" />
                  <span className="text-gray-600 font-semibold hover:text-gray-800 transition-colors duration-300">{platform}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Scroll Experience Section */}
      <section className="section-padding bg-gray-50 animate-fade-in">
        <div className="container-width">
          <div className="text-center mb-16 animate-slide-up stagger-animation">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-bounce-in hover:scale-105 transition-transform duration-300">
              <TrendingUp className="h-4 w-4 animate-float" />
              <span>Why We're Different</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Experience the <span className="text-blue-600 animate-glow">Exotic Difference</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed animate-fade-in">
              We don't just plan trips—we craft experiences that transform the way you see the world
            </p>
          </div>

          <div className="animate-fade-in">
            <StickyScroll items={stickyScrollItems} />
          </div>
        </div>
      </section>

      {/* Featured Indian Destinations */}
      <section className="section-padding bg-white animate-fade-in">
        <div className="container-width">
          <div className="text-center mb-16 animate-slide-up stagger-animation">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-bounce-in hover:scale-105 transition-transform duration-300">
              <span className="animate-wave">🇮🇳</span>
              <span>Incredible India</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Discover <span className="text-emerald-600 animate-glow">Incredible India</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed animate-fade-in">
              From pristine beaches to majestic mountains, explore India's diverse beauty with our expertly crafted experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-animate">
            {indianDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>

          <div className="text-center mt-16 animate-bounce-in">
            <Link
              to="/indian-trips"
              className="group inline-flex items-center space-x-3 bg-emerald-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-emerald-700 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-shimmer relative overflow-hidden"
            >
              <div className="absolute inset-0 shimmer-gradient opacity-0 group-hover:opacity-100"></div>
              <span>Explore All Indian Destinations</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-110" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Foreign Destinations */}
      <section className="section-padding bg-gray-50 animate-fade-in">
        <div className="container-width">
          <div className="text-center mb-16 animate-slide-up stagger-animation">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-bounce-in hover:scale-105 transition-transform duration-300">
              <span className="animate-float">🌍</span>
              <span>International</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              <span className="text-purple-600 animate-glow">International</span> Adventures
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Experience the world's most beautiful destinations with our carefully curated international packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-animate">
            {foreignDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>

          <div className="text-center mt-16 animate-bounce-in">
            <Link
              to="/foreign-trips"
              className="group inline-flex items-center space-x-3 bg-purple-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-purple-700 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-shimmer relative overflow-hidden"
            >
              <div className="absolute inset-0 shimmer-gradient opacity-0 group-hover:opacity-100"></div>
              <span>Explore International Destinations</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-110" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Modern Grid */}
      <section className="section-padding bg-white animate-fade-in">
        <div className="container-width">
          <div className="text-center mb-16 animate-slide-up stagger-animation">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-bounce-in hover:scale-105 transition-transform duration-300">
              <Star className="h-4 w-4 animate-pulse" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Why Choose <span className="text-orange-600 animate-glow">Exotic Travels</span>?
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed animate-fade-in">
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
              <div key={index} className={`group relative ${feature.lightBg} rounded-3xl p-8 hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-gray-200 card-hover animate-scale-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg animate-float group-hover:animate-heartbeat`}>
                  <feature.icon className="h-8 w-8 text-white animate-float-delayed" />
                </div>
                <h3 className={`text-xl font-bold ${feature.textColor} mb-4 group-hover:animate-glow transition-all duration-300`}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed animate-fade-in">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50 animate-fade-in">
        <div className="container-width">
          <div className="text-center mb-16 animate-slide-up stagger-animation">
            <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-bounce-in hover:scale-105 transition-transform duration-300">
              <Heart className="h-4 w-4 animate-heartbeat" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              What Our <span className="text-pink-600 animate-glow">Travelers</span> Say
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Real experiences from satisfied customers who have created unforgettable memories with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 grid-animate">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-500 animate-bounce-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white animate-fade-in">
        <div className="container-width">
          <div className="text-center mb-16 animate-slide-up stagger-animation">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-bounce-in hover:scale-105 transition-transform duration-300">
              <Sparkles className="h-4 w-4 animate-spin" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Plan Your <span className="text-blue-600 animate-glow">Dream Trip</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Ready to start your adventure? Fill out the form below and our travel experts will create a personalized itinerary just for you
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 animate-scale-in card-hover">
              <form onSubmit={handleSubmit} className="space-y-8 stagger-animation">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-bold text-gray-700 mb-3 animate-fade-in">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-500 text-gray-800 font-medium bg-white shadow-sm hover:shadow-md hover:scale-105"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3 animate-fade-in">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-500 text-gray-800 font-medium bg-white shadow-sm hover:shadow-md hover:scale-105"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-3 animate-fade-in">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-500 text-gray-800 font-medium bg-white shadow-sm hover:shadow-md hover:scale-105"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="destination" className="block text-sm font-bold text-gray-700 mb-3 animate-fade-in">
                      Preferred Destination
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-500 text-gray-800 font-medium bg-white shadow-sm hover:shadow-md hover:scale-105"
                    >
                      <option value="">Select a destination</option>
                      <optgroup label="Indian Destinations">
                        <option value="goa">Goa</option>
                        <option value="kerala">Kerala</option>
                        <option value="manali">Manali</option>
                        <option value="jaipur">Jaipur</option>
                        <option value="andaman">Andaman Islands</option>
                        <option value="ladakh">Ladakh</option>
                      </optgroup>
                      <optgroup label="International Destinations">
                        <option value="bali">Bali, Indonesia</option>
                        <option value="maldives">Maldives</option>
                        <option value="dubai">Dubai, UAE</option>
                        <option value="paris">Paris, France</option>
                        <option value="singapore">Singapore</option>
                        <option value="thailand">Thailand</option>
                      </optgroup>
                      <option value="other">Other (Please specify in message)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="travelDates" className="block text-sm font-bold text-gray-700 mb-3 animate-fade-in">
                      Preferred Travel Dates
                    </label>
                    <input
                      type="text"
                      id="travelDates"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-500 text-gray-800 font-medium bg-white shadow-sm hover:shadow-md hover:scale-105"
                      placeholder="e.g., December 2024 or Flexible"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-bold text-gray-700 mb-3 animate-fade-in">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-500 text-gray-800 font-medium bg-white shadow-sm hover:shadow-md hover:scale-105"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-25k">Under ₹25,000</option>
                      <option value="25k-50k">₹25,000 - ₹50,000</option>
                      <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                      <option value="100k-200k">₹1,00,000 - ₹2,00,000</option>
                      <option value="above-200k">Above ₹2,00,000</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="travelers" className="block text-sm font-bold text-gray-700 mb-3 animate-fade-in">
                    Number of Travelers
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-animation">
                    {['1 Person', '2 People', '3-4 People', '5+ People'].map((option, index) => (
                      <label key={index} className="relative">
                        <input
                          type="radio"
                          name="travelers"
                          value={option}
                          checked={formData.travelers === option}
                          onChange={handleInputChange}
                          className="sr-only peer"
                        />
                        <div className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-center font-medium text-gray-700 cursor-pointer transition-all duration-500 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:border-gray-300 bg-white shadow-sm hover:scale-105 hover:shadow-md">
                          {option}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3 animate-fade-in">
                    Tell us about your dream trip
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-500 text-gray-800 font-medium bg-white shadow-sm resize-none hover:shadow-md hover:scale-105"
                    placeholder="Share your travel preferences, special requirements, interests, or any specific requests..."
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center animate-bounce-in card-hover">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in-bounce">
                      <CheckCircle className="h-8 w-8 text-white animate-pulse" />
                    </div>
                    <h3 className="text-lg font-bold text-green-800 mb-2 animate-glow">Thank You!</h3>
                    <p className="text-green-700 animate-fade-in">
                      Your travel inquiry has been submitted successfully. Our travel experts will contact you within 24 hours with a personalized itinerary.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center animate-bounce-in card-hover">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in-bounce">
                      <span className="text-white text-2xl animate-shake">⚠️</span>
                    </div>
                    <h3 className="text-lg font-bold text-red-800 mb-2 animate-glow">Oops! Something went wrong</h3>
                    <p className="text-red-700 mb-4 animate-fade-in">
                      There was an error submitting your form. Please try again or contact us directly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center stagger-animation">
                      <a href="tel:+919876543210" className="text-red-600 hover:text-red-800 font-medium hover:scale-105 transition-transform duration-300">
                        📞 Call: +91 98765 43210
                      </a>
                      <a href="https://wa.me/919876543210" className="text-red-600 hover:text-red-800 font-medium hover:scale-105 transition-transform duration-300">
                        💬 WhatsApp Us
                      </a>
                    </div>
                  </div>
                )}
                <div className="text-center animate-bounce-in">
                  <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    className={`group px-12 py-5 rounded-2xl text-lg font-bold transition-all duration-500 transform shadow-xl flex items-center justify-center space-x-3 mx-auto relative overflow-hidden ${
                      isSubmitting || submitStatus === 'success'
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-2xl animate-shimmer'
                    }`}
                  >
                    {!(isSubmitting || submitStatus === 'success') && (
                      <div className="absolute inset-0 shimmer-gradient opacity-0 group-hover:opacity-100"></div>
                    )}
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin relative z-10"></div>
                        <span>Submitting...</span>
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="h-5 w-5 text-white animate-pulse relative z-10" />
                        <span>Submitted Successfully!</span>
                      </>
                    ) : (
                      <>
                        <span className="relative z-10">Get My Custom Itinerary</span>
                        <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-110 relative z-10" />
                      </>
                    )}
                  </button>
                  <p className="text-gray-500 text-sm mt-4 animate-fade-in">
                    {submitStatus === 'success' 
                      ? "Check your email for confirmation details" 
                      : "We'll get back to you within 24 hours with a personalized travel plan"
                    }
                  </p>
                </div>
              </form>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 grid-animate">
              <a
                href="tel:+919876543210"
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:scale-105 text-center card-hover animate-bounce-in"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 animate-float group-hover:animate-heartbeat">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg animate-pulse">📞</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:animate-glow">Call Us Now</h3>
                <p className="text-gray-600 text-sm mb-3 animate-fade-in">Speak directly with our travel experts</p>
                <p className="text-green-600 font-bold animate-glow">+91 98765 43210</p>
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:scale-105 text-center card-hover animate-bounce-in"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 animate-float group-hover:animate-heartbeat">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg animate-pulse">💬</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:animate-glow">WhatsApp Chat</h3>
                <p className="text-gray-600 text-sm mb-3 animate-fade-in">Quick responses and instant support</p>
                <p className="text-green-600 font-bold animate-glow">Chat Now</p>
              </a>

              <Link
                to="/contact"
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:scale-105 text-center card-hover animate-bounce-in"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 animate-float group-hover:animate-heartbeat">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg animate-pulse">📧</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:animate-glow">Visit Our Office</h3>
                <p className="text-gray-600 text-sm mb-3 animate-fade-in">Meet us in person for detailed planning</p>
                <p className="text-blue-600 font-bold animate-glow">Get Directions</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="section-padding bg-gray-900 relative overflow-hidden particle-bg">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 animate-float">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container-width relative z-10 animate-fade-in">
          <div className="text-center animate-bounce-in stagger-animation">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 hover:scale-105 transition-transform duration-300">
              <Sparkles className="h-4 w-4 animate-spin" />
              <span>Start Your Journey Today</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-fade-in-up">
              Ready to Start Your <span className="text-yellow-400 animate-glow">Dream Journey</span>?
            </h2>
            <p className="text-white/80 text-xl mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Book a free consultation with our travel experts and let us create your perfect itinerary. Your adventure of a lifetime is just one click away!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 stagger-animation">
              <Link
                to="/contact"
                className="group bg-white text-gray-900 px-12 py-5 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 shadow-2xl flex items-center space-x-3 animate-shimmer relative overflow-hidden"
              >
                <div className="absolute inset-0 shimmer-gradient opacity-0 group-hover:opacity-100"></div>
                <span>Book Free Consultation</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-110" />
              </Link>
              <a
                href="tel:+919876543210"
                className="group flex items-center space-x-3 text-white hover:text-yellow-400 transition-all duration-500 hover:scale-105"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 animate-float group-hover:animate-heartbeat">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse group-hover:animate-ping"></div>
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold animate-glow">Call Now</div>
                  <div className="text-sm opacity-80 animate-fade-in">+91 98765 43210</div>
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
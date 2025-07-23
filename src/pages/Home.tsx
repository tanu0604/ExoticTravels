import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Globe, Shield, Heart, Play, Sparkles, MapPin, Camera, Compass, Plane, CheckCircle, TrendingUp, Clock } from 'lucide-react';
import { destinations, testimonials } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';
import TestimonialCard from '../components/TestimonialCard';
import StickyScroll from '../components/StickyScroll';
import { motion } from 'framer-motion';
import { useMotionValue, useTransform, animate } from 'framer-motion';
import CountUp from 'react-countup';
import home1 from "../data/assests/home1.jpeg"
import home2 from "../data/assests/home2.jpeg"
import home3 from "../data/assests/home3.jpeg"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
}



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

  const heroImages = [home1,home2,home3];

const adventureWords = ["Adventure", "Journey", "Expedition"];
const gradientClasses = [
  "bg-gradient-to-r from-blue-400 via-emerald-400 to-orange-400",
  "bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400",
  "bg-gradient-to-r from-indigo-400 via-sky-400 to-teal-400"
];
const [currentWordIndex, setCurrentWordIndex] = useState(0);
const [isFading, setIsFading] = useState(false);

useEffect(() => {
  const interval = setInterval(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % adventureWords.length);
      setIsFading(false);
    }, 300); // duration of fade-out before changing text
  }, 2000);

  return () => clearInterval(interval);
}, []);

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
      {/* Hero Section */}
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-20 text-center text-white max-w-7xl mx-auto px-4">
    {/* Trust Badge */}
    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
      <CheckCircle className="h-4 w-4 text-emerald-400" />
      <span>Trusted by 10,000+ Travelers</span>
    </div>

    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
      <span className="block text-white text-shadow">Your Next</span>
  <span
  className={`block bg-clip-text text-transparent text-shadow transition-all duration-500 ease-in-out transform ${
    isFading ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
  } ${gradientClasses[currentWordIndex]}`}
>
  {adventureWords[currentWordIndex]}
</span>



      <span className="block text-white text-shadow">Starts Here</span>
    </h1>
    
    <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed font-light text-shadow">
      Discover breathtaking destinations, create unforgettable memories, and experience the world like never before with our expertly curated travel packages
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
      <Link
        to="/indian-trips"
        className="group relative bg-white text-gray-900 px-12 py-5 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 shadow-2xl flex items-center space-x-3 overflow-hidden"
      >
        <span>Explore Destinations</span>
        <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
      </Link>
      
      <button className="group flex items-center space-x-3 text-white hover:text-blue-300 transition-all duration-500">
        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-500">
          <Play className="h-6 w-6 ml-1" />
        </div>
        <span className="text-lg font-medium">Watch Our Story</span>
      </button>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {[
        { number: 15, suffix: '+', label: 'Years Experience', icon: Award },
        { number: 10000, suffix: '+', label: 'Happy Travelers', icon: Users },
        { number: 200, suffix: '+', label: 'Destinations', icon: Globe },
        { fixedText: '24/7', label: 'Support', icon: Clock }
      ].map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105"
          >
            <Icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              {'number' in stat ? (
<CountUp end={stat.number as number} suffix={stat.suffix} duration={2} />
              ) : (
                stat.fixedText
              )}
            </div>
            <div className="text-sm md:text-base text-white/80 font-medium">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  </div>

  {/* Slide Indicators */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
    {heroImages.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`h-1 rounded-full transition-all duration-500 ${
          index === currentSlide 
            ? 'bg-white w-8' 
            : 'bg-white/50 hover:bg-white/75 w-4'
        }`}
      />
    ))}
  </div>
</section>
      {/* Featured Indian Destinations */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {indianDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/indian-trips"
              className="group inline-flex items-center space-x-3 bg-emerald-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-emerald-700 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span>Explore All Indian Destinations</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Foreign Destinations */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foreignDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/foreign-trips"
              className="group inline-flex items-center space-x-3 bg-purple-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-purple-700 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span>Explore International Destinations</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div key={index} className={`group relative ${feature.lightBg} rounded-3xl p-8 hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-gray-200 card-hover`}>
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${feature.textColor} mb-4 transition-all duration-300`}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-500">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Plan Your <span className="text-blue-600">Dream Trip</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
              Ready to start your adventure? Fill out the form below and our travel experts will create a personalized itinerary just for you
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 card-hover">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-bold text-gray-700 mb-3">
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
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
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
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-3">
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
                    <label htmlFor="destination" className="block text-sm font-bold text-gray-700 mb-3">
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
                    <label htmlFor="travelDates" className="block text-sm font-bold text-gray-700 mb-3">
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
                    <label htmlFor="budget" className="block text-sm font-bold text-gray-700 mb-3">
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
                  <label htmlFor="travelers" className="block text-sm font-bold text-gray-700 mb-3">
                    Number of Travelers
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3">
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
                  <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center card-hover">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-700">
                      Your travel inquiry has been submitted successfully. Our travel experts will contact you within 24 hours with a personalized itinerary.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center card-hover">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">⚠️</span>
                    </div>
                    <h3 className="text-lg font-bold text-red-800 mb-2">Oops! Something went wrong</h3>
                    <p className="text-red-700 mb-4">
                      There was an error submitting your form. Please try again or contact us directly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a href="tel:+919876543210" className="text-red-600 hover:text-red-800 font-medium hover:scale-105 transition-transform duration-300">
                        📞 Call: +91 98765 43210
                      </a>
                      <a href="https://wa.me/919876543210" className="text-red-600 hover:text-red-800 font-medium hover:scale-105 transition-transform duration-300">
                        💬 WhatsApp Us
                      </a>
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    className={`group px-12 py-5 rounded-2xl text-lg font-bold transition-all duration-500 transform shadow-xl flex items-center justify-center space-x-3 mx-auto relative overflow-hidden ${
                      isSubmitting || submitStatus === 'success'
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-2xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="h-5 w-5 text-white" />
                        <span>Submitted Successfully!</span>
                      </>
                    ) : (
                      <>
                        <span>Get My Custom Itinerary</span>
                        <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
                      </>
                    )}
                  </button>
                  <p className="text-gray-500 text-sm mt-4">
                    {submitStatus === 'success' 
                      ? "Check your email for confirmation details" 
                      : "We'll get back to you within 24 hours with a personalized travel plan"
                    }
                  </p>
                </div>
              </form>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <a
                href="tel:+919876543210"
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:scale-105 text-center card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">📞</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Call Us Now</h3>
                <p className="text-gray-600 text-sm mb-3">Speak directly with our travel experts</p>
                <p className="text-green-600 font-bold">+91 98765 43210</p>
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:scale-105 text-center card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">💬</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">WhatsApp Chat</h3>
                <p className="text-gray-600 text-sm mb-3">Quick responses and instant support</p>
                <p className="text-green-600 font-bold">Chat Now</p>
              </a>

              <Link
                to="/contact"
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:scale-105 text-center card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">📧</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Visit Our Office</h3>
                <p className="text-gray-600 text-sm mb-3">Meet us in person for detailed planning</p>
                <p className="text-blue-600 font-bold">Get Directions</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 relative overflow-hidden">
        <div className="container-width relative z-10">
          <div className="text-center">
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
                className="group bg-white text-gray-900 px-12 py-5 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 shadow-2xl flex items-center space-x-3"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
              </Link>
              <a
                href="tel:+919876543210"
                className="group flex items-center space-x-3 text-white hover:text-yellow-400 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-500">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
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
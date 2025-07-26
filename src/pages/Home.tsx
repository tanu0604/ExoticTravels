import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact"
import About from "./About";
import Blog from "./Blog";
import {
  ArrowRight,
  Star,
  Users,
  Award,
  Globe,
  Shield,
  Heart,
  Play,
  Sparkles,
  MapPin,
  Camera,
  Compass,
  Plane,
  CheckCircle,
  TrendingUp,
  Clock,
} from "lucide-react";
import { destinations, testimonials } from "../data/destinations";
import DestinationCard from "../components/DestinationCard";
import TestimonialCard from "../components/TestimonialCard";
import StickyScroll from "../components/StickyScroll";
import { motion } from "framer-motion";
import { useMotionValue, useTransform, animate } from "framer-motion";
import CountUp from "react-countup";
import home1 from "../data/assests/home1.jpg";
import home2 from "../data/assests/home2.jpg";
import home3 from "../data/assests/home3.jpg";

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
 


  const indianDestinations = destinations
    .filter((dest) => dest.category === "indian")
    .slice(0, 6);
  const foreignDestinations = destinations
    .filter((dest) => dest.category === "foreign")
    .slice(0, 6);

  const heroImages = [home1, home2, home3];

  const adventureWords = ["Adventure", "Journey", "Expedition"];
  const gradientClasses = [
    "bg-gradient-to-r from-blue-400 via-emerald-400 to-orange-400",
    "bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400",
    "bg-gradient-to-r from-indigo-400 via-sky-400 to-teal-400",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentWordIndex(
          (prevIndex) => (prevIndex + 1) % adventureWords.length
        );
        setIsFading(false);
      }, 300); // duration of fade-out before changing text
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Sticky Scroll Data
  const stickyScrollItems = [
    {
      title: "Discover Hidden Gems",
      description:
        "Uncover breathtaking destinations that most travelers never see. Our expert guides take you off the beaten path to experience authentic local culture, pristine natural beauty, and unforgettable moments that create lifelong memories.",
      image:
        "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: MapPin,
      stats: [
        { label: "Hidden Spots", value: "200+" },
        { label: "Local Guides", value: "50+" },
      ],
    },
    {
      title: "Capture Perfect Moments",
      description:
        "Every journey with us is a photo story waiting to be told. From sunrise over mountain peaks to sunset on pristine beaches, we ensure you're at the right place at the right time to capture Instagram-worthy shots and precious memories.",
      image:
        "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: Camera,
      stats: [
        { label: "Photo Spots", value: "500+" },
        { label: "Perfect Shots", value: "10K+" },
      ],
    },
    {
      title: "Adventure Awaits",
      description:
        "Whether you're seeking adrenaline-pumping activities or peaceful retreats, our adventure packages cater to every type of traveler. From mountain trekking to water sports, cultural immersion to wildlife safaris - your perfect adventure is here.",
      image:
        "https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: Compass,
      stats: [
        { label: "Adventures", value: "100+" },
        { label: "Thrill Seekers", value: "5K+" },
      ],
    },
    {
      title: "Seamless Travel Experience",
      description:
        "From the moment you book until you return home, we handle every detail. Our comprehensive travel management includes flights, accommodations, transfers, and 24/7 support, ensuring your journey is smooth and stress-free.",
      image:
        "https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: Plane,
      stats: [
        { label: "Countries", value: "25+" },
        { label: "Happy Travelers", value: "10K+" },
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);


  

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
           <div
  key={index}
  className={`absolute inset-0 transition-opacity duration-1000 ${
    index === currentSlide ? "opacity-100" : "opacity-0"
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
                isFading ? "opacity-0 scale-90" : "opacity-100 scale-100"
              } ${gradientClasses[currentWordIndex]}`}
            >
              {adventureWords[currentWordIndex]}
            </span>

            <span className="block text-white text-shadow">Starts Here</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed font-light text-shadow">
            Discover breathtaking destinations, create unforgettable memories,
            and experience the world like never before with our expertly curated
            travel packages
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
              {
                number: 15,
                suffix: "+",
                label: "Years Experience",
                icon: Award,
              },
              {
                number: 10000,
                suffix: "+",
                label: "Happy Travelers",
                icon: Users,
              },
              { number: 200, suffix: "+", label: "Destinations", icon: Globe },
              { fixedText: "24/7", label: "Support", icon: Clock },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105"
                >
                  <Icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {"number" in stat ? (
                      <CountUp
                        end={stat.number as number}
                        suffix={stat.suffix}
                        duration={2}
                      />
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
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75 w-4"
              }`}
            />
          ))}
        </div>
      </section>


      <About></About>
      {/* Featured Indian Destinations */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span>🇮🇳</span>
              <span>Incredible India</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover{" "}
              <span className="text-emerald-600">Incredible India</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
              From pristine beaches to majestic mountains, explore India's
              diverse beauty with our expertly crafted experiences
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
              Experience the world's most beautiful destinations with our
              carefully curated international packages
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
              Why Choose <span className="text-orange-600">Exotic Travels</span>
              ?
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
              15+ years of creating unforgettable journeys for thousands of
              satisfied travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Expert Planning",
                description:
                  "15+ years of experience crafting perfect itineraries tailored to your dreams and preferences",
                color: "blue",
                bgColor: "bg-blue-500",
                lightBg: "bg-blue-50",
                textColor: "text-blue-600",
              },
              {
                icon: Shield,
                title: "24/7 Support",
                description:
                  "These freaking guys seriously - it's 1:30 in the night he isn't asleep",
                color: "emerald",
                bgColor: "bg-emerald-500",
                lightBg: "bg-emerald-50",
                textColor: "text-emerald-600",
              },
              {
                icon: Heart,
                title: "Personalized Service",
                description:
                  "Customized packages tailored to your preferences, budget, and travel style",
                color: "purple",
                bgColor: "bg-purple-500",
                lightBg: "bg-purple-50",
                textColor: "text-purple-600",
              },
              {
                icon: Users,
                title: "10,000+ Happy Customers",
                description:
                  "Join thousands of satisfied travelers who trust us with their dream vacations",
                color: "orange",
                bgColor: "bg-orange-500",
                lightBg: "bg-orange-50",
                textColor: "text-orange-600",
              },
              {
                icon: Globe,
                title: "200+ Destinations",
                description:
                  "Extensive network covering popular and offbeat destinations across the globe",
                color: "red",
                bgColor: "bg-red-500",
                lightBg: "bg-red-50",
                textColor: "text-red-600",
              },
              {
                icon: Star,
                title: "Best Price Guarantee",
                description:
                  "Competitive rates with transparent pricing and best value for your money",
                color: "teal",
                bgColor: "bg-teal-500",
                lightBg: "bg-teal-50",
                textColor: "text-teal-600",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group relative ${feature.lightBg} rounded-3xl p-8 hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-gray-200 card-hover`}
              >
                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3
                  className={`text-xl font-bold ${feature.textColor} mb-4 transition-all duration-300`}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
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
              Real experiences from satisfied customers who have created
              unforgettable memories with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="transform hover:scale-105 transition-transform duration-500"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact></Contact>
      <Blog></Blog>
      {/* CTA Section */}
      <section className="section-padding bg-gray-900 relative overflow-hidden">
        <div className="container-width relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4" />
              <span>Start Your Journey Today</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Start Your{" "}
              <span className="text-yellow-400">Dream Journey</span>?
            </h2>
            <p className="text-white/80 text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Book a free consultation with our travel experts and let us create
              your perfect itinerary. Your adventure of a lifetime is just one
              click away!
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

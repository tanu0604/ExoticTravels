import React from "react";
import { Award, Users, Globe, Heart, Star, Shield } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Exotic Travels
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Your trusted partner in creating unforgettable travel experiences
              across India and around the world
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
               Started in 2015, Exotic Travels was born out of a vision to become one of the top-rated travel companies in Eastern India. With a strong focus on customer satisfaction and curated travel experiences, the company has steadily grown into a trusted name in the region’s travel landscape, turning vacation dreams into unforgettable journeys.
              </p>
              <p className="text-gray-600 mb-4">
                Over the past 10 years, we've had the privilege of creating
                thousands of unforgettable memories for our clients. From the
                serene backwaters of Kerala to the romantic beaches of Maldives,
                from the adventurous mountains of Himachal to the cultural
                richness of Rajasthan, we've been there every step of the way.
              </p>
              <p className="text-gray-600">
                Our commitment to excellence, personalized service, and
                authentic experiences has made us the preferred choice for
                travelers across India. We don't just plan trips; we craft
                experiences that last a lifetime.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Travel memories"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To create extraordinary travel experiences that inspire,
                educate, and transform lives. We believe that travel is more
                than just visiting new places—it's about connecting with
                cultures, creating memories, and discovering the beauty of our
                world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the leading travel company in Eastern India, known for our
                commitment to excellence, innovation, and sustainable tourism
                practices. We envision a world where travel brings people
                together and creates understanding across cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Exotic Travels?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With over 10 years of experience and thousands of satisfied
              customers, here's what makes us special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Expert Planning
              </h3>
              <p className="text-gray-600">
                Our experienced travel consultants craft personalized
                itineraries based on your preferences and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock assistance ensures you're never alone during
                your journey, wherever you are.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                10,000+ Happy Customers
              </h3>
              <p className="text-gray-600">
                Join thousands of satisfied travelers who have trusted us with
                their dream vacations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                200+ Destinations
              </h3>
              <p className="text-gray-600">
                Extensive network covering popular and offbeat destinations
                across India and internationally.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Best Price Guarantee
              </h3>
              <p className="text-gray-600">
                Competitive pricing with no hidden charges. We offer the best
                value for your money.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Personalized Service
              </h3>
              <p className="text-gray-600">
                Every trip is customized to match your interests, ensuring a
                unique and memorable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of travel experts is passionate about creating
              extraordinary experiences for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">CG</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Chanchal Ghosh
              </h3>
              <p className="text-gray-600 mb-2">Operations (International)</p>
              <p className="text-gray-500 text-sm">
                Chanchal has been leading international operations at Exotic
                Travels since March 2025, ensuring seamless travel experiences
                across borders with dedication and efficiency.
              </p>
            </div>

            {/* <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">PS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Priya Sharma</h3>
              <p className="text-gray-600 mb-2">Travel Consultant</p>
              <p className="text-gray-500 text-sm">
                Priya specializes in international destinations and has helped hundreds of families create perfect vacation memories.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React, { useState } from 'react';
import { destinations } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';
import { Filter } from 'lucide-react';

const IndianTrips: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  
  const indianDestinations = destinations.filter(dest => dest.category === 'indian');
  const regions = ['All', 'North', 'South', 'East', 'West'];

  const filteredDestinations = selectedRegion === 'All' 
    ? indianDestinations 
    : indianDestinations.filter(dest => dest.region === selectedRegion);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Incredible India
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Explore India's diverse landscapes, rich culture, and unforgettable experiences with our curated travel packages
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by Region:</span>
            </div>
            <div className="flex space-x-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedRegion === region
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedRegion === 'All' ? 'All Indian Destinations' : `${selectedRegion} India`}
            </h2>
            <p className="text-gray-600">
              {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No destinations found for the selected region.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default IndianTrips;
import React, { useState } from 'react';
import { destinations } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';
import { Filter } from 'lucide-react';

const ForeignTrips: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  
  const foreignDestinations = destinations.filter(dest => dest.category === 'foreign');
  const types = ['All', 'Beach', 'Mountains', 'Honeymoon', 'Adventure', 'Family'];

  const filteredDestinations = selectedType === 'All' 
    ? foreignDestinations 
    : foreignDestinations.filter(dest => dest.type === selectedType);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              International Adventures
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Explore the world's most beautiful destinations with our carefully curated international travel packages
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
              <span className="text-gray-700 font-medium">Filter by Type:</span>
            </div>
            <div className="flex space-x-2 flex-wrap">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedType === type
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
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
              {selectedType === 'All' ? 'All International Destinations' : `${selectedType} Destinations`}
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
              <p className="text-gray-500 text-lg">No destinations found for the selected type.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ForeignTrips;
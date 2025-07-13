export interface Destination {
  id: string;
  name: string;
  image: string;
  price: string;
  duration: string;
  description: string;
  category: 'indian' | 'foreign';
  region?: string;
  type?: string;
  overview: string;
  highlights: string[];
  gallery: string[];
  bestTime: string;
  packages: Package[];
  faqs: FAQ[];
}

export interface Package {
  name: string;
  duration: string;
  price: string;
  inclusions: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export const destinations: Destination[] = [
  // Indian Destinations
  {
    id: 'goa',
    name: 'Goa',
    image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '₹15,999',
    duration: '4 Days 3 Nights',
    description: 'Sun, sand, and endless fun in India\'s beach paradise',
    category: 'indian',
    region: 'West',
    type: 'Beach',
    overview: 'Goa, India\'s smallest state, is a tropical paradise known for its pristine beaches, vibrant nightlife, Portuguese colonial architecture, and laid-back atmosphere. From the bustling beaches of North Goa to the serene shores of South Goa, this coastal haven offers something for every traveler.',
    highlights: [
      'Beautiful beaches like Baga, Calangute, and Anjuna',
      'Historic churches and Portuguese architecture',
      'Vibrant nightlife and beach parties',
      'Water sports and adventure activities',
      'Delicious Goan cuisine and seafood',
      'Spice plantations and nature tours'
    ],
    gallery: [
      'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bestTime: 'Nov - Mar',
    packages: [
      {
        name: 'Goa Beach Getaway',
        duration: '4 Days 3 Nights',
        price: '₹15,999',
        inclusions: [
          'Accommodation in 3-star beach resort',
          'Daily breakfast',
          'Airport transfers',
          'Sightseeing tours',
          'Water sports activities'
        ]
      },
      {
        name: 'Goa Luxury Experience',
        duration: '5 Days 4 Nights',
        price: '₹28,999',
        inclusions: [
          'Luxury 5-star resort stay',
          'All meals included',
          'Private transfers',
          'Sunset cruise',
          'Spa treatments',
          'Adventure activities'
        ]
      },
      {
        name: 'Goa Budget Special',
        duration: '3 Days 2 Nights',
        price: '₹9,999',
        inclusions: [
          'Budget hotel accommodation',
          'Breakfast included',
          'Shared transfers',
          'Basic sightseeing',
          'Beach activities'
        ]
      }
    ],
    faqs: [
      {
        question: 'What is the best time to visit Goa?',
        answer: 'The best time to visit Goa is from November to March when the weather is pleasant and perfect for beach activities.'
      },
      {
        question: 'What are the must-visit beaches in Goa?',
        answer: 'Popular beaches include Baga, Calangute, Anjuna, Vagator in North Goa, and Palolem, Agonda in South Goa.'
      }
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    image: 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '₹18,999',
    duration: '5 Days 4 Nights',
    description: 'God\'s Own Country with backwaters, hills, and spices',
    category: 'indian',
    region: 'South',
    type: 'Nature',
    overview: 'Kerala, known as "God\'s Own Country," is a tropical paradise in South India famous for its serene backwaters, lush hill stations, pristine beaches, and rich cultural heritage. Experience the unique blend of natural beauty and traditional charm.',
    highlights: [
      'Backwater cruises in Alleppey and Kumarakom',
      'Hill stations like Munnar and Wayanad',
      'Ayurvedic treatments and spa therapies',
      'Traditional Kathakali performances',
      'Spice plantations and tea gardens',
      'Beautiful beaches in Kovalam and Varkala'
    ],
    gallery: [
      'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bestTime: 'Oct - Mar',
    packages: [
      {
        name: 'Kerala Backwaters & Hills',
        duration: '5 Days 4 Nights',
        price: '₹18,999',
        inclusions: [
          'Houseboat stay in Alleppey',
          'Hill station accommodation',
          'All meals during houseboat',
          'Sightseeing tours',
          'Spice plantation visit'
        ]
      },
      {
        name: 'Kerala Ayurveda Retreat',
        duration: '7 Days 6 Nights',
        price: '₹35,999',
        inclusions: [
          'Ayurvedic resort stay',
          'Daily Ayurvedic treatments',
          'Organic meals',
          'Yoga sessions',
          'Nature walks',
          'Cultural performances'
        ]
      },
      {
        name: 'Kerala Family Package',
        duration: '6 Days 5 Nights',
        price: '₹24,999',
        inclusions: [
          'Family-friendly accommodations',
          'All meals included',
          'Private vehicle',
          'Wildlife sanctuary visit',
          'Beach activities',
          'Cultural shows'
        ]
      }
    ],
    faqs: [
      {
        question: 'What is the best way to experience Kerala backwaters?',
        answer: 'The best way is to stay overnight in a traditional houseboat in Alleppey or Kumarakom, cruising through the serene canals.'
      },
      {
        question: 'Which hill station is best in Kerala?',
        answer: 'Munnar is the most popular hill station, famous for its tea plantations, while Wayanad offers wildlife and adventure activities.'
      }
    ]
  },
  {
    id: 'manali',
    name: 'Manali',
    image: 'https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '₹12,999',
    duration: '4 Days 3 Nights',
    description: 'Adventure and serenity in the Himalayan foothills',
    category: 'indian',
    region: 'North',
    type: 'Mountains',
    overview: 'Manali, nestled in the Kullu Valley of Himachal Pradesh, is a popular hill station known for its snow-capped mountains, adventure activities, and pleasant climate. It\'s a perfect destination for both adventure seekers and those looking for a peaceful retreat.',
    highlights: [
      'Rohtang Pass and Solang Valley adventures',
      'Hadimba Temple and Old Manali charm',
      'Adventure sports like paragliding and skiing',
      'Beautiful apple orchards and pine forests',
      'Trekking opportunities in the Himalayas',
      'Local markets and Tibetan monasteries'
    ],
    gallery: [
      'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bestTime: 'Mar - Jun, Oct - Feb',
    packages: [
      {
        name: 'Manali Adventure Package',
        duration: '4 Days 3 Nights',
        price: '₹12,999',
        inclusions: [
          'Hotel accommodation',
          'Daily breakfast',
          'Rohtang Pass excursion',
          'Adventure activities',
          'Local sightseeing'
        ]
      },
      {
        name: 'Manali Honeymoon Special',
        duration: '5 Days 4 Nights',
        price: '₹19,999',
        inclusions: [
          'Romantic resort stay',
          'Candlelight dinner',
          'Couple spa session',
          'Private sightseeing',
          'Flower bed decoration',
          'Photography session'
        ]
      },
      {
        name: 'Manali Trekking Expedition',
        duration: '6 Days 5 Nights',
        price: '₹16,999',
        inclusions: [
          'Trekking equipment',
          'Professional guide',
          'Camping arrangements',
          'All meals during trek',
          'Safety gear',
          'Transportation'
        ]
      }
    ],
    faqs: [
      {
        question: 'When is Rohtang Pass open for tourists?',
        answer: 'Rohtang Pass is typically open from May to November, depending on weather conditions and snow clearance.'
      },
      {
        question: 'What adventure activities are available in Manali?',
        answer: 'Popular activities include paragliding, river rafting, skiing (in winter), trekking, and mountain biking.'
      }
    ]
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '₹11,999',
    duration: '3 Days 2 Nights',
    description: 'The Pink City with royal palaces and rich heritage',
    category: 'indian',
    region: 'North',
    type: 'Heritage',
    overview: 'Jaipur, the capital of Rajasthan, is known as the Pink City for its distinctive pink-colored buildings. This UNESCO World Heritage city is famous for its magnificent palaces, forts, vibrant markets, and rich Rajasthani culture.',
    highlights: [
      'Amber Fort and Palace complex',
      'City Palace and Hawa Mahal',
      'Jantar Mantar astronomical observatory',
      'Colorful bazaars and handicrafts',
      'Traditional Rajasthani cuisine',
      'Cultural performances and folk dances'
    ],
    gallery: [
      'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bestTime: 'Oct - Mar',
    packages: [
      {
        name: 'Jaipur Heritage Tour',
        duration: '3 Days 2 Nights',
        price: '₹11,999',
        inclusions: [
          'Heritage hotel stay',
          'Daily breakfast',
          'All monument entries',
          'Guided city tour',
          'Cultural show',
          'Shopping tour'
        ]
      },
      {
        name: 'Royal Jaipur Experience',
        duration: '4 Days 3 Nights',
        price: '₹22,999',
        inclusions: [
          'Palace hotel accommodation',
          'Royal dining experiences',
          'Elephant ride at Amber Fort',
          'Private guided tours',
          'Traditional costume photoshoot',
          'Luxury transportation'
        ]
      },
      {
        name: 'Jaipur Budget Explorer',
        duration: '2 Days 1 Night',
        price: '₹7,999',
        inclusions: [
          'Budget hotel stay',
          'Breakfast included',
          'Major sightseeing',
          'Local transport',
          'Market visit'
        ]
      }
    ],
    faqs: [
      {
        question: 'Why is Jaipur called the Pink City?',
        answer: 'Jaipur is called the Pink City because most of the old city buildings are painted in pink color, which was done to welcome Prince Albert in 1876.'
      },
      {
        question: 'What are the must-visit attractions in Jaipur?',
        answer: 'Must-visit attractions include Amber Fort, City Palace, Hawa Mahal, Jantar Mantar, and the colorful bazaars of the old city.'
      }
    ]
  },
  {
    id: 'andaman',
    name: 'Andaman Islands',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '₹25,999',
    duration: '5 Days 4 Nights',
    description: 'Pristine beaches and crystal-clear waters',
    category: 'indian',
    region: 'East',
    type: 'Beach',
    overview: 'The Andaman and Nicobar Islands are a group of pristine islands in the Bay of Bengal, known for their crystal-clear waters, white sandy beaches, coral reefs, and rich marine life. It\'s a perfect destination for beach lovers and adventure enthusiasts.',
    highlights: [
      'Radhanagar Beach - Asia\'s best beach',
      'Scuba diving and snorkeling',
      'Cellular Jail historical significance',
      'Pristine coral reefs and marine life',
      'Water sports and island hopping',
      'Limestone caves and mangrove forests'
    ],
    gallery: [
      'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bestTime: 'Oct - May',
    packages: [
      {
        name: 'Andaman Beach Paradise',
        duration: '5 Days 4 Nights',
        price: '₹25,999',
        inclusions: [
          'Beach resort accommodation',
          'All meals included',
          'Inter-island transfers',
          'Scuba diving session',
          'Sightseeing tours',
          'Water sports activities'
        ]
      },
      {
        name: 'Andaman Luxury Escape',
        duration: '6 Days 5 Nights',
        price: '₹45,999',
        inclusions: [
          'Luxury resort stay',
          'Private beach access',
          'Helicopter transfers',
          'Premium diving experiences',
          'Spa treatments',
          'Gourmet dining'
        ]
      },
      {
        name: 'Andaman Adventure Package',
        duration: '7 Days 6 Nights',
        price: '₹32,999',
        inclusions: [
          'Adventure resort stay',
          'Multiple diving sessions',
          'Island hopping tours',
          'Trekking expeditions',
          'Kayaking adventures',
          'Photography tours'
        ]
      }
    ],
    faqs: [
      {
        question: 'Do I need a permit to visit Andaman Islands?',
        answer: 'Indian citizens don\'t need a permit, but foreign nationals require a Restricted Area Permit (RAP) which is issued on arrival.'
      },
      {
        question: 'What is the best way to reach Andaman Islands?',
        answer: 'The best way is by flight to Port Blair. There are also ship services from Chennai, Kolkata, and Visakhapatnam.'
      }
    ]
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '₹22,999',
    duration: '6 Days 5 Nights',
    description: 'Land of high passes and Buddhist monasteries',
    category: 'indian',
    region: 'North',
    type: 'Adventure',
    overview: 'Ladakh, known as the "Land of High Passes," is a high-altitude desert region in the northernmost part of India. Famous for its dramatic landscapes, Buddhist monasteries, and adventure opportunities, it offers a unique cultural and natural experience.',
    highlights: [
      'Pangong Tso and Tso Moriri lakes',
      'Ancient Buddhist monasteries',
      'Nubra Valley and Khardung La Pass',
      'Magnetic Hill and Sangam point',
      'Traditional Ladakhi culture',
      'Adventure activities and trekking'
    ],
    gallery: [
      'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bestTime: 'May - Sep',
    packages: [
      {
        name: 'Ladakh Adventure Tour',
        duration: '6 Days 5 Nights',
        price: '₹22,999',
        inclusions: [
          'Hotel accommodation',
          'All meals included',
          'Oxygen cylinder support',
          'Pangong Tso excursion',
          'Monastery visits',
          'Local sightseeing'
        ]
      },
      {
        name: 'Ladakh Bike Expedition',
        duration: '8 Days 7 Nights',
        price: '₹35,999',
        inclusions: [
          'Royal Enfield bike rental',
          'Camping equipment',
          'Professional guide',
          'Fuel and permits',
          'Safety gear',
          'Support vehicle'
        ]
      },
      {
        name: 'Ladakh Cultural Journey',
        duration: '7 Days 6 Nights',
        price: '₹28,999',
        inclusions: [
          'Heritage guesthouse stays',
          'Cultural interactions',
          'Festival participation',
          'Traditional meals',
          'Handicraft workshops',
          'Photography tours'
        ]
      }
    ],
    faqs: [
      {
        question: 'What is the best time to visit Ladakh?',
        answer: 'The best time is from May to September when the weather is pleasant and most roads are accessible.'
      },
      {
        question: 'Do I need acclimatization for Ladakh?',
        answer: 'Yes, Ladakh is at high altitude (3500m+), so it\'s recommended to rest for 1-2 days upon arrival for acclimatization.'
      }
    ]
  },

  // Foreign Destinations
  {
    id: 'bali',
    name: 'Bali, Indonesia',
    image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '₹45,999',
    duration: '5 Days 4 Nights',
    description: 'Tropical paradise with temples, beaches, and culture',
    category: 'foreign',
    type: 'Beach',
    overview: 'Bali, the Island of the Gods, is Indonesia\'s most famous destination known for its stunning beaches, ancient temples, lush rice terraces, and vibrant culture. This tropical paradise offers a perfect blend of relaxation and adventure.',
    highlights: [
      'Beautiful beaches like Kuta, Seminyak, and Nusa Dua',
      'Ancient temples including Tanah Lot and Uluwatu',
      'Ubud\'s rice terraces and cultural attractions',
      'Traditional Balinese dance performances',
      'Volcano trekking and water sports',
      'Spa treatments and wellness retreats'
    ],
    gallery: [
      'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bestTime: 'Apr - Oct',
    packages: [
      {
        name: 'Bali Beach & Culture',
        duration: '5 Days 4 Nights',
        price: '₹45,999',
        inclusions: [
          'Beach resort accommodation',
          'Daily breakfast',
          'Airport transfers',
          'Temple tours',
          'Cultural shows',
          'Ubud day trip'
        ]
      },
      {
        name: 'Bali Luxury Retreat',
        duration: '6 Days 5 Nights',
        price: '₹75,999',
        inclusions: [
          'Luxury villa stay',
          'Private pool access',
          'All meals included',
          'Spa treatments',
          'Private tours',
          'Sunset dinner cruise'
        ]
      },
      {
        name: 'Bali Honeymoon Package',
        duration: '7 Days 6 Nights',
        price: '₹65,999',
        inclusions: [
          'Romantic resort stay',
          'Couple spa sessions',
          'Candlelight dinners',
          'Private beach access',
          'Photography session',
          'Romantic excursions'
        ]
      }
    ],
    faqs: [
      {
        question: 'Do I need a visa for Bali?',
        answer: 'Indian citizens can get a visa on arrival for 30 days or apply for an e-visa before travel.'
      },
      {
        question: 'What is the best area to stay in Bali?',
        answer: 'Seminyak for beaches and nightlife, Ubud for culture and nature, Nusa Dua for luxury resorts.'
      }
    ]
  },
  {
    id: 'maldives',
    name: 'Maldives',
    image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '₹85,999',
    duration: '4 Days 3 Nights',
    description: 'Luxury overwater villas and pristine coral reefs',
    category: 'foreign',
    type: 'Beach',
    overview: 'The Maldives is a tropical paradise consisting of 1,192 coral islands grouped into 26 atolls. Known for its crystal-clear waters, pristine white beaches, luxury resorts, and world-class diving, it\'s the ultimate romantic getaway.',
    highlights: [
      'Overwater villas and luxury resorts',
      'World-class diving and snorkeling',
      'Pristine white sand beaches',
      'Dolphin watching and sunset cruises',
      'Spa treatments over the ocean',
      'Water sports and fishing'
    ],
    gallery: [
      'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bestTime: 'Nov - Apr',
    packages: [
      {
        name: 'Maldives Beach Villa',
        duration: '4 Days 3 Nights',
        price: '₹85,999',
        inclusions: [
          'Beach villa accommodation',
          'All meals included',
          'Seaplane transfers',
          'Snorkeling equipment',
          'Sunset cruise',
          'Spa treatment'
        ]
      },
      {
        name: 'Maldives Overwater Experience',
        duration: '5 Days 4 Nights',
        price: '₹1,25,999',
        inclusions: [
          'Overwater villa stay',
          'Premium all-inclusive',
          'Private butler service',
          'Diving sessions',
          'Romantic dinners',
          'Yacht excursions'
        ]
      },
      {
        name: 'Maldives Honeymoon Special',
        duration: '6 Days 5 Nights',
        price: '₹1,45,999',
        inclusions: [
          'Honeymoon suite',
          'Couple spa treatments',
          'Private dining experiences',
          'Champagne welcome',
          'Photography session',
          'Sunset fishing trip'
        ]
      }
    ],
    faqs: [
      {
        question: 'Do I need a visa for Maldives?',
        answer: 'Indian citizens get a free 30-day visa on arrival in Maldives.'
      },
      {
        question: 'What is the best way to reach resort islands?',
        answer: 'Resorts provide transfers via speedboat or seaplane from Male International Airport.'
      }
    ]
  },
  {
    id: 'dubai',
    name: 'Dubai, UAE',
    image: 'https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '₹35,999',
    duration: '4 Days 3 Nights',
    description: 'Modern marvels, luxury shopping, and desert adventures',
    category: 'foreign',
    type: 'City',
    overview: 'Dubai is a dazzling city in the UAE known for its ultramodern architecture, luxury shopping, vibrant nightlife, and desert adventures. From the world\'s tallest building to artificial islands, Dubai offers a unique blend of tradition and innovation.',
    highlights: [
      'Burj Khalifa and Dubai Mall',
      'Palm Jumeirah and Atlantis',
      'Desert safari and camel riding',
      'Dubai Marina and JBR Beach',
      'Gold and spice souks',
      'Luxury shopping and dining'
    ],
    gallery: [
      'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bestTime: 'Nov - Mar',
    packages: [
      {
        name: 'Dubai City Explorer',
        duration: '4 Days 3 Nights',
        price: '₹35,999',
        inclusions: [
          '4-star hotel accommodation',
          'Daily breakfast',
          'Airport transfers',
          'City tour',
          'Desert safari',
          'Burj Khalifa tickets'
        ]
      },
      {
        name: 'Dubai Luxury Experience',
        duration: '5 Days 4 Nights',
        price: '₹65,999',
        inclusions: [
          'Luxury hotel stay',
          'All meals included',
          'Private transfers',
          'Premium tours',
          'Spa treatments',
          'Yacht cruise'
        ]
      },
      {
        name: 'Dubai Family Fun',
        duration: '6 Days 5 Nights',
        price: '₹55,999',
        inclusions: [
          'Family-friendly hotel',
          'Theme park tickets',
          'Aquarium visits',
          'Beach activities',
          'Shopping tours',
          'Cultural experiences'
        ]
      }
    ],
    faqs: [
      {
        question: 'Do I need a visa for Dubai?',
        answer: 'Indian citizens can get a visa on arrival for 14 days or apply for an e-visa for longer stays.'
      },
      {
        question: 'What is the best time to visit Dubai?',
        answer: 'November to March is the best time when the weather is pleasant and perfect for outdoor activities.'
      }
    ]
  },
  {
    id: 'paris',
    name: 'Paris, France',
    image: 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '₹75,999',
    duration: '5 Days 4 Nights',
    description: 'City of Love with iconic landmarks and culture',
    category: 'foreign',
    type: 'City',
    overview: 'Paris, the City of Light and Love, is the capital of France known for its iconic landmarks, world-class museums, romantic atmosphere, and exquisite cuisine. From the Eiffel Tower to the Louvre, Paris offers an unforgettable cultural experience.',
    highlights: [
      'Eiffel Tower and Champs-Élysées',
      'Louvre Museum and Notre-Dame',
      'Seine River cruise',
      'Montmartre and Sacré-Cœur',
      'French cuisine and wine tasting',
      'Palace of Versailles day trip'
    ],
    gallery: [
      'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bestTime: 'Apr - Jun, Sep - Oct',
    packages: [
      {
        name: 'Paris Classic Tour',
        duration: '5 Days 4 Nights',
        price: '₹75,999',
        inclusions: [
          'Central hotel accommodation',
          'Daily breakfast',
          'Airport transfers',
          'City tour',
          'Museum passes',
          'Seine cruise'
        ]
      },
      {
        name: 'Paris Romantic Getaway',
        duration: '6 Days 5 Nights',
        price: '₹95,999',
        inclusions: [
          'Boutique hotel stay',
          'Romantic dinners',
          'Private tours',
          'Champagne tasting',
          'Photography session',
          'Versailles excursion'
        ]
      },
      {
        name: 'Paris Art & Culture',
        duration: '7 Days 6 Nights',
        price: '₹85,999',
        inclusions: [
          'Art district hotel',
          'Museum guided tours',
          'Art workshops',
          'Cultural performances',
          'Cooking classes',
          'Gallery visits'
        ]
      }
    ],
    faqs: [
      {
        question: 'Do I need a visa for France?',
        answer: 'Indian citizens need a Schengen visa to visit France. Apply at the French consulate or VFS Global.'
      },
      {
        question: 'What is the best way to get around Paris?',
        answer: 'The Paris Metro is the most efficient way to travel. Consider getting a Navigo pass for multiple days.'
      }
    ]
  },
  {
    id: 'singapore',
    name: 'Singapore',
    image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '₹42,999',
    duration: '4 Days 3 Nights',
    description: 'Garden city with modern attractions and diverse culture',
    category: 'foreign',
    type: 'City',
    overview: 'Singapore is a vibrant city-state known for its modern skyline, diverse culture, excellent food scene, and family-friendly attractions. This garden city offers a perfect blend of urban sophistication and natural beauty.',
    highlights: [
      'Marina Bay Sands and Gardens by the Bay',
      'Universal Studios and Sentosa Island',
      'Clarke Quay and Singapore River',
      'Chinatown and Little India',
      'Singapore Zoo and Night Safari',
      'Hawker centers and street food'
    ],
    gallery: [
      'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bestTime: 'Feb - Apr',
    packages: [
      {
        name: 'Singapore City Break',
        duration: '4 Days 3 Nights',
        price: '₹42,999',
        inclusions: [
          'City hotel accommodation',
          'Daily breakfast',
          'Airport transfers',
          'City tour',
          'Universal Studios tickets',
          'Night Safari'
        ]
      },
      {
        name: 'Singapore Family Fun',
        duration: '5 Days 4 Nights',
        price: '₹58,999',
        inclusions: [
          'Family-friendly hotel',
          'Theme park passes',
          'Zoo visits',
          'Sentosa attractions',
          'Food tours',
          'Shopping experiences'
        ]
      },
      {
        name: 'Singapore Luxury Stay',
        duration: '6 Days 5 Nights',
        price: '₹78,999',
        inclusions: [
          'Luxury hotel stay',
          'Marina Bay Sands access',
          'Fine dining experiences',
          'Spa treatments',
          'Private tours',
          'Yacht cruise'
        ]
      }
    ],
    faqs: [
      {
        question: 'Do I need a visa for Singapore?',
        answer: 'Indian citizens need a visa to visit Singapore. Apply online or through the Singapore consulate.'
      },
      {
        question: 'What is the best way to get around Singapore?',
        answer: 'The MRT (Mass Rapid Transit) system is efficient and covers most attractions. Taxis and ride-sharing are also convenient.'
      }
    ]
  },
  {
    id: 'thailand',
    name: 'Thailand',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '₹32,999',
    duration: '5 Days 4 Nights',
    description: 'Land of smiles with beaches, temples, and cuisine',
    category: 'foreign',
    type: 'Beach',
    overview: 'Thailand, known as the Land of Smiles, offers a perfect blend of beautiful beaches, ancient temples, vibrant culture, and delicious cuisine. From bustling Bangkok to pristine islands, Thailand caters to every type of traveler.',
    highlights: [
      'Bangkok temples and floating markets',
      'Phuket and Phi Phi Islands',
      'Thai massage and spa treatments',
      'Street food and cooking classes',
      'Elephant sanctuaries',
      'Cultural shows and festivals'
    ],
    gallery: [
      'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bestTime: 'Nov - Mar',
    packages: [
      {
        name: 'Thailand Beach & City',
        duration: '5 Days 4 Nights',
        price: '₹32,999',
        inclusions: [
          'Hotel accommodation',
          'Daily breakfast',
          'Airport transfers',
          'Bangkok city tour',
          'Island hopping',
          'Thai massage'
        ]
      },
      {
        name: 'Thailand Adventure',
        duration: '7 Days 6 Nights',
        price: '₹48,999',
        inclusions: [
          'Adventure resort stays',
          'Jungle trekking',
          'Elephant sanctuary visit',
          'Snorkeling trips',
          'Cooking classes',
          'Cultural experiences'
        ]
      },
      {
        name: 'Thailand Luxury Escape',
        duration: '6 Days 5 Nights',
        price: '₹65,999',
        inclusions: [
          'Luxury resort accommodation',
          'Private transfers',
          'Spa treatments',
          'Fine dining',
          'Private tours',
          'Yacht excursions'
        ]
      }
    ],
    faqs: [
      {
        question: 'Do I need a visa for Thailand?',
        answer: 'Indian citizens can get a visa on arrival for 15 days or apply for a tourist visa for longer stays.'
      },
      {
        question: 'What is the best time to visit Thailand?',
        answer: 'November to March is the best time with pleasant weather and minimal rainfall.'
      }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Rajesh & Priya Sharma',
    location: 'Mumbai',
    text: 'Our Kerala honeymoon was absolutely magical! The houseboat experience and hill station stays were perfectly planned.',
    rating: 5
  },
  {
    name: 'Amit Kumar',
    location: 'Delhi',
    text: 'Exotic Travels made our Goa family vacation unforgettable. Great hotels, smooth transfers, and excellent service.',
    rating: 5
  },
  {
    name: 'Sneha Patel',
    location: 'Ahmedabad',
    text: 'The Maldives package was beyond our expectations. Overwater villa, amazing food, and beautiful coral reefs!',
    rating: 5
  },
  {
    name: 'Vikram Singh',
    location: 'Jaipur',
    text: 'Ladakh bike trip was the adventure of a lifetime. Professional guides and well-organized itinerary.',
    rating: 5
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'best-time-visit-india',
    title: 'Best Time to Visit India: A Complete Guide',
    excerpt: 'Discover the perfect time to explore different regions of India based on weather, festivals, and activities.',
    image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'December 15, 2024',
    category: 'Travel Tips'
  },
  {
    id: 'packing-essentials-international-travel',
    title: 'Packing Essentials for International Travel',
    excerpt: 'Complete checklist of must-have items for your international vacation to ensure a hassle-free journey.',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'December 10, 2024',
    category: 'Travel Tips'
  },
  {
    id: 'hidden-gems-rajasthan',
    title: 'Hidden Gems of Rajasthan Beyond the Golden Triangle',
    excerpt: 'Explore lesser-known but equally stunning destinations in Rajasthan that offer authentic cultural experiences.',
    image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'December 5, 2024',
    category: 'Destinations'
  },
  {
    id: 'maldives-honeymoon-guide',
    title: 'Ultimate Maldives Honeymoon Guide',
    excerpt: 'Everything you need to know for planning the perfect romantic getaway in the Maldives.',
    image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'November 28, 2024',
    category: 'Honeymoon'
  },
  {
    id: 'kerala-backwaters-experience',
    title: 'Kerala Backwaters: A Journey Through God\'s Own Country',
    excerpt: 'Experience the serene beauty of Kerala\'s backwaters with our comprehensive guide to houseboat cruises.',
    image: 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'November 20, 2024',
    category: 'Destinations'
  },
  {
    id: 'adventure-activities-manali',
    title: 'Top Adventure Activities in Manali',
    excerpt: 'From paragliding to river rafting, discover the best adventure sports in the beautiful hill station of Manali.',
    image: 'https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'November 15, 2024',
    category: 'Adventure'
  }
];
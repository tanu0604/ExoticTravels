import goa from "./assests/goa/goa.jpeg"
import goa1 from "./assests/goa/1.jpg"
import goa2 from "./assests/goa/2.jpg"
import goa3 from "./assests/goa/3.jpg"

import kerela from "./assests/kerela/kerela.jpeg"
import kerela1 from "./assests/kerela/1.jpeg"
import kerela2 from "./assests/kerela/2.jpeg"
import kerela3 from "./assests/kerela/3.jpeg"

import manali from "./assests/manali/manali.jpeg"
import manali1 from "./assests/manali/1.jpg"
import manali2 from "./assests/manali/2.jpg"
import manali3 from "./assests/manali/3.jpg"

import ladakh from "./assests/ladak/ladak.jpeg"
import ladakh1 from "./assests/ladak/1.jpg"
import ladakh2 from "./assests/ladak/2.jpg"
import ladakh3 from "./assests/ladak/3.jpg"

import andaman from "./assests/andaman/andaman.jpeg"
import andaman1 from "./assests/andaman/1.jpg"
import andaman2 from "./assests/andaman/2.jpg"
import andaman3 from "./assests/andaman/3.jpg"


import kashmir from "./assests/kashmir/kashmir.jpeg"
import kashmir1 from "./assests/kashmir/1.jpg"
import kashmir2 from "./assests/kashmir/2.jpg"
import kashmir3 from "./assests/kashmir/3.jpg"


import dooars from "./assests/dooars/dooars.jpeg"
import dooars1 from "./assests/dooars/1.jpeg"
import dooars2 from "./assests/dooars/2.jpeg"
import dooars3 from "./assests/dooars/3.jpeg"


import arunachal from "./assests/arunachal/arunachal.jpeg"
import arunachal1 from "./assests/arunachal/1.jpg"
import arunachal2 from "./assests/arunachal/2.jpg"
import arunachal3 from "./assests/arunachal/3.jpg"

import meghalaya from "./assests/meghalaya/meghalaya.jpeg"
import meghalaya1 from "./assests/meghalaya/1.jpg"
import meghalaya2 from "./assests/meghalaya/2.jpg"
import meghalaya3 from "./assests/meghalaya/3.jpg"


import bengal from "./assests/benagal/bengal.jpeg"
import bengal1 from "./assests/benagal/1.jpg"
import bengal2 from "./assests/benagal/2.jpg"

import thailand from "./assests/thailand/thailand.jpeg"
import thailand1 from "./assests/thailand/1.jpg"
import thailand2 from "./assests/thailand/2.jpg"
import thailand3 from "./assests/thailand/3.jpg"

import bali from "./assests/bali/bali.jpeg"
import bali1 from "./assests/bali/1.jpg"
import bali2 from "./assests/bali/2.jpg"
import bali3 from "./assests/bali/3.jpg"

import maldives from "./assests/maldives/maldives.jpeg"
import maldives1 from "./assests/maldives/1.jpg"
import maldives2 from "./assests/maldives/2.jpg"
import maldives3 from "./assests/maldives/3.jpg"

import singapore from "./assests/singapore/singapore.jpeg"
import singapore1 from "./assests/singapore/1.jpg"
import singapore2 from "./assests/singapore/2.jpg"
import singapore3 from "./assests/singapore/3.jpg"

import egypt from "./assests/egypt/egypt.jpg"
import egypt1 from "./assests/egypt/1.jpg"
import egypt2 from "./assests/egypt/2.jpg"
import egypt3 from "./assests/egypt/3.jpg"

import nepal from "./assests/nepal/nepal.jpeg"
import nepal1 from "./assests/nepal/1.jpg"
import nepal2 from "./assests/nepal/2.jpg"
import nepal3 from "./assests/nepal/3.jpg"

import dubai from "./assests/dubai/dubai.jpeg"
import dubai1 from "./assests/dubai/1.jpg"
import dubai2 from "./assests/dubai/2.jpg"
import dubai3 from "./assests/dubai/3.jpg"

import srilanka from "./assests/srilanka/srilanka.jpeg"
import srilanka1 from "./assests/srilanka/1.jpg"
import srilanka2 from "./assests/srilanka/2.jpg"
import srilanka3 from "./assests/srilanka/3.jpg"

import malaysia from "./assests/malaysia/malaysia.jpeg"
import malaysia1 from "./assests/malaysia/1.jpg"
import malaysia2 from "./assests/malaysia/2.jpg"
import malaysia3 from "./assests/malaysia/3.jpg"
import kenya from "./assests/kenya/kenya.jpg"
import kenya2 from "./assests/kenya/1.jpg"
import kenya3 from "./assests/kenya/2.jpg"
import kenya1 from "./assests/kenya/3.jpg"

import vietnam from "./assests/vietnam/vietnam.jpeg"
import veitnam1 from "./assests/vietnam/1.jpg"
import veitnam2 from "./assests/vietnam/2.jpg"
import veitnam3 from "./assests/vietnam/3.jpg"


// import bali from "./assests/bali.jpeg"
// import thailand from "./assests/thailand.jpeg"
// import singapore from "./assests/singapore.jpeg"
// import maldives from "./assests/maldives.jpeg"
// import dubai from "./assests/dubai.jpeg"
// import nepal from "./assests/nepal.jpeg"
// import srilanka from "./assests/srilanka.jpeg"
// import vietnam from "./assests/vietnam.jpeg"
// import malaysia from "./assests/malaysia.jpeg"
// import kenya from "./assests/kenya.jpg"
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
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    image: arunachal,
    price: '₹19,000',
    duration: '6 Nights 7 Days',
    description: '',
    category: 'indian',
    region: 'Northeast',
    type: 'Mountain',
    overview: 'A serene Himalayan state known for its monasteries, mountain passes, and the scenic beauty of Tawang Valley.',
    highlights: [
      '1 Night Nameri, 1 Night Dirang, 3 Nights Tawang, 1 Night Bomdila',
      'Visit Tawang Monastery, Sela Pass, and Jaswant Garh War Memorial',
      'Experience tribal culture and untouched natural beauty'
    ],
    gallery: [arunachal1,arunachal2,arunachal3],
    bestTime: 'October to April',
    packages: [
      {
        name: 'Arunachal Highlights',
        duration: '6 Nights 7 Days',
        price: '',
        inclusions: [
          '1 Night Nameri',
          '1 Night Dirang',
          '3 Nights Tawang',
          '1 Night Bomdila'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is a permit required to visit Arunachal Pradesh?',
        answer: 'Yes, Indian tourists need an Inner Line Permit (ILP) to enter the state.'
      },
      {
        question: 'What is the major attraction in Tawang?',
        answer: 'Tawang Monastery, the largest in India, is a major spiritual and cultural site.'
      }
    ]
  },

  {
    id: 'andaman',
    name: 'Andaman',
    image: andaman,
    price: '₹15,000',
    duration: '5 Nights 6 Days',
    description: '',
    category: 'indian',
    region: 'South',
    type: 'Beach',
    overview: 'A tropical paradise with pristine beaches, turquoise waters, and rich marine biodiversity ideal for snorkeling and diving.',
    highlights: [
      '2 Nights Port Blair, 1 Night Havelock, 1 Night Neil Island',
      'Cellular Jail, Radhanagar Beach, and coral reefs exploration',
      'Ferry rides between islands and water adventure activities'
    ],
    gallery: [andaman1,andaman2,andaman3],
    bestTime: 'October to May',
    packages: [
      {
        name: 'Andaman Island Tour',
        duration: '5 Nights 6 Days',
        price: '',
        inclusions: [
          '2 Nights Port Blair',
          '1 Night Havelock',
          '1 Night Neil Island'
        ]
      }
    ],
    faqs: [
      {
        question: 'Do I need a passport to visit Andaman?',
        answer: 'No, Indian citizens do not need a passport to visit Andaman Islands.'
      },
      {
        question: 'Is scuba diving available in Andaman?',
        answer: 'Yes, Havelock and Neil Islands are famous for scuba diving and snorkeling.'
      }
    ]
  },

  {
    id: 'shimla-manali',
    name: 'Shimla Manali',
    image: manali,
    price: '₹14,000',
    duration: '5 Nights 6 Days',
    description: '',
    category: 'indian',
    region: 'North',
    type: 'Hill Station',
    overview: 'A classic hill station escape offering snow-clad mountains, colonial architecture, and bustling bazaars.',
    highlights: [
      '2 Nights Shimla, 3 Nights Manali',
      'Mall Road, Kufri, Solang Valley, and Hidimba Temple',
      'Ideal for honeymooners, families, and adventure lovers'
    ],
    gallery: [manali1,manali2,manali3],
    bestTime: 'March to June and October to February',
    packages: [
      {
        name: 'Himachal Classic',
        duration: '5 Nights 6 Days',
        price: '',
        inclusions: [
          '2 Nights Shimla',
          '3 Nights Manali'
        ]
      }
    ],
    faqs: [
      {
        question: 'What is the best time to visit Shimla and Manali?',
        answer: 'Summer for pleasant weather and winter for snowfall experiences.'
      },
      {
        question: 'Are Shimla and Manali safe for solo female travelers?',
        answer: 'Yes, they are generally safe, especially with guided tours.'
      }
    ]
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    image: ladakh,
    price: '₹15,000',
    duration: '6 Nights 7 Days',
    description: '',
    category: 'indian',
    region: 'North',
    type: 'Adventure',
    overview: 'A high-altitude desert known for dramatic landscapes, Buddhist monasteries, and thrilling road trips.',
    highlights: [
      '1 Night Leh, 2 Nights Nubra, 1 Night Pangong',
      'Khardung La Pass, Pangong Lake, and Diskit Monastery',
      'Camel ride in Hunder dunes and unique cultural immersion'
    ],
    gallery: [ladakh1,ladakh2,ladakh3],
    bestTime: 'May to September',
    packages: [
      {
        name: 'Ladakh Expedition',
        duration: '6 Nights 7 Days',
        price: '',
        inclusions: [
          '1 Night Leh',
          '2 Nights Nubra',
          '1 Night Pangong'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is it safe to travel to Ladakh by road?',
        answer: 'Yes, but it is advisable to check weather and road conditions before the trip.'
      },
      {
        question: 'Do I need oxygen in Ladakh?',
        answer: 'Most travelers acclimatize well, but oxygen support is available if needed.'
      }
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    image: kerela,
    price: '₹22,000',
    duration: '6 Nights 7 Days',
    description: '',
    category: 'indian',
    region: 'South',
    type: 'Backwater',
    overview: 'A lush green state known for its backwaters, hill stations, Ayurveda, and tropical beaches.',
    highlights: [
      '2 Nights Munnar, 1 Night Thekkady, 1 Night Alleppey (Houseboat), 1 Night Kovalam',
      'Tea plantations, Periyar Wildlife Sanctuary, and serene backwaters',
      'Relaxing beach time and traditional Kerala cuisine'
    ],
    gallery: [kerela1,kerela2,kerela3],
    bestTime: 'October to March',
    packages: [
      {
        name: 'Kerala Delight',
        duration: '6 Nights 7 Days',
        price: '',
        inclusions: [
          '2 Nights Munnar',
          '1 Night Thekkady',
          '1 Night Alleppey (Houseboat)',
          '1 Night Kovalam'
        ]
      }
    ],
    faqs: [
      {
        question: 'What is Kerala famous for?',
        answer: 'Kerala is known for its backwaters, hill stations, and Ayurvedic treatments.'
      },
      {
        question: 'Can I enjoy a houseboat experience in Kerala?',
        answer: 'Yes, Alleppey is famous for overnight houseboat stays through the backwaters.'
      }
    ]
  },

  {
    id: 'goa',
    name: 'Goa',
    image: goa,
    price: '₹12,000',
    duration: '5 Days 4 Nights',
    description: 'Relax on sun-kissed beaches of South and North Goa.',
    category: 'indian',
    region: 'West',
    type: 'Beach',
    overview: 'Experience Goa’s vibrant nightlife, serene beaches, and Portuguese heritage. Perfect for both leisure and adventure seekers.',
    highlights: [
      '2 nights in South Goa and 2 nights in North Goa',
      'Water sports, forts, churches, and beachside shacks',
    ],
    gallery: [goa1,goa2,goa3],
    bestTime: 'November to February',
    packages: [],
    faqs: [
      {
        question: 'Is Goa suitable for family trips?',
        answer: 'Yes, Goa offers plenty of family-friendly beaches and resorts.',
      },
    ],
  },


  {
    id: 'dooars',
    name: 'Dooars',
    image: dooars,
    price: '₹7,500',
    duration: '5 Days 4 Nights',
    description: 'Jungle adventures and serene tea gardens.',
    category: 'indian',
    region: 'East',
    type: 'Nature',
    overview: 'Dooars is a nature lover’s paradise with wildlife sanctuaries, rivers, and dense forests nestled in the Himalayan foothills.',
    highlights: [
      '2 nights in Murti and 2 nights in Jaldapara',
      'Jeep safaris, tea estates, and river walks',
    ],
    gallery: [dooars1,dooars2,dooars3],
    bestTime: 'October to March',
    packages: [],
    faqs: [
      {
        question: 'Are safaris included?',
        answer: 'Yes, safaris are part of the wildlife package.',
      },
    ],
  },

  {
    id: 'meghalaya',
    name: 'Meghalaya',
    image: meghalaya,
    price: '₹12,000',
    duration: '5 Days 4 Nights',
    description: 'Lush green landscapes, waterfalls, and living root bridges.',
    category: 'indian',
    region: 'Northeast',
    type: 'Nature',
    overview: 'Known as the abode of clouds, Meghalaya stuns with crystal-clear rivers, caves, and vibrant local culture.',
    highlights: [
      '3 nights in Shillong, 1 night in Cherrapunji',
      'Waterfalls, caves, and double-decker root bridges',
    ],
    gallery: [meghalaya1,meghalaya2,meghalaya3],
    bestTime: 'October to April',
    packages: [],
    faqs: [
      {
        question: 'Is Cherrapunji the wettest place on earth?',
        answer: 'Yes, it’s one of the wettest places, famous for lush greenery.',
      },
    ],
  },

  {
    id: 'offbeat-north-bengal',
    name: 'Offbeat North Bengal',
    image: bengal,
    price: '₹7,900',
    duration: '5 Days 4 Nights',
    description: 'Hidden gems of North Bengal’s hills and villages.',
    category: 'indian',
    region: 'East',
    type: 'Mountain',
    overview: 'Explore serene hill villages like Lolegaon and Lamahatta, untouched by mass tourism. Perfect for peaceful getaways.',
    highlights: [
      '2 nights in Lamahatta and 2 nights in Lolegaon',
      'Village walks, homestay experiences, and forest trails',
    ],
    gallery: [bengal1,bengal2],
    bestTime: 'March to June, October to December',
    packages: [],
    faqs: [
      {
        question: 'Is it suitable for elderly travelers?',
        answer: 'Yes, it’s calm and not physically demanding.',
      },
    ],
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    image: kashmir,
    price: '14,900',
    duration: '5 Nights 6 Days',
    description: '',
    category: 'indian',
    region: 'North',
    type: 'Hill Station',
    overview: 'A paradise on earth, Kashmir is known for its stunning valleys, pristine lakes, and vibrant houseboats.',
    highlights: [
      '4 Nights Srinagar, 1 Night Pahalgam',
      'Dal Lake shikara rides, Mughal Gardens, and Pahalgam valley views',
      'Perfect for romantic escapes and scenic tranquility'
    ],
    gallery: [kashmir1,kashmir2,kashmir3],
    bestTime: 'April to October',
    packages: [
      {
        name: 'Kashmir Escape',
        duration: '5 Nights 6 Days',
        price: '',
        inclusions: [
          '4 Nights Srinagar',
          '1 Night Pahalgam'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is it safe to travel to Kashmir?',
        answer: 'Yes, major tourist areas in Kashmir like Srinagar, Gulmarg, and Pahalgam are safe for travelers.'
      },
      {
        question: 'When is snowfall experienced in Kashmir?',
        answer: 'December to February is the ideal time to witness snowfall in Kashmir.'
      }
    ]
  },

  {
    id: 'nepal',
    name: 'Nepal',
    image: nepal,
    price: '₹16,000',
    duration: '5 Nights 6 Days',
    description: '',
    category: 'foreign',
    region: 'Asia',
    type: 'Culture',
    overview: 'Nepal is a serene Himalayan nation known for its ancient temples, snow-capped peaks, and vibrant culture. From the bustling streets of Kathmandu to the spiritual calm of monasteries and scenic mountain views, Nepal offers a blend of adventure and peace. It’s a paradise for trekkers and spiritual seekers alike.',
    highlights: [
      'Kathmandu sightseeing',
      'Pashupatinath Temple',
      'Scenic views of the Himalayas'
    ],
    gallery: [nepal1,nepal2,nepal3],
    bestTime: 'October to April',
    packages: [
      {
        name: 'Nepal Explorer',
        duration: '5 Nights 6 Days',
        price: '',
        inclusions: []
      }
    ],
    faqs: [
      {
        question: 'Is a visa required for Nepal?',
        answer: 'Indian nationals do not require a visa to enter Nepal.'
      },
      {
        question: 'What is the local currency in Nepal?',
        answer: 'The local currency is the Nepalese Rupee (NPR).'
      },
      {
        question: 'Is it safe to travel in Nepal?',
        answer: 'Yes, Nepal is generally safe for tourists. Basic precautions are recommended.'
      }
    ]
  },

  {
    id: 'sri-lanka',
    name: 'Sri Lanka',
    image: srilanka,
    price: '₹30,000',
    duration: '5 Nights 4 Days',
    description: '',
    category: 'foreign',
    region: 'Asia',
    type: 'Beach',
    overview: 'Sri Lanka is an island nation offering sun-kissed beaches, lush tea gardens, ancient temples, and rich wildlife. From coastal towns to misty highlands, it’s perfect for those seeking both relaxation and cultural exploration.',
    highlights: [
      'Visit the Temple of the Tooth',
      'Explore tea plantations and beaches'
    ],
    gallery: [srilanka1,srilanka2,srilanka3],
    bestTime: 'December to April',
    packages: [
      {
        name: 'Sri Lanka Discovery',
        duration: '5 Nights 4 Days',
        price: '',
        inclusions: [
          '1 Night Kandy',
          '1 Night Nuwara Eliya',
          '2 Nights Bentota',
          '1 Night Colombo'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is a visa required for Sri Lanka?',
        answer: 'Yes, an Electronic Travel Authorization (ETA) is required for Indian citizens.'
      },
      {
        question: 'What is the local currency?',
        answer: 'The currency is Sri Lankan Rupee (LKR).'
      },
      {
        question: 'Is vegetarian food available?',
        answer: 'Yes, vegetarian options are widely available.'
      }
    ]
  },

  {
    id: 'singapore',
    name: 'Singapore',
    image: singapore,
    price: '₹30,000',
    duration: '4 Days 3 Nights',
    description: '',
    category: 'foreign',
    region: 'Asia',
    type: 'City',
    overview: 'Singapore is a futuristic urban paradise, blending modern architecture with vibrant cultural districts and lush green spaces. With its world-class attractions like Marina Bay Sands, Sentosa Island, and Gardens by the Bay, it offers a unique fusion of entertainment, shopping, and cultural diversity.',
    highlights: [
      'Marina Bay Sands & Gardens by the Bay',
      'Sentosa Island adventures',
      'Shopping at Orchard Road'
    ],
    gallery: [singapore2,singapore1,singapore3],
    bestTime: 'February to April',
    packages: [
      {
        name: 'Singapore Special',
        duration: '4 Days 3 Nights',
        price: '',
        inclusions: []
      }
    ],
    faqs: [
      {
        question: 'Is a visa required for Singapore?',
        answer: 'Yes, Indian passport holders require a visa to visit Singapore.'
      },
      {
        question: 'What is the local currency?',
        answer: 'The currency is Singapore Dollar (SGD).'
      },
      {
        question: 'Is English widely spoken in Singapore?',
        answer: 'Yes, English is one of the official languages and is commonly spoken.'
      }
    ]
  },


  {
    id: 'malaysia',
    name: 'Malaysia',
    image: malaysia,
    price: '₹18,000',
    duration: '4 Days 3 Nights',
    description: '',
    category: 'foreign',
    region: 'Asia',
    type: 'City',
    overview: 'Malaysia is a melting pot of cultures, combining vibrant cities, lush rainforests, and golden beaches. From the iconic Petronas Towers in Kuala Lumpur to the cultural richness of Penang and the beauty of Langkawi, Malaysia offers a perfect balance of modernity and tradition.',
    highlights: [
      'Petronas Twin Towers',
      'Batu Caves and local markets',
      'Cultural exploration in Kuala Lumpur'
    ],
    gallery: [malaysia1,malaysia2,malaysia3],
    bestTime: 'December to April',
    packages: [
      {
        name: 'Malaysia Getaway',
        duration: '4 Days 3 Nights',
        price: '',
        inclusions: [
          '3 Nights Kuala Lumpur'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is a visa required for Malaysia?',
        answer: 'Yes, Indian citizens require an eVisa or eNTRI to enter Malaysia.'
      },
      {
        question: 'What is the currency used in Malaysia?',
        answer: 'The currency is Malaysian Ringgit (MYR).'
      },
      {
        question: 'Is Malaysia safe for solo travelers?',
        answer: 'Yes, Malaysia is generally considered safe for solo travelers with normal precautions.'
      }
    ]
  },
  {
    id: 'dubai',
    name: 'Dubai',
    image: dubai,
    price: '₹30,000',
    duration: '5 Days 4 Nights',
    description: '',
    category: 'foreign',
    region: 'Middle East',
    type: 'City',
    overview: 'Dubai is a dazzling desert city known for its futuristic skyscrapers, luxury shopping, and vibrant nightlife. It offers a blend of modern marvels and cultural heritage, from the towering Burj Khalifa to traditional souks and desert safaris.',
    highlights: [
      'Burj Khalifa & Dubai Mall',
      'Desert Safari with BBQ dinner',
      'Dhow Cruise and Marina Walk'
    ],
    gallery: [dubai1,dubai2,dubai3],
    bestTime: 'November to March',
    packages: [
      {
        name: 'Dubai Essentials',
        duration: '5 Days 4 Nights',
        price: '₹30,000',
        inclusions: []
      }
    ],
    faqs: [
      {
        question: 'Is a visa required for Dubai?',
        answer: 'Yes, Indian citizens need a visa for the UAE, which can be applied for online or through a travel agency.'
      },
      {
        question: 'What is the currency used in Dubai?',
        answer: 'The currency is UAE Dirham (AED).'
      },
      {
        question: 'Is Dubai safe for tourists?',
        answer: 'Yes, Dubai is very safe and tourist-friendly.'
      }
    ]
  },
  {
    id: 'bali',
    name: 'Bali',
    image: bali,
    price: '₹30,000',
    duration: '6 Days 5 Nights',
    description: '',
    category: 'foreign',
    region: 'Asia',
    type: 'Island',
    overview: 'Bali, the “Island of the Gods,” is a breathtaking Indonesian paradise famous for its vibrant culture, serene beaches, lush rice terraces, and sacred temples. It blends relaxation with adventure — from surfing on Kuta’s waves to meditating in Ubud’s jungles. Known for its warm hospitality, tropical vibes, and spiritual essence, Bali attracts honeymooners, families, and solo explorers alike. Whether you seek beachside bliss, cultural experiences, or rejuvenating retreats, Bali offers something magical for everyone.',
    highlights: [
      'Relax on Kuta Beach',
      'Explore Ubud\'s rice terraces and temples',
      'Traditional Balinese culture and cuisine'
    ],
    gallery: [bali1,bali2,bali3],
    bestTime: 'April to October',
    packages: [
      {
        name: 'Bali Tour',
        duration: '6 Days 5 Nights',
        price: '',
        inclusions: [
          '3 Nights Kuta',
          '2 Nights Ubud'
        ]
      }
    ],
    faqs: [
      {
        question: 'Do Indian citizens need a visa for Bali?',
        answer: 'Yes, but visa on arrival is available for Indian passport holders.'
      },
      {
        question: 'What is the local currency in Bali?',
        answer: 'The currency is Indonesian Rupiah (IDR).'
      },
      {
        question: 'Is Bali a good destination for couples?',
        answer: 'Yes, Bali is considered one of the top romantic and honeymoon destinations in Asia.'
      }
    ]
  },

  {
    id: 'thailand',
    name: 'Thailand',
    image: thailand,
    price: '₹22,000',
    duration: '5 Days 4 Nights to 6 Days 5 Nights',
    description: '',
    category: 'foreign',
    region: 'Asia',
    type: 'Beach + City',
    overview: 'Thailand is a diverse destination offering a perfect blend of vibrant city life, cultural landmarks, and exotic beaches. From the bustling streets and temples of Bangkok to the lively beaches of Pattaya, and the scenic islands of Phuket and Krabi, Thailand promises unforgettable experiences for every kind of traveler. Enjoy water sports, island hopping, street food adventures, and vibrant nightlife in this tropical paradise.',
    highlights: [
      'Grand Palace and temples in Bangkok',
      'Coral Island tour from Pattaya',
      'Island hopping in Krabi and Phuket',
      'Street food, nightlife, and Thai massages'
    ],
    gallery: [thailand1,thailand2,thailand3],
    bestTime: 'November to April',
    packages: [
      {
        name: 'Thailand Duo (Bangkok & Pattaya)',
        duration: '5 Days 4 Nights',
        price: '₹20,000',
        inclusions: [
          '2 Nights Bangkok',
          '2 Nights Pattaya'
        ]
      },
      {
        name: 'Phuket & Krabi Escape',
        duration: '5 Days 4 Nights',
        price: '₹22,000',
        inclusions: [
          '2 Nights Phuket',
          '2 Nights Krabi'
        ]
      }
    ],
    faqs: [
      {
        question: 'Do Indian passport holders need a visa for Thailand?',
        answer: 'Yes, but visa on arrival is available for Indian citizens.'
      },
      {
        question: 'Is Thailand safe for solo female travelers?',
        answer: 'Yes, it is generally safe, but standard travel precautions should be followed.'
      },
      {
        question: 'What currency is used in Thailand?',
        answer: 'The currency used is Thai Baht (THB).'
      }
    ]
  },

  {
    id: 'vietnam',
    name: 'Vietnam',
    image: vietnam,
    price: '₹39,000',
    duration: '6 Days 5 Nights',
    description: '',
    category: 'foreign',
    region: 'Asia',
    type: 'Culture',
    overview: 'Vietnam is a stunning blend of natural beauty and deep cultural heritage. From the bustling streets of Hanoi to the tranquil waters of Halong Bay and the charming coastal vibes of Danang, Vietnam offers travelers a journey through history, flavor, and breathtaking landscapes. It’s ideal for those seeking a mix of adventure, tradition, and scenic serenity.',
    highlights: [
      'Cruise the emerald waters of Halong Bay',
      'Explore the Old Quarter of Hanoi',
      'Relax at the beaches of Danang'
    ],
    gallery: [veitnam1,veitnam2,veitnam3],
    bestTime: 'March to April and September to November',
    packages: [
      {
        name: 'Vietnam Trio',
        duration: '6 Days 5 Nights',
        price: '',
        inclusions: [
          '2 Nights Hanoi',
          '1 Night Halong Bay',
          '2 Nights Danang'
        ]
      }
    ],
    faqs: [
      {
        question: 'Do Indian citizens need a visa for Vietnam?',
        answer: 'Yes, Indian citizens require a visa. E-visa is available and can be applied online.'
      },
      {
        question: 'Is Vietnam safe for tourists?',
        answer: 'Yes, Vietnam is generally safe for travelers, with friendly locals and well-developed tourism services.'
      },
      {
        question: 'What currency is used in Vietnam?',
        answer: 'Vietnamese Dong (VND) is the official currency.'
      }
    ]
  },
  {
    id: 'maldives',
    name: 'Maldives',
    image: maldives,
    price: '₹55,000',
    duration: '5 Days 4 Nights',
    description: '',
    category: 'foreign',
    region: 'Asia',
    type: 'Island',
    overview: 'The Maldives is a breathtaking tropical paradise in the Indian Ocean, renowned for its crystal-clear waters, pristine white-sand beaches, and luxurious overwater villas. Comprising over 1,000 coral islands, it offers a serene escape for travelers seeking relaxation, adventure, or romance. ',
    highlights: [
      'Snorkeling and diving in coral-rich waters',
      'Luxury stays on private islands',
      'Sunset views and serene beach walks'
    ],
    gallery: [maldives1,maldives2,maldives3],
    bestTime: 'November to April',
    packages: [
      {
        name: 'Maldives Retreat',
        duration: '5 Days 4 Nights',
        price: '',
        inclusions: [
          '4 Nights Maafushi Island'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is a visa required for Indian citizens to visit Maldives?',
        answer: 'No, Indian citizens get a free 30-day visa on arrival in the Maldives.'
      },
      {
        question: 'Is Maldives suitable for family vacations?',
        answer: 'Yes, while it is popular among honeymooners, many resorts offer great family-friendly amenities and activities.'
      },
      {
        question: 'What currency is used in Maldives?',
        answer: 'The local currency is Maldivian Rufiyaa (MVR), but USD is widely accepted in resorts and tourist areas.'
      }
    ]
  },

  {
    id: 'kenya-masaimara',
    name: 'Kenya (Masai Mara)',
    image: kenya, // Replace with actual image import or path
    price: '₹2,26,000',
    duration: '7 Days 6 Nights',
    description: '',
    category: 'foreign',
    region: 'Africa',
    type: 'Safari + Nature',
    overview: 'Kenya’s Masai Mara is the crown jewel of African safaris — a vast savannah where wildlife roams free and breathtaking sunsets light up the horizon. From thrilling game drives to encounters with the Big Five, this is your gateway to untamed adventure and cultural richness.',
    highlights: [
      'Witness the Great Migration (Jul–Oct)',
      'Game drives with chances to see the Big Five',
      'Cultural visits to Masai villages'
    ],
    gallery: [kenya1,kenya2,kenya3], // You can add image URLs or imports here
    bestTime: 'July to October',
    packages: [
      {
        name: 'Masai Mara Safari Adventure',
        duration: '7 Days 6 Nights',
        price: '',
        inclusions: [
          '2 Nights in Nairobi',
          '3 Nights in Masai Mara with safari drives',
          'Park entry fees and guided tours'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is a visa required for Indian citizens to visit Kenya?',
        answer: 'Yes, Indian citizens must apply for an eVisa online before traveling to Kenya.'
      },
      {
        question: 'What is the Masai Mara famous for?',
        answer: 'Masai Mara is renowned for its incredible wildlife, especially the annual Great Migration of wildebeests and zebras.'
      },
      {
        question: 'Is it safe to go on a safari in Kenya?',
        answer: 'Yes, it is generally safe when done with licensed operators and guides. Always follow safety instructions during the trip.'
      }
    ]
  },

  {
  id: 'egypt-nilecairo',
  name: 'Egypt (Cairo & Nile Cruise)',
  image: egypt, // Replace with actual image import or path
  price: 'Customizable',
  duration: '7 Days 6 Nights',
  description: '',
  category: 'foreign',
  region: 'Africa',
  type: 'History + Culture + Cruise',
  overview: 'Step into the land of pharaohs, pyramids, and the mighty Nile. Egypt offers an unforgettable journey through ancient history and modern marvels — from the bustling streets of Cairo to the serene beauty of a Nile cruise, this trip is a blend of exploration and enchantment.',
  highlights: [
    'Explore the Pyramids of Giza and the Sphinx',
    'Visit the Egyptian Museum with Tutankhamun’s treasures',
    'Relax on a luxury Nile River cruise with guided tours to Luxor and Aswan',
    'Sound and Light Show at the Pyramids'
  ],
  gallery: [egypt1, egypt2, egypt3], // Add image imports or paths here
  bestTime: 'October to April',
  packages: [
    {
      name: 'Discover Egypt: Cairo & The Nile',
      duration: '7 Days 6 Nights',
      price: 'Customizable',
      inclusions: [
        '3 Nights in Cairo with breakfast',
        '4 Nights on Nile Cruise (full board)',
        'All airport transfers',
        'Guided tours with English-speaking Egyptologist',
        'Domestic flight Cairo–Aswan & Luxor–Cairo'
      ]
    }
  ],
  faqs: [
    {
      question: 'Is a visa required for Indian citizens to visit Egypt?',
      answer: 'Yes, Indian citizens must apply for a tourist visa before traveling to Egypt.'
    },
    {
      question: 'Is Egypt safe for tourists?',
      answer: 'Yes, Egypt is generally safe for tourists, especially in tourist areas. Always follow local guidelines and travel advisories.'
    },
    {
      question: 'What currency is used in Egypt?',
      answer: 'The official currency is the Egyptian Pound (EGP). US Dollars and Euros are also widely accepted in tourist areas.'
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

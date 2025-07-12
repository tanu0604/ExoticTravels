import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Heart, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/destinations';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center animate-bounce-in">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
            <Calendar className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog" 
            className="btn-primary inline-flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  // Mock full content for demonstration
  const getFullContent = (postId: string) => {
    switch (postId) {
      case 'best-time-visit-india':
        return {
          content: `
            <p>India is a vast country with diverse climatic conditions, making it essential to plan your visit according to the region and activities you have in mind. This comprehensive guide will help you understand the best times to visit different parts of India.</p>
            
            <h2>Winter Season (October to March)</h2>
            <p>This is generally considered the best time to visit most parts of India. The weather is pleasant and comfortable for sightseeing and outdoor activities.</p>
            
            <h3>Best Destinations in Winter:</h3>
            <ul>
              <li><strong>Rajasthan:</strong> Perfect weather for exploring palaces and forts</li>
              <li><strong>Goa:</strong> Ideal beach weather with minimal rainfall</li>
              <li><strong>Kerala:</strong> Pleasant temperatures for backwater cruises</li>
              <li><strong>Tamil Nadu:</strong> Comfortable for temple visits and cultural tours</li>
            </ul>
            
            <h2>Summer Season (April to June)</h2>
            <p>While most of India experiences hot weather during summer, this is the perfect time to visit hill stations and mountainous regions.</p>
            
            <h3>Best Destinations in Summer:</h3>
            <ul>
              <li><strong>Himachal Pradesh:</strong> Manali, Shimla, and Dharamshala offer cool respite</li>
              <li><strong>Uttarakhand:</strong> Mussoorie, Nainital, and Rishikesh are pleasant</li>
              <li><strong>Kashmir:</strong> Beautiful weather with blooming gardens</li>
              <li><strong>Ladakh:</strong> Roads open up for the trekking season</li>
            </ul>
            
            <h2>Monsoon Season (July to September)</h2>
            <p>The monsoon brings relief from the summer heat but also heavy rainfall in many regions. However, some destinations are at their most beautiful during this time.</p>
            
            <h3>Best Destinations in Monsoon:</h3>
            <ul>
              <li><strong>Western Ghats:</strong> Lush green landscapes and waterfalls</li>
              <li><strong>Meghalaya:</strong> Living root bridges and stunning scenery</li>
              <li><strong>Coorg:</strong> Coffee plantations look their best</li>
              <li><strong>Munnar:</strong> Tea gardens are vibrant and green</li>
            </ul>
            
            <h2>Regional Considerations</h2>
            
            <h3>North India</h3>
            <p>Best visited from October to March when temperatures are moderate. Summers can be extremely hot, especially in Delhi and Rajasthan.</p>
            
            <h3>South India</h3>
            <p>Can be visited year-round, but October to March offers the most comfortable weather. Monsoons bring heavy rainfall but also lush greenery.</p>
            
            <h3>East India</h3>
            <p>October to March is ideal. Summers are hot and humid, while monsoons bring heavy rainfall.</p>
            
            <h3>West India</h3>
            <p>October to March is perfect for most destinations. Goa is best visited from November to February.</p>
            
            <h2>Festival Seasons</h2>
            <p>Consider timing your visit around India's vibrant festivals:</p>
            <ul>
              <li><strong>Diwali (October/November):</strong> Festival of lights celebrated nationwide</li>
              <li><strong>Holi (March):</strong> Colorful spring festival</li>
              <li><strong>Dussehra (September/October):</strong> Victory of good over evil</li>
              <li><strong>Christmas (December):</strong> Especially beautiful in Goa and Kerala</li>
            </ul>
            
            <h2>Planning Tips</h2>
            <ul>
              <li>Book accommodations well in advance during peak season (December-January)</li>
              <li>Pack according to the season and region you're visiting</li>
              <li>Consider shoulder seasons for better prices and fewer crowds</li>
              <li>Check local weather forecasts before traveling</li>
              <li>Be flexible with your itinerary to account for weather changes</li>
            </ul>
            
            <p>Remember, India's diversity means that there's always somewhere perfect to visit regardless of the time of year. The key is matching your destination with the season and your travel preferences.</p>
          `,
          readTime: '8 min read',
          tags: ['Travel Tips', 'India', 'Weather', 'Planning']
        };
      
      case 'packing-essentials-international-travel':
        return {
          content: `
            <p>Packing for international travel can be overwhelming, especially when you're visiting multiple destinations with different climates and cultures. This comprehensive checklist will ensure you're prepared for any adventure.</p>
            
            <h2>Essential Documents</h2>
            <p>Keep these documents organized and easily accessible:</p>
            <ul>
              <li><strong>Passport:</strong> Valid for at least 6 months beyond your travel date</li>
              <li><strong>Visa:</strong> Check requirements for each destination</li>
              <li><strong>Travel Insurance:</strong> Comprehensive coverage including medical</li>
              <li><strong>Flight Tickets:</strong> Print and digital copies</li>
              <li><strong>Hotel Confirmations:</strong> All accommodation bookings</li>
              <li><strong>Emergency Contacts:</strong> Embassy numbers and local contacts</li>
            </ul>
            
            <h2>Clothing Essentials</h2>
            
            <h3>Universal Items:</h3>
            <ul>
              <li>Comfortable walking shoes (broken in)</li>
              <li>Versatile jacket or cardigan</li>
              <li>Quick-dry underwear and socks</li>
              <li>Sleepwear and loungewear</li>
              <li>Swimwear (even if not planning beach time)</li>
            </ul>
            
            <h3>Climate-Specific Items:</h3>
            <ul>
              <li><strong>Tropical Destinations:</strong> Light, breathable fabrics, sun hat, sandals</li>
              <li><strong>Cold Destinations:</strong> Thermal layers, warm coat, gloves, winter boots</li>
              <li><strong>Variable Climate:</strong> Layers, waterproof jacket, versatile footwear</li>
            </ul>
            
            <h2>Technology and Electronics</h2>
            <ul>
              <li>Universal power adapter</li>
              <li>Portable charger/power bank</li>
              <li>Phone with international plan or local SIM</li>
              <li>Camera with extra batteries/memory cards</li>
              <li>Headphones</li>
              <li>E-reader or tablet for entertainment</li>
            </ul>
            
            <h2>Health and Hygiene</h2>
            
            <h3>Medications:</h3>
            <ul>
              <li>Prescription medications (in original containers)</li>
              <li>Basic first aid kit</li>
              <li>Pain relievers and fever reducers</li>
              <li>Anti-diarrheal medication</li>
              <li>Motion sickness remedies</li>
            </ul>
            
            <h3>Personal Care:</h3>
            <ul>
              <li>Toothbrush and toothpaste</li>
              <li>Shampoo and conditioner (travel size)</li>
              <li>Sunscreen (SPF 30+)</li>
              <li>Insect repellent</li>
              <li>Hand sanitizer</li>
              <li>Personal hygiene items</li>
            </ul>
            
            <h2>Money and Security</h2>
            <ul>
              <li>Credit cards (notify bank of travel plans)</li>
              <li>Debit card for ATM access</li>
              <li>Small amount of local currency</li>
              <li>Money belt or hidden wallet</li>
              <li>Copies of important documents (separate from originals)</li>
            </ul>
            
            <h2>Comfort and Convenience</h2>
            <ul>
              <li>Travel pillow and eye mask</li>
              <li>Reusable water bottle</li>
              <li>Snacks for long flights</li>
              <li>Entertainment for flights</li>
              <li>Laundry bag</li>
              <li>Travel-size laundry detergent</li>
            </ul>
            
            <h2>Packing Tips</h2>
            
            <h3>Space-Saving Techniques:</h3>
            <ul>
              <li>Roll clothes instead of folding</li>
              <li>Use packing cubes for organization</li>
              <li>Wear heaviest items on the plane</li>
              <li>Pack versatile items that mix and match</li>
            </ul>
            
            <h3>Weight Management:</h3>
            <ul>
              <li>Check airline baggage restrictions</li>
              <li>Weigh your luggage before leaving</li>
              <li>Leave room for souvenirs</li>
              <li>Consider shipping items home if needed</li>
            </ul>
            
            <h2>Destination-Specific Considerations</h2>
            
            <h3>Cultural Sensitivity:</h3>
            <ul>
              <li>Research dress codes for religious sites</li>
              <li>Pack modest clothing for conservative countries</li>
              <li>Consider local customs and traditions</li>
            </ul>
            
            <h3>Activity-Specific Gear:</h3>
            <ul>
              <li><strong>Beach Destinations:</strong> Reef-safe sunscreen, beach towel</li>
              <li><strong>Adventure Travel:</strong> Hiking boots, outdoor gear</li>
              <li><strong>Business Travel:</strong> Formal attire, laptop</li>
              <li><strong>Photography Tours:</strong> Extra camera equipment, lens cleaning kit</li>
            </ul>
            
            <p>Remember, the key to successful packing is planning ahead and being realistic about what you'll actually need. It's better to pack light and buy items locally than to struggle with heavy luggage throughout your trip.</p>
          `,
          readTime: '10 min read',
          tags: ['Travel Tips', 'Packing', 'International Travel', 'Checklist']
        };
      
      default:
        return {
          content: `
            <p>This is a sample blog post content. In a real application, this would be fetched from a content management system or database.</p>
            
            <h2>Introduction</h2>
            <p>Travel blogging has become an essential part of the modern travel experience. Whether you're sharing your adventures with friends and family or building a community of fellow travelers, documenting your journeys creates lasting memories and valuable insights for others.</p>
            
            <h2>Key Points</h2>
            <ul>
              <li>Always research your destination thoroughly before traveling</li>
              <li>Pack light but pack smart</li>
              <li>Stay flexible with your itinerary</li>
              <li>Embrace local culture and customs</li>
              <li>Document your experiences through photos and writing</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Travel is one of life's greatest teachers. Every journey offers new perspectives, challenges, and opportunities for growth. Make the most of your adventures by staying open to new experiences and connecting with the people and places you encounter along the way.</p>
          `,
          readTime: '5 min read',
          tags: ['Travel', 'Tips', 'Adventure']
        };
    }
  };

  const fullContent = getFullContent(post.id);

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-800 font-medium">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span>{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">{post.title}</h1>
            <div className="flex items-center justify-center space-x-6 text-white/90">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{fullContent.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Exotic Travels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-medium group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
              {/* Article Actions */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  {fullContent.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                    <Heart className="h-5 w-5" />
                    <span>Save</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: fullContent.content }}
                style={{
                  lineHeight: '1.8',
                  fontSize: '1.1rem'
                }}
              />

              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Exotic Travels Team</h4>
                    <p className="text-gray-600">Travel experts with over 15 years of experience in creating unforgettable journeys across India and beyond.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Related Posts */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Related Posts</h3>
                <div className="space-y-4">
                  {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="block group"
                    >
                      <div className="flex space-x-3">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{relatedPost.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
                <p className="text-sm opacity-90 mb-4">Get the latest travel tips and destination guides delivered to your inbox.</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Plan Your Trip</h3>
                <p className="text-gray-600 text-sm mb-4">Ready to turn your travel dreams into reality?</p>
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
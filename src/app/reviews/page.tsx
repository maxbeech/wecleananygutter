'use client';
import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaGoogle, FaFacebook, FaCheckCircle, FaSearch } from 'react-icons/fa';
import { SiTrustpilot } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

// Animation component for fade-in effects
const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Define review data types
interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  service: string;
  platform: 'google' | 'trustpilot' | 'facebook';
  verified: boolean;
}

// Sample review data
const reviews: Review[] = [
  {
    id: 1,
    name: "David Thompson",
    location: "Dorking, Surrey",
    rating: 5,
    date: "15 May 2023",
    text: "Absolutely fantastic service from start to finish. Tom and his team were professional, efficient, and did an excellent job cleaning our gutters. They showed me before and after photos of the work, and the difference is remarkable. Highly recommend!",
    service: "Gutter Cleaning",
    platform: "google",
    verified: true
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    location: "Reigate, Surrey",
    rating: 5,
    date: "3 April 2023",
    text: "We've used We Clean Any Gutter twice now for our property and they never disappoint. Professional team, fair pricing, and great communication throughout. The gutters are spotless and they cleared all the debris away when finished. Will definitely use again.",
    service: "Gutter Cleaning & Repairs",
    platform: "trustpilot",
    verified: true
  },
  {
    id: 3,
    name: "Michael Roberts",
    location: "Epsom, Surrey",
    rating: 5,
    date: "28 March 2023",
    text: "After several failed attempts with other companies, I'm glad I found We Clean Any Gutter. They fixed a persistent leak that had been causing damp issues. Their attention to detail and thoroughness was impressive. Great service at a reasonable price.",
    service: "Gutter Repairs",
    platform: "google",
    verified: true
  },
  {
    id: 4,
    name: "Emma Wilson",
    location: "Leatherhead, Surrey",
    rating: 5,
    date: "10 February 2023",
    text: "Best gutter cleaning service I've used. The team was punctual, polite and very thorough. They took before and after photos and explained everything they'd done. My gutters haven't been this clean in years. Would recommend to anyone.",
    service: "Gutter Cleaning",
    platform: "facebook",
    verified: true
  },
  {
    id: 5,
    name: "John Davies",
    location: "Godalming, Surrey",
    rating: 4,
    date: "5 February 2023",
    text: "Good service overall. The team came out promptly after my enquiry and did a thorough job of cleaning our gutters and fixing a couple of minor issues. Only small criticism is they were a bit late arriving, but they did call to let me know. Would use again.",
    service: "Gutter Cleaning & Repairs",
    platform: "google",
    verified: true
  },
  {
    id: 6,
    name: "Patricia Moore",
    location: "Guildford, Surrey",
    rating: 5,
    date: "20 January 2023",
    text: "Cannot fault this company. From the initial quote to the completed work, everything was handled professionally. They cleaned our gutters and installed new leaf guards. The price was competitive and the workmanship excellent. Highly recommended!",
    service: "Gutter Cleaning & Guards",
    platform: "trustpilot",
    verified: true
  },
  {
    id: 7,
    name: "Richard Brown",
    location: "Woking, Surrey",
    rating: 5,
    date: "15 December 2022",
    text: "We had our gutters cleaned and some repairs done after the autumn leaf fall. The service was excellent - friendly, efficient and good value. They even spotted and fixed an issue with our downpipe that we weren't aware of. Five stars!",
    service: "Gutter Cleaning & Repairs",
    platform: "google",
    verified: true
  },
  {
    id: 8,
    name: "Helen Taylor",
    location: "Redhill, Surrey",
    rating: 5,
    date: "28 November 2022",
    text: "First class service. Friendly team who clearly take pride in their work. They were very thorough and showed me photos of the gutters before and after cleaning. They also advised on a couple of maintenance issues without any pressure to have the work done. Will definitely use again.",
    service: "Gutter Cleaning",
    platform: "facebook",
    verified: true
  },
  {
    id: 9,
    name: "James Wilson",
    location: "Farnham, Surrey",
    rating: 5,
    date: "10 November 2022",
    text: "Tom and his team did an excellent job replacing our old guttering. They were professional, tidy and completed the work to a high standard. The new gutters look great and work perfectly. Very pleased with the service and would recommend.",
    service: "Gutter Replacement",
    platform: "google",
    verified: true
  },
  {
    id: 10,
    name: "Catherine Lewis",
    location: "Esher, Surrey",
    rating: 4,
    date: "5 October 2022",
    text: "Good service at a fair price. They came out to clean our gutters and install some bird guards. Work was completed efficiently and they cleaned up well afterwards. Would use again for our annual gutter maintenance.",
    service: "Gutter Cleaning & Guards",
    platform: "trustpilot",
    verified: true
  },
  {
    id: 11,
    name: "Robert Walker",
    location: "Haslemere, Surrey",
    rating: 5,
    date: "20 September 2022",
    text: "Exceptional service! We had our gutters cleaned and some repair work done. The team was knowledgeable, professional and very thorough. They identified some additional issues and gave honest advice on what needed immediate attention. Very impressed!",
    service: "Gutter Cleaning & Repairs",
    platform: "google",
    verified: true
  },
  {
    id: 12,
    name: "Susan Hughes",
    location: "Cobham, Surrey",
    rating: 5,
    date: "15 August 2022",
    text: "After heavy rainfall caused overflow from our gutters, We Clean Any Gutter came out quickly to assess and fix the problem. They cleared a blockage and repaired a section that had come loose. Excellent service and reasonable pricing. Would recommend.",
    service: "Gutter Repairs",
    platform: "facebook",
    verified: true
  }
];

const ReviewPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  // Extract unique services for filter
  const services = Array.from(new Set(reviews.map(review => review.service)));

  // Filter reviews based on search and filters
  const filteredReviews = reviews.filter((review) => {
    const matchesSearch = 
      review.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.service.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRating = selectedRating ? review.rating === selectedRating : true;
    const matchesService = selectedService ? review.service === selectedService : true;
    const matchesPlatform = selectedPlatform ? review.platform === selectedPlatform : true;
    
    return matchesSearch && matchesRating && matchesService && matchesPlatform;
  });

  // Function to render stars
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  // Function to render platform icon
  const renderPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'google':
        return <FaGoogle className="h-5 w-5 text-blue-500" />;
      case 'trustpilot':
        return <SiTrustpilot className="h-5 w-5 text-green-500" />;
      case 'facebook':
        return <FaFacebook className="h-5 w-5 text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/We-Clean-Any-Gutter-3.webp"
            alt="Customer Reviews"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Customer Reviews
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              See what our customers have to say about our gutter cleaning and repair services.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="flex justify-center">
              <div className="flex items-center bg-white py-2 px-4 rounded-lg">
                {renderStars(5)}
                <span className="ml-2 font-medium text-gray-700">4.9/5 from 200+ reviews</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Review statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-blue-50 rounded-xl p-8 text-center shadow-lg">
                <div className="mb-4">
                  <FaGoogle className="h-10 w-10 text-blue-500 mx-auto" />
                </div>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <p className="text-gray-700 font-medium text-lg">4.9/5 from 120+ reviews</p>
                <p className="text-gray-500 mt-2">Google Reviews</p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-blue-50 rounded-xl p-8 text-center shadow-lg">
                <div className="mb-4">
                  <SiTrustpilot className="h-10 w-10 text-green-500 mx-auto" />
                </div>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <p className="text-gray-700 font-medium text-lg">4.8/5 from 50+ reviews</p>
                <p className="text-gray-500 mt-2">Trustpilot</p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-blue-50 rounded-xl p-8 text-center shadow-lg">
                <div className="mb-4">
                  <FaFacebook className="h-10 w-10 text-blue-600 mx-auto" />
                </div>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <p className="text-gray-700 font-medium text-lg">4.9/5 from 30+ reviews</p>
                <p className="text-gray-500 mt-2">Facebook Reviews</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Filtering section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Customers Say</h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="relative max-w-2xl mx-auto mb-10">
              <input
                type="text"
                placeholder="Search reviews..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by rating</label>
                <div className="flex flex-wrap gap-2">
                  {[null, 5, 4, 3, 2, 1].map((rating, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedRating(rating)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedRating === rating
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      {rating === null ? 'All Ratings' : `${rating} Star${rating !== 1 ? 's' : ''}`}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by service</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedService(null)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedService === null
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    All Services
                  </button>
                  
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedService(service)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedService === service
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by platform</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedPlatform(null)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedPlatform === null
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    All Platforms
                  </button>
                  
                  {['google', 'trustpilot', 'facebook'].map((platform, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedPlatform(platform)}
                      className={`px-4 py-2 rounded-lg transition-colors flex items-center ${
                        selectedPlatform === platform
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      {renderPlatformIcon(platform)}
                      <span className="ml-2 capitalize">{platform}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Reviews grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((review, index) => (
                <FadeIn 
                  key={review.id} 
                  delay={0.05 * index}
                  className="h-full"
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900">{review.name}</h3>
                        <p className="text-gray-600 text-sm">{review.location}</p>
                      </div>
                      <div className="flex items-center">
                        {renderPlatformIcon(review.platform)}
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                    </div>
                    
                    <div className="mb-4 flex-grow">
                      <FaQuoteLeft className="h-4 w-4 text-blue-400 mb-2" />
                      <p className="text-gray-700">{review.text}</p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {review.service}
                      </span>
                      
                      {review.verified && (
                        <div className="flex items-center text-green-600 text-sm">
                          <FaCheckCircle className="h-4 w-4 mr-1" />
                          Verified Customer
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <p className="text-gray-600 mb-4">
                No reviews found matching your search criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedRating(null);
                  setSelectedService(null);
                  setSelectedPlatform(null);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Leave a review section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Leave Us a Review
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              Your feedback helps us improve our service and helps other customers find reliable gutter cleaning services.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-800 rounded-xl p-6">
                <FaGoogle className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Google</h3>
                <p className="text-blue-200 mb-4">Share your experience on Google to help others find quality gutter services.</p>
                <a 
                  href="https://g.page/r/YOURCODE/review" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-white text-blue-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Review on Google
                </a>
              </div>
              
              <div className="bg-blue-800 rounded-xl p-6">
                <SiTrustpilot className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Trustpilot</h3>
                <p className="text-blue-200 mb-4">Your honest feedback on Trustpilot helps us improve our services.</p>
                <a 
                  href="https://www.trustpilot.com/review/yourcompany" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-white text-blue-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Review on Trustpilot
                </a>
              </div>
              
              <div className="bg-blue-800 rounded-xl p-6">
                <FaFacebook className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Facebook</h3>
                <p className="text-blue-200 mb-4">Share your experience with our gutter cleaning services on Facebook.</p>
                <a 
                  href="https://www.facebook.com/YourCompany/reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-white text-blue-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Review on Facebook
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience Our 5-Star Service?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join our hundreds of satisfied customers and see why we're the most trusted gutter cleaning service in Surrey and surrounding areas.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/quote" 
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-lg hover:bg-green-700 transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ReviewPage; 
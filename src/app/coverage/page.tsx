'use client';
import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaSearch, FaCheck } from 'react-icons/fa';
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

// Define areas covered data
interface Area {
  county: string;
  towns: string[];
}

const areasCovered: Area[] = [
  {
    county: "Surrey",
    towns: [
      "Leatherhead", "Guildford", "Woking", "Epsom", "Dorking", "Reigate", 
      "Redhill", "Farnham", "Godalming", "Camberley", "Weybridge", "Staines", 
      "Esher", "Cobham", "Banstead", "Oxted", "Caterham", "Horley",
      "Haslemere", "Egham", "Chertsey", "Cranleigh", "Ash", "Great Bookham",
      "Fetcham", "Ashtead", "Ewell", "Tadworth", "Addlestone"
    ]
  },
  {
    county: "Sussex",
    towns: [
      "Brighton", "Horsham", "Crawley", "Worthing", "Eastbourne", "Hastings",
      "Burgess Hill", "East Grinstead", "Haywards Heath", "Bognor Regis",
      "Littlehampton", "Chichester", "Seaford", "Lewes", "Hove", "Shoreham-by-Sea",
      "Uckfield", "Crowborough", "Battle", "Peacehaven"
    ]
  },
  {
    county: "Kent",
    towns: [
      "Sevenoaks", "Tonbridge", "Maidstone", "Tunbridge Wells", "Dartford", 
      "Gravesend", "Rochester", "Chatham", "Gillingham", "Sittingbourne",
      "Faversham", "Canterbury", "Whitstable", "Herne Bay", "Deal", "Dover",
      "Folkestone", "Ashford", "Tenterden", "Hythe", "Sandwich", "Edenbridge"
    ]
  },
  {
    county: "Greater London",
    towns: [
      "Croydon", "Sutton", "Kingston upon Thames", "Richmond", "Wandsworth", "Merton",
      "Lambeth", "Bromley", "Greenwich", "Bexley", "Southwark", "Lewisham",
      "Twickenham", "Wimbledon", "Putney", "Clapham", "Streatham", "Dulwich",
      "Forest Hill", "Crystal Palace", "Brixton", "Peckham", "Balham", "Tooting"
    ]
  },
  {
    county: "Hampshire",
    towns: [
      "Farnborough", "Fleet", "Aldershot", "Basingstoke", "Winchester", "Southampton",
      "Portsmouth", "Petersfield", "Alton", "Bordon", "Liphook", "Yateley",
      "Blackwater", "Camberley"
    ]
  },
  {
    county: "Berkshire",
    towns: [
      "Reading", "Bracknell", "Wokingham", "Windsor", "Maidenhead", "Slough",
      "Ascot", "Sunningdale", "Sandhurst", "Crowthorne", "Newbury", "Thatcham",
      "Hungerford"
    ]
  }
];

export default function CoveragePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCounty, setActiveCounty] = useState<string | null>(null);

  const counties = areasCovered.map(area => area.county);

  const filteredAreas = areasCovered
    .filter(area => activeCounty ? area.county === activeCounty : true)
    .map(area => ({
      ...area,
      towns: area.towns.filter(town => 
        town.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }))
    .filter(area => area.towns.length > 0);

  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/We-Clean-Any-Gutter-3.webp"
            alt="Areas we cover"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Areas We Cover
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Our professional gutter cleaning and maintenance services extend across Surrey, Sussex, Kent, London, and surrounding areas.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <Link 
              href="/quote" 
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-lg hover:bg-green-700 transition-colors"
            >
              Get a Free Quote
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>
      
      {/* Coverage map section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Extensive Service Area</h2>
              <p className="text-lg text-gray-600 mb-6">
                Based in Leatherhead, Surrey, We Clean Any Gutter provides high-quality gutter cleaning and repair services throughout the South East of England.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our experienced team regularly covers locations across Surrey, Sussex, Kent, Greater London, Hampshire, and Berkshire, bringing our expertise and professional service to homeowners and businesses alike.
              </p>
              <p className="text-lg text-gray-600">
                If you don't see your specific location listed below, please contact us – we may still be able to help you with your gutter maintenance needs.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn direction="left">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d324855.8808136309!2d-0.7984324471594986!3d51.297018859517054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df62c307352c77%3A0x9f531d3ce17b32eb!2sSurrey!5e0!3m2!1sen!2suk!4v1712593649288!5m2!1sen!2suk"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Area search section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Your Area
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check if we service your location by searching below
            </p>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="relative max-w-2xl mx-auto mb-12">
              <input
                type="text"
                placeholder="Search your town or postcode..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors text-gray-700"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveCounty(null)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCounty === null
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All Areas
              </button>
              
              {counties.map((county) => (
                <button
                  key={county}
                  onClick={() => setActiveCounty(county)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCounty === county
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {county}
                </button>
              ))}
            </div>
          </FadeIn>
          
          <div>
            {filteredAreas.length > 0 ? (
              filteredAreas.map((area, index) => (
                <FadeIn key={area.county} delay={0.1 * index}>
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <FaMapMarkerAlt className="text-blue-600 mr-2" />
                      {area.county}
                    </h3>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {area.towns.map((town) => (
                          <div 
                            key={town} 
                            className="flex items-start"
                          >
                            <FaCheck className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" />
                            <span className="ml-2 text-gray-700">{town}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))
            ) : (
              <FadeIn>
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <p className="text-gray-600 mb-4">
                    No locations found matching your search.
                  </p>
                  <p className="text-gray-600">
                    Don't see your area? We may still be able to help!
                  </p>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>
      
      {/* Travel radius section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Travel Radius
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding our service areas and travel policies
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="right">
              <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Primary Service Area</h3>
                <p className="text-gray-600 mb-4">
                  Our primary service area, where we offer our most competitive rates and fastest response times, is within a 25-mile radius of Leatherhead, Surrey. This covers most of Surrey, parts of Sussex, Greater London, and Hampshire.
                </p>
                <p className="text-gray-600">
                  Within this radius, we typically don't charge travel fees and can often schedule appointments with greater flexibility.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Extended Service Area</h3>
                <p className="text-gray-600 mb-4">
                  We regularly service locations within a 40-mile radius, which extends our coverage to include most of Kent, Sussex, London, Hampshire, and Berkshire. For these areas, a small travel charge may apply depending on the distance.
                </p>
                <p className="text-gray-600">
                  For locations beyond our standard coverage area, please contact us to discuss your needs. We can often accommodate special requests for larger projects.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Multiple property section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multiple Properties & Commercial Services
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Specialized solutions for property managers and businesses
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="right">
              <div className="bg-blue-800 rounded-xl p-6 h-full">
                <h3 className="text-xl font-bold mb-4">Property Managers</h3>
                <p className="text-blue-200 mb-4">
                  If you manage multiple properties across different locations, we offer special rates and can create a customized maintenance schedule to ensure all your properties receive timely service.
                </p>
                <p className="text-blue-200">
                  Our team can work with you to coordinate access and provide detailed reporting for each property, making your job easier.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <div className="bg-blue-800 rounded-xl p-6 h-full">
                <h3 className="text-xl font-bold mb-4">Commercial Services</h3>
                <p className="text-blue-200 mb-4">
                  For commercial buildings, retail premises, offices, schools, and other business properties, we offer comprehensive services that can extend beyond our standard residential coverage area.
                </p>
                <p className="text-blue-200">
                  Our commercial team specializes in handling larger properties and can provide quotes for projects regardless of location.
                </p>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.3} className="mt-8 text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-900 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us For Special Arrangements
            </Link>
          </FadeIn>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Book Our Services?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Whether you're located in one of our listed service areas or need special arrangements, we're here to help with all your gutter cleaning and repair needs.
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
} 
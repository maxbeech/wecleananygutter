'use client';
import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLeaf, FaTools, FaSprayCan, FaHome, FaTint } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

// Animation component for fade-in effects
const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, direction = 'up' }) => {
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
    >
      {children}
    </motion.div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
  link: string;
  delay?: number;
}

// Service card component
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, imageSrc, link, delay = 0 }) => {
  return (
    <FadeIn delay={delay}>
      <div className="group h-full">
        <Link href={link} className="block h-full">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full transform transition duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src={imageSrc} 
                alt={title} 
                fill 
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <div className="text-blue-300 mb-2 text-xl">{icon}</div>
                  <h3 className="text-2xl font-bold">{title}</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">{description}</p>
              <span className="inline-flex items-center text-blue-600 font-medium">
                Learn More 
                <svg className="w-5 h-5 ml-2 transform transition duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </FadeIn>
  );
};

export default function ServicesPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/We-Clean-Any-Gutter-3.webp"
            alt="Gutter cleaning services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Professional Gutter Services
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive gutter cleaning and maintenance solutions for residential and commercial properties across Surrey, Sussex, Kent, and London.
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
      
      {/* Services grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Our Comprehensive Gutter Services
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Gutter Cleaning" 
            description="Professional vacuum gutter cleaning with our no-ladder system. Get your gutters flowing freely and prevent water damage to your property."
            icon={<FaLeaf size={24} />}
            imageSrc="/media/gutter-cleaning-before-after-1.webp"
            link="/services/gutter-cleaning"
            delay={0.1}
          />
          
          <ServiceCard 
            title="Gutter Repairs" 
            description="Fix leaks, breaks, and loose gutters with our professional repair service. Restore functionality and extend the life of your gutter system."
            icon={<FaTools size={24} />}
            imageSrc="/media/10-gutter-repair.webp"
            link="/services/gutter-repairs"
            delay={0.2}
          />
          
          <ServiceCard 
            title="Roof Cleaning" 
            description="Remove moss, algae, and debris from your roof to maintain its appearance and extend its lifespan with our specialized cleaning service."
            icon={<FaHome size={24} />}
            imageSrc="/media/We-Clean-Any-Gutter-2.webp"
            link="/services/roof-cleaning"
            delay={0.3}
          />
          
          <ServiceCard 
            title="Fascia & Soffit Cleaning" 
            description="Restore the appearance of your fascias and soffits with our professional cleaning service, removing dirt, algae, and stains."
            icon={<FaSprayCan size={24} />}
            imageSrc="/media/We-Clean-Any-Gutter-1.webp"
            link="/services/fascia-soffit-cleaning"
            delay={0.4}
          />
          
          <ServiceCard 
            title="Pressure Washing" 
            description="Professional pressure washing for driveways, patios, and outdoor surfaces. Restore the original appearance of your exterior spaces."
            icon={<FaTint size={24} />}
            imageSrc="/media/We-Clean-Any-Gutter-4.webp"
            link="/services/pressure-washing"
            delay={0.5}
          />
        </div>
      </section>
      
      {/* Why choose us section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Why Choose We Clean Any Gutter?
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
                <p className="text-blue-200">Complete peace of mind with our comprehensive insurance coverage for all services.</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Same-Day Service</h3>
                <p className="text-blue-200">Quick response times and efficient service delivery when you need it most.</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">5-Star Rated</h3>
                <p className="text-blue-200">Consistently top-rated by our customers for service excellence and quality.</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
                <p className="text-blue-200">Fair and transparent pricing with no hidden costs or surprise fees.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Your Gutters in Perfect Condition?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us today for a free, no-obligation quote and discover why we're the trusted gutter specialists in your area.
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
'use client';
import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLeaf, FaHandshake, FaTools, FaUserFriends } from 'react-icons/fa';
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

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/We-Clean-Any-Gutter-3.webp"
            alt="We Clean Any Gutter team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About We Clean Any Gutter
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              We're a family-owned business dedicated to providing exceptional gutter services across Surrey, Sussex, Kent, and London.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Our Story section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/media/Tom-Webb-gutter-cleaner-1.webp" 
                alt="We Clean Any Gutter founder" 
                fill 
                className="object-cover object-center" 
              />
            </div>
          </FadeIn>
          
          <FadeIn direction="left">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010 by Tom Webb, We Clean Any Gutter began with a single mission: to provide homeowners with reliable, high-quality gutter cleaning and repair services that they could trust.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                After noticing that many homeowners were struggling with unreliable contractors and unsafe cleaning methods, Tom decided to create a service that would set a new standard in the industry. Starting with just a van and a vacuum system, the company quickly built a reputation for exceptional service and attention to detail.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have grown into one of the most trusted gutter maintenance companies in the region, serving thousands of satisfied customers across Surrey, Sussex, Kent, and London while maintaining our commitment to quality and customer satisfaction.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Values section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-blue-800 rounded-xl p-6 text-center h-full">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-blue-300 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Reliability</h3>
                <p className="text-blue-200">
                  We show up when we say we will and complete the job to the highest standard. Count on us for dependable service every time.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-blue-800 rounded-xl p-6 text-center h-full">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaLeaf className="text-blue-300 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Environmental Care</h3>
                <p className="text-blue-200">
                  We use eco-friendly practices and responsible waste disposal methods to minimize our environmental impact.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-blue-800 rounded-xl p-6 text-center h-full">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHandshake className="text-blue-300 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-blue-200">
                  Honest pricing, transparent communication, and no unnecessary work. We build relationships based on trust.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="bg-blue-800 rounded-xl p-6 text-center h-full">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTools className="text-blue-300 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-blue-200">
                  We're committed to continuous improvement, investing in the best equipment and ongoing training for our team.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Our Approach section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What makes our service different
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Safety First</h3>
                    <p className="text-gray-600">
                      Our no-ladder approach means safer cleaning for our team and no risk of ladder damage to your property. We use specialized equipment to clean gutters from the ground.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Transparency</h3>
                    <p className="text-gray-600">
                      We document our work with before and after images, so you can see exactly what we've done. Our camera system allows us to show you the condition of your gutters.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Efficient Service</h3>
                    <p className="text-gray-600">
                      Our specialized equipment and experienced team work efficiently to complete jobs in a timely manner, minimizing disruption to your day.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Protection</h3>
                    <p className="text-gray-600">
                      We're fully insured, giving you peace of mind that your property is protected while we work. We also offer workmanship guarantees on all services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/media/We-Clean-Any-Gutter-1.webp"
                alt="Our approach to gutter cleaning"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Certifications section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Credentials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to maintain the highest standards in the industry
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications & Insurance</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-900">Fully Insured</h4>
                    <p className="text-gray-600">Comprehensive public liability insurance up to £5 million</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-900">Health & Safety Compliant</h4>
                    <p className="text-gray-600">All staff trained in health and safety procedures</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-900">Professional Memberships</h4>
                    <p className="text-gray-600">Members of the National Association of Professional Inspectors and Testers</p>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Guarantees</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-900">Workmanship Guarantee</h4>
                    <p className="text-gray-600">30-day guarantee on all cleaning services</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-900">12-Month Repair Guarantee</h4>
                    <p className="text-gray-600">All repair work guaranteed for 12 months</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-900">Satisfaction Guarantee</h4>
                    <p className="text-gray-600">We're not satisfied until you are - we'll return to address any concerns</p>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Expert Gutter Services?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Book a service with our professional team today. We're ready to tackle your gutter cleaning, repair, and maintenance needs across Surrey, Sussex, Kent, and London.
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
              <a 
                href="tel:01372703033" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-900 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
              >
                Call 01372 703033
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
} 
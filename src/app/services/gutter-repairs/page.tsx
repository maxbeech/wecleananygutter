'use client';
import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaTools, FaWrench, FaShieldAlt, FaHandshake } from 'react-icons/fa';
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

export default function GutterRepairsPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/10-gutter-repair.webp"
            alt="Professional gutter repairs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Gutter Repairs
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Experienced specialists in fixing all types of gutter problems, from leaks and blockages to complete replacements.
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
      
      {/* Overview section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Gutter Repair Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                At We Clean Any Gutter, we provide comprehensive gutter repair services to address all issues with your guttering system. From minor fixes to complete replacements, our team of qualified technicians has the expertise to solve your gutter problems efficiently.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Damaged or poorly functioning gutters can lead to serious water damage to your property, including foundation issues, damp problems, and damage to fascias and soffits. Our prompt and professional repair service ensures your home remains protected from water damage.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600 text-lg" />
                  <span className="text-gray-600">Leaking gutter joints and seams repair</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600 text-lg" />
                  <span className="text-gray-600">Fixing brackets, sagging and alignment issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600 text-lg" />
                  <span className="text-gray-600">Downpipe repairs and replacements</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600 text-lg" />
                  <span className="text-gray-600">Full gutter replacements when necessary</span>
                </li>
              </ul>
            </div>
          </FadeIn>
          
          <FadeIn direction="left">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/media/We-Clean-Any-Gutter-4.webp" 
                alt="Gutter repair process" 
                fill 
                className="object-cover" 
              />
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Common gutter problems section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common Gutter Problems We Fix
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Identifying and addressing gutter issues promptly can save you from costly repairs later
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-blue-800 rounded-xl p-6 h-full">
                <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                  <svg className="text-blue-300 h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Leaking Gutters</h3>
                <p className="text-blue-200">
                  Leaking joints, holes, and cracks in gutters allow water to escape, potentially causing damage to your property. We seal leaks and replace damaged sections when necessary.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-blue-800 rounded-xl p-6 h-full">
                <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                  <svg className="text-blue-300 h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Sagging Gutters</h3>
                <p className="text-blue-200">
                  Gutters that sag or pull away from the roof can't effectively channel water. We realign sagging gutters and replace damaged brackets and fixings to ensure proper positioning.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-blue-800 rounded-xl p-6 h-full">
                <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                  <FaWrench className="text-blue-300 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Damaged Sections</h3>
                <p className="text-blue-200">
                  Broken or damaged gutter sections can compromise the entire system. We replace damaged parts with matching materials to maintain functionality and appearance.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="bg-blue-800 rounded-xl p-6 h-full">
                <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                  <svg className="text-blue-300 h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Improper Slope</h3>
                <p className="text-blue-200">
                  Gutters need the correct pitch to direct water toward downpipes. We adjust the slope of your gutters to ensure proper water flow and drainage.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <div className="bg-blue-800 rounded-xl p-6 h-full">
                <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                  <svg className="text-blue-300 h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Undersized Gutters</h3>
                <p className="text-blue-200">
                  Gutters too small for your roof area can overflow during heavy rain. We can upgrade your guttering system to one with the appropriate capacity for your property.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.6}>
              <div className="bg-blue-800 rounded-xl p-6 h-full">
                <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                  <FaTools className="text-blue-300 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Aging Gutters</h3>
                <p className="text-blue-200">
                  Older guttering systems naturally deteriorate over time. We offer complete gutter replacement services when repairs are no longer cost-effective.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Our Process section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Gutter Repair Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a thorough process to ensure your gutter problems are resolved efficiently
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FadeIn delay={0.1}>
            <div className="bg-white p-8 rounded-xl shadow-lg h-full border-t-4 border-blue-600">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">1. Assessment & Diagnosis</h3>
              <p className="text-gray-600 text-center">
                We thoroughly inspect your gutter system to identify all issues, both visible and hidden. Our experienced technicians diagnose the root causes of problems to provide a comprehensive repair plan.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-white p-8 rounded-xl shadow-lg h-full border-t-4 border-blue-600">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">2. Clear Quotation</h3>
              <p className="text-gray-600 text-center">
                After assessment, we provide a detailed quotation outlining all required repairs, replacement parts, and associated costs. We explain our recommendations, ensuring you understand the work needed before proceeding.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="bg-white p-8 rounded-xl shadow-lg h-full border-t-4 border-blue-600">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto">
                <FaTools className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">3. Expert Repair Service</h3>
              <p className="text-gray-600 text-center">
                Our skilled technicians carry out all necessary repairs using high-quality materials and proven techniques. We ensure all work is completed to the highest standards, with minimal disruption to your property.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Materials section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Materials & Guarantee
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use only premium materials for long-lasting repairs
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/media/We-Clean-Any-Gutter-3.webp" 
                  alt="Quality gutter materials" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Durable Materials for Lasting Results</h3>
                <p className="text-lg text-gray-600 mb-6">
                  We only use high-quality materials for all our gutter repairs to ensure durability and longevity. Whether repairing an existing system or replacing sections, we match materials to your current guttering for a seamless finish.
                </p>
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">We Work With:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-green-600" />
                      <span className="text-gray-600">UPVC Guttering</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-green-600" />
                      <span className="text-gray-600">Aluminium Systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-green-600" />
                      <span className="text-gray-600">Cast Iron Gutters</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-green-600" />
                      <span className="text-gray-600">Copper Guttering</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-green-600" />
                      <span className="text-gray-600">Seamless Aluminium</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-green-600" />
                      <span className="text-gray-600">Heritage Systems</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-100 rounded-lg">
                  <FaShieldAlt className="text-blue-600 text-2xl flex-shrink-0" />
                  <p className="text-blue-900 font-medium">
                    All our repair work comes with a 12-month guarantee for your peace of mind.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read about our customers' experiences with our gutter repair services
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Excellent service from start to finish. They repaired a significant leak in our guttering that had been causing damp in our walls. The team was professional, explained exactly what they were doing, and the repair has worked perfectly. Very reasonable pricing too."
              </p>
              <div className="font-bold text-gray-900">David Thompson</div>
              <div className="text-gray-500 text-sm">Homeowner in Surrey</div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "We needed a complete replacement of our old cast iron gutters on our period property. The team was incredibly knowledgeable about heritage systems and provided an excellent solution that maintained the character of our home while ensuring modern performance."
              </p>
              <div className="font-bold text-gray-900">Sarah Wilson</div>
              <div className="text-gray-500 text-sm">Property Owner in Kent</div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* FAQ section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How do I know if my gutters need repair rather than replacement?</h3>
                <p className="text-gray-600">
                  If the damage is isolated to specific sections or joints, repairs are usually sufficient. However, if your gutters show widespread deterioration, sagging in multiple places, or are very old (15+ years for UPVC), replacement might be more cost-effective in the long run. Our experts can assess your specific situation and recommend the most appropriate solution.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How quickly can you repair my gutters?</h3>
                <p className="text-gray-600">
                  For standard repairs, we can usually schedule the work within 1-2 weeks of your initial consultation. For emergency repairs where water damage is occurring, we offer priority scheduling and can often attend within 24-48 hours. The repair itself typically takes 1-4 hours depending on the extent of the damage.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Do you match the existing gutters when replacing sections?</h3>
                <p className="text-gray-600">
                  Yes, we make every effort to match your existing guttering system in terms of material, color, and profile. For older or discontinued systems, we can advise on the closest available matches or alternative solutions that would complement your property.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">What is your guarantee for gutter repairs?</h3>
                <p className="text-gray-600">
                  All our repair work comes with a 12-month guarantee. If any issues arise with the specific repairs we've conducted within this period, we'll return and fix them at no additional cost. For complete gutter replacements, we offer extended manufacturer warranties depending on the system installed.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Fix Your Gutter Problems?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free, no-obligation assessment and quote. Our expert team is ready to solve your gutter issues efficiently and professionally.
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
'use client';
import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaLeaf, FaShieldAlt, FaVideo, FaTools } from 'react-icons/fa';
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

export default function GutterCleaningPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/gutter-cleaning-before-after-1.webp"
            alt="Professional gutter cleaning"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Gutter Cleaning
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Our specialized vacuum system cleans your gutters safely and effectively without using ladders, preserving your home from water damage.
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
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/media/We-Clean-Any-Gutter-1.webp" 
                alt="Gutter cleaning process" 
                fill 
                className="object-cover" 
              />
            </div>
          </FadeIn>
          
          <FadeIn direction="left">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Gutter Cleaning Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                At We Clean Any Gutter, we specialize in professional gutter cleaning services that prevent water damage and maintain the integrity of your property. Our unique vacuum system allows us to clean gutters from the ground level without using ladders, making it safer and more efficient.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Clogged gutters can lead to serious issues including water damage to foundations, fascias, soffits, and interior walls. Regular gutter cleaning is essential to protect your home and extend the lifespan of your gutter system.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 text-blue-600 text-lg font-medium">
                <span>Our service is trusted by homeowners across</span>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">Surrey</span>
                  <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">Sussex</span>
                  <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">Kent</span>
                  <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">London</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Benefits section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of Professional Gutter Cleaning
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Regular gutter maintenance provides numerous benefits for your property
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-blue-800 rounded-xl p-6 h-full">
                <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                  <FaShieldAlt className="text-blue-300 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Prevents Water Damage</h3>
                <p className="text-blue-200">
                  Prevents water overflow that can damage your foundations, walls, and landscaping. Keeps water flowing properly away from your property.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-blue-800 rounded-xl p-6 h-full">
                <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                  <FaLeaf className="text-blue-300 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Eliminates Blockages</h3>
                <p className="text-blue-200">
                  Removes leaves, twigs, moss, and debris that cause blockages. Prevents nesting animals and insects from making homes in your gutters.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-blue-800 rounded-xl p-6 h-full">
                <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                  <FaTools className="text-blue-300 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Extends Gutter Life</h3>
                <p className="text-blue-200">
                  Reduces weight and stress on gutter fixings. Prevents corrosion and deterioration caused by standing water and debris.
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
            Our Gutter Cleaning Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use a specialized vacuum system that allows us to clean your gutters safely from the ground
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Inspection</h3>
                  <p className="text-gray-600">
                    We start with a thorough inspection of your gutter system, including downpipes, to identify blockages and any potential issues.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Vacuum Cleaning</h3>
                  <p className="text-gray-600">
                    Using our powerful vacuum system with specialized carbon fiber poles that extend up to 40ft, we remove all debris from your gutters without ladders.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Downpipe Clearing</h3>
                  <p className="text-gray-600">
                    We ensure all downpipes are clear and flowing correctly, using specialized equipment to remove any blockages.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Final Inspection</h3>
                  <p className="text-gray-600">
                    We complete the job with a final inspection, showing you before and after images to demonstrate the quality of our work.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/30 z-10">
                <a 
                  href="#" 
                  className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    // Video play functionality would go here
                  }}
                >
                  <FaVideo className="text-white text-3xl ml-1" />
                </a>
              </div>
              <Image 
                src="/media/We-Clean-Any-Gutter-2.webp" 
                alt="Our gutter cleaning process" 
                fill 
                className="object-cover" 
              />
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Why Choose Us section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us For Your Gutter Cleaning?
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FaCheck className="flex-shrink-0 mt-1 text-green-600 text-lg" />
                    <div>
                      <h3 className="font-bold text-gray-900">No-Ladder System</h3>
                      <p className="text-gray-600">We clean from the ground using our specialized vacuum system, which is safer for our team and your property.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="flex-shrink-0 mt-1 text-green-600 text-lg" />
                    <div>
                      <h3 className="font-bold text-gray-900">Professional & Reliable</h3>
                      <p className="text-gray-600">Our experienced team provides consistent, high-quality service with attention to detail.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="flex-shrink-0 mt-1 text-green-600 text-lg" />
                    <div>
                      <h3 className="font-bold text-gray-900">Comprehensive Service</h3>
                      <p className="text-gray-600">We don't just clean gutters – we inspect, clear downpipes, and identify any issues that need attention.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FaCheck className="flex-shrink-0 mt-1 text-green-600 text-lg" />
                    <div>
                      <h3 className="font-bold text-gray-900">Fully Insured</h3>
                      <p className="text-gray-600">Peace of mind with our comprehensive insurance coverage for all work conducted.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="flex-shrink-0 mt-1 text-green-600 text-lg" />
                    <div>
                      <h3 className="font-bold text-gray-900">Transparent Pricing</h3>
                      <p className="text-gray-600">Clear, upfront quotes with no hidden costs or surprise charges.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="flex-shrink-0 mt-1 text-green-600 text-lg" />
                    <div>
                      <h3 className="font-bold text-gray-900">Same-Day Service Available</h3>
                      <p className="text-gray-600">Quick response times and efficient service when you need it most.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Before & After section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Before & After
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the difference our professional gutter cleaning service makes
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/media/gutter-cleaning-before-after-1.webp" 
                alt="Before and after gutter cleaning" 
                width={800} 
                height={500} 
                className="w-full h-auto" 
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-900">Residential Property in Surrey</h3>
                <p className="text-gray-600">Complete gutter system cleaning with debris removal</p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/media/Gutter-Cleaning-before-after.webp" 
                alt="Before and after gutter cleaning" 
                width={800} 
                height={500} 
                className="w-full h-auto" 
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-900">Commercial Building in Kent</h3>
                <p className="text-gray-600">Heavy moss and debris removal from gutter system</p>
              </div>
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">How often should I have my gutters cleaned?</h3>
                <p className="text-gray-600">
                  We recommend cleaning your gutters at least twice a year—once in the spring and once in the fall. However, if your property is surrounded by trees, more frequent cleaning may be necessary, especially during autumn months when leaves fall.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How do you clean gutters without using ladders?</h3>
                <p className="text-gray-600">
                  We use a specialized vacuum system with high-reach carbon fiber poles that can extend up to 40 feet. This technology allows us to clean gutters thoroughly from the ground, which is safer than traditional ladder methods and causes no damage to your property.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How much does gutter cleaning cost?</h3>
                <p className="text-gray-600">
                  The cost depends on various factors, including the size of your property, the height of the gutters, and the level of debris. We provide free, no-obligation quotes tailored to your specific needs. Contact us for a personalized estimate.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Do you offer any guarantees?</h3>
                <p className="text-gray-600">
                  Yes, we guarantee our work. If you experience any issues with water flow through your gutters within 30 days of our service due to debris we missed, we'll return and clean them again at no additional cost.
                </p>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.5} className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Have more questions? Contact us or visit our comprehensive FAQ page.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/faq" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
              >
                More FAQs
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg shadow-lg hover:bg-gray-300 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Your Gutters Professionally Cleaned?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free, no-obligation quote. Our team is ready to help protect your property with our professional gutter cleaning service.
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
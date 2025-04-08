'use client';
import React, { useRef, ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaQuoteLeft, FaCheck, FaPhone, FaShieldAlt, FaStar, FaSmile, FaLeaf, FaScrewdriver, FaHome } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import Hero from '@/components/Hero';

// Animation components
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
  fullWidth?: boolean;
  className?: string;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = null, 
  fullWidth = false,
  className = "",
  duration = 0.5
}) => {
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
        duration,
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
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  imgClassName?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  speed = 0.5,
  imgClassName = '',
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300 * speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0">
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className={`object-cover ${imgClassName}`}
          priority
        />
      </motion.div>
    </div>
  );
};

// Service card component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  imgSrc: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, href, imgSrc, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up" className="group">
      <Link href={href} className="block h-full">
        <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden group-hover:shadow-xl transition-shadow">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={imgSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              {icon}
              <h3 className="text-xl font-bold mt-2">{title}</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600">{description}</p>
            <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
              Learn More <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
};

// Process step component
interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, delay = 0 }) => {
  return (
    <FadeIn delay={delay} className="relative">
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
            {number}
          </div>
        </div>
        <div className="ml-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </FadeIn>
  );
};

// Benefit item component
interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <FadeIn delay={delay} className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </FadeIn>
  );
};

// Testimonial card component
interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  rating: number;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, location, rating, delay = 0 }) => {
  return (
    <FadeIn delay={delay} className="h-full">
      <div className="h-full bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 mr-1" />
          ))}
        </div>
        <div className="mb-4 text-gray-700">
          <FaQuoteLeft className="float-left text-blue-200 mr-2 text-xl" />
          {quote}
        </div>
        <div className="mt-4">
          <p className="font-medium text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </FadeIn>
  );
};

export default function Home() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  // Latest News Section
  const latestNews = [
    {
      title: 'Historic Surrey Football Club Left Without A Home Ground',
      date: 'January 25, 2025',
      category: 'Club News',
      image: '/media/Playing football/2025-03-29_20-56-31_UTC_2.jpg',
      excerpt: 'Banstead Athletic FC faces an uncertain future as they search for a new home ground.',
      link: '/news',
    },
    {
      title: 'Join Our Team',
      date: 'October 06, 2024',
      category: 'Club News',
      image: '/media/Playing football/2025-03-08_21-25-43_UTC_1.jpg',
      excerpt: 'We are looking for passionate individuals to join our team and help grow the club.',
      link: '/news',
    },
    {
      title: 'Club Statement',
      date: 'August 30, 2024',
      category: 'Club News',
      image: '/media/Playing football/2025-03-22_19-41-45_UTC.jpg',
      excerpt: 'An important update from the club regarding our future plans and developments.',
      link: '/news',
    },
  ];

  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Professional Gutter Services</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-3xl mx-auto text-lg text-gray-600">
                We offer a comprehensive range of gutter cleaning and maintenance services for both residential and commercial properties.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<FaLeaf className="text-2xl" />}
              title="Gutter Cleaning"
              description="Complete removal of leaves, debris, and blockages from gutters and downpipes using our powerful vacuum system."
              href="/services/gutter-cleaning"
              imgSrc="/media/gutter-cleaning-before-after-1.webp"
              delay={0.1}
            />
            <ServiceCard 
              icon={<FaScrewdriver className="text-2xl" />}
              title="Gutter Repairs"
              description="Quick and effective repairs to leaking joints, sagging gutters, and damaged downpipes to prevent water damage."
              href="/services/gutter-repairs"
              imgSrc="/media/10-gutter-repair.webp"
              delay={0.2}
            />
            <ServiceCard 
              icon={<FaHome className="text-2xl" />}
              title="Fascia & Soffit Cleaning"
              description="Professional cleaning of UPVC fascias and soffits to remove dirt, algae, and stains, restoring their appearance."
              href="/services/fascia-soffit-cleaning"
              imgSrc="/media/We-Clean-Any-Gutter-4.webp"
              delay={0.3}
            />
          </div>
          
          <div className="mt-12 text-center">
            <FadeIn delay={0.4}>
              <Link href="/services" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                View All Services <FaArrowRight className="ml-2" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Regular Gutter Maintenance</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-3xl mx-auto text-lg text-gray-600">
                Proper gutter maintenance is essential for protecting your property from water damage and maintaining its value.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitItem 
              icon={<FaShieldAlt className="text-2xl" />}
              title="Prevent Damage"
              description="Avoid costly repairs by preventing water damage to your roof, walls, and foundation."
              delay={0.1}
            />
            <BenefitItem 
              icon={<FaStar className="text-2xl" />}
              title="Increase Property Value"
              description="Well-maintained gutters enhance curb appeal and protect your property's structural integrity."
              delay={0.2}
            />
            <BenefitItem 
              icon={<FaSmile className="text-2xl" />}
              title="Peace of Mind"
              description="Rest easy knowing your home is protected from potential water-related issues."
              delay={0.3}
            />
            <BenefitItem 
              icon={<FaLeaf className="text-2xl" />}
              title="Prevent Pest Infestations"
              description="Remove debris that can attract pests and create breeding grounds for insects."
              delay={0.4}
            />
          </div>
        </div>
      </section>
      
      {/* Before/After Section */}
      <section ref={ref} className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            style={{ scale, opacity }}
            className="absolute inset-0"
          >
            <Image
              src="/media/Gutter-Cleaning-before-after.webp"
              alt="Before and After Gutter Cleaning"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/60" />
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4">See the Difference We Make</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-3xl mx-auto text-lg text-blue-100">
                Our professional gutter cleaning service transforms clogged, overflowing gutters into properly functioning drainage systems.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCheck className="mt-1 mr-3 text-green-400 flex-shrink-0" />
                  <p>We use a state-of-the-art gutter vacuum system that effectively removes all leaves, debris, and blockages.</p>
                </li>
                <li className="flex items-start">
                  <FaCheck className="mt-1 mr-3 text-green-400 flex-shrink-0" />
                  <p>Our wireless camera system allows us to inspect gutters thoroughly and show you before and after results.</p>
                </li>
                <li className="flex items-start">
                  <FaCheck className="mt-1 mr-3 text-green-400 flex-shrink-0" />
                  <p>We clear and test downpipes to ensure proper water flow and drainage.</p>
                </li>
                <li className="flex items-start">
                  <FaCheck className="mt-1 mr-3 text-green-400 flex-shrink-0" />
                  <p>All work is carried out safely from the ground - no ladders required!</p>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/quote" className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors">
                  Get Your Free Quote
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-blue-200/30">
              <h3 className="text-xl font-bold mb-4">Why choose our gutter vacuum system?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <p className="text-blue-100">Safe, efficient cleaning from the ground - no ladders needed</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <p className="text-blue-100">Powerful suction removes all debris, including wet leaves and mud</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <p className="text-blue-100">Live camera inspection ensures thorough cleaning</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <p className="text-blue-100">Carbon fiber poles reach up to four stories high</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <p className="text-blue-100">Minimal mess and disruption to your property</p>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Simple Process</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-3xl mx-auto text-lg text-gray-600">
                We make gutter cleaning hassle-free with our efficient, professional service.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-12">
              <ProcessStep 
                number="1"
                title="Request a Quote"
                description="Fill out our simple online form or give us a call to receive a fast, free, no-obligation quote."
                delay={0.1}
              />
              <ProcessStep 
                number="2"
                title="Schedule Service"
                description="We'll arrange a convenient appointment time that works for your schedule."
                delay={0.2}
              />
              <ProcessStep 
                number="3"
                title="Thorough Inspection"
                description="Our team conducts a complete assessment of your gutters using our camera system."
                delay={0.3}
              />
              <ProcessStep 
                number="4"
                title="Professional Cleaning"
                description="We clean your gutters thoroughly using our specialized vacuum equipment."
                delay={0.4}
              />
              <ProcessStep 
                number="5"
                title="Complete Satisfaction"
                description="We provide before and after images and ensure you're completely satisfied with our work."
                delay={0.5}
              />
            </div>
            <FadeIn delay={0.3} className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/media/Tom-Webb-gutter-cleaner-1.webp"
                alt="Our Professional Gutter Cleaning Process"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-3xl mx-auto text-lg text-gray-600">
                Don't just take our word for it. Read what our satisfied customers have to say about our gutter cleaning services.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Excellent service from start to finish. They arrived on time, were very professional, and did a thorough job cleaning our gutters. Highly recommend!"
              author="Sarah Thompson"
              location="Surrey"
              rating={5}
              delay={0.1}
            />
            <TestimonialCard 
              quote="Very impressed with the gutter vacuum system they use. No mess, no ladders, and they showed me before and after photos. Great service!"
              author="James Wilson"
              location="Kent"
              rating={5}
              delay={0.2}
            />
            <TestimonialCard 
              quote="We've been using We Clean Any Gutter for years now. Always reliable, professional, and they do an amazing job. Wouldn't use anyone else."
              author="Emma Richards"
              location="Sussex"
              rating={5}
              delay={0.3}
            />
          </div>
          
          <div className="mt-12 text-center">
            <FadeIn delay={0.4}>
              <Link href="/reviews" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                Read More Reviews <FaArrowRight className="ml-2" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-0 lg:flex-1">
              <FadeIn>
                <h2 className="text-3xl font-bold text-white">Ready to get those gutters cleaned?</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="mt-4 text-lg text-blue-100 max-w-3xl">
                  Contact us today for a free, no-obligation quote. We serve residential and commercial properties throughout Surrey, Sussex, Kent, and London.
                </p>
              </FadeIn>
            </div>
            <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
              <FadeIn delay={0.2} className="inline-flex rounded-md shadow">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </FadeIn>
              <FadeIn delay={0.3} className="ml-3 inline-flex rounded-md shadow">
                <a
                  href="tel:01372703033"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 transition-colors"
                >
                  <FaPhone className="mr-2" /> Call Us
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 
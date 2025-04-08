'use client';
import React, { useRef, ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaQuoteLeft, FaCheck, FaPhone } from 'react-icons/fa';
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
    threshold: 0.2,
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
        duration: duration,
        delay: delay,
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

export default function Home() {
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
      
      {/* Next Match Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-600 rounded-lg shadow-xl overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Next Match</h2>
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2 mb-2">
                    <Image
                      src="/media/Team logos/banstead-athletic-fc-logo.png"
                      alt="Banstead Athletic FC"
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-white font-bold">Banstead Athletic FC</p>
                </div>
                <div className="text-white">
                  <p className="text-4xl font-bold">VS</p>
                  <p className="text-sm mt-2">Sat 24th Feb, 15:00</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2 mb-2">
                    <Image
                      src="/media/Team logos/worthing-united-logo.jpg"
                      alt="Worthing United FC"
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-white font-bold">Worthing United FC</p>
                </div>
              </div>
              <Link
                href="/fixtures"
                className="inline-block mt-6 px-6 py-3 bg-white text-amber-600 font-bold rounded-md hover:bg-gray-100 transition-colors"
              >
                View Fixtures
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((item) => (
              <div key={item.title} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-amber-600 mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.excerpt}
                  </p>
                  <Link
                    href={item.link}
                    className="text-amber-600 font-medium hover:text-amber-700"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/news"
              className="inline-block px-6 py-3 bg-amber-600 text-white font-bold rounded-md hover:bg-amber-700 transition-colors"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Part of Our Community</h2>
              <p className="text-gray-600 mb-6">
                At Banstead Athletic FC, we're more than just a football club. We're a vital part of the local community, 
                providing opportunities for young talent to develop and bringing people together through the beautiful game.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Youth Development Programs</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Community Outreach Initiatives</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Local Partnership Programs</p>
                </div>
              </div>
              <Link
                href="/community"
                className="inline-block mt-8 px-6 py-3 bg-amber-600 text-white font-bold rounded-md hover:bg-amber-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="relative h-96">
              <Image
                src="/media/Playing football/2025-03-29_20-56-31_UTC_2.jpg"
                alt="Community involvement"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                src: '/media/Sponsors logos/360-skiphire-banner.webp',
                alt: '360 Skip Hire',
                href: 'https://360skiphire.co.uk'
              },
              {
                src: '/media/Sponsors logos/ADBLY-LOGO-JPG.webp',
                alt: 'Adbly Digital Marketing',
                href: 'https://adbly.co.uk'
              },
              {
                src: '/media/Sponsors logos/brown-signs-logo.webp',
                alt: 'Brown Signs',
                href: '#'
              },
              {
                src: '/media/Sponsors logos/wes-electrical-services-logo.webp',
                alt: 'WES Electrical Services',
                href: '#'
              },
              {
                src: '/media/Sponsors logos/IMG_0024.png',
                alt: 'Sponsor',
                href: '#'
              },
              {
                src: '/media/Sponsors logos/IMG_2493.jpeg',
                alt: 'Sponsor',
                href: '#'
              },
              {
                src: '/media/Sponsors logos/34cc2ede-3b5d-4bbb-b1b4-c961c876ce89.webp',
                alt: 'Sponsor',
                href: '#'
              }
            ].map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-24 w-full">
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/sponsors"
              className="inline-block px-6 py-3 border-2 border-amber-600 text-amber-600 font-bold rounded-md hover:bg-amber-600 hover:text-white transition-colors"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 
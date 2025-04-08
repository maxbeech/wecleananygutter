'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLongArrowAltRight } from 'react-icons/fa';

interface Media {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

const Hero = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // List of media for the hero carousel
  const heroMedia: Media[] = [
    { type: 'video', src: '/media/home_hero_slider/Gutter-Vacuum-Cleaning.mp4' },
    { type: 'video', src: '/media/home_hero_slider/2333-157269889_medium.mp4' },
    { type: 'image', src: '/media/We-Clean-Any-Gutter-1.webp', alt: 'Gutter cleaning in progress' },
    { type: 'image', src: '/media/We-Clean-Any-Gutter-2.webp', alt: 'Clean gutters after service' },
    { type: 'image', src: '/media/We-Clean-Any-Gutter-3.webp', alt: 'Gutter vacuum cleaning system' },
    { type: 'image', src: '/media/We-Clean-Any-Gutter-4.webp', alt: 'Professional gutter cleaning' },
  ];

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-advance the media carousel
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % heroMedia.length);
    }, 7000); // Change media every 7 seconds

    return () => clearInterval(interval);
  }, [isClient, heroMedia.length]);

  // Play video when it becomes active
  useEffect(() => {
    if (isClient && heroMedia[currentMediaIndex].type === 'video' && videoRef.current) {
      videoRef.current.play().catch(err => console.log('Video play error:', err));
    }
  }, [currentMediaIndex, isClient, heroMedia]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 bg-blue-900/30 z-10"
        style={{
          backgroundImage: 'url(/media/pattern.svg)',
          backgroundSize: '100px',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply',
          opacity: 0.2
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-blue-900/60 z-10" />
      
      {/* Media slides */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {isClient && (
            <motion.div
              key={currentMediaIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              {heroMedia[currentMediaIndex].type === 'video' ? (
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full"
                >
                  <source src={heroMedia[currentMediaIndex].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={heroMedia[currentMediaIndex].src}
                  alt={heroMedia[currentMediaIndex].alt || "Gutter cleaning services"}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Professional <span className="text-blue-300">Gutter Cleaning</span> Services
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl sm:text-2xl text-white/90 mb-8"
            >
              We clean any gutter, any height, any property. Serving Surrey, Sussex, Kent, and London.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-md hover:bg-green-700 transition-colors group"
              >
                Get a Free Quote
                <FaLongArrowAltRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services/gutter-cleaning"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white text-lg font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                Our Services
              </Link>
            </motion.div>
            
            {/* Trust badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-12 flex flex-wrap gap-4 items-center"
            >
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-md text-white">
                <span className="text-blue-300 font-bold">15+ Years</span> Experience
              </div>
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-md text-white">
                <span className="text-blue-300 font-bold">Fully</span> Insured
              </div>
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-md text-white">
                <span className="text-blue-300 font-bold">5-Star</span> Rated
              </div>
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-md text-white">
                <span className="text-blue-300 font-bold">No</span> Ladders
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
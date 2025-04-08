'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // List of videos for the hero carousel
  const heroVideos = [
    '/media/home_hero_slider/2025-03-29_20-56-31_UTC_1.mp4',
    '/media/home_hero_slider/2025-03-08_21-25-43_UTC_2.mp4',
    '/media/home_hero_slider/2023-10-06_22-38-48_UTC.mp4',
    '/media/home_hero_slider/2023-07-12_22-46-41_UTC_1.mp4',
    '/media/home_hero_slider/2023-07-12_22-46-41_UTC_7.mp4',
    '/media/home_hero_slider/2023-07-12_22-46-41_UTC_8.mp4',
    '/media/home_hero_slider/2023-06-29_13-04-16_UTC_6.mp4',
    '/media/home_hero_slider/2023-06-29_13-04-16_UTC_7.mp4',
  ];

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-advance the video carousel
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, [isClient]);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        {isClient && (
          <video
            key={heroVideos[currentVideoIndex]}
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          >
            <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Welcome to Banstead Athletic FC
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 animate-fade-in">
            A proud community-focused club based in Chessington, Surrey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link
              href="/fixtures"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition-colors"
            >
              View Fixtures
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
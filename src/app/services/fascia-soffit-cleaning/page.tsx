"use client";

import React, { useState, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaPhoneAlt, FaShieldAlt, FaHome, FaBrush } from 'react-icons/fa';

// FadeIn component for animations
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: string;
}

const FadeIn = ({ children, delay = 0, className = "", direction = "" }: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  
  let directionStyles: { x?: number; y?: number } = {};
  if (direction === "up") {
    directionStyles = { y: 20 };
  } else if (direction === "down") {
    directionStyles = { y: -20 };
  } else if (direction === "left") {
    directionStyles = { x: 20 };
  } else if (direction === "right") {
    directionStyles = { x: -20 };
  }

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        ...directionStyles
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : directionStyles.x || 0,
        y: isInView ? 0 : directionStyles.y || 0,
      }}
      transition={{
        duration: 0.7,
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function FasciaSoffitCleaningPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full h-[50vh] md:h-[60vh] relative flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="/media/We-Clean-Any-Gutter-1.webp"
          alt="Fascia and soffit cleaning services"
          fill
          className="object-cover"
          priority
        />
        <div className="container mx-auto px-4 z-20 text-center">
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Fascia & Soffit Cleaning</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Professional cleaning services to restore and protect the appearance of your roofline components.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <FadeIn direction="right">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Maintain Your Property's Roofline</h2>
                <p className="text-lg mb-6">
                  Fascias and soffits are vital components of your property's roofline that protect your roof structure from weather damage while enhancing your home's appearance. Over time, these elements can become dirty, discolored, and covered in moss, mold, and algae.
                </p>
                <p className="text-lg mb-6">
                  Our specialized fascia and soffit cleaning service removes built-up dirt, biological growth, and staining to restore their appearance and protect their integrity. Using safe, effective cleaning methods and equipment, we can reach even the highest areas without risking damage to your property.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <FaCheck className="text-primary" />
                  <p className="font-medium">Safe cleaning techniques that won't damage painted or uPVC surfaces</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-primary" />
                  <p className="font-medium">Thorough removal of mold, algae, and grime build-up</p>
                </div>
              </FadeIn>
            </div>
            <div className="md:w-1/2">
              <FadeIn direction="left">
                <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src="/media/We-Clean-Any-Gutter-5.webp" 
                    alt="Fascia and soffit cleaning" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Benefits of Clean Fascias & Soffits</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                  <FaHome className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enhanced Property Appearance</h3>
                <p>
                  Clean fascias and soffits dramatically improve your home's exterior appearance. Remove unsightly black streaks, dirt, and biological growth to restore your roofline's original color and finish, significantly enhancing your property's curb appeal.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                  <FaShieldAlt className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Extended Component Lifespan</h3>
                <p>
                  Mold, algae, and dirt buildup can damage fascia and soffit materials over time, particularly uPVC. Regular professional cleaning removes these harmful elements, preventing degradation and extending the lifespan of these essential roofline components.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                  <FaBrush className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Prevents Pest Infestations</h3>
                <p>
                  Clean, well-maintained fascias and soffits are less likely to attract pests. By removing debris and biological growth, you'll reduce the risk of birds, insects, and rodents nesting in your roofline and potentially causing damage to your property.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Our Comprehensive Services</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-10">
            <FadeIn direction="right" delay={0.1}>
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">uPVC Fascia & Soffit Cleaning</h3>
                <p className="mb-4">
                  Our specialized cleaning process for uPVC fascias and soffits includes:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Gentle yet effective removal of dirt, algae, and black spots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Safe cleaning solutions that won't damage plastic surfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Restoration of original bright white appearance</span>
                  </li>
                </ul>
                <p>
                  Perfect for maintaining modern uPVC roofline systems without causing damage or discoloration.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Wooden Fascia & Soffit Restoration</h3>
                <p className="mb-4">
                  Our careful approach to wooden fascias and soffits includes:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Gentle cleaning that preserves paint and wood integrity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Removal of mold, mildew and organic growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Identification of any areas needing repair or repainting</span>
                  </li>
                </ul>
                <p>
                  Our methods are suitable for painted and stained wooden fascias and soffits, carefully preserving their finish.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Our Cleaning Approach</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/media/We-Clean-Any-Gutter-6.webp" 
                  alt="Fascia and soffit cleaning process" 
                  fill 
                  className="object-cover"
                />
              </div>
            </FadeIn>
            
            <div>
              <FadeIn direction="left" delay={0.1}>
                <div className="mb-6">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">1</div>
                  <h3 className="text-xl font-bold mb-2">Initial Assessment</h3>
                  <p>We begin with a thorough inspection of your fascias and soffits to determine their condition, material type, and the appropriate cleaning approach needed.</p>
                </div>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.2}>
                <div className="mb-6">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">2</div>
                  <h3 className="text-xl font-bold mb-2">Surface Preparation</h3>
                  <p>We protect surrounding areas including windows, doors, walls, and landscaping before beginning the cleaning process.</p>
                </div>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.3}>
                <div className="mb-6">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">3</div>
                  <h3 className="text-xl font-bold mb-2">Specialized Cleaning</h3>
                  <p>Using our specialized equipment and environmentally friendly cleaning solutions, we carefully remove dirt, algae, and stains from your fascias and soffits.</p>
                </div>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.4}>
                <div>
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">4</div>
                  <h3 className="text-xl font-bold mb-2">Final Inspection</h3>
                  <p>After cleaning, we conduct a thorough inspection to ensure all areas have been properly cleaned and restored to their best possible condition.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Complementary Services */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">Complementary Services</h2>
            <p className="text-xl text-center max-w-3xl mx-auto mb-12">
              For complete exterior maintenance, consider these additional services that pair perfectly with fascia and soffit cleaning.
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <Link href="/services/gutter-cleaning" className="block group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="relative h-48 w-full">
                    <Image 
                      src="/media/We-Clean-Any-Gutter-1.webp" 
                      alt="Gutter Cleaning" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Gutter Cleaning</h3>
                    <p className="mb-4">
                      Keep your gutters flowing freely to prevent water damage. Our comprehensive gutter cleaning service removes all debris and ensures proper water flow.
                    </p>
                    <span className="text-primary font-medium flex items-center gap-2">
                      Learn more
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <Link href="/services/roof-cleaning" className="block group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="relative h-48 w-full">
                    <Image 
                      src="/media/We-Clean-Any-Gutter-2.webp" 
                      alt="Roof Cleaning" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Roof Cleaning</h3>
                    <p className="mb-4">
                      Remove moss, algae, and lichen from your roof to extend its lifespan and improve your property's appearance with our specialized roof cleaning service.
                    </p>
                    <span className="text-primary font-medium flex items-center gap-2">
                      Learn more
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <Link href="/services/pressure-washing" className="block group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="relative h-48 w-full">
                    <Image 
                      src="/media/We-Clean-Any-Gutter-3.webp" 
                      alt="Pressure Washing" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Pressure Washing</h3>
                    <p className="mb-4">
                      Transform your outdoor surfaces with our professional pressure washing services. We clean driveways, patios, decking, and paths to remove dirt and stains.
                    </p>
                    <span className="text-primary font-medium flex items-center gap-2">
                      Learn more
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Restore Your Roofline Today</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Contact us for a free quote on our professional fascia and soffit cleaning services. Enhance your property's appearance and protect your roofline from damage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                Get a Free Quote
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <FaPhoneAlt />
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
} 
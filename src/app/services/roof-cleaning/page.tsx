"use client";

import React, { useState, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaPhoneAlt, FaLeaf, FaHome, FaShieldAlt } from 'react-icons/fa';

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

export default function RoofCleaningPage() {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full h-[50vh] md:h-[60vh] relative flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="/media/We-Clean-Any-Gutter-2.webp"
          alt="Roof cleaning services"
          fill
          className="object-cover"
          priority
        />
        <div className="container mx-auto px-4 z-20 text-center">
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Roof Cleaning Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Professional roof cleaning solutions to extend the life of your roof and enhance your property's appearance.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Extend Your Roof's Lifespan</h2>
                <p className="text-lg mb-6">
                  Your roof is one of the most important components of your home, protecting you from the elements while enhancing your property's curb appeal. Over time, roofs can accumulate moss, algae, lichen, and debris that not only detract from your home's appearance but can cause serious damage if left untreated.
                </p>
                <p className="text-lg mb-6">
                  Our professional roof cleaning service safely removes these harmful growths and debris, extending your roof's lifespan and restoring its appearance. Using specialized low-pressure washing techniques and eco-friendly cleaning solutions, we ensure your roof is thoroughly cleaned without causing damage to the roofing materials.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <FaCheck className="text-primary" />
                  <p className="font-medium">Serving residential and commercial properties in Surrey and surrounding areas</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-primary" />
                  <p className="font-medium">Fully insured and experienced roof cleaning specialists</p>
                </div>
              </FadeIn>
            </div>
            <div className="md:w-1/2">
              <FadeIn direction="left">
                <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src="/media/We-Clean-Any-Gutter-7.webp" 
                    alt="Professional roof cleaning" 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Benefits of Professional Roof Cleaning</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                  <FaHome className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Protects Your Investment</h3>
                <p>
                  Moss and algae can retain moisture, leading to deterioration of roofing materials and potentially causing leaks. Regular professional cleaning prevents this damage, extending your roof's life and saving you money on costly repairs or premature replacement.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                  <FaShieldAlt className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Improves Energy Efficiency</h3>
                <p>
                  Dark streaks and growths on your roof can absorb heat, increasing your cooling costs during summer months. Clean roofs reflect more sunlight, helping to maintain cooler temperatures in your home and potentially reducing energy bills.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                  <FaLeaf className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enhances Curb Appeal</h3>
                <p>
                  A clean roof significantly improves your property's appearance and can increase its market value. Remove unsightly black streaks, moss, and algae to restore your roof's original appearance and make your entire home look well-maintained.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Our Roof Cleaning Services</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-10">
            <FadeIn direction="right" delay={0.1}>
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Moss Removal</h3>
                <p className="mb-4">
                  We safely remove moss growth from all types of roofing materials. Our process includes:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Gentle removal of moss using specialized tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Application of preventive treatments to discourage regrowth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Careful collection and removal of all debris</span>
                  </li>
                </ul>
                <p>
                  Suitable for all roof types including tile, slate, asphalt shingles, and more.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Algae & Lichen Treatment</h3>
                <p className="mb-4">
                  We eliminate those black streaks and discoloration caused by algae and lichen:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Application of specialized cleaning solutions that target biological growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Low-pressure rinsing to protect roofing materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Preventative treatments to inhibit future growth</span>
                  </li>
                </ul>
                <p>
                  Restores your roof's original color and appearance without damaging the surface.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.3}>
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Complete Roof Cleaning</h3>
                <p className="mb-4">
                  Our comprehensive roof cleaning service includes:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Removal of debris, leaves, and twigs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Treatment of all biological growth (moss, algae, lichen)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Cleaning of valleys and problem areas where debris collects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Protective treatments to extend the clean appearance</span>
                  </li>
                </ul>
                <p>
                  A complete solution for maintaining your roof in optimal condition.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.4}>
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Preventative Maintenance</h3>
                <p className="mb-4">
                  Keep your roof looking clean year-round with our preventative maintenance plans:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Regular scheduled inspections and cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Application of preventative treatments on a schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span>Identification of potential roofing issues before they become problems</span>
                  </li>
                </ul>
                <p>
                  Cost-effective solution that keeps your roof in excellent condition and extends its lifespan.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Our Roof Cleaning Approach</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/media/We-Clean-Any-Gutter-6.webp" 
                  alt="Our roof cleaning approach" 
                  fill 
                  className="object-cover"
                />
              </div>
            </FadeIn>
            
            <div>
              <FadeIn direction="left" delay={0.1}>
                <div className="mb-6">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">1</div>
                  <h3 className="text-xl font-bold mb-2">Thorough Inspection</h3>
                  <p>We begin with a comprehensive assessment of your roof's condition, identifying the types of growth present and any areas needing special attention.</p>
                </div>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.2}>
                <div className="mb-6">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">2</div>
                  <h3 className="text-xl font-bold mb-2">Property Protection</h3>
                  <p>Before cleaning begins, we take steps to protect surrounding landscaping, windows, and exterior features from cleaning solutions and debris.</p>
                </div>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.3}>
                <div className="mb-6">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">3</div>
                  <h3 className="text-xl font-bold mb-2">Gentle Cleaning Process</h3>
                  <p>We use specialized low-pressure washing techniques and eco-friendly solutions appropriate for your specific roofing material to remove growth without causing damage.</p>
                </div>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.4}>
                <div className="mb-6">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">4</div>
                  <h3 className="text-xl font-bold mb-2">Preventative Treatment</h3>
                  <p>After cleaning, we apply preventative treatments designed to inhibit future growth of moss, algae, and lichen, extending the time between necessary cleanings.</p>
                </div>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.5}>
                <div>
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">5</div>
                  <h3 className="text-xl font-bold mb-2">Final Inspection & Documentation</h3>
                  <p>We conduct a thorough inspection after cleaning and provide documentation of completed work, including before and after photos and any recommendations for roof maintenance.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Transforming Roofs</h2>
            <p className="text-xl text-center max-w-3xl mx-auto mb-12">
              See the dramatic difference our professional roof cleaning services can make to your property's appearance and protection.
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn delay={0.1}>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="relative h-64 w-full mb-6 rounded overflow-hidden">
                  <Image 
                    src="/media/We-Clean-Any-Gutter-4.webp" 
                    alt="Before roof cleaning" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded">Before</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Moss-Covered Roof</h3>
                <p>
                  This roof had extensive moss growth that was retaining moisture and beginning to damage the roof tiles. The moss was particularly thick around the edges and in the valleys.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="relative h-64 w-full mb-6 rounded overflow-hidden">
                  <Image 
                    src="/media/We-Clean-Any-Gutter-5.webp" 
                    alt="After roof cleaning" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded">After</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Fully Restored Roof</h3>
                <p>
                  After our professional cleaning, the roof was completely transformed. All moss was safely removed, the tiles were cleaned and restored to their original color, and a preventative treatment was applied.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Complementary Services */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">Complementary Services</h2>
            <p className="text-xl text-center max-w-3xl mx-auto mb-12">
              For complete exterior cleaning and maintenance, consider these additional services that pair perfectly with roof cleaning.
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
                      Keep your gutters flowing freely to prevent water damage to your roof, walls, and foundation. Our comprehensive gutter cleaning service removes all debris and ensures proper water flow.
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
              <Link href="/services/fascia-soffit-cleaning" className="block group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="relative h-48 w-full">
                    <Image 
                      src="/media/We-Clean-Any-Gutter-2.webp" 
                      alt="Fascia & Soffit Cleaning" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Fascia & Soffit Cleaning</h3>
                    <p className="mb-4">
                      Restore the appearance of your fascias and soffits with our specialized cleaning service. We remove dirt, algae, and stains to keep these important components looking great.
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
                      Transform your outdoor surfaces with our professional pressure washing services. We clean driveways, patios, decking, and paths to remove dirt, algae, and stains.
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

      {/* FAQs */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Frequently Asked Questions</h2>
          </FadeIn>
          
          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="mb-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">How often should I have my roof cleaned?</h3>
                <p>
                  Most homeowners benefit from professional roof cleaning every 2-3 years, though this can vary based on your local environment. Homes in areas with high humidity, significant tree coverage, or frequent rainfall may require more frequent cleaning to prevent damage from moss and algae.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="mb-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Will roof cleaning damage my shingles or tiles?</h3>
                <p>
                  Our low-pressure cleaning methods are specifically designed to clean effectively without damaging your roofing materials. We never use high-pressure washing on roofs, as this can damage shingles and tiles. Instead, we use gentle cleaning solutions and specialized equipment that removes growths without harming your roof.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="mb-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">How long does a professional roof cleaning take?</h3>
                <p>
                  The time required depends on your roof size, the extent of growth, and roof accessibility. For an average home, roof cleaning typically takes between 2-4 hours. Larger properties or those with severe moss or algae growth may take longer. We'll provide a time estimate during your initial assessment.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="mb-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Are your cleaning products environmentally friendly?</h3>
                <p>
                  Yes, we use environmentally responsible cleaning solutions that are effective against moss, algae, and lichen while being safe for your landscaping, pets, and the environment. Our cleaning processes are designed to minimize runoff and environmental impact.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Do you offer any guarantees for your roof cleaning services?</h3>
                <p>
                  Yes, we stand behind our work with satisfaction guarantees. If you're not completely satisfied with our roof cleaning results, we'll return to address any areas of concern. Additionally, with our preventative treatments, we can provide extended protection against regrowth for a specified period.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Restore Your Roof?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Contact us today for a free, no-obligation quote. Our professional team is ready to help extend the life of your roof and enhance your property's curb appeal.
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
'use client';
import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaShieldAlt, FaHome, FaLeaf, FaWater, FaTools } from 'react-icons/fa';
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

export default function PressureWashingPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/We-Clean-Any-Gutter-3.webp"
            alt="Professional pressure washing service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pressure Washing Services
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Restore your outdoor surfaces to their original beauty with our professional pressure washing solutions
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Pressure Washing</h2>
              <p className="text-lg text-gray-600 mb-6">
                Over time, outdoor surfaces accumulate dirt, algae, moss, and other contaminants that not only affect your property's appearance but can also create slip hazards and lead to premature deterioration. Our professional pressure washing service effectively removes these built-up substances, instantly rejuvenating your property's exterior.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                At We Clean Any Gutter, we use state-of-the-art pressure washing equipment with adjustable pressure settings that allow us to tailor our approach to different surface types and levels of soiling. This ensures powerful cleaning without causing damage to your property's surfaces.
              </p>
              <p className="text-lg text-gray-600">
                Whether you need driveway cleaning, patio restoration, decking revitalization, or exterior wall washing, our skilled technicians provide exceptional results that enhance your property's curb appeal and extend the lifespan of your outdoor surfaces.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn direction="left">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/media/We-Clean-Any-Gutter-2.webp" 
                alt="Pressure washing service" 
                fill 
                className="object-cover" 
              />
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Benefits section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of Professional Pressure Washing
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Why regular pressure washing is essential for property maintenance
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-blue-800 rounded-xl p-6 h-full">
                <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                  <FaShieldAlt className="text-blue-300 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Prevents Surface Deterioration</h3>
                <p className="text-blue-200">
                  Regular pressure washing removes harmful substances that can damage outdoor surfaces over time. Algae, moss, and lichen contain acids that erode stone, concrete, and other materials. By removing these organisms, pressure washing significantly extends the lifespan of your patios, driveways, decking, and pathways, helping you avoid costly repairs or replacements.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-blue-800 rounded-xl p-6 h-full">
                <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                  <FaHome className="text-blue-300 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enhances Property Value</h3>
                <p className="text-blue-200">
                  Clean, well-maintained exteriors significantly boost your property's curb appeal and market value. Professional pressure washing can make weathered surfaces look new again, creating a dramatic transformation that impresses visitors and potential buyers. This affordable maintenance solution provides one of the best returns on investment for homeowners looking to enhance their property's appearance.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-blue-800 rounded-xl p-6 h-full">
                <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                  <FaLeaf className="text-blue-300 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Creates Healthier Environments</h3>
                <p className="text-blue-200">
                  Pressure washing removes allergens, mold spores, and bacteria that can affect your family's health. It also eliminates slip hazards created by algae and moss, making your outdoor spaces safer. By maintaining cleaner surfaces, you reduce the risk of respiratory issues and accidents, creating a healthier environment around your home for everyone to enjoy.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Our Services section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Pressure Washing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional solutions for all outdoor surfaces
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-xl p-6 shadow-lg h-full">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FaWater className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Driveway & Patio Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Our specialized cleaning process for driveways and patios removes stubborn stains, weeds, moss, and algae growth. We use appropriate pressure levels for different materials, ensuring effective cleaning without surface damage.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600" />
                  <span>Removes oil, dirt, and organic growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600" />
                  <span>Safe for concrete, block paving, and natural stone</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600" />
                  <span>Optional sealing treatments available</span>
                </li>
              </ul>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-xl p-6 shadow-lg h-full">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FaWater className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Decking Revitalization</h3>
              <p className="text-gray-600 mb-4">
                Wooden and composite decking requires careful cleaning to remove dirt and algae without damaging the surface. Our professional approach restores your decking's appearance while protecting the material from excessive pressure.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600" />
                  <span>Gentle cleaning preserves wood and composite materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600" />
                  <span>Removes slippery algae and moss</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600" />
                  <span>Optional protective treatment or staining</span>
                </li>
              </ul>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-xl p-6 shadow-lg h-full">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FaWater className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exterior Wall Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Our gentle but effective approach to cleaning exterior walls removes dirt, algae, and pollution without damaging the building material. We adjust our methods based on whether we're cleaning brick, render, cladding, or natural stone.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600" />
                  <span>Surface-appropriate cleaning techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600" />
                  <span>Removes atmospheric pollution and biological growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600" />
                  <span>Transforms your property's appearance</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <FadeIn delay={0.4}>
            <div className="bg-white rounded-xl p-6 shadow-lg h-full">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FaWater className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Path & Walkway Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Restore safety and appearance to your pathways with our thorough cleaning service that removes moss, algae, and other slip hazards while brightening the surface material.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600" />
                  <span>Eliminates dangerous slip hazards</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600" />
                  <span>Brings out the original color and texture</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600" />
                  <span>Works on concrete, brick, and natural stone</span>
                </li>
              </ul>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.5}>
            <div className="bg-white rounded-xl p-6 shadow-lg h-full">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FaWater className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fence & Garden Furniture Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Extend the life of your outdoor wooden fences and furniture with our careful cleaning service that removes dirt, algae, and weathering without damaging the wood.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600" />
                  <span>Gentle cleaning preserves wood</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600" />
                  <span>Removes green algae and black mold</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="flex-shrink-0 mt-1 text-green-600" />
                  <span>Optional wood staining and treatment</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Our Approach section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Cleaning Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A methodical process that ensures exceptional results
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Surface Assessment</h3>
                    <p className="text-gray-600">
                      We begin by assessing the type, condition, and level of soiling on your surfaces. This allows us to determine the optimal cleaning approach, pressure level, and whether specialized treatments are needed for certain stains or materials.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Property Protection</h3>
                    <p className="text-gray-600">
                      Before cleaning begins, we protect surrounding areas including plants, garden features, and sensitive surfaces. We ensure proper drainage to manage runoff water, preventing pooling or damage to your garden or interiors.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-Treatment</h3>
                    <p className="text-gray-600">
                      For heavily soiled surfaces or those with organic growth, we apply specialized cleaning solutions that break down dirt and biological material, making them easier to remove while reducing the pressure needed for effective cleaning.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Controlled Pressure Washing</h3>
                    <p className="text-gray-600">
                      Using professional-grade equipment with adjustable pressure settings, we carefully clean each surface with the appropriate pressure level. This ensures thorough cleaning without causing damage to the material being treated.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Final Inspection & Optional Treatment</h3>
                    <p className="text-gray-600">
                      After cleaning, we inspect all surfaces to ensure they meet our high standards. For certain materials, we can apply protective treatments such as sealants for block paving or stains for wooden surfaces, providing longer-lasting protection and enhanced appearance.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/media/We-Clean-Any-Gutter-1.webp" 
                  alt="Our pressure washing approach" 
                  fill 
                  className="object-cover" 
                />
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
            See the dramatic transformation our pressure washing provides
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/media/We-Clean-Any-Gutter-3.webp" 
                alt="Before and after driveway cleaning" 
                width={800} 
                height={500} 
                className="w-full h-auto" 
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-900">Driveway Transformation</h3>
                <p className="text-gray-600">Removal of years of dirt, algae, and staining from block paving</p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/media/We-Clean-Any-Gutter-4.webp" 
                alt="Before and after patio cleaning" 
                width={800} 
                height={500} 
                className="w-full h-auto" 
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-900">Patio Revival</h3>
                <p className="text-gray-600">Complete restoration of natural stone patio with removal of moss and algae</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Complementary Services section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complementary Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete your property maintenance with these additional services
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Gutter Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Ensure proper water drainage with our thorough gutter cleaning service that removes all debris and blockages from your guttering system.
                </p>
                <Link 
                  href="/services/gutter-cleaning" 
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Learn about gutter cleaning →
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Roof Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Remove moss, algae, and lichen from your roof with our professional roof cleaning service that extends your roof's lifespan and improves appearance.
                </p>
                <Link 
                  href="/services/roof-cleaning" 
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Explore roof cleaning →
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fascia & Soffit Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Restore your property's roofline with our fascia and soffit cleaning service that removes dirt, algae, and staining from these important components.
                </p>
                <Link 
                  href="/services/fascia-soffit-cleaning" 
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Discover fascia & soffit cleaning →
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* FAQ section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How often should outdoor surfaces be pressure washed?</h3>
                <p className="text-gray-600">
                  For most properties, we recommend pressure washing driveways, patios, and other outdoor surfaces once every 1-2 years. However, this can vary depending on your location, surrounding environment, and level of use. Properties under trees or in particularly damp areas may benefit from more frequent cleaning to prevent significant buildup of moss, algae, and other organic matter that can cause slip hazards and surface deterioration.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Will pressure washing damage my surfaces?</h3>
                <p className="text-gray-600">
                  When done properly by professionals, pressure washing should not damage your surfaces. Our technicians are trained to assess each surface type and adjust the pressure and technique accordingly. We use specialized equipment with variable pressure settings that allow us to clean effectively without causing damage. Some materials like soft wood, old mortar, or damaged surfaces require gentler approaches, which we carefully implement to ensure your property is cleaned safely.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Do you offer sealing services after cleaning?</h3>
                <p className="text-gray-600">
                  Yes, we offer optional sealing treatments for many surfaces after pressure washing. Sealing provides several benefits, including resistance to staining, reduced weed growth between paving blocks, enhanced color, and protection against future dirt accumulation. For driveways and patios, a quality sealer can significantly extend the time between cleanings and maintain a cleaner appearance for longer. We can discuss sealing options during our initial assessment of your project.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Are your cleaning products environmentally friendly?</h3>
                <p className="text-gray-600">
                  We prioritize using environmentally responsible cleaning products in all our services. The biodegradable detergents we use when necessary are specifically formulated to be effective while minimizing environmental impact. We also take measures to manage runoff appropriately and protect surrounding plants and soil. In many cases, the natural force of water pressure alone is sufficient for cleaning, reducing the need for chemical cleaners.
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
              Ready to Transform Your Outdoor Surfaces?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free, no-obligation quote. Our professional pressure washing service will restore your property's exterior surfaces to their original beauty while extending their lifespan.
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
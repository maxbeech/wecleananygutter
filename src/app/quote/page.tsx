'use client';
import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaBuilding, FaRuler, FaTree, FaLeaf, FaTools, FaCheck, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
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

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: '',
    propertySize: '',
    serviceType: '',
    trees: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOptionSelect = (field: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the form data to a server
    // For now, just simulate a submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  // Option component for property type, size, etc.
  const Option = ({ 
    icon, 
    label, 
    value, 
    field, 
    selected 
  }: { 
    icon: React.ReactNode;
    label: string;
    value: string;
    field: string;
    selected: boolean;
  }) => (
    <button
      onClick={() => handleOptionSelect(field, value)}
      className={`flex flex-col items-center p-6 rounded-xl border-2 transition-all ${
        selected 
          ? 'border-blue-600 bg-blue-50 shadow-md' 
          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
      }`}
      type="button"
    >
      <div className={`text-3xl mb-3 ${selected ? 'text-blue-600' : 'text-gray-500'}`}>
        {icon}
      </div>
      <span className={`font-medium ${selected ? 'text-blue-600' : 'text-gray-700'}`}>
        {label}
      </span>
    </button>
  );

  // Progress bar
  const ProgressBar = () => {
    const totalSteps = 4;
    const progress = (step / totalSteps) * 100;
    
    return (
      <div className="w-full mb-8">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div className="text-xs font-semibold text-blue-600 uppercase">
              Step {step} of {totalSteps}
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-blue-600">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"
            ></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/We-Clean-Any-Gutter-4.webp"
            alt="Gutter cleaning quote"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get a Free Quote
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Fill out our simple form to receive a no-obligation quote for your gutter cleaning and repair needs.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Quote form section */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {!submitted ? (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <FadeIn>
              <ProgressBar />
              
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Information</h2>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">What type of property do you have?</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <Option
                          icon={<FaHome />}
                          label="Residential"
                          value="residential"
                          field="propertyType"
                          selected={formData.propertyType === 'residential'}
                        />
                        <Option
                          icon={<FaBuilding />}
                          label="Commercial"
                          value="commercial"
                          field="propertyType"
                          selected={formData.propertyType === 'commercial'}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">How would you describe the size of your property?</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <Option
                          icon={<FaRuler />}
                          label="Small"
                          value="small"
                          field="propertySize"
                          selected={formData.propertySize === 'small'}
                        />
                        <Option
                          icon={<FaRuler />}
                          label="Medium"
                          value="medium"
                          field="propertySize"
                          selected={formData.propertySize === 'medium'}
                        />
                        <Option
                          icon={<FaRuler />}
                          label="Large"
                          value="large"
                          field="propertySize"
                          selected={formData.propertySize === 'large'}
                        />
                        <Option
                          icon={<FaRuler />}
                          label="Very Large"
                          value="very-large"
                          field="propertySize"
                          selected={formData.propertySize === 'very-large'}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end mt-8">
                      <button
                        onClick={nextStep}
                        disabled={!formData.propertyType || !formData.propertySize}
                        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg flex items-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
                      >
                        Next <FaArrowRight className="ml-2" />
                      </button>
                    </div>
                  </motion.div>
                )}
                
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Details</h2>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">What service do you require?</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <Option
                          icon={<FaLeaf />}
                          label="Gutter Cleaning"
                          value="gutter-cleaning"
                          field="serviceType"
                          selected={formData.serviceType === 'gutter-cleaning'}
                        />
                        <Option
                          icon={<FaTools />}
                          label="Gutter Repairs"
                          value="gutter-repairs"
                          field="serviceType"
                          selected={formData.serviceType === 'gutter-repairs'}
                        />
                        <Option
                          icon={<FaHome />}
                          label="Roof Cleaning"
                          value="roof-cleaning"
                          field="serviceType"
                          selected={formData.serviceType === 'roof-cleaning'}
                        />
                        <Option
                          icon={<FaHome />}
                          label="Fascia Cleaning"
                          value="fascia-cleaning"
                          field="serviceType"
                          selected={formData.serviceType === 'fascia-cleaning'}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Are there trees near your property?</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <Option
                          icon={<FaTree />}
                          label="None"
                          value="none"
                          field="trees"
                          selected={formData.trees === 'none'}
                        />
                        <Option
                          icon={<FaTree />}
                          label="Few"
                          value="few"
                          field="trees"
                          selected={formData.trees === 'few'}
                        />
                        <Option
                          icon={<FaTree />}
                          label="Many"
                          value="many"
                          field="trees"
                          selected={formData.trees === 'many'}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <button
                        onClick={prevStep}
                        className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg flex items-center hover:bg-gray-300 transition-colors"
                      >
                        <FaArrowLeft className="mr-2" /> Back
                      </button>
                      <button
                        onClick={nextStep}
                        disabled={!formData.serviceType || !formData.trees}
                        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg flex items-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
                      >
                        Next <FaArrowRight className="ml-2" />
                      </button>
                    </div>
                  </motion.div>
                )}
                
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Details</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"
                            placeholder="01234 567890"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                          Property Address *
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"
                          placeholder="123 Example Street"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="postcode" className="block text-gray-700 font-medium mb-2">
                          Postcode *
                        </label>
                        <input
                          type="text"
                          id="postcode"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"
                          placeholder="AB12 3CD"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <button
                        onClick={prevStep}
                        className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg flex items-center hover:bg-gray-300 transition-colors"
                      >
                        <FaArrowLeft className="mr-2" /> Back
                      </button>
                      <button
                        onClick={nextStep}
                        disabled={!formData.name || !formData.email || !formData.address || !formData.postcode}
                        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg flex items-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
                      >
                        Next <FaArrowRight className="ml-2" />
                      </button>
                    </div>
                  </motion.div>
                )}
                
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Any specific details or requirements?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"
                        placeholder="Let us know if you have any specific requirements or if there's anything else we should know about your property..."
                      ></textarea>
                    </div>
                    
                    <div className="mt-8 bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Quote Summary</h3>
                      <div className="space-y-2 text-gray-700">
                        <p><span className="font-medium">Property Type:</span> {formData.propertyType === 'residential' ? 'Residential' : 'Commercial'}</p>
                        <p><span className="font-medium">Property Size:</span> {formData.propertySize.charAt(0).toUpperCase() + formData.propertySize.slice(1)}</p>
                        <p><span className="font-medium">Service Required:</span> {formData.serviceType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                        <p><span className="font-medium">Trees Near Property:</span> {formData.trees.charAt(0).toUpperCase() + formData.trees.slice(1)}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <button
                        onClick={prevStep}
                        className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg flex items-center hover:bg-gray-300 transition-colors"
                      >
                        <FaArrowLeft className="mr-2" /> Back
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg flex items-center hover:bg-green-700 transition-colors"
                      >
                        Submit Request
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeIn>
          </div>
        ) : (
          <FadeIn>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheck className="text-green-600 text-4xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-gray-600 mb-8">
                Your quote request has been submitted successfully. One of our team members will review your details and get back to you with a personalized quote within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/" 
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Return to Home
                </Link>
                <Link 
                  href="/services" 
                  className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </FadeIn>
        )}
      </section>
      
      {/* Why choose us section */}
      {!submitted && (
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose We Clean Any Gutter?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional gutter services you can trust
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Response</h3>
                  <p className="text-gray-600">
                    We respond to all quote requests within 24 hours and often provide same-day service for urgent situations.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Insured</h3>
                  <p className="text-gray-600">
                    Complete peace of mind with our comprehensive insurance coverage for all work undertaken on your property.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600">
                    Receive a detailed breakdown of all costs in your quote with no hidden fees or surprise charges.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      )}
    </div>
  );
} 
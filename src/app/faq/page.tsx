'use client';
import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
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

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  isOpen: boolean;
  onClick: () => void;
  category: string;
}

// FAQ Item component
const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, category }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-5 px-4 text-left focus:outline-none"
      >
        <div>
          <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">{category}</span>
          <h3 className="text-lg font-semibold text-gray-900 mt-1">{question}</h3>
        </div>
        <div className={`flex-shrink-0 ml-4 text-blue-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <FaChevronDown />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="py-3 px-4 pb-6 text-gray-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// FAQ data structure
interface FAQItem {
  id: string;
  question: string;
  answer: ReactNode;
  category: string;
}

// FAQ categories
const categories = [
  "All",
  "Services",
  "Pricing",
  "Process",
  "Safety",
  "Maintenance"
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openFAQs, setOpenFAQs] = useState<string[]>([]);

  // Toggle FAQ open/closed
  const toggleFAQ = (id: string) => {
    setOpenFAQs(prevOpenFAQs => 
      prevOpenFAQs.includes(id) 
        ? prevOpenFAQs.filter(faqId => faqId !== id) 
        : [...prevOpenFAQs, id]
    );
  };

  // FAQ data
  const faqs: FAQItem[] = [
    {
      id: "1",
      question: "How often should gutters be cleaned?",
      answer: (
        <>
          <p className="mb-3">
            We recommend having your gutters cleaned at least twice a year – typically in spring and autumn. However, if your property is surrounded by trees, you may need more frequent cleaning, especially during the autumn months when leaves are falling.
          </p>
          <p>
            Regular maintenance prevents blockages that can lead to water damage, foundation issues, and other costly repairs. We offer maintenance plans to ensure your gutters remain in optimal condition year-round.
          </p>
        </>
      ),
      category: "Maintenance"
    },
    {
      id: "2",
      question: "What is your gutter cleaning process?",
      answer: (
        <>
          <p className="mb-3">
            Our gutter cleaning process involves:
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li>Initial assessment of your gutter system</li>
            <li>Removing debris using our specialized vacuum system</li>
            <li>Flushing gutters with water to ensure proper flow</li>
            <li>Checking and clearing downpipes</li>
            <li>Documenting the condition with before and after images</li>
            <li>Providing recommendations for any repairs if needed</li>
          </ol>
          <p>
            We use a ground-based vacuum system that allows us to reach heights up to 40ft without ladders, making the process safer and more efficient.
          </p>
        </>
      ),
      category: "Process"
    },
    {
      id: "3",
      question: "How much does gutter cleaning cost?",
      answer: (
        <>
          <p className="mb-3">
            Our gutter cleaning prices depend on several factors:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Size and height of your property</li>
            <li>Length of guttering</li>
            <li>Level of debris and blockages</li>
            <li>Accessibility around your property</li>
            <li>Whether you require ongoing maintenance or a one-time clean</li>
          </ul>
          <p className="mb-3">
            We provide free, no-obligation quotes tailored to your specific requirements. Contact us for an accurate estimate for your property.
          </p>
          <p>
            For standard residential properties, prices typically start from £80, with discounts available for regular maintenance plans.
          </p>
        </>
      ),
      category: "Pricing"
    },
    {
      id: "4",
      question: "Do you use ladders for gutter cleaning?",
      answer: (
        <>
          <p className="mb-3">
            No, we use a specialized vacuum system with carbon fiber poles that extend up to 40ft, allowing us to clean gutters safely from the ground. This method is safer for our team and eliminates the risk of ladder damage to your property.
          </p>
          <p>
            Our ground-based system also allows us to reach areas that would be difficult or dangerous to access with ladders, such as gutters above conservatories or on multi-story buildings.
          </p>
        </>
      ),
      category: "Safety"
    },
    {
      id: "5",
      question: "What areas do you cover?",
      answer: (
        <>
          <p className="mb-3">
            We provide gutter cleaning and maintenance services throughout:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Surrey (including Leatherhead, Guildford, Woking, Epsom)</li>
            <li>Sussex (including Crawley, Horsham, Brighton)</li>
            <li>Kent (including Sevenoaks, Tonbridge, Maidstone)</li>
            <li>South and West London</li>
          </ul>
          <p>
            For a complete list of areas we cover, please visit our <Link href="/coverage" className="text-blue-600 hover:underline">Areas Covered</Link> page or contact us to inquire about your specific location.
          </p>
        </>
      ),
      category: "Services"
    },
    {
      id: "6",
      question: "What other services do you offer besides gutter cleaning?",
      answer: (
        <>
          <p className="mb-3">
            In addition to gutter cleaning, we offer:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><Link href="/services/gutter-repairs" className="text-blue-600 hover:underline">Gutter Repairs</Link> - Fixing leaks, broken brackets, and damaged sections</li>
            <li><Link href="/services/roof-cleaning" className="text-blue-600 hover:underline">Roof Cleaning</Link> - Removing moss, algae and debris</li>
            <li><Link href="/services/fascia-soffit-cleaning" className="text-blue-600 hover:underline">Fascia & Soffit Cleaning</Link> - Restoring the appearance of your property</li>
            <li><Link href="/services/pressure-washing" className="text-blue-600 hover:underline">Pressure Washing</Link> - For driveways, patios, and outdoor surfaces</li>
            <li>Gutter Guard Installation - To prevent future blockages</li>
            <li>Gutter Replacement - When repairs are no longer sufficient</li>
          </ul>
          <p>
            Visit our <Link href="/services" className="text-blue-600 hover:underline">Services</Link> page for more details on each of these offerings.
          </p>
        </>
      ),
      category: "Services"
    },
    {
      id: "7",
      question: "How long does gutter cleaning take?",
      answer: (
        <p>
          The time required for gutter cleaning varies depending on the size of your property, the amount of debris, and the accessibility. For a typical residential property, the process usually takes between 1-3 hours. Larger properties or those with significant blockages may take longer. We always aim to be efficient while ensuring thorough cleaning.
        </p>
      ),
      category: "Process"
    },
    {
      id: "8",
      question: "Are you insured?",
      answer: (
        <p>
          Yes, we are fully insured with comprehensive public liability insurance up to £5 million. This provides peace of mind for both our customers and our team while we work on your property. We're happy to provide proof of insurance upon request.
        </p>
      ),
      category: "Safety"
    },
    {
      id: "9",
      question: "Do you offer emergency gutter cleaning services?",
      answer: (
        <p>
          Yes, we understand that blocked gutters can sometimes cause urgent issues, especially during heavy rainfall. We offer priority emergency services for situations where water is overflowing or causing damage to your property. Contact us immediately if you're experiencing an emergency, and we'll do our best to attend as quickly as possible.
        </p>
      ),
      category: "Services"
    },
    {
      id: "10",
      question: "How do I know if my gutters need cleaning?",
      answer: (
        <>
          <p className="mb-3">
            Signs that your gutters need cleaning include:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Water overflowing from the gutters during rainfall</li>
            <li>Visible plants or weeds growing in the gutters</li>
            <li>Sagging gutters due to the weight of debris</li>
            <li>Water marks or damage on the exterior walls</li>
            <li>Visible debris or leaves sticking out</li>
            <li>Pests or birds frequently visiting your gutters</li>
            <li>It's been more than 6 months since the last cleaning</li>
          </ul>
          <p>
            If you're unsure, we offer free inspections to assess the condition of your guttering system.
          </p>
        </>
      ),
      category: "Maintenance"
    },
    {
      id: "11",
      question: "Do you offer any guarantees on your work?",
      answer: (
        <p>
          Yes, we offer a 30-day guarantee on all our gutter cleaning services. If you notice any issues with water flow or blockages within 30 days of our service, we'll return to address the problem at no additional cost. For repair work, we provide a 12-month workmanship guarantee to ensure your complete satisfaction.
        </p>
      ),
      category: "Services"
    },
    {
      id: "12",
      question: "Do I need to be home during the gutter cleaning?",
      answer: (
        <p>
          No, you don't need to be present during the cleaning as long as we have access to the areas around your property. Many of our customers prefer to provide access instructions and then go about their day. Of course, if you'd like to be present, we're happy to schedule the service when you're available.
        </p>
      ),
      category: "Process"
    },
    {
      id: "13",
      question: "How do you handle the debris removed from gutters?",
      answer: (
        <p>
          All debris removed from your gutters is collected in our vacuum system or bags, and we dispose of it responsibly. We don't leave any mess behind on your property. If you prefer to keep the organic material for composting, just let us know, and we can leave it in a designated area for you.
        </p>
      ),
      category: "Process"
    },
    {
      id: "14",
      question: "What payment methods do you accept?",
      answer: (
        <p>
          We accept various payment methods for your convenience, including bank transfers, credit/debit cards, and cash. For regular maintenance plans, we can set up direct debits. Payment is typically due upon completion of the work, and we provide a detailed invoice for your records.
        </p>
      ),
      category: "Pricing"
    },
    {
      id: "15",
      question: "How can I schedule a service or get a quote?",
      answer: (
        <>
          <p className="mb-3">
            You can schedule a service or request a quote through several methods:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Call us directly at <a href="tel:01372703033" className="text-blue-600 hover:underline">01372 703033</a></li>
            <li>Fill out our <Link href="/contact" className="text-blue-600 hover:underline">contact form</Link> on our website</li>
            <li>Use our <Link href="/quote" className="text-blue-600 hover:underline">online quote form</Link> for a quick estimate</li>
            <li>Send us an email at <a href="mailto:info@wecleananygutter.co.uk" className="text-blue-600 hover:underline">info@wecleananygutter.co.uk</a></li>
            <li>Message us on WhatsApp for a prompt response</li>
          </ul>
          <p>
            We aim to respond to all inquiries within 24 hours.
          </p>
        </>
      ),
      category: "Services"
    }
  ];

  // Filter FAQs based on search term and active category
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/We-Clean-Any-Gutter-2.webp"
            alt="Gutter cleaning information"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Find answers to common questions about our gutter cleaning and repair services.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* FAQ section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Search bar */}
          <div className="mb-12">
            <div className="relative max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors text-gray-700"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          {/* Category tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* FAQ list */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => (
                <FAQItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQs.includes(faq.id)}
                  onClick={() => toggleFAQ(faq.id)}
                  category={faq.category}
                />
              ))
            ) : (
              <div className="py-10 px-4 text-center">
                <p className="text-gray-600">No results found. Try a different search term or category.</p>
              </div>
            )}
          </div>
        </FadeIn>
        
        {/* Contact CTA */}
        <FadeIn delay={0.1}>
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              If you couldn't find the answer you were looking for, please don't hesitate to contact us directly. Our friendly team is ready to help with any questions you may have about our services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
              <a 
                href="tel:01372703033" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg shadow hover:bg-gray-300 transition-colors"
              >
                Call 01372 703033
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
} 
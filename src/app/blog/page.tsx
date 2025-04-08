'use client';
import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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

// Blog post interface
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How Often Should You Clean Your Gutters?',
    excerpt: 'Proper gutter maintenance is essential for protecting your home. Learn how frequently you should clean your gutters to prevent water damage and other issues.',
    date: 'March 15, 2023',
    image: '/media/We-Clean-Any-Gutter-1.webp',
    category: 'Maintenance Tips'
  },
  {
    id: '2',
    title: 'Signs Your Gutters Need Repairs',
    excerpt: 'Damaged gutters can lead to serious problems for your home. Here are the warning signs that indicate your gutters need professional attention.',
    date: 'February 28, 2023',
    image: '/media/We-Clean-Any-Gutter-2.webp',
    category: 'Repairs'
  },
  {
    id: '3',
    title: 'The Benefits of Professional Roof Cleaning',
    excerpt: 'Regular roof cleaning does more than just improve your home\'s appearance. Discover how it can extend your roof\'s lifespan and improve energy efficiency.',
    date: 'January 22, 2023',
    image: '/media/We-Clean-Any-Gutter-3.webp',
    category: 'Roof Maintenance'
  },
  {
    id: '4',
    title: 'Why Clean Fascias and Soffits Matter for Your Home',
    excerpt: 'Often overlooked, fascias and soffits play a crucial role in protecting your home. Learn why keeping them clean is important for your property\'s health.',
    date: 'December 10, 2022',
    image: '/media/We-Clean-Any-Gutter-4.webp',
    category: 'Home Maintenance'
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/We-Clean-Any-Gutter-2.webp"
            alt="Gutter cleaning blog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Blog
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Expert advice, tips, and insights on gutter cleaning, maintenance, and home care
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Blog posts grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.id} delay={0.1 * index} className="h-full">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                <div className="relative h-96">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover object-center" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <div className="text-sm font-medium text-blue-600 mb-2">{post.category}</div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="text-sm text-gray-500 mt-auto">{post.date}</div>
                </div>
                <div className="px-6 pb-6">
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Read More
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      
      {/* Newsletter subscription */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-blue-200 mb-8">
                Get the latest gutter cleaning tips, special offers, and industry insights delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
} 
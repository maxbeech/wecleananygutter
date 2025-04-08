'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaPhoneAlt, FaQuoteRight } from 'react-icons/fa';

interface NavLinkProps {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
  isScrolled: boolean;
  pathname: string;
}

const NavLink = ({ href, label, children, isScrolled, pathname }: NavLinkProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = pathname === href || (pathname?.startsWith(href) && href !== '/');

  if (children) {
    return (
      <div ref={ref} className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center text-sm font-medium py-2 transition-colors duration-300 ${
            isActive 
              ? isScrolled 
                ? 'text-blue-600' 
                : 'text-blue-300'
              : isScrolled 
                ? 'text-gray-900 hover:text-blue-600' 
                : 'text-white hover:text-blue-300'
          }`}
        >
          {label}
          <FaChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
            >
              <div className="py-1">
                {children.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 text-sm hover:bg-blue-50 ${
                      pathname === item.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={`text-sm font-medium py-2 transition-colors duration-300 ${
        isActive 
          ? isScrolled 
            ? 'text-blue-600' 
            : 'text-blue-300'
          : isScrolled 
            ? 'text-gray-900 hover:text-blue-600' 
            : 'text-white hover:text-blue-300'
      }`}
    >
      {label}
    </Link>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { 
      href: '/services', 
      label: 'Services',
      children: [
        { href: '/services/gutter-cleaning', label: 'Gutter Cleaning' },
        { href: '/services/gutter-repairs', label: 'Gutter Repairs' },
        { href: '/services/roof-cleaning', label: 'Roof Cleaning' },
        { href: '/services/fascia-soffit-cleaning', label: 'Fascia & Soffit Cleaning' },
        { href: '/services/pressure-washing', label: 'Pressure Washing' }
      ]
    },
    { href: '/about', label: 'About Us' },
    { href: '/coverage', label: 'Areas Covered' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-blue-900 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className={`relative overflow-hidden rounded ${isScrolled ? 'bg-white' : 'bg-white'} p-1`}>
                <Image
                  src="/media/logo.png"
                  alt="We Clean Any Gutter Logo"
                  width={48}
                  height={40}
                  className="w-12 h-10 object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <span className={`font-bold text-xl transition-colors duration-300 ${
                  isScrolled ? 'text-blue-900' : 'text-white'
                }`}>
                  We Clean Any Gutter
                </span>
                <p className={`text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-blue-200'
                }`}>Professional Gutter Services</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navLinks.map((link) => (
              <NavLink 
                key={link.href} 
                href={link.href} 
                label={link.label} 
                children={link.children} 
                isScrolled={isScrolled} 
                pathname={pathname || ''}
              />
            ))}
            <Link
              href="/quote"
              className={`ml-6 inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              <FaQuoteRight className="mr-2" /> Get a Quote
            </Link>
          </div>

          {/* Mobile Call Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <a 
              href="tel:01372703033" 
              className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium ${
                isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-900'
              }`}
            >
              <FaPhoneAlt className="mr-1.5" /> Call Us
            </a>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  : 'text-white hover:text-blue-300 hover:bg-blue-800'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-xl overflow-hidden mobile-menu-container"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 divide-y divide-gray-100">
              {navLinks.map((link) => (
                <div key={link.href} className="py-2">
                  {link.children ? (
                    <>
                      <div className="px-3 py-2 font-medium text-blue-900">{link.label}</div>
                      <div className="ml-4 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-3 py-2 rounded-md text-sm ${
                              pathname === child.href
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-3 py-2 rounded-md text-sm font-medium ${
                        pathname === link.href
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Link
                  href="/quote"
                  className="block w-full text-center px-3 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 
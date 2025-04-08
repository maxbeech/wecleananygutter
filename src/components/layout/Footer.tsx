'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/media/logo.png"
            alt="We Clean Any Gutter Logo"
            width={150}
            height={100}
            className="w-auto h-20 mb-6 bg-white p-2 rounded-md"
          />
          <h2 className="text-3xl font-bold text-blue-200 mb-4">We Clean Any Gutter</h2>
          <p className="text-blue-200 text-center max-w-2xl">
            Professional gutter cleaning services for residential and commercial properties. 
            Serving Surrey, Sussex, Kent, and London with our no-ladder gutter vacuum system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 text-blue-200" />
                <span className="text-gray-300">Leatherhead, Surrey KT22</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-blue-200" />
                <a href="tel:01372703033" className="text-gray-300 hover:text-white transition-colors">
                  01372 703033
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-200" />
                <a href="mailto:info@wecleananygutter.co.uk" className="text-gray-300 hover:text-white transition-colors">
                  info@wecleananygutter.co.uk
                </a>
              </li>
              <li className="flex items-start">
                <FaClock className="mt-1 mr-2 text-blue-200" />
                <div className="text-gray-300">
                  <p>Mon-Fri: 8am-7pm</p>
                  <p>Saturday: 9am-5pm</p>
                  <p>Sunday: 10am-4pm</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/gutter-cleaning" className="text-gray-300 hover:text-white transition-colors">
                  Gutter Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/gutter-repairs" className="text-gray-300 hover:text-white transition-colors">
                  Gutter Repairs
                </Link>
              </li>
              <li>
                <Link href="/services/roof-cleaning" className="text-gray-300 hover:text-white transition-colors">
                  Roof Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/fascia-soffit-cleaning" className="text-gray-300 hover:text-white transition-colors">
                  Fascia & Soffit Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/pressure-washing" className="text-gray-300 hover:text-white transition-colors">
                  Pressure Washing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-200">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  Our Company
                </Link>
              </li>
              <li>
                <Link href="/coverage" className="text-gray-300 hover:text-white transition-colors">
                  Areas We Cover
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-white transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Get In Touch</h3>
            <p className="text-gray-300 mb-4">
              Need a quick quote? Get in touch with us today for a free, no-obligation assessment.
            </p>
            <Link
              href="/quote"
              className="inline-block px-4 py-2 bg-green-600 rounded-md text-white font-medium hover:bg-green-700 transition-colors mb-6"
            >
              Request a Quote
            </Link>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaYoutube className="h-6 w-6" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaTiktok className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} We Clean Any Gutter. All Rights Reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
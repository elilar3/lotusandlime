'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-serif text-sm font-bold">L</span>
            </div>
            <span className="font-serif text-xl font-bold text-white">Lotus & Lime</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
              Home
            </Link>
            <Link href="/menu" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
              Menu
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
              About
            </Link>
            <Link href="/reservations" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
              Reservations
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/reservations" 
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-200 font-medium"
            >
              Book a Table
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-red-400 hover:bg-gray-800 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-300 hover:text-red-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/menu" 
                className="block px-3 py-2 text-gray-300 hover:text-red-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-gray-300 hover:text-red-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/reservations" 
                className="block px-3 py-2 text-gray-300 hover:text-red-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservations
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-gray-300 hover:text-red-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link 
                  href="/reservations" 
                  className="block w-full text-center bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a Table
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 
"use client"

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      
      <nav className="w-full shadow-sm" style={{ backgroundColor: 'var(--primary-color)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: 'var(--accent-color)' }}>
                <svg className="w-5 h-5" style={{ color: 'var(--primary-color)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <span className="text-lg font-semibold text-gray-900">CoursePlatform</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">
                Home
              </a>
              <a href="#courses" className="font-medium transition-colors" style={{ color: 'var(--accent-color)' }}>
                Courses
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
                About Us
              </a>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link href='/login' 
                className="px-4 py-2 rounded-lg font-medium transition-colors"
                style={{ 
                  backgroundColor: 'var(--neutral-color)',
                  color: 'var(--accent-color)'
                }}
              >
                Log In
              </Link>
              <Link href='/signup' 
                className="px-4 py-2 rounded-lg font-medium text-white transition-colors"
                style={{ backgroundColor: 'var(--accent-color)' }}
              >
                Sign Up
              </Link>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--neutral-color)' }}>
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>

            {/* Mobile Menu Button */}        
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: 'var(--accent-color)' }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t" style={{ borderColor: 'var(--neutral-color)' }}>
            <div className="px-4 py-3 space-y-3">
              <a 
                href="#home" 
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Home
              </a>
              <a 
                href="#courses" 
                className="block px-3 py-2 rounded-lg font-medium transition-colors"
                style={{ color: 'var(--accent-color)', backgroundColor: 'var(--neutral-color)' }}
              >
                Courses
              </a>
              <a 
                href="#about" 
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                About Us
              </a>
              <div className="pt-3 border-t space-y-2" style={{ borderColor: 'var(--neutral-color)' }}>
                <Link href='/login' 
                  className="block w-full px-4 py-2 rounded-lg font-medium transition-colors"
                  style={{ 
                    backgroundColor: 'var(--neutral-color)',
                    color: 'var(--accent-color)'
                  }}
                >
                  Log In
                </Link>

                <Link href='/signup' 
                  className="block w-full px-4 py-2 rounded-lg font-medium text-white transition-colors"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
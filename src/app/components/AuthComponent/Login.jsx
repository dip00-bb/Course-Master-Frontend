"use client"
import React, { useState } from 'react';
import { GraduationCap, User, Lock, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    alert('Login functionality would be implemented here');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: 'var(--neutral-color)' }}>
      <div className="w-full max-w-md rounded-2xl shadow-lg p-6 sm:p-8" style={{ backgroundColor: 'var(--primary-color)' }}>
        
        {/* Logo and Brand */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg" style={{ backgroundColor: 'var(--accent-color)' }}>
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: 'var(--primary-color)' }} />
          </div>
          <span className="text-xl sm:text-2xl font-bold" style={{ color: '#1a1a1a' }}>
            Learnify
          </span>
        </div>

        {/* Welcome Text */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#1a1a1a' }}>
            Welcome Back
          </h1>
          <p className="text-sm sm:text-base" style={{ color: '#666666' }}>
            Enter your details to access your courses.
          </p>
        </div>

        <div className="space-y-4">
          {/* Email or Username */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#1a1a1a' }}>
              Email or Username
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <User className="w-5 h-5" style={{ color: '#999999' }} />
              </div>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email or username"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                style={{ 
                  backgroundColor: 'var(--primary-color)',
                  borderColor: '#e5e5e5',
                  '--tw-ring-color': 'var(--accent-color)'
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: '#1a1a1a' }}>
              Password
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Lock className="w-5 h-5" style={{ color: '#999999' }} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-12 pr-12 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                style={{ 
                  backgroundColor: 'var(--primary-color)',
                  borderColor: '#e5e5e5',
                  '--tw-ring-color': 'var(--accent-color)'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                style={{ color: '#999999' }}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button 
              onClick={() => alert('Forgot password functionality')}
              className="text-sm font-medium hover:underline"
              style={{ color: 'var(--accent-color)' }}
            >
              Forgot Password?
            </button>
          </div>

          {/* Log In Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-lg font-semibold transition-opacity hover:opacity-90 text-sm sm:text-base"
            style={{ 
              backgroundColor: 'var(--accent-color)',
              color: 'var(--primary-color)'
            }}
          >
            Log In
          </button>

          {/* Log in with Google */}
          <button
            onClick={() => alert('Google login would be implemented here')}
            className="w-full py-3 rounded-lg font-medium border transition-all hover:opacity-80 text-sm sm:text-base flex items-center justify-center gap-2"
            style={{ 
              backgroundColor: 'var(--primary-color)',
              borderColor: '#e5e5e5',
              color: '#1a1a1a'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.64 9.20443C17.64 8.56625 17.5827 7.95262 17.4764 7.36353H9V10.8449H13.8436C13.635 11.9699 13.0009 12.9231 12.0477 13.5613V15.8194H14.9564C16.6582 14.2526 17.64 11.9453 17.64 9.20443Z" fill="#4285F4"/>
              <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z" fill="#34A853"/>
              <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.82999 3.96409 7.28999V4.95818H0.957275C0.347727 6.17318 0 7.54772 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z" fill="#FBBC05"/>
              <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"/>
            </svg>
            Log in with Google
          </button>

          {/* Register Link */}
          <p className="text-center text-sm" style={{ color: '#666666' }}>
            Don&apos;t have an account?{' '}
            <Link href='/signup'
              className="font-semibold hover:underline" 
              style={{ color: 'var(--accent-color)' }}
            >
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
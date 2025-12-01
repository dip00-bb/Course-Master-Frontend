'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Eye, EyeOff, Upload } from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: 'var(--neutral-color)' }}>
        <div className="w-full max-w-md rounded-2xl shadow-lg p-6 sm:p-8" style={{ backgroundColor: 'var(--primary-color)' }}>
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#1a1a1a' }}>
              Create Your Account
            </h1>
            <p className="text-sm sm:text-base" style={{ color: '#666666' }}>
              Start your learning journey with us today.
            </p>
          </div>

          {/* Image Upload Section */}
          <div className="mb-6 flex flex-col items-center">
            <div className="relative">
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <label
                htmlFor="imageUpload"
                className="flex flex-col items-center justify-center w-32 h-32 rounded-full border-2 border-dashed cursor-pointer transition-all hover:border-opacity-80"
                style={{ 
                  borderColor: 'var(--accent-color)', 
                  backgroundColor: imagePreview ? 'transparent' : 'var(--neutral-color)' 
                }}
              >
                {imagePreview ? (
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image 
                      src={imagePreview} 
                      alt="Profile Preview" 
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Upload className="w-8 h-8 mb-2" style={{ color: 'var(--accent-color)' }} />
                    <span className="text-xs text-center px-2" style={{ color: 'var(--accent-color)' }}>
                      Upload Image
                    </span>
                  </div>
                )}
              </label>
            </div>
            {imagePreview && (
              <button
                type="button"
                onClick={() => setImagePreview(null)}
                className="mt-2 text-xs underline"
                style={{ color: 'var(--accent-color)' }}
              >
                Remove Image
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2" style={{ color: '#1a1a1a' }}>
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                style={{ 
                  backgroundColor: 'var(--primary-color)',
                  '--tw-ring-color': 'var(--accent-color)'
                }}
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#1a1a1a' }}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                style={{ 
                  backgroundColor: 'var(--primary-color)',
                  '--tw-ring-color': 'var(--accent-color)'
                }}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: '#1a1a1a' }}>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  minLength={8}
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                  style={{ 
                    backgroundColor: 'var(--primary-color)',
                    '--tw-ring-color': 'var(--accent-color)'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  style={{ color: '#666666' }}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-xs mt-1" style={{ color: '#999999' }}>
                Must be at least 8 characters long.
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2" style={{ color: '#1a1a1a' }}>
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  required
                  minLength={8}
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                  style={{ 
                    backgroundColor: 'var(--primary-color)',
                    '--tw-ring-color': 'var(--accent-color)'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  style={{ color: '#666666' }}
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold transition-opacity hover:opacity-90 text-sm sm:text-base"
              style={{ 
                backgroundColor: 'var(--accent-color)',
                color: 'var(--primary-color)'
              }}
            >
              Create Account
            </button>

            {/* Log In Link */}
            <p className="text-center text-sm" style={{ color: '#666666' }}>
              Already have an account?{' '}
              <a href="/login" className="font-semibold hover:underline" style={{ color: 'var(--accent-color)' }}>
                Log In
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
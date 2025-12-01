"use client"
import React, { use, useContext, useState } from 'react';
import { GraduationCap, User, Lock, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import useAuth from '@/app/Hooks/useAuth';
import { handleEmailPassLogIn } from '@/app/FirebaseAuthFn/authFn';

export default function LoginPage() {

    const { googleLogin } = useAuth()

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result=await handleEmailPassLogIn(userLogIn,formData)
        console.log(result)
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

                <form onSubmit={handleSubmit} className="space-y-4">
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
                        className="w-full py-3 rounded-lg font-semibold transition-opacity hover:opacity-90 text-sm sm:text-base"
                        style={{
                            backgroundColor: 'var(--accent-color)',
                            color: 'var(--primary-color)'
                        }}
                    >
                        Log In
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
                </form>
            </div>
        </div>
    );
}
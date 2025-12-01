"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Upload } from 'lucide-react';
import Image from 'next/image';
import useAuth from '@/app/Hooks/useAuth';
import { handleEmailPassReg } from '@/app/FirebaseAuthFn/authFn';
import { errorToast, sucessToast } from '@/app/Utils/toastFunction';
import { axiosPublic } from '@/app/axiosInstance/useAxiosPublice';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const { registerUser, updateUser, setUser, } = useAuth()

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const password = watch('password');

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

    const onSubmit = async (data) => {
        try {
            const result = await handleEmailPassReg(registerUser, updateUser, setUser, data);

            if (!result) {
                errorToast("Registration Failed")
            } else {
                const users= result?.user
                console.log (users)
                sucessToast("Register Successfull")
                await axiosPublic.post('/api/auth/register',{data})
            }
        } catch (error) {
            errorToast("Someting Went Wrong")
            throw new Error(String(error))
        }
        
        reset();
        setImagePreview(null);
    };

    return (
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
                                        width={150}
                                        height={150}
                                        src={imagePreview}
                                        alt="Profile Preview"
                                        className="object-cover rounded-full"
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

                <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#1a1a1a' }}>
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your full name"
                            {...register('name', {
                                required: 'Full name is required',
                                minLength: {
                                    value: 2,
                                    message: 'Full name must be at least 2 characters'
                                },
                                pattern: {
                                    value: /^[a-zA-Z\s]+$/,
                                    message: 'Full name should only contain letters'
                                }
                            })}
                            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                            style={{
                                backgroundColor: 'var(--primary-color)',
                                borderColor: errors.name ? '#dc2626' : '#d1d5db',
                                '--tw-ring-color': 'var(--accent-color)'
                            }}
                        />
                        {errors.name && (
                            <p className="text-xs mt-1" style={{ color: '#dc2626' }}>
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email Address */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#1a1a1a' }}>
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email address"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Please enter a valid email address'
                                }
                            })}
                            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                            style={{
                                backgroundColor: 'var(--primary-color)',
                                borderColor: errors.email ? '#dc2626' : '#d1d5db',
                                '--tw-ring-color': 'var(--accent-color)'
                            }}
                        />
                        {errors.email && (
                            <p className="text-xs mt-1" style={{ color: '#dc2626' }}>
                                {errors.email.message}
                            </p>
                        )}
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
                                placeholder="Enter your password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be at least 8 characters'
                                    }
                                })}
                                className="w-full px-4 py-3 pr-12 rounded-lg border focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                                style={{
                                    backgroundColor: 'var(--primary-color)',
                                    borderColor: errors.password ? '#dc2626' : '#d1d5db',
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
                        {errors.password ? (
                            <p className="text-xs mt-1" style={{ color: '#dc2626' }}>
                                {errors.password.message}
                            </p>
                        ) : (
                            <p className="text-xs mt-1" style={{ color: '#999999' }}>
                                Must be at least 8 characters long.
                            </p>
                        )}
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
                                placeholder="Confirm your password"
                                {...register('confirmPassword', {
                                    required: 'Please confirm your password',
                                    validate: value => value === password || 'Passwords do not match'
                                })}
                                className="w-full px-4 py-3 pr-12 rounded-lg border focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                                style={{
                                    backgroundColor: 'var(--primary-color)',
                                    borderColor: errors.confirmPassword ? '#dc2626' : '#d1d5db',
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
                        {errors.confirmPassword && (
                            <p className="text-xs mt-1" style={{ color: '#dc2626' }}>
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    {/* Create Account Button */}
                    <button
                        onClick={handleSubmit(onSubmit)}
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
                        <button
                            onClick={() => alert('Navigate to login page')}
                            className="font-semibold hover:underline"
                            style={{ color: 'var(--accent-color)' }}
                        >
                            Log In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
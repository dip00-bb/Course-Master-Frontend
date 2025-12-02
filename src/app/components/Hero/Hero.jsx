"use client"

import React from 'react';
import HeroImage from './HeroImage';
import HeroLeft from './HeroLeft';

export default function Hero() {
    return (
        <div className='p-10'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex-1'>
                    <HeroImage />
                </div>
                <div className='flex-1'>
                    <HeroLeft />
                </div>
            </div>
        </div>
    );
}
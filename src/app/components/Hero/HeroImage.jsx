import Image from 'next/image';
import React from 'react';

const HeroImage = () => {
    return (
        <div className="flex justify-center">
            <div className="relative ">
                {/* Hidden SVG with clip-path definition */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: 'block', position: 'absolute' }}
                    width="0"
                    height="0"
                >
                    <defs>
                        <clipPath id="clip" clipPathUnits="objectBoundingBox">
                            <path d="M0,0H1A0,0,0,0,1,1,0V0.87A0.03,0.03,0,0,1,0.97,0.9H0.78A0.03,0.03,0,0,0,0.75,0.93V0.97A0.03,0.03,0,0,1,0.72,1H0A0,0,0,0,1,0,1V0.13A0.03,0.03,0,0,1,0.03,0.1H0.22A0.03,0.03,0,0,0,0.25,0.07V0.03A0.03,0.03,0,0,1,0.28,0" />
                        </clipPath>
                    </defs>
                </svg>

                {/* Image container with inverted border */}
                <div
                    className="relative bg-gray-100 overflow-hidden"
                    style={{
                        clipPath: 'url(#clip)',
                        width: '100%',
                        height: 'auto',
                        maxWidth: '800px', // max width to ensure image doesn't stretch too much
                        aspectRatio: '1 /1',
                    }}
                >
                    <Image
                        src="/bannergirl.png"
                        alt="Banner Girl"
                        width={700}
                        height={700}
                        className="w-full h-full object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroImage;

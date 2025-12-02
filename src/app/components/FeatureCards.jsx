import React from 'react';

export default function FeatureCards() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Expert Instructors',
      description: 'Learn from industry professionals who are committed to your success'
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Lifetime Access',
      description: 'Enroll once and get unlimited access to course materials'
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Learn Anywhere',
      description: 'Access lessons from your computer, tablet, or mobile device'
    }
  ];

  return (
    <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-var(--neutral-color)" >
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 sm:p-8 rounded-lg transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: 'var(--primary-color)' }}
            >
              <div 
                className="mb-4 sm:mb-5"
                style={{ color: 'var(--accent-color)' }}
              >
                {feature.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                {feature.title}
              </h3>
              
              <p className="text-sm sm:text-base leading-relaxed opacity-70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
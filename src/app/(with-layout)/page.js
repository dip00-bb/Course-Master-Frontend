import React from 'react';
import Hero from '../components/Hero/Hero';
import FeatureCards from '../components/FeatureCards';

const page = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <main>
        <FeatureCards/>
      </main>
    </div>
  );
};

export default page;
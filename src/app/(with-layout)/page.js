import React from 'react';
import Hero from '../components/Hero/Hero';
import FeatureCards from '../components/FeatureCards';
import PopularCourse from '../components/PopularCourse';

const page = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <main>
        <div>
          <FeatureCards />
        </div>
        <div>
          <PopularCourse/>
        </div>
      </main>
    </div>
  );
};

export default page;
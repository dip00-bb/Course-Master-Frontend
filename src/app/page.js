import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import FeatureCards from './components/FeatureCards';

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <Hero />
      </div>
      <main>
        <FeatureCards/>
      </main>
    </div>
  );
};

export default Home;
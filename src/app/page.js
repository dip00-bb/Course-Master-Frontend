import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Hero/>
      </header>
    </div>
  );
};

export default Home;
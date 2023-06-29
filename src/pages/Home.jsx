import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services';
import Trusted from '../components/Trusted';

const Home = () => {
  return (
    <div>
      <Hero heading="Tech Bazar" />

      <Services />
      <Trusted />
    </div>
  );
}

export default Home

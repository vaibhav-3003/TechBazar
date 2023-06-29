import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services';
import Trusted from '../components/Trusted';
import CTA from '../components/cta';

const Home = () => {
  return (
    <div>
      <Hero heading="Tech Bazar" />

      <Services />
      <Trusted />
      <CTA />
    </div>
  );
}

export default Home

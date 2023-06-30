import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services';
import Trusted from '../components/Trusted';
import CTA from '../components/cta';
import FeatureProducts from '../components/FeatureProducts';

const Home = () => {
  return (
    <div>
      <Hero heading="Tech Bazar" />
      <FeatureProducts />
      <Services />
      <Trusted />
      <CTA />
    </div>
  );
}

export default Home

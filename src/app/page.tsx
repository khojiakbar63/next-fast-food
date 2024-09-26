import React from 'react';
import {Hero,Indicators, Menu, Review, Mobile, About, Subscribe} from '@/components/'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Indicators/>
      <Menu/>
      <Review/>
      <Mobile/>
      <About/>
      <Subscribe/>
    </div>
  );
};

export default Home;
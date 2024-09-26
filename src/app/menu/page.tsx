import React from 'react';
import {Hero,Indicators, MenuCardList, Review, Mobile, About, Subscribe} from '@/components/'

const MenuPage = () => {
  return (
    <div>
      <Hero/>
      <Indicators/>
      <MenuCardList/>
      <Review/>
      <Mobile/>
      <About/>
      <Subscribe/>
    </div>
  );
};

export default MenuPage;
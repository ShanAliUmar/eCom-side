import React from 'react'
import Slider from '../components/Slider/Slider'
import "./Home.scss"
import Categories from '../components/Categories/Categories'
import Card from '../components/Card/Card'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Categories/>
      <Card/>
      <FeaturedProducts/>
    </div>
  );
};

export default Home
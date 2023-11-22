import React from 'react'
import Slider from '../components/Slider/Slider'
import "./Home.scss"
import Categories from '../components/Categories/Categories'
// import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Categories/>
      {/* <FeaturedProducts type="featured"/>
      <FeaturedProducts type="trending"/> */}
    </div>
  )
}

export default Home
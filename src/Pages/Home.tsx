import React from 'react'
import Navbar from '../Components/Navbar'
import MidHome from '../Components/MidHome'
import FeaturedProducts from '../Components/FeaturedProducts'
import Testimonial from '../Components/Testimonial'
import Newsletter from '../Components/Newsletter'
import Footers from '../Components/Footers'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <MidHome />
      <FeaturedProducts/>
      <Testimonial/>
      <Newsletter />
      <Footers/>
    </div>
  )
}

export default Home

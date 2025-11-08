import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from '../Components/Navbar'
import MidHome from '../Components/MidHome'
import FeaturedProducts from '../Components/FeaturedProducts'
import Testimonial from '../Components/Testimonial'
import Newsletter from '../Components/Newsletter'
import Footers from '../Components/Footers'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animation happens only once per scroll
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <div>
      <Navbar />

      <div data-aos="fade-up">
        <MidHome />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <FeaturedProducts />
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <Testimonial />
      </div>

      <div data-aos="fade-up" data-aos-delay="600">
        <Newsletter />
      </div>

      <div data-aos="fade-in" data-aos-delay="800">
        <Footers />
      </div>
    </div>
  )
}

export default Home

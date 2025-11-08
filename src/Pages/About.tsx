'use client'

import { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footers from '../Components/Footers'
import Template1 from '../Components/Template1'
import Lenis from 'lenis'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    // ✅ Initialize Lenis for smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // ✅ Initialize AOS for animations
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: 'ease-in-out',
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Navbar />

      <section className="text-white body-font">
        <div className="container !px-5 !py-24 mx-auto">
          {/* Our Motive */}
          <div
            className="flex flex-col text-center w-full !mb-20"
            data-aos="fade-up"
          >
            <h1 className="text-2xl font-medium title-font !mb-4 tracking-widest">
              OUR MOTIVE
            </h1>
            <p
              className="lg:w-2/3 !mx-auto leading-relaxed text-base"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our aim is to provide customers with high-quality timepieces that
              combine style, durability, and reliable performance. We strive to
              offer a convenient online shopping experience, backed by
              professional service and a carefully curated selection of trusted
              brands.
            </p>
          </div>

          {/* Main Team */}
          <div
            className="flex flex-col text-center w-full !mb-20"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h1 className="text-2xl font-medium title-font !mb-4 tracking-widest">
              OUR MAIN TEAM
            </h1>
            <p
              className="lg:w-2/3 !mx-auto leading-relaxed text-base"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              This ecommerce website was made by the contribution of many
              members.
            </p>
          </div>

          {/* Team Cards */}
          <div
            className="flex flex-wrap items-center justify-center gap-8"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <Template1
              name="Jatin Singh"
              rank="Web Developer"
              cb="Contributed in making the website."
              src="/logo.png"
            />
            <Template1
              name="Rohit"
              rank="Designer"
              cb="Contributing in ideas, designs regarding the website."
            />
            <Template1
              name="Shreyansh"
              rank="Presenter"
              cb="Creating video presentations and promotional content."
            />
          </div>

          {/* Closing Note */}
          <p
            className="pt-20 text-2xl text-center"
            data-aos="fade"
            data-aos-delay="350"
          >
            While many others helped in various capacities, their contributions
            were invaluable to the project's success.
          </p>
        </div>
      </section>

      <Footers />
    </>
  )
}

export default About

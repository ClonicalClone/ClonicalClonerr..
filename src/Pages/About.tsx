'use client'

import React, { useEffect } from 'react'



import Navbar from '../Components/Navbar'
import Footers from '../Components/Footers'
import Template1 from '../Components/Template1'

import Lenis from 'lenis'

// This page is about the team members who contributed to the project
// It includes a section for team profiles and a timeline of contributions
// The page is styled with Tailwind CSS for a modern look

const About = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    interface RafFunction {
      (time: number): void;
    }

    const raf: RafFunction = function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
  <>
  <Navbar />
    
      <section className="text-white body-font">
      
  <div className="container !px-5 !py-24 mx-auto">
  <div className="flex flex-col text-center w-full !mb-20">
      <h1 className="text-2xl font-medium title-font !mb-4  tracking-widest">OUR MOTIVE</h1>
      <p className="lg:w-2/3 !mx-auto leading-relaxed text-base">Our aim is to provide customers with high-quality timepieces that combine style, durability, and reliable performance. We strive to offer a convenient online shopping experience, backed by professional service and a carefully curated selection of trusted brands.</p>

    </div>
    <div className="flex flex-col text-center w-full !mb-20">
      <h1 className="text-2xl font-medium title-font !mb-4  tracking-widest">OUR MAIN TEAM</h1>
      <p className="lg:w-2/3 !mx-auto leading-relaxed text-base">This ecommerce website was made by the contribution of many members.</p>

    </div>
    <div className="flex flex-wrap items-center justify-center">
    <Template1 name="Jatin Singh" rank="Web Developer" cb="Contributed in making the website." src="/logo.png" />
      <Template1 name="Rohit" rank="Designer" cb="Contributing in ideas, designs regarding the website." />
      <Template1 name="Shreyansh" rank="Presenter" cb="Creating video presentations and promotional content." />
      
      <p className='pt-20 text-2xl text-center'>While Many others helped in various capacities, their contributions were invaluable to the project's success.</p>

    </div>
  </div>
</section>

   
    <Footers />
    </>
  )
}

export default About


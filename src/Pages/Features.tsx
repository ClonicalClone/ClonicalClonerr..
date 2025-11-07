import React from 'react'
import { SiMaterialdesignicons } from "react-icons/si"; 
import { FaStarOfLife } from "react-icons/fa"; 
import { FaBandcamp } from "react-icons/fa"; 
import { IoWaterOutline } from "react-icons/io5"; 
import Template2 from '../Components/Template2'
import { Si1001Tracklists } from "react-icons/si"; 
import Navbar from '../Components/Navbar';
import Footers from '../Components/Footers';

const Features = () => {
  return (
  <>
 <Navbar />
      <section className="text-gray-600 body-font">
<h1 className="text-3xl text-white text-center !mb-25 !mt-42">Features We Provide You</h1>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <ul className="timeline timeline-vertical">
    <Template2 icon={<Si1001Tracklists className=" size-full text-2xl"/>} id = "1" name="Extended Warranty Coverage" dp="Comprehensive protection plans covering manufacturing defects, movement issues, and battery replacements for up to 5 years, giving customers long-term peace of mind."/>
    <Template2 icon={<SiMaterialdesignicons  className=" size-full  text-2xl"/>} id = "2" name="Superior Material Selection" dp="Watches crafted from premium materials such as surgical-grade stainless steel, sapphire crystal glass, ceramic bezels, and hypoallergenic titanium to ensure exceptional durability and comfort."/>
    <Template2 icon={ <IoWaterOutline className=" size-full text-2xl"/>} id = "3" name="Certified Water Resistance Testing" dp="Each watch undergoes rigorous water resistance certification, guaranteeing performance under specific conditions (e.g., 100m–300m depths), ideal for swimmers and divers."/>
    <Template2 icon={<FaBandcamp className=" size-full text-2xl"/>} id = "4" name="Complimentary Strap Customization" dp="Personalized fitting and customization of straps in high-quality leather, rubber, or metal, allowing customers to tailor the style and comfort of their timepiece."/>
    <Template2 icon={<FaStarOfLife className=" size-full text-2xl"/>} id = "5" name="Lifetime Service & Polishing Program" dp="Exclusive lifetime cleaning, polishing, and mechanical servicing to keep watches in pristine condition and maintain their value over time."/>
        </ul>
    
  </div>
</section>
<Footers />
</>
  )
}

export default Features

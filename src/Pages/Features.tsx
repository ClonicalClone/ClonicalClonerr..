import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiMaterialdesignicons, Si1001Tracklists } from "react-icons/si";
import { FaStarOfLife, FaBandcamp } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";
import Template2 from "../Components/Template2";
import Navbar from "../Components/Navbar";
import Footers from "../Components/Footers";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Runs only once when scrolling
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Navbar />

      <section className="text-gray-600 body-font min-h-screen bg-black">
        <div className="container px-5 py-24 mx-auto text-center">
          <h1
            className="text-4xl text-white font-bold mb-16"
            data-aos="fade-down"
          >
            Features We Provide You
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            <div data-aos="fade-up" data-aos-delay="100">
              <Template2
                icon={<Si1001Tracklists className="text-3xl text-black" />}
                name="Extended Warranty Coverage"
                dp="Comprehensive protection plans covering manufacturing defects, movement issues, and battery replacements for up to 5 years, giving customers long-term peace of mind."
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <Template2
                icon={<SiMaterialdesignicons className="text-3xl text-black" />}
                name="Superior Material Selection"
                dp="Watches crafted from premium materials such as surgical-grade stainless steel, sapphire crystal glass, ceramic bezels, and hypoallergenic titanium to ensure exceptional durability and comfort."
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <Template2
                icon={<IoWaterOutline className="text-3xl" />}
                name="Certified Water Resistance Testing"
                dp="Each watch undergoes rigorous water resistance certification, guaranteeing performance under specific conditions (e.g., 100m–300m depths), ideal for swimmers and divers."
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <Template2
                icon={<FaBandcamp className="text-3xl" />}
                name="Complimentary Strap Customization"
                dp="Personalized fitting and customization of straps in high-quality leather, rubber, or metal, allowing customers to tailor the style and comfort of their timepiece."
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="500">
              <Template2
                icon={<FaStarOfLife className="text-3xl" />}
                name="Lifetime Service & Polishing Program"
                dp="Exclusive lifetime cleaning, polishing, and mechanical servicing to keep watches in pristine condition and maintain their value over time."
              />
            </div>
          </div>
        </div>
      </section>

      <Footers />
    </>
  );
};

export default Features;

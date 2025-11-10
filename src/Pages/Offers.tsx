"use client";


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";
import Footers from "../Components/Footers";
import SpotlightCard from "../Components/Spotlight"; // same spotlight card used in Template2

const Offers = () => {
  const liveOffers = [
    {
      title: "Winter Arc 2025",
      description:
        "Enjoy 20% off on every watch in our Winter Arc 2025 collection. Premium styles, exclusive materials, and timeless craftsmanship — now at an irresistible price.",
      discount: "20% OFF",
    },
  ];

  const completedOffers = [
    {
      title: "Summer Arc 2025",
      description:
        "A summer special featuring vibrant watch straps and limited-edition colors. Offer concluded August 2025.",
    },
    {
      title: "Summer Vacation 2025",
      description:
        "Discounts on waterproof and travel-friendly timepieces for summer adventurers. Ended September 2025.",
    },
    {
      title: "Winter Arc 2024",
      description:
        "Exclusive 15% off premium watches during our Winter Arc 2024. Completed January 2025.",
    },
    {
      title: "Spring Elegance 2024",
      description:
        "Celebrating spring with pastel-tone straps and sapphire dials. Ended April 2024.",
    },
    {
      title: "Autumn Classic 2024",
      description:
        "An autumn-themed sale featuring gold and bronze watches. Completed November 2024.",
    },
    {
      title: "Anniversary Collection 2024",
      description:
        "Our 10th Anniversary offer on select mechanical watches. Completed December 2024.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black text-white pt-24">
        <div className="container mx-auto px-5 pb-24 text-center">
          {/* Header */}
          <div data-aos="fade-down">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Exclusive Offers
            </h1>
            <p className="text-gray-400 text-lg">
              Experience premium timepieces and exclusive discounts.
            </p>
          </div>

          {/* Live Offers */}
          <div className="mt-20">
            <h2
              className="text-3xl font-semibold text-green-400 mb-12"
              data-aos="fade-up"
            >
              Live Offers
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
              {liveOffers.map((offer, index) => (
                <div data-aos="fade-up" key={index}>
                  <SpotlightCard
                    className="p-8 bg-black! border border-neutral-800 rounded-2xl cursor-pointer hover:scale-105 transition duration-300 hover:duration-500"
                    spotlightColor="rgba(0, 255, 120, 0.15)"
                  >
                    <h3 className="text-2xl font-semibold mb-3 text-green-400">
                      {offer.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                      {offer.description}
                    </p>
                    <span className="inline-block px-4 py-2 bg-green-600/10 text-green-400 border border-green-500/30 text-sm font-medium rounded-md">
                      {offer.discount}
                    </span>
                  </SpotlightCard>
                </div>
              ))}
            </div>
          </div>

          {/* Completed Offers */}
          <div className="mt-28">
            <h2
              className="text-3xl font-semibold text-gray-400 mb-12"
              data-aos="fade-up"
            >
              Completed Offers
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
              {completedOffers.map((offer, index) => (
                <div data-aos="fade-up" key={index}>
                  <SpotlightCard
                    className="p-8 bg-black! border border-neutral-800 rounded-2xl cursor-pointer  hover:duration-500"
                    spotlightColor="rgba(255, 255, 255, 0.3)"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {offer.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {offer.description}
                    </p>
                    <p className="text-gray-500 text-xs italic">
                      Offer Completed
                    </p>
                  </SpotlightCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footers />
    </>
  );
};

export default Offers;

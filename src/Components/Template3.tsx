/* eslint-disable */
'use client';

import { BsArrowRightShort } from "react-icons/bs"; 
import { useState } from "react";
import Navbar from './Navbar';
import Footers from './Footers';
import '../App.css';
import { Lens } from "./lens"; // 👈 import your Lens component

const Template3 = (parms: any) => {
  const [hovering, setHovering] = useState(false); // for Lens blur effect

  const handleBuyNow = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingItem = existingCart.find((item: any) => item.id === parms.id);

    let updatedCart;
    if (existingItem) {
      updatedCart = existingCart.map((item: any) =>
        item.id === parms.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          id: parms.id,
          name: parms.name,
          price: parms.price,
          discount: 1,
          quantity: 1,
          color: "Black",
          image: parms.srcss,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Added to cart!");
  };

  return (
    <>
      <Navbar />

      <section className="text-white body-font overflow-hidden">
        <div className="container !px-5 !py-24 !mx-auto">
          <div className="lg:w-4/5 !mx-auto flex md:flex-nowrap flex-wrap">

            {/* 🔍 Image section with Lens effect */}
            <div className="relative md:w-1/2 w-full md:h-auto h-64 flex items-center justify-center">
              <Lens hovering={hovering} setHovering={setHovering} zoomFactor={1.6} lensSize={180}>
                <img
                  alt={parms.name || "Product image"}
                  className="object-cover object-center rounded h-full w-full"
                  src={parms.srcss}
                />
              </Lens>
            </div>

            {/* 📄 Details section */}
            <div className="lg:w-1/2 !w-full md:!pl-10 md:!py-6 !mt-6 lg:!mt-0">
              <h2 className="text-sm title-font text-white tracking-widest">{parms.brand}</h2>
              <h1 className="text-white text-3xl title-font font-medium !mb-1">{parms.name}</h1>

              <div className="flex flex-col !mb-4">
                <h1 className="text-gray-600 !ml-3">{parms.review} Reviews</h1>
              </div>

              <p className="leading-relaxed !mb-7">{parms.description}</p>
              <h1 className="text-gray-300 items-center !ml-1 flex gap-2">
                Strap Material <BsArrowRightShort /> {parms.material}
              </h1>
              <h1 className="text-gray-300 items-center !ml-1 flex gap-2">
                Strap Color <BsArrowRightShort /> {parms.color}
              </h1>
              <h1 className="text-gray-300 items-center !ml-1 flex gap-2">
                Watch Type <BsArrowRightShort /> {parms.type}
              </h1>
              <h1 className="text-gray-300 items-center !ml-1 flex gap-2">
                Category <BsArrowRightShort /> {parms.category}
              </h1>

              <div className="flex !mt-6 items-center !pb-5 border-b-2 border-gray-100 !mb-5"></div>

              <div className="flex items-center">
                <span className="title-font font-medium text-2xl text-white">
                  ₹{parms.price}.00
                </span>
                <a
                  className="flex !ml-auto text-white !py-2 !px-6 focus:outline-none rounded bt cursor-pointer text-center! items-center! justify-center! "
                  onClick={handleBuyNow}
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footers />
    </>
  );
};

export default Template3;

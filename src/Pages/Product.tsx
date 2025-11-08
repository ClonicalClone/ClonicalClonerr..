/* eslint-disable */
'use client'
import { MdFilterList } from "react-icons/md";
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footers from '../Components/Footers';
import '../App.css';
import data from '../data.json';
import { useState, useEffect } from 'react';
import Filters from '../Components/Filter';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Product() {
  const [showOffers, setShowOffers] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 100000000,
    strapMaterial: '',
    strapColor: '',
    type: ''
  });

  // ✅ Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
      offset: 100
    });
  }, []);

  const applyFilters = (newFilters: any) => {
    let filtered = data.filter((product) => {
      if (product.price < newFilters.minPrice || product.price > newFilters.maxPrice) return false;

      if (newFilters.strapMaterial && newFilters.strapMaterial !== '') {
        const predefinedMaterials = ['Leather', 'Stainless Steel', 'Titanium', 'Silicon'];
        if (newFilters.strapMaterial === 'Other') {
          if (predefinedMaterials.includes(product.strap_material)) return false;
        } else if (product.strap_material !== newFilters.strapMaterial) return false;
      }

      if (newFilters.strapColor && newFilters.strapColor !== '') {
        const predefinedColors = ['White', 'Black', 'Golden', 'Silver', 'Grey'];
        if (newFilters.strapColor === 'Other') {
          if (predefinedColors.includes(product.strap_color)) return false;
        } else if (product.strap_color !== newFilters.strapColor) return false;
      }

      if (newFilters.type && newFilters.type !== '') {
        if (product.type !== newFilters.type) return false;
      }

      return true;
    });

    setFilteredProducts(filtered);
  };

  const handleFilterApply = (newFilters: any) => {
    setFilters(newFilters);
    applyFilters(newFilters);
    setShowOffers(false);
  };

  const clearFilters = () => {
    const defaultFilters = {
      minPrice: 0,
      maxPrice: 100000000,
      strapMaterial: '',
      strapColor: '',
      type: ''
    };
    setFilters(defaultFilters);
    setFilteredProducts(data);
  };

  return (
    <>
      {showOffers && (
        <Filters
          onApplyFilters={handleFilterApply}
          onClose={() => setShowOffers(false)}
          currentFilters={filters}
        />
      )}

      <Navbar />

      <section className="bg-black text-white body-font min-h-screen">
        <div className="container px-5 py-20 mx-auto">
          <div 
            className="sm:text-3xl text-2xl font-medium title-font text-center flex justify-center items-center gap-6 mb-12"
            data-aos="fade-down"
          >
            <h1>Our Collections</h1>
            <div 
              className="flex flex-row text-xl justify-center items-center gap-2 cursor-pointer border p-2 rounded-full px-4 hover:scale-105 transition-all duration-200"
              onClick={() => { setShowOffers(!showOffers) }}
              data-aos="fade-left"
            >
              Filter <MdFilterList />
            </div>
          </div>

          {/* Filter status */}
          <div 
            className="flex justify-center items-center gap-4 mb-8"
            data-aos="fade-up"
          >
            <p className="text-gray-300">
              Showing {filteredProducts.length} of {data.length} products
            </p>
            {(filters.minPrice > 0 || filters.maxPrice < 100000000 || filters.strapMaterial || filters.strapColor || filters.type) && (
              <button
                onClick={clearFilters}
                className="text-sm text-white px-3 py-1 rounded-2xl border border-white hover:scale-105 transition-all duration-200"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Products Grid */}
          <div className="flex flex-wrap gap-12 justify-center transition-all duration-500">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="lg:w-1/4 md:w-1/2 p-6 w-full opacity-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Link
                  to={`/products/${product.id}`}
                  className="block relative h-50 rounded overflow-hidden group"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-300 rounded-2xl"
                  />
                </Link>
                <div className="mt-4 flex flex-col items-center">
                  <h2 className="text-white title-font text-lg font-medium hover:text-gray-300 transition-colors text-center">
                    <Link to={`/products/${product.id}`}>
                      {product.name}
                    </Link>
                  </h2>
                  <p className="mt-1 text-lg text-[14px] text-zinc-400 font-light">
                    ₹{product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* No products */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16" data-aos="fade-up">
              <h2 className="text-2xl text-gray-400 mb-4">No products found</h2>
              <p className="text-gray-500 mb-6">Try adjusting your filter criteria</p>
              <button
                onClick={clearFilters}
                className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footers />
    </>
  );
}

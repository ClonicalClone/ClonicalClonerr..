import { ImCross } from "react-icons/im";
import React, { useEffect, useState } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";


/* eslint-disable */
"use client";

export default function CheckoutModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // ✅ Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    // Custom event listener to open modal
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<{ total: number }>;
      setTotal(customEvent.detail.total);
      setIsOpen(true);
    };

    window.addEventListener("open-checkout-modal", handler);
    return () => window.removeEventListener("open-checkout-modal", handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("✅ Payment Successful! Thank you for your purchase.");
    console.log("Payment processed");
    setTimeout(() => setIsOpen(false), 1000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center"
      data-aos="fade-in"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-black/70 backdrop-blur-xl border border-white p-6 rounded-lg w-full max-w-sm text-white shadow-lg"
        data-aos="fade-up"
      >
        {/* Close button */}
        <ImCross
          className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setIsOpen(false)}
          data-aos="fade-left"
        />
        <br />
        <h1 className="text-xl font-bold mb-4" data-aos="fade-up" data-aos-delay="100">
          Secure Payment — ₹{total.toFixed(2)}
        </h1>

        {/* Card details */}
        <label className="text-sm block mb-2" data-aos="fade-up" data-aos-delay="150">
          Card Number
        </label>
        <input
          className="w-full p-2 mb-3 rounded bg-black border border-white"
          required
          autoComplete="cc-number"
          inputMode="numeric"
          pattern="[0-9 ]{13,19}"
          maxLength={19}
          placeholder="XXXX XXXX XXXX XXXX"
          data-aos="fade-up"
          data-aos-delay="200"
        />

        <div className="flex gap-2" data-aos="fade-up" data-aos-delay="250">
          <div className="flex-1">
            <label className="text-sm block mb-2">MM/YY</label>
            <input
              className="w-full p-2 mb-3 rounded bg-black border border-white"
              placeholder="XX/XX"
              required
            />
          </div>
          <div className="flex-1">
            <label className="text-sm block mb-2">CVV</label>
            <input
              className="w-full p-2 mb-3 rounded bg-black border border-white"
              inputMode="numeric"
              pattern="[0-9]{3,4}"
              maxLength={3}
              placeholder="XXX"
              required
            />
          </div>
        </div>

        {/* Customer details */}
        <div data-aos="fade-up" data-aos-delay="300">
          <label className="text-sm block mb-2">Full Name</label>
          <input className="w-full p-2 mb-3 rounded bg-black border border-white" required />

          <label className="text-sm block mb-2">Full Address</label>
          <input className="w-full p-2 mb-3 rounded bg-black border border-white" required />

          <label className="text-sm block mb-2">Country</label>
          <input className="w-full p-2 mb-3 rounded bg-black border border-white" required />

          <label className="text-sm block mb-2">Pincode</label>
          <input className="w-full p-2 mb-4 rounded bg-black border border-white" required />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={notify}
          className="w-full bg-green-600 hover:bg-green-700 p-2 rounded font-semibold cursor-pointer transition-all duration-200 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          Pay Now
        </button>

        {/* Toast Notifications */}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        />
      </form>
    </div>
  );
}

// ✅ Toast helper
const notify = () => {
  toast.success("Payment Successful, Expected to deliver by 2-3 business days!", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    transition: Slide,
  });
};

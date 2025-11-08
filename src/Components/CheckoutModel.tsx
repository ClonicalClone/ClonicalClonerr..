import { ImCross } from "react-icons/im"; 

/* eslint-disable */
"use client";
import React, { useEffect, useState } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function CheckoutModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);


 useEffect(() => {
  const handler = (e: Event) => {<ImCross />
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
    <div className="fixed inset-0 bg-black/70 z-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-black/70 backdrop-blur-xl border border-white p-6 rounded-lg w-full max-w-sm text-white"
      ><ImCross className="text-white text-2xl" onClick={() => {setIsOpen(false)}} /> <br/> <br/>
        <h1 className="text-xl font-bold mb-4">
          Secure Payment — ₹{total.toFixed(2)}
        </h1>

        <label className="text-sm block mb-2">Card Number</label>
        <input className="w-full p-2 mb-3 rounded bg-black border-white border" required  autoComplete="cc-number"
  inputMode="numeric"
  pattern="[0-9 ]{13,19}"
  maxLength={19}
  placeholder="XXXX XXXX XXXX XXXX"/>

        <div className="flex gap-2">
          <div className="flex-1">
            <label className="text-sm block mb-2">MM/YY</label>
            <input className="w-full p-2 mb-3 rounded bg-black border-white border" placeholder="XX/XX" required />
          </div>
          <div className="flex-1">
  <label className="text-sm block mb-2">CVV</label>
  <input 
    className="w-full p-2 mb-3 rounded bg-black border-white border" 
    inputMode="numeric"
    pattern="[0-9]{3,4}"
    maxLength={3}
    placeholder="XXX"
    required 
  />
          </div>
          
        </div>

        <label className="text-sm block mb-2">Full Name</label>
        <input className="w-full p-2 mb-4 rounded bg-black border-white border" required />
      
            <label className="text-sm block mb-2">Full Address</label>
            <input className="w-full p-2 mb-3 rounded bg-black border-white border" required />
            <label className="text-sm block mb-2">Country</label>
            <input className="w-full p-2 mb-3 rounded bg-black border-white border" required />
            <label className="text-sm block mb-2">Pincode</label>
            <input className="w-full p-2 mb-3 rounded bg-black border-white border" required />
      

        <button
          type="submit" onClick={notify}
          className="w-full bg-green-600 hover:bg-green-700 p-2 rounded font-semibold cursor-pointer"
        >
          Pay Now
        </button> 
        <ToastContainer position="bottom-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="dark"
               transition={Slide}/>
      </form>
    </div>
  );
}
 
const notify = () => {
  toast.success('Subscribed successfully!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "black",
        transition: Slide,
      })
     
    }


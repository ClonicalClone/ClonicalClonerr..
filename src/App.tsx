
import './App.css'
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import SubProducts from './Pages/SubProducts';
import Home from './Pages/Home';
import About from './Pages/About';
import { Routes, Route } from 'react-router-dom';

// ✅ Import Toast and Checkout Modal
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutModal from "./Components/CheckoutModel";
import Features from './Pages/Features';
import Offers from './Pages/Offers';

function App() {
  return (
    <>
      {/* ✅ All Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/homes" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/contacts" element={<Contact />} />

        <Route path="/about" element={<About />} />
        <Route path="/abouts" element={<About />} />

        {/* ✅ Product Page */}
        <Route path="/product" element={<Product />} />
        <Route path="/products" element={<Product />} />
        <Route path="/features" element={<Features />} />
        <Route path="/feature" element={<Features />} />
        <Route path="/offers" element={<Offers />} />
    
        <Route path="/offer" element={<Offers />} />

        {/* ✅ Dynamic Product Detail */}
        <Route path="/products/:productId" element={<SubProducts />} />
        <Route path="/product/:productId" element={<SubProducts />} />
      </Routes>

      {/* ✅ Checkout Modal Global */}
      <CheckoutModal />

      {/* ✅ Toast Container Global */}
      <ToastContainer position="top-center" />
    </>
  )
}

export default App;

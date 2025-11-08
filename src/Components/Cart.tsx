
import { useLocalStorage, useEventListener } from "usehooks-ts";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CheckoutBT from "./CheckoutButton";

type CartItem = {
  id: string;
  name: string;
  image: string;
  color: string;
  price: number;
  quantity: number;
};

const Cart = ({ onClose }: { onClose: () => void }) => {
  // Persist cart items automatically in localStorage
  const [items, setItems] = useLocalStorage<CartItem[]>("cart", []);

  // ✅ Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Close modal when pressing Escape
  useEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  });

  // Update item quantity
  const handleQuantityChange = (id: string, newQuantity: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(newQuantity, 1) }
          : item
      )
    );
  };

  // Remove an item
  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ---------- CART CALCULATIONS ----------
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const vat = subtotal * 0.05; // 5% VAT
  const total = subtotal + vat;

  const MAX_TOTAL = 79999920;
  const exceedsLimit = total > MAX_TOTAL;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex justify-center backdrop-blur-[5px] items-center"
      data-aos="fade-in"
    >
      <section
        className="relative bg-black border border-gray-200 rounded-2xl w-full max-w-md p-6 shadow text-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 transition-colors"
          aria-label="Close"
          data-aos="fade"
          data-aos-delay="150"
        >
          ✕
        </button>

        <h1
          id="cart-title"
          className="text-xl font-bold mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Your Cart
        </h1>

        {items.length === 0 ? (
          <p
            className="text-center text-gray-400"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Your cart is empty.
          </p>
        ) : (
          <>
            {/* Items */}
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li
                  key={item.id}
                  className="flex items-center gap-4"
                  data-aos="fade-up"
                  data-aos-delay={250 + index * 100}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-400">
                      Color: {item.color}
                    </p>
                    <p className="text-xs text-gray-400">
                      Price: ₹{item.price}
                    </p>
                  </div>

                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value) || 1)
                    }
                    className="w-12 border rounded text-center text-sm bg-black border-gray-600 text-white"
                  />

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-600 text-xs cursor-pointer"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            {/* Summary */}
            <div
              className="mt-6 border-t pt-4 text-sm space-y-1"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>VAT (5%)</span>
                <span>₹{vat.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Limit warning */}
            {exceedsLimit && (
              <p
                className="text-red-500 text-sm text-center m-2"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                The total exceeds the maximum allowed amount for checkout.
              </p>
            )}

            {/* Checkout button */}
            <div data-aos="fade-up" data-aos-delay="500">
              <CheckoutBT total={total} disabled={exceedsLimit} />
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Cart;

import { useEffect, useRef, useState } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SearchOverlay({ onClose }: { onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // ✅ Initialize AOS for fade animations
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-in-out",
    });

    // Prevent background scroll
    document.body.style.overflow = "hidden";

    // Focus input after short delay (ensures DOM ready)
    setTimeout(() => inputRef.current?.focus(), 100);

    // Close on ESC
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);

    // Cleanup
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20"
      data-aos="fade-in"
    >
      <div
        className="bg-black relative rounded-xl w-full max-w-2xl p-6 shadow-lg border-2 border-white"
        data-aos="fade-down"
      >
        {/* Close icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
          aria-label="Close"
          data-aos="fade-left"
        >
          &times;
        </button>

        {/* Search input */}
        <input
          ref={inputRef}
          type="text"
          placeholder="Search products..."
          className="w-[90%] border border-gray-500 bg-transparent p-3 rounded-md text-lg text-white placeholder-gray-400 outline-none focus:border-white transition-all"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          data-aos="fade-up"
        />

        {/* Filtered results */}
        <div className="mt-6" data-aos="fade-up" data-aos-delay="100">
          <h3 className="font-semibold mb-2 text-white text-xl">Products</h3>
          <div className="flex flex-col gap-4 overflow-auto max-h-96 pr-2">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div
                  key={index}
                  className="bg-black border border-gray-700 p-4 rounded-md hover:scale-[1.02] hover:border-white transition-all"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <Link
                    to={`/products/${item.id}`}
                    onClick={onClose}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </div>
              ))
            ) : (
              <div className="text-gray-400" data-aos="fade-up">
                No results found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

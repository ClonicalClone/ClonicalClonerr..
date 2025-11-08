import Navbar from "../Components/Navbar";
import Footers from "../Components/Footers";
import LaserFlow from "../Components/Laser";

const Offers = () => {
  const liveOffers = [
    {
      title: "Winter Arc 2025",
      description:
        "Enjoy 20% off on every watch in our Winter Arc 2025 collection. Premium styles, exclusive materials, and timeless craftsmanship — now at an irresistible price.",
      status: "Live",
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

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black text-white pt-10">
        <div className="container mx-auto px-5">
          {/* Laser Header */}
          <div
            style={{
              height: "700px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <LaserFlow
              horizontalBeamOffset={0.0}
              verticalBeamOffset={0.0}
              horizontalSizing={0.9}
              color="#FFFFFF"
            />

            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                backgroundColor: "rgba(0, 0, 0, 0.85)",
                borderRadius: "20px",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
                textAlign: "center",
                zIndex: 6,
                padding: "2rem",
              }}
            >
              <h1 className="text-5xl font-extrabold tracking-wide">
                Exclusive Offers
              </h1>
              <p className="text-gray-300 text-lg mt-4">
                Unwrap timeless elegance — discover our live and past offers.
              </p>
            </div>
          </div>

          {/* Live Offers */}
          <div className="mt-24">
            <h2 className="text-4xl font-bold text-green-400 mb-10 text-center">
               Live Offers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
              {liveOffers.map((offer, index) => (
                <div
                  key={index}
                  className="relative w-full max-w-sm bg-gradient-to-b from-green-500/10 to-green-800/10 border-2 border-green-400/30 rounded-2xl backdrop-blur-md  p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_305px_-60px_rgba(0,255,120,0.5)] cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/30 to-transparent rounded-2xl blur-xl opacity-20"></div>
                  <h3 className="text-2xl font-semibold mb-3 text-green-300">
                    {offer.title}
                  </h3>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    {offer.description}
                  </p>
                  <span className="inline-block px-4 py-2 bg-green-500/20 border border-green-400/40 text-green-300 font-semibold rounded-md">
                    {offer.discount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Completed Offers */}
          <div className="mt-32">
            <h2 className="text-3xl font-semibold text-gray-500 mb-10 text-center">
               Completed Offers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {completedOffers.map((offer, index) => (
                <div
                  key={index}
                  className="relative w-full max-w-sm bg-gradient-to-b from-neutral-800/70 to-neutral-900/90 border border-white/10 rounded-xl p-6 backdrop-blur-sm text-center shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-700/30 to-transparent rounded-xl blur-xl opacity-20"></div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {offer.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {offer.description}
                  </p>
                  <p className="text-gray-500 text-xs mt-3 italic">
                    Offer Completed
                  </p>
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

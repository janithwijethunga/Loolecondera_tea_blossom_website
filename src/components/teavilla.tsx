import React, { useState, useEffect } from "react";
import tea1 from "../assets/investintea/tea1.jpg";
import tea2 from "../assets/investintea/tea2.jpg";
import tea3 from "../assets/investintea/tea3.jpg";
import teavilla from "../assets/investintea/teavilla.jpg";

const MinimalistTeaVilla = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isInView, setIsInView] = useState({
    hero: false,
    features: false,
    gallery: false,
  });

  // Auto rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Simulate intersection observer for animations
  useEffect(() => {
    setIsInView({
      hero: true,
      features: true,
      gallery: true,
    });
  }, []);

  const features = [
    {
      id: 1,
      title: "Idyllic Paradise",
      description:
        "A flourishing tea garden surrounding the premises offers premium-quality tea, directly sourced and brewed for your pleasure.",
      image: tea1,
    },
    {
      id: 2,
      title: "Premium Tea Experience",
      description:
        "An idyllic view of hidden paradise in Pelmadulla offering maximum comfort and scenic bliss for your stay.",
      image: tea3,
    },
    {
      id: 3,
      title: "Luxury Getaway",
      description:
        "Features a luxury pool facing the spectacular Kudaella Falls, curated for a unique getaway and tea drinking experience.",
      image: tea2,
    },
  ];

  return (
    <div className="font-sans bg-white text-gray-800 overflow-hidden">
      {/* Hero Section - Using the provided image with dark green background */}
      <section
        className={`relative bg-green-900 overflow-hidden transition-opacity duration-1000 ${
          isInView.hero ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="flex flex-col items-center">
            {/* City skyline image */}
            <div className="w-full mb-4">
              <img
                src={teavilla}
                alt="Tea Villa"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Text content from the image */}
            <div className="text-center text-white absolute max-w-3xl mt-14">
              <h2 className="text-3xl font-bold uppercase mb-4">TEA VILLA</h2>

              {/* Green line divider */}
              <div className="w-16 h-1 bg-lime-400 mx-auto mb-6"></div>

              <p className="text-lg mb-6 mt-16">
                Encapsulate in the ultimate tea experience by booking your next
                luxury getaway at Subha - Tea Villas!
              </p>

              <p className="text-lg mb-6">
                Tucked away in beautiful Pelmadulla, enjoy the bliss of this
                secluded paradise curated with a stunning waterfall view,
                private cabanas, and an expansive tea garden, where you can
                enjoy the freshest cups of tea brewed fresh from the garden to
                your cup.
              </p>

              <p className="text-lime-300 font-semibold mb-6 mt-8">
                *The "Tea Investors" will get special discounts and offers while
                staying at our villa
              </p>

              <button className="mt-4 bg-lime-400 text-green-900 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:bg-transparent hover:text-lime-400 hover:border-2 hover:border-lime-400">
                Book Your Stay
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Minimal Grid Layout */}
      <section
        className={`py-24 transition-opacity duration-1000 ${
          isInView.features ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature) => (
              <div key={feature.id} className="space-y-4">
                <div className="overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-lg font-light tracking-wide text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinimalistTeaVilla;

import React, { useState } from "react";
import { CgPlayButtonO } from "react-icons/cg";

import { images } from "./../../assets/assets.js";

// Check icon component
const CheckIcon = () => (
  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

const TeaVideo = () => {
  const [playing, setPlaying] = useState(false);
  const videoUrl =
    "https://www.youtube.com/embed/K3ruUyZgmsY?autoplay=1&controls=1&loop=0&mute=1&rel=0&start=0&html5=1&v=q4d8g9Dn3ww";

  const handlePlayClick = () => {
    setPlaying(true);
  };

  const features = [
    "Trusted, Vetted Professionals",
    "U.S.-Based Support",
    "Money-Back Guarantee",
    "Sri Lankan Service Team",
    "Peace of Mind",
  ];

  return (
    <section className="bg-[#fcf9ef] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-green-800 leading-tight mb-6">
              Connecting Homes to{" "}
              <span className="text-green-800">Excellence</span>
            </h2>

            {/* Supporting paragraph */}
            <p className="max-w-xl text-lg text-gray-600 leading-relaxed mb-6">
              Experience premium Ceylon tea delivered with unmatched quality and
              service. Our commitment to excellence connects tea lovers
              worldwide to the finest Sri Lankan tea traditions.
            </p>

            {/* Features list */}
            <div className="ml-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-5">
                    <CheckIcon />
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Video */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-3xl">
              {!playing ? (
                /* Video placeholder with thumbnail and play button */
                <div
                  className="relative aspect-video bg-cover bg-center rounded-3xl shadow-2xl overflow-hidden"
                  style={{
                    backgroundImage: `url('https://i.pinimg.com/1200x/fb/fe/41/fbfe41beb79eb4791e7b83346162af47.jpg')`,
                  }}
                >
                  {/* Dark overlay for better contrast */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* Play button */}
                  <button
                    onClick={handlePlayClick}
                    className="absolute inset-0 flex items-center justify-center group"
                    aria-label="Play video"
                  >
                    <CgPlayButtonO className="w-16 h-16 text-white" />
                  </button>
                </div>
              ) : (
                /* YouTube video iframe */
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <iframe
                    src={videoUrl}
                    className="w-full h-full"
                    title="Promo video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeaVideo;

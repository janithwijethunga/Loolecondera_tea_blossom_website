import React, { useState } from "react";
import Background from "./../../assets/Homepage/bg4.jpg";
import BG from "./../../assets/Homepage/bg3.jpg"

const TeaVideo = () => {
  const [playing, setPlaying] = useState(false);

  // YouTube video URL from your requirements
  const videoUrl =
    "https://www.youtube.com/embed/K3ruUyZgmsY?autoplay=1&controls=1&loop=0&mute=1&rel=0&start=0&html5=1&v=q4d8g9Dn3ww";

  const handlePlayClick = () => {
    setPlaying(true);
  };

  return (
    <div className="relative w-full h-96">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Content container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        {!playing ? (
          <>
            {/* Tea cup image & play button */}
            <div className="relative mb-8">
              <button
                onClick={handlePlayClick}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-red-500 rounded-full w-16 h-16 flex items-center justify-center hover:bg-red-700 transition-colors"
                aria-label="Play video"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 text-center font-poppins ">
              LOOLECONDERA TEA
            </h1>
          </>
        ) : (
          /* YouTube video iframe */
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              src={videoUrl}
              className="w-full h-full"
              title="Loolecondera Tea Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default TeaVideo;

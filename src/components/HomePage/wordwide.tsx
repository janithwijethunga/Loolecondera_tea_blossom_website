import React from "react";
import Lion from "../../assets/greenlion.png";

const Worldwide = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Main container with gradient background */}
      <div className="w-full bg-gradient-to-r from-green-600 via-green-600 to-green-700 py-16 relative">
        {/* Animated tea leaf patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="absolute animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${index * 0.5}s`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  opacity: 0.4 + Math.random() * 0.6,
                }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="text-green-900"
                >
                  <path
                    d="M20,2 C25,10 30,15 38,20 C30,25 25,30 20,38 C15,30 10,25 2,20 C10,15 15,10 20,2 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Diagonal divider */}
        <div className="absolute top-0 right-0 h-full w-1/3 bg-green-600 transform -skew-x-12 opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left side - Text content with enhanced styling */}
            <div className="md:w-1/2 flex flex-col items-start">
              <div className="relative mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 relative z-10  font-poppins">
                  We deliver <span className="text-green-900">worldwide!</span>
                </h2>
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-green-800 opacity-20 rounded-full transform -skew-x-12"></div>
              </div>

              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white border-opacity-20">
                <p className="text-green-900 text-lg leading-relaxed">
                  A diverse assortment of teas from different countries and
                  regions around the world. It typically includes teas sourced
                  from various tea-producing countries, each offering its unique
                  flavors, characteristics, and tea culture.
                </p>
                {/* Call-to-action button */}
                <button className="mt-6 px-6 py-3 bg-green-800 text-white font-medium rounded-full shadow-md hover:bg-green-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center">
                  Explore Our Collection
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right side - Lion Logo with enhanced presentation */}
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                {/* Rotating circles animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border-4 border-green-700 opacity-30 animate-spin-slow"></div>
                  <div className="w-72 h-72 rounded-full border-4 border-dashed border-green-700 opacity-20 animate-reverse-spin"></div>
                </div>

                {/* Green glow effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full bg-green-500 opacity-40 blur-md"></div>
                </div>

                {/* Lion image placeholder */}
                <div className="relative z-10 bg-green-600 rounded-full p-4 shadow-xl transform transition-transform duration-500 hover:scale-105">
                  <div className="w-56 h-56 relative rounded-full overflow-hidden border-4 border-white">
                    <img
                      src={Lion}
                      alt="Green Lion Logo"
                      className="w-full h-full object-cover pt-1 pr-"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative curved shapes at bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white opacity-10"
            ></path>
          </svg>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-reverse-spin {
          animation: reverse-spin 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Worldwide;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroBanner2Props {
  backgroundImage: string;
  title?: string;
  subtitle?: string;
}

const HeroBanner2: React.FC<HeroBanner2Props> = ({ backgroundImage, title, subtitle }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (backgroundImage) {
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.onerror = () => {
        setImageError(true);
        setImageLoaded(true); // Set to true to hide skeleton even on error
      };
      img.src = backgroundImage;
    }
  }, [backgroundImage]);

  return (
    <div className="relative h-[390px] flex items-center justify-center overflow-hidden text-center mt-5">
      {/* Skeleton Loading */}
      {!imageLoaded && (
        <div className="absolute inset-0 z-0 flex items-start justify-center pt-4">
          <div className="w-full max-w-6xl h-80 md:h-[350px] bg-gradient-to-r from-tea-cream via-tea-light-green/20 to-tea-cream rounded-3xl animate-pulse relative overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          </div>
        </div>
      )}

      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 flex items-start justify-center pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="w-full max-w-6xl h-80 md:h-[350px] bg-cover bg-center rounded-3xl "
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      </motion.div>

      {/* Title Content Skeleton */}
      {!imageLoaded && (title || subtitle) && (
        <div className="relative z-20 px-4">
          {title && (
            <div className="mb-4">
              <div className="h-12 md:h-16 bg-gradient-to-r from-tea-cream via-white/40 to-tea-cream rounded-lg animate-pulse relative overflow-hidden max-w-md mx-auto">
                <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              </div>
            </div>
          )}
          {subtitle && (
            <div className="max-w-2xl mx-auto">
              <div className="h-6 md:h-8 bg-gradient-to-r from-tea-cream via-white/40 to-tea-cream rounded-lg animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Title Content */}
      {imageLoaded && (
        <motion.div 
          className="relative z-20 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title && (
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 font-playfair">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-white text-lg md:text-2xl opacity-90 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}

      {/* Add CSS for shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroBanner2;
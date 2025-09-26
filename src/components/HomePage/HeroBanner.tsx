import React from "react";
import { motion } from "framer-motion";

interface HeroBannerProps {
  backgroundImage: string;
  title?: string;
  subtitle?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ backgroundImage, title, subtitle }) => {
  return (
    <div className="relative h-[380px] flex items-center justify-center overflow-hidden text-center ">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 flex items-start justify-center pt-4"
      
      >
        <div
          className="w-full max-w-5xl h-80 md:h-[350px] bg-cover bg-center rounded-3xl "
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      </motion.div>

     

      {/* Title Content */}
      <div className="relative z-20 px-4">
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
      </div>
    </div>
  );
};

export default HeroBanner;

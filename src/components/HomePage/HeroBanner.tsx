import React from "react";
import { motion } from "framer-motion";

interface HeroBannerProps {
  backgroundImage: string;
  title?: string;
  subtitle?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ backgroundImage, title, subtitle }) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden text-center">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Overlay for visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

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

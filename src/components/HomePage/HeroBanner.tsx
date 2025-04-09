import React from "react";
import { motion } from "framer-motion";

interface HeroBannerProps {
  backgroundImage: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ backgroundImage }) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </div>
  );
};

export default HeroBanner;

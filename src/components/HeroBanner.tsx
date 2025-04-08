import React from "react";
import { Link } from "react-router-dom";

interface HeroBannerProps {
  backgroundImage: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ backgroundImage }) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
    </div>
  );
};

export default HeroBanner;

import React from "react";
import { Link } from "react-router-dom";

interface TeaCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  animationDelay?: number;
}

const TeaCard: React.FC<TeaCardProps> = ({
  title,
  description,
  imageSrc,
  link,
  animationDelay = 0,
}) => {
  return (
    <div
      className="tea-card animate-fade-up bg-white/5 border border-white/10 rounded-2xl shadow-lg backdrop-blur-md hover:scale-[1.02] transition-transform duration-300"
      style={{ animationDelay: `${animationDelay * 0.1}s` }}
    >
      <div className="p-6 flex flex-col items-center">
        {/* Title */}
        <h3 className="text-white text-xl font-semibold text-center">
          {title}
        </h3>
        <hr className="w-16 my-2 border-t-2 border-tea-gold rounded-full" />

        {/* Image */}
        <div className="w-full h-44 flex items-center justify-center mt-4 mb-4 rounded-xl overflow-hidden bg-white/10">
          <img
            src={imageSrc}
            alt={title}
            className="object-contain max-h-full transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Description */}
        <p className="text-white text-sm text-center">{description}</p>

        {/* Button (optional) */}
        <Link
          to={link}
          className="mt-6 inline-block px-5 py-2 bg-tea-gold text-tea-dark-green rounded-full text-sm font-semibold hover:bg-yellow-400 transition"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default TeaCard;

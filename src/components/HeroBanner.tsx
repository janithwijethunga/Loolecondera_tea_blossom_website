
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  overlay?: boolean;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
  overlay = true
}) => {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {overlay && (
        <div className="absolute inset-0 bg-black/40 z-10" />
      )}
      
      <div className="tea-container relative z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-playfair text-white mb-4 animate-fade-up">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
        
        {buttonText && buttonLink && (
          <Link 
            to={buttonLink} 
            className="tea-btn bg-tea-gold hover:bg-tea-gold/90 text-tea-dark-green animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;

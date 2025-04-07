
import React from 'react';
import { Link } from 'react-router-dom';

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
  animationDelay = 0
}) => {
  return (
    <div 
      className="tea-card animate-fade-up" 
      style={{ animationDelay: `${animationDelay * 0.1}s` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-tea-dark-green mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-block text-tea-dark-green font-medium hover:text-tea-gold transition-colors duration-300"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default TeaCard;

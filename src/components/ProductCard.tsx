
import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  animationDelay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  image,
  animationDelay = 0
}) => {
  return (
    <div 
      className="tea-card p-6 flex flex-col animate-fade-up"
      style={{ animationDelay: `${animationDelay * 0.1}s` }}
    >
      <div className="h-48 w-48 mx-auto mb-4 overflow-hidden rounded-full">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-playfair font-bold text-tea-dark-green mb-2 text-center">{name}</h3>
      <p className="text-gray-700 text-center mb-4 flex-grow">{description}</p>
      <div className="text-tea-gold font-bold text-xl text-center">${price}</div>
    </div>
  );
};

export default ProductCard;

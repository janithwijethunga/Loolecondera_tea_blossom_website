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
  animationDelay = 0,
}) => {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-tea-gold hover:shadow-2xl transition-all duration-300 flex flex-col"
      style={{ animationDelay: `${animationDelay * 0.1}s` }}
    >
      {/* Image */}
      <div className="w-full h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div className="mb-4">
          <h3 className="text-2xl font-playfair font-semibold text-tea-dark-green mb-2">
            {name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Price & Button */}
        <div className="mt-auto text-center">
          <div className="text-tea-gold font-bold text-xl mb-3">${price}</div>
          <button className="px-4 py-2 bg-tea-dark-green text-white rounded-full hover:bg-tea-gold hover:text-tea-dark-green transition-all duration-300 font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
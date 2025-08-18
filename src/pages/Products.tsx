import React, { useState } from 'react';
import HeroBanner from '../components/HomePage/HeroBanner';
import ProductCard from '../components/ProductCard';
import HeroImg from '../assets/Products/ProductsHero.jpg';
import Product1 from '../assets/Products/Product1.jpg';
import Product2 from '../assets/Products/Product2.jpg';
import Product3 from '../assets/Products/Product3.jpg';
import Product4 from '../assets/Products/Product4.jpg';
import Product5 from '../assets/Products/Product5.jpg';
import Product6 from '../assets/Products/Product6.jpg';
import Product7 from '../assets/Products/Product7.jpg';
import Product8 from '../assets/Products/Product8.jpg';
import Product9 from '../assets/Products/Product9.jpg';
import Product10 from '../assets/Products/Product10.jpg';
import Product11 from '../assets/Products/Product11.jpg';

import premium1 from '../assets/Products/premium1.jpg';
import premium2 from '../assets/Products/premium2.jpg';
import premium3 from '../assets/Products/premium3.jpg';
import premium4 from '../assets/Products/premium4.jpg';
import premium5 from '../assets/Products/premium5.jpg';

const Products = () => {
  const [activeCollection, setActiveCollection] = useState('classic');
  const [hoveredCard, setHoveredCard] = useState(null);

  // Classic tea collection
  const classicProducts = [
    {
      name: "Pekoe Tea",
      description: "Whole, unbroken tea leaves from the top two leaves and a bud.",
      price: "15",
      image: Product1
    },
    {
      name: "CTC Tea",
      description: "Broken leaves that brew a stronger, more robust flavor.",
      price: "20",
      image: Product2
    },
    {
      name: "DUST Tea",
      description: "Includes young buds or tips, adding complexity and delicacy to the flavor profile.",
      price: "20",
      image: Product3
    },
    {
      name: "DUST1 Tea",
      description: "A higher quality grade within the FBOP category, indicating superior quality.",
      price: "20",
      image: Product4
    },
    {
      name: "BOPF Tea",
      description: "Known for producing a milder and more delicate cup of tea compared to coarser leaves.",
      price: "20",
      image: Product5
    },
    {
      name: "FF Tea Bag",
      description: "Small particle size that brews quickly, producing a strong, robust cup of tea.",
      price: "25",
      image: Product6
    },
    {
      name: "BOPF EX SPECIAL1 Tea",
      description: "Delicate buds minimally processed to preserve natural characteristics, offering a light, floral, and slightly sweet flavor.",
      price: "30",
      image: Product7
    },
    {
      name: "OPA Tea",
      description: "Renowned for exquisite flavor and aroma, with carefully plucked buds ensuring quality.",
      price: "15",
      image: Product8
    },
    {
      name: "BOP Tea",
      description: "Premium grade with exceptional quality and flavor profile.",
      price: "20",
      image: Product9
    },
    {
      name: "OP 1 Tea",
      description: "A premium, whole-leaf grade with a well-balanced flavor profile.",
      price: "20",
      image: Product10
    },
    {
      name: "OP Tea",
      description: "Broken Orange Pekoe, providing a rich, full-bodied cup.",
      price: "15",
      image: Product11
    },
  ];

  // Premium tea collection
  const premiumProducts = [
    {
      name: "Tranquil Twist",
      description: "Our signature blend with floral notes and a smooth finish.",
      price: "2500",
      image: premium1
    },
    {
      name: "Golden Elegance",
      description: "Exquisite golden tips creating a luxurious tea experience.",
      price: "800",
      image: premium2
    },
    {
      name: "Serene Fusion",
      description: "A harmonious blend of the finest Sri Lankan tea leaves.",
      price: "1500",
      image: premium3
    },
    {
      name: "Royal Essence",
      description: "A bold and majestic tea with rich undertones.",
      price: "1800",
      image: premium4
    },
    {
      name: "Pure Bliss",
      description: "Delicate and aromatic, our most refined tea offering.",
      price: "750",
      image: premium5
    },
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-amber-50 min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-80 overflow-hidden">
        <img src={HeroImg} alt="Tea Products" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Loolecondera Tea Collections</h1>
            <p className="text-xl text-white text-opacity-90">Experience the finest teas from the heart of Sri Lanka</p>
          </div>
        </div>
      </div>

      {/* Collection Tabs */}
      <div className="container mx-auto py-10 px-4">
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full shadow-md inline-flex p-1">
            <button 
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCollection === 'classic' 
                  ? 'bg-green-700 text-white' 
                  : 'text-gray-700 hover:bg-green-50'
              }`}
              onClick={() => setActiveCollection('classic')}
            >
              Classic Collection
            </button>
            <button 
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCollection === 'premium' 
                  ? 'bg-amber-700 text-white' 
                  : 'text-gray-700 hover:bg-amber-50'
              }`}
              onClick={() => setActiveCollection('premium')}
            >
              Premium Collection
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto">
          {activeCollection === 'classic' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {classicProducts.map((product, i) => (
                <div 
                  key={i} 
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ${
                    hoveredCard === `classic-${i}` ? 'scale-105 shadow-xl' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(`classic-${i}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" 
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                    <p className="mt-2 text-gray-600 text-sm line-clamp-2">{product.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <p className="text-green-700 font-bold text-lg">${product.price}</p>
                      <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeCollection === 'premium' && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
              {premiumProducts.map((product, i) => (
                <div 
                  key={i} 
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ${
                    hoveredCard === `premium-${i}` ? 'scale-105 shadow-xl' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(`premium-${i}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="h-64 relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" 
                    />
                    <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 m-2 rounded-full text-xs font-semibold">
                      Premium
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                    <p className="mt-2 text-gray-600">{product.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <p className="text-amber-700 font-bold text-xl">${product.price}</p>
                      <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>


    </div>
  );
};

export default Products;
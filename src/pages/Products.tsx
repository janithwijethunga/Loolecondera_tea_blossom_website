import React, { useState, useEffect } from 'react';
import { BsStars } from 'react-icons/bs';
import { images } from '../assets/assets';

const HeroBannerSkeleton = () => (
  <div className="relative h-80 overflow-hidden mt-5 bg-gray-200 w-4/6 mx-auto rounded-2xl">
    {/* The Shimmer Effect Div */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/100 to-transparent -translate-x-full animate-shimmer" />
  </div>
);

const ProductCardSkeleton = ({ isPremium = false }) => (
  // The parent card needs to be relative and overflow-hidden
  <div className="relative bg-white rounded-xl shadow-lg overflow-hidden h-[25rem]">
    <div className="h-52 bg-gray-200" />
    <div className={`${isPremium ? 'p-6' : 'p-5'}`}>
      <div className="h-6 bg-gray-200 rounded mb-3 w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-4/5" />
      </div>
      <div className="mt-4">
        <div className="h-6 bg-gray-200 rounded w-24" />
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-shimmer" />
  </div>
);


const Products = () => {
  const [activeCollection, setActiveCollection] = useState('premium');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [bannerLoading, setBannerLoading] = useState(true);

  // Simulate loading states
  useEffect(() => {
    // Simulate banner loading
    const bannerTimer = setTimeout(() => {
      setBannerLoading(false);
    }, 800);

    // Simulate products loading
    const productsTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      clearTimeout(bannerTimer);
      clearTimeout(productsTimer);
    };
  }, []);

  // Reset loading when switching collections
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [activeCollection]);

  // Classic tea collection
  const classicProducts = [
    {
      name: "Pekoe Tea",
      description: "Whole, unbroken tea leaves from the top two leaves and a bud.",
      price: "3500.00",
      image: images.Product1
    },
    {
      name: "CTC Tea",
      description: "Broken leaves that brew a stronger, more robust flavor.",
      price: "600.00",
      image: images.Product2
    },
    {
      name: "FF Tea Bag",
      description: "Small particle size that brews quickly, producing a strong, robust cup of tea.",
      price: "7300.00",
      image: images.Product6
    },
    {
      name: "OPA Tea",
      description: "Renowned for exquisite flavor and aroma, with carefully plucked buds ensuring quality.",
      price: "3500.00",
      image: images.Product8
    },
    {
      name: "BOP Tea",
      description: "Premium grade with exceptional quality and flavor profile.",
      price: "3700.00",
      image: images.Product9
    },
    {
      name: "OP 1 Tea",
      description: "A premium, whole-leaf grade with a well-balanced flavor profile.",
      price: "3700.00",
      image: images.Product10
    },
    {
      name: "OP Tea",
      description: "Broken Orange Pekoe, providing a rich, full-bodied cup.",
      price: "3200.00",
      image: images.Product11
    },
    {
      name: "BOPF Tea",
      description: "Known for producing a milder and more delicate cup of tea compared to coarser leaves.",
      price: "4700.00",
      image: images.Product5
    },
    {
      name: "DUST1 Tea",
      description: "A higher quality grade within the FBOP category, indicating superior quality.",
      price: "5500.00",
      image: images.Product4
    },
    {
      name: "DUST Tea",
      description: "Includes young buds or tips, adding complexity and delicacy to the flavor profile.",
      price: "6000.00",
      image: images.Product3
    },
    {
      name: "BOPF EX SPECIAL1 Tea",
      description: "Delicate buds minimally processed to preserve natural characteristics, offering a light, floral, and slightly sweet flavor.",
      price: "9000.00",
      image: images.Product7
    },
  ];

  // Premium tea collection
  const premiumProducts = [
    {
      name: "James Taylor's Organic Ceylon Tea",
      description: "Experience a cup of living history with Loolkondera's Organic Ceylon Tea. Sourced directly from the legendary Loolkondera Estate—the very birthplace of Ceylon tea—this exquisite whole leaf black tea is a tribute to its founder, James Taylor.",
      price: "2800.00",
      image: images.premium7
    },
    {
      name: "Ceylon Black Tea (FBOP Grade)",
      description: "Celebrate the pioneering spirit of James Taylor with this classic Loolecondera Ceylon Black Tea. This tin contains a high-quality FBOP (Flowery Broken Orange Pekoe) grade tea.",
      price: "2800.00",
      image: images.premium6
    },
    {
      name: "Loolecondera Ceylon Black Tea (OP1 Grade)",
      description: "Discover the delicate side of Ceylon's heritage with Loolecondera's OP1 (Orange Pekoe 1) grade black tea. Characterised by its long, wiry, and beautifully twisted leaves.",
      price: "2800.00",
      image: images.premium8
    },
    {
      name: "James Taylor's Loolocondera Ceylon Tea",
      description: "Share the legacy of Ceylon's finest tea with this beautifully presented gift tin from Loolocondera. This tea is grown and harvested on the renowned island of Sri Lanka.",
      price: "2800.00",
      image: images.premium1
    },
    {
      name: "Tranquil Twist",
      description: "Our signature blend with floral notes and a smooth finish.",
      price: "2800.00",
      image: images.premium1
    },
    {
      name: "Golden Elegance",
      description: "Exquisite golden tips creating a luxurious tea experience.",
      price: "2800.00",
      image: images.premium2
    },
    {
      name: "Serene Fusion",
      description: "A harmonious blend of the finest Sri Lankan tea leaves.",
      price: "2800.00",
      image: images.premium3
    },
    {
      name: "Royal Essence",
      description: "A bold and majestic tea with rich undertones.",
      price: "2800.00",
      image: images.premium4
    },
    {
      name: "Pure Bliss",
      description: "Delicate and aromatic, our most refined tea offering.",
      price: "2800.00",
      image: images.premium5
    },
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-amber-50 min-h-screen">
      {/* Hero Banner */}
      {bannerLoading ? (
        <HeroBannerSkeleton />
      ) : (
        <div className="relative h-80 overflow-hidden mt-5">
          <img 
            src={images.ProductsHero1} 
            alt="Tea Products" 
            className="h-full object-center mx-auto"
          />
        </div>
      )}

      {/* Collection Tabs */}
      <div className="container mx-auto py-10 px-4">
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full shadow-md inline-flex p-1">
            <button 
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCollection === 'premium' 
                  ? 'bg-amber-700 text-white' 
                  : 'text-gray-700 hover:bg-amber-50'
              }`}
              onClick={() => setActiveCollection('premium')}
              disabled={isLoading}
            >
              <BsStars className="inline mr-2 text-yellow-400 size-5" /> Premium Collection
            </button>
            <button 
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCollection === 'classic' 
                  ? 'bg-green-700 text-white' 
                  : 'text-gray-700 hover:bg-green-50'
              }`}
              onClick={() => setActiveCollection('classic')}
              disabled={isLoading}
            >
              Classic Collection
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            // Skeleton Loading State
            <div className={`grid gap-4 ${
              activeCollection === 'classic' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4'
            }`}>
              {Array.from({ length: activeCollection === 'premium' ? 9 : 11 }).map((_, i) => (
                <ProductCardSkeleton 
                  key={i} 
                  isPremium={activeCollection === 'premium'} 
                />
              ))}
            </div>
          ) : (
            // Actual Content
            <>
              {activeCollection === 'classic' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {classicProducts.map((product, i) => (
                    <div 
                      key={i} 
                      className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 h-[25rem] ${
                        hoveredCard === `classic-${i}` ? 'shadow-xl' : ''
                      }`}
                      onMouseEnter={() => setHoveredCard(`classic-${i}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="h-52 relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" 
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                        <p className="mt-2 text-gray-600 line-clamp-2">{product.description}</p>
                        <div className="mt-3">
                          <p className="text-green-700 font-bold text-xl">LKR.{product.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeCollection === 'premium' && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                  {premiumProducts.map((product, i) => (
                    <div 
                      key={i} 
                      className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 h-[25rem] ${
                        hoveredCard === `premium-${i}` ? 'shadow-xl' : ''
                      }`}
                      onMouseEnter={() => setHoveredCard(`premium-${i}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="h-52 relative overflow-hidden">
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
                        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                        <p className="mt-2 text-gray-600 line-clamp-2">{product.description}</p>
                        <div className="mt-3">
                          <p className="text-amber-700 font-bold text-xl">LKR.{product.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
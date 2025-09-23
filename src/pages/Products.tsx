import React, { useState } from 'react';
import HeroBanner from '../components/HomePage/HeroBanner';
import ProductCard from '../components/ProductCard';
import { BsStars } from 'react-icons/bs';

import {images } from '../assets/assets';// import HeroImg from '../assets/Products/ProductsHero.webp';
// import Product1 from '../assets/Products/Product1.webp';
// import Product2 from '../assets/Products/Product2.webp';
// import Product3 from '../assets/Products/Product3.webp';
// import Product4 from '../assets/Products/Product4.webp';
// import Product5 from '../assets/Products/Product5.webp';
// import Product6 from '../assets/Products/Product6.webp';
// import Product7 from '../assets/Products/Product7.webp';
// import Product8 from '../assets/Products/Product8.webp';
// import Product9 from '../assets/Products/Product9.webp';
// import Product10 from '../assets/Products/Product10.webp';
// import Product11 from '../assets/Products/Product11.webp';

// import premium1 from '../assets/Products/premium1.webp';
// import premium2 from '../assets/Products/premium2.webp';
// import premium3 from '../assets/Products/premium3.webp';
// import premium4 from '../assets/Products/premium4.webp';
// import premium5 from '../assets/Products/premium5.webp';

const Products = () => {
  const [activeCollection, setActiveCollection] = useState('premium');
  const [hoveredCard, setHoveredCard] = useState(null);

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
      name: "DUST Tea",
      description: "Includes young buds or tips, adding complexity and delicacy to the flavor profile.",
      price: "6000.00",
      image: images.Product3
    },
    {
      name: "DUST1 Tea",
      description: "A higher quality grade within the FBOP category, indicating superior quality.",
      price: "5500.00",
      image: images.Product4
    },
    {
      name: "BOPF Tea",
      description: "Known for producing a milder and more delicate cup of tea compared to coarser leaves.",
      price: "4700.00",
      image: images.Product5
    },
    {
      name: "FF Tea Bag",
      description: "Small particle size that brews quickly, producing a strong, robust cup of tea.",
      price: "7300.00",
      image: images.Product6
    },
    {
      name: "BOPF EX SPECIAL1 Tea",
      description: "Delicate buds minimally processed to preserve natural characteristics, offering a light, floral, and slightly sweet flavor.",
      price: "9000.00",
      image: images.Product7
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
  ];

  // Premium tea collection
  const premiumProducts = [
    {
      name: "James Taylor's Organic Ceylon Tea",
      description: "Experience a cup of living history with Loolkondera's Organic Ceylon Tea. Sourced directly from the legendary Loolkondera Estate—the very birthplace of Ceylon tea—this exquisite whole leaf black tea is a tribute to its founder, James Taylor. Grown using certified organic methods, this tea offers a pure, unadulterated taste of the Sri Lankan highlands. It delivers a bold, brisk, and bright taste with a rich character and distinct flavour. Packaged in a premium dark green and gold tin, it's a perfect gift for the discerning tea lover and a testament to a 150-year legacy of quality.",
      price: "2800.00",
      image: images.premium7
    },{
      name: "Ceylon Black Tea (FBOP Grade)",
      description: "Celebrate the pioneering spirit of James Taylor with this classic Loolecondera Ceylon Black Tea. This tin contains a high-quality FBOP (Flowery Broken Orange Pekoe) grade tea, known for its shorter, slightly coarse leaves that may include some silvery tips. This grade produces a robust and full-bodied brew with a rich, malty flavour and a bright, reddish liquor. It's the perfect representation of the traditional Ceylon black tea that made the island famous. Housed in an elegant white tin featuring the portrait of James Taylor, this tea honours its origin as the first commercial tea plantation in Sri Lanka.",
      price: "2800.00",
      image: images.premium6
    },{
      name: "Loolecondera Ceylon Black Tea (OP1 Grade)",
      description: "Discover the delicate side of Ceylon's heritage with Loolecondera's OP1 (Orange Pekoe 1) grade black tea. Characterised by its long, wiry, and beautifully twisted leaves, OP1 is a premium grade that yields a more refined and nuanced flavour profile. This tea brews into a bright, light-bodied liquor with a delicate, fresh aroma and a smooth, mellow taste. It's an ideal choice for those who appreciate the subtle complexities of a high-quality leaf tea. Presented in a striking red and black cylindrical caddy, it proudly states its legacy, dating back to James Taylor's first planting in 1867.",
      price: "2800.00",
      image: images.premium8
    },{
      name: "James Taylor's Loolocondera Ceylon Tea",
      description: "Share the legacy of Ceylon's finest tea with this beautifully presented gift tin from Loolocondera. This tea is grown and harvested on the renowned island of Sri Lanka, celebrated for producing some of the finest teas in the world. As a direct descendant of the original plants cultivated by James Taylor, this Ceylon tea offers an authentic and high-quality experience. While the specific grade is not mentioned, it promises the classic character Ceylon tea is known for. The elegant packaging, complete with a barcode and price in GBP (£4.95), makes it a perfect, ready-to-sell gift for tea connoisseurs worldwide.",
      price: "2800.00",
      image: images.premium1
    },{
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
      <div className="relative h-80 overflow-hidden">
        <img src={images.ProductsHero} alt="Tea Products" className="w-full h-full object-cover" />
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
                activeCollection === 'premium' 
                  ? 'bg-amber-700 text-white' 
                  : 'text-gray-700 hover:bg-amber-50'
              }`}
              onClick={() => setActiveCollection('premium')}
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
            >
              Classic Collection
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto">
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
                    <p className="mt-2 text-gray-600  line-clamp-2">{product.description}</p>
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
        </div>
      </div>


    </div>
  );
};

export default Products;
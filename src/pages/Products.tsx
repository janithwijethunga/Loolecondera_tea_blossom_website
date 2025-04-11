
import React from 'react';
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

const Products = () => {
  const products = [
    {
      name: "Orange Pekoe (OP)",
      description: "Whole, unbroken tea leaves from the top two leaves and a bud.",
      price: "1.20",
      image: Product1
    },
    {
      name: "Broken Orange Pekoe (BOP)",
      description: "Broken leaves that brew a stronger, more robust flavor.",
      price: "1.20",
      image: Product2
    },
    {
      name: "Flowery Broken Orange Pekoe (FBOP)",
      description: "Includes young buds or tips, adding complexity and delicacy to the flavor profile.",
      price: "1.20",
      image: Product3
    },
    {
      name: "FBOP Extra Special 1",
      description: "A higher quality grade within the FBOP category, indicating superior quality.",
      price: "1.20",
      image: Product4
    },
    {
      name: "Pekoe",
      description: "Known for producing a milder and more delicate cup of tea compared to coarser leaves.",
      price: "1.20",
      image: Product5
    },
    {
      name: "Dust #1",
      description: "Small particle size that brews quickly, producing a strong, robust cup of tea.",
      price: "1.20",
      image: Product6
    },
    {
      name: "Silver Tips",
      description: "Delicate buds minimally processed to preserve natural characteristics, offering a light, floral, and slightly sweet flavor.",
      price: "1.20",
      image: Product7
    },
    {
      name: "Golden Tips",
      description: "Renowned for exquisite flavor and aroma, with carefully plucked buds ensuring quality.",
      price: "1.20",
      image: Product8
    }
  ];

  return (
    <div>
      <HeroBanner 
        title="Our Products"
        subtitle="Explore our premium range of Ceylon teas"
        backgroundImage={HeroImg}
      />
      
      <section className="py-16 bg-white">
        <div className="tea-container">
          <div className="text-center mb-12">
            <h2 className="section-title inline-block mx-auto after:left-1/4 after:right-1/4 after:w-1/2">
              Premium Tea Grades
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              Loolecondera offers a diverse selection of premium Ceylon tea grades, each with its unique characteristics and flavor profile. Explore our collection to find your perfect cup.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.name}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                animationDelay={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-tea-cream">
        <div className="tea-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-up">
              <h2 className="section-title">
                Direct from the Source
              </h2>
              <p className="text-gray-700 mb-6">
                Our teas are harvested from our own estates in the highlands of Sri Lanka, ensuring complete control over quality from plant to cup. Each leaf is carefully handpicked at the optimal time to guarantee the finest flavor.
              </p>
              <p className="text-gray-700 mb-6">
                We take pride in our sustainable and ethical farming practices, respecting both the environment and the communities that make our exceptional teas possible.
              </p>
              <p className="font-medium text-tea-dark-green">
                For bulk orders or wholesale inquiries, please contact us at info@boswingroup.com
              </p>
            </div>
            
            <div className="order-1 lg:order-2 relative h-80 md:h-full rounded-lg overflow-hidden shadow-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80" 
                alt="Tea processing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

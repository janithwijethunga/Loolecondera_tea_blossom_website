import React, { useState, useEffect } from 'react';
import HeroBanner from '../components/HomePage/HeroBanner';
import { CheckCircle } from 'lucide-react';
import { images } from '../assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Specialties = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100
    });

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Refresh AOS when loading state changes
  useEffect(() => {
    if (!isLoading) {
      AOS.refresh();
    }
  }, [isLoading]);

  const specialties = [
    {
      title: "Bright and Flavorful",
      description: "Golden color with a crisp, refreshing taste, medium body, and a bold, slightly citrusy flavor.",
      icon: <CheckCircle className="w-8 h-8 text-tea-gold" />
    },
    {
      title: "Ethical and Sustainable",
      description: "Commitment to organic farming methods, fair wages, and supporting local communities.",
      icon: <CheckCircle className="w-8 h-8 text-tea-gold" />
    },
    {
      title: "Single-Origin Tea",
      description: "Grown and produced exclusively in Sri Lanka, offering a unique flavor profile specific to the region.",
      icon: <CheckCircle className="w-8 h-8 text-tea-gold" />
    },
    {
      title: "Unique Tea Regions",
      description: "Sri Lanka's distinct tea-growing regions, including Uva, Dimbula, and Nuwara Eliya, each with unique characteristics.",
      icon: <CheckCircle className="w-8 h-8 text-tea-gold" />
    },
    {
      title: "Versatile",
      description: "Enjoyed plain or with additions like milk or lemon; also used in blended teas like Earl Grey and English Breakfast.",
      icon: <CheckCircle className="w-8 h-8 text-tea-gold" />
    }
  ];

  // Skeleton components
  const SkeletonCard = () => (
    <div className="tea-card p-8 animate-pulse">
      <div className="mb-4 w-8 h-8 bg-gray-300 rounded-full shimmer"></div>
      <div className="h-6 bg-gray-300 rounded mb-3 shimmer"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded shimmer"></div>
        <div className="h-4 bg-gray-300 rounded shimmer"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 shimmer"></div>
      </div>
    </div>
  );

  const SkeletonSection = () => (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-300 rounded mb-6 shimmer"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-300 rounded shimmer"></div>
        <div className="h-4 bg-gray-300 rounded shimmer"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3 shimmer"></div>
      </div>
    </div>
  );

  const SkeletonImageGrid = () => (
    <div className="grid grid-cols-2 gap-4 animate-pulse">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="bg-gray-300 rounded-lg h-48 shimmer"></div>
      ))}
    </div>
  );

  if (isLoading) {
    return (
      <div>
        {/* Hero Banner Skeleton */}
        <div className="relative h-[420px] flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-5xl h-96 md:h-[400px] bg-gray-300 rounded-3xl shimmer animate-pulse"></div>
        </div>
        
        {/* Main Content Skeleton */}
        <section className="py-16 bg-white">
          <div className="tea-container">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-pulse">
              <div className="h-10 bg-gray-300 rounded mb-6 shimmer"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded shimmer"></div>
                <div className="h-4 bg-gray-300 rounded shimmer"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto shimmer"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(5)].map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Second Section Skeleton */}
        <section className="py-16 bg-gray-800">
          <div className="tea-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SkeletonSection />
              <SkeletonImageGrid />
            </div>
          </div>
        </section>
        
        {/* Third Section Skeleton */}
        <section className="py-16 bg-gray-100">
          <div className="tea-container text-center">
            <div className="animate-pulse mb-12">
              <div className="h-10 bg-gray-300 rounded mb-6 shimmer mx-auto w-1/2"></div>
              <div className="space-y-2 max-w-3xl mx-auto">
                <div className="h-4 bg-gray-300 rounded shimmer"></div>
                <div className="h-4 bg-gray-300 rounded shimmer"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <div className="hidden md:block">
        <HeroBanner 
          backgroundImage={images.specialtiesBanner}
        />
      </div>
      {/* What Makes Us Special Section - WITH AOS */}
      <section className="py-16 bg-white">
        <div className="tea-container">
          <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
            <h2 className="section-title inline-block mx-auto after:left-1/4 after:right-1/4 after:w-1/2">
              What Makes Us Special
            </h2>
            <p className="text-lg text-gray-700">
              Loolecondera teas stand out for their exceptional quality, distinctive flavor profiles, and the rich heritage behind every cup. Discover what makes our Ceylon teas truly special.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div 
                key={specialty.title} 
                className="tea-card p-8"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4">{specialty.icon}</div>
                <h3 className="text-xl font-bold text-tea-dark-green mb-3">{specialty.title}</h3>
                <p className="text-gray-700">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* The Ceylon Difference Section - WITH AOS */}
      <section className="py-16 bg-tea-dark-green text-white">
        <div className="tea-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="section-title text-white after:bg-tea-gold">
                The Ceylon Difference
              </h2>
              <p className="mb-6">
                Ceylon tea is renowned worldwide for its exceptional quality and distinctive characteristics. The unique climate and geography of Sri Lanka's tea-growing regions contribute to the development of complex flavor profiles that cannot be replicated elsewhere.
              </p>
              <p className="mb-6">
                At Loolecondera, we preserve traditional methods while embracing modern sustainable practices to ensure that each cup of our tea delivers an authentic experience of Ceylon's finest.
              </p>
              <p>
                From the misty heights of Nuwara Eliya to the unique conditions of the Uva region, our teas capture the essence of Sri Lanka's diverse terroirs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left" data-aos-delay="200">
              <div className="rounded-lg overflow-hidden h-48">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/looleconderalk.firebasestorage.app/o/Loolkondera%20Assets%2Fspecialties%2FJuan%20valdez%20on%20Behance.jpeg?alt=media&token=ae5e968a-fbd4-4615-b963-7659dbf2c60a" 
                  alt="Tea plantation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/looleconderalk.firebasestorage.app/o/Loolkondera%20Assets%2Fspecialties%2FThe%20Beauty%20of%20Sepon%20Welcome%20to%20the%20serene%20beauty%20of%20Sepon%20Tea%20Estate%2C%20nestled%20between%20the%20lush%20landscapes%20of%20Sibsagar%20and%20Dibrugarh%20districts%20in%20Assam_%20As%20a%20proud%20part%20of%20the%20renowned%20Moran%20tea%20estates%2C%20Sepon%20is%20a%20gem%20th.jpeg?alt=media&token=174616fb-a01b-42a1-81a2-e4a6ce31e46e" 
                  alt="Tea leaves" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/looleconderalk.firebasestorage.app/o/Loolkondera%20Assets%2Fspecialties%2FHands%20Holding%20a%20Warm%20Mug%20of%20Herbal%20Tea%20in%20Autumn__.jpeg?alt=media&token=95a41017-4202-4801-a3b7-bdbdf8b653c5" 
                  alt="Tea processing" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/looleconderalk.firebasestorage.app/o/Loolkondera%20Assets%2Fspecialties%2FSmooth%20Move%20Tea_%20Everything%20You%20Need%20to%20Know.jpeg?alt=media&token=8a750947-a4b0-44ec-8e6b-53bdb188d96e" 
                  alt="Tea cup" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tea Terroirs of Sri Lanka Section - WITH AOS */}
      <section className="py-16 bg-tea-cream">
        <div className="tea-container text-center">
          <div data-aos="fade-up">
            <h2 className="section-title inline-block mx-auto after:left-1/4 after:right-1/4 after:w-1/2">
              Tea Terroirs of Sri Lanka
            </h2>
            <p className="max-w-3xl mx-auto text-lg mb-12 text-gray-700">
              Sri Lanka's diverse growing regions, each with its unique climate and soil conditions, produce teas with distinctive characteristics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="tea-card p-8" 
              data-aos="fade-up" 
              data-aos-delay="0"
            >
              <h3 className="text-xl font-bold text-tea-dark-green mb-3">Nuwara Eliya</h3>
              <p className="text-gray-700">
                High altitude region producing delicate, light-bodied teas with floral notes and a bright, brisk character.
              </p>
            </div>
            
            <div 
              className="tea-card p-8" 
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              <h3 className="text-xl font-bold text-tea-dark-green mb-3">Dimbula</h3>
              <p className="text-gray-700">
                Full-bodied teas with a rounded flavor, hints of citrus, and a refreshing character.
              </p>
            </div>
            
            <div 
              className="tea-card p-8" 
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <h3 className="text-xl font-bold text-tea-dark-green mb-3">Uva</h3>
              <p className="text-gray-700">
                Distinguished by a unique mellowness and pungent flavor, with notes of honey and a rich aroma.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialties;
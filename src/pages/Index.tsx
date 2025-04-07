
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import TeaCard from '../components/TeaCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Using a placeholder image for the hero banner
  const heroBannerImage = "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80";

  // Tea types data
  const teaTypes = [
    {
      title: "Ceylon Black Tea",
      description: "Known for its bold, full-bodied flavor and rich aroma. Typically served hot, enjoyed plain or with milk and sugar.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80",
      link: "/products"
    },
    {
      title: "Ceylon Green Tea",
      description: "Offers a delicate, vegetal flavor with a subtle aroma. Best served hot, often enjoyed plain or with a squeeze of lemon.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80",
      link: "/products"
    },
    {
      title: "Ceylon Oolong Tea",
      description: "Celebrated for its complex and nuanced taste, featuring floral, fruity, and nutty notes, varying from light and delicate to rich and robust.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
      link: "/products"
    },
    {
      title: "Ceylon White Tea",
      description: "A rare variety made from the youngest tea leaves and buds, known for its light, sweet flavor and floral aroma.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80",
      link: "/products"
    }
  ];

  return (
    <div>
      <HeroBanner 
        title="Loolecondera Ceylon Tea" 
        subtitle="Experience the rich heritage and exquisite flavors of premium Sri Lankan tea"
        backgroundImage={heroBannerImage}
        buttonText="Explore Our Teas"
        buttonLink="/products"
      />
      
      <section className="py-16 bg-tea-cream">
        <div className="tea-container">
          <div className="text-center mb-12">
            <h2 className="section-title inline-block mx-auto after:left-1/4 after:right-1/4 after:w-1/2">Our Premium Teas</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              Discover the exceptional quality and distinctive character of Loolecondera's premium Ceylon teas, cultivated in the pristine highlands of Sri Lanka.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teaTypes.map((tea, index) => (
              <TeaCard 
                key={tea.title}
                title={tea.title}
                description={tea.description}
                imageSrc={tea.image}
                link={tea.link}
                animationDelay={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="tea-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="section-title">Our Heritage</h2>
              <p className="text-gray-700 mb-6">
                Since 1867, Loolecondera has been at the heart of Ceylon tea production. Our tea estates, nestled in the lush highlands of Sri Lanka, produce some of the world's finest teas, celebrated for their exceptional quality and distinctive character.
              </p>
              <p className="text-gray-700 mb-8">
                With generations of expertise and a commitment to sustainable practices, we continue to honor the legacy of James Taylor, the pioneer who established the first tea plantation in Sri Lanka.
              </p>
              <Link to="/history" className="tea-btn inline-flex items-center">
                Explore Our History
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80" 
                alt="Tea plantation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-white font-playfair text-xl">Established 1867</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-tea-dark-green text-white">
        <div className="tea-container text-center">
          <h2 className="section-title text-white after:bg-tea-gold inline-block mx-auto after:left-1/4 after:right-1/4 after:w-1/2">
            Experience Ceylon's Finest
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Loolecondera offers more than just exceptional tea. Discover our specialized tea tours, learn about our sustainable farming practices, and explore the unique characteristics that make Ceylon tea so special.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/specialties" className="tea-btn bg-tea-gold hover:bg-tea-gold/90 text-tea-dark-green">
              Our Specialties
            </Link>
            <Link to="/touring" className="tea-btn bg-transparent hover:bg-white/10 border border-white">
              Tea Tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

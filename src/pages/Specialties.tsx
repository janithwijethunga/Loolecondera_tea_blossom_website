
import React from 'react';
import HeroBanner from '../components/HomePage/HeroBanner';
import { CheckCircle } from 'lucide-react';

const Specialties = () => {
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

  return (
    <div>
      <HeroBanner 
        title="Our Specialties" 
        subtitle="What makes Ceylon tea exceptional"
        backgroundImage="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80"
      />
      
      <section className="py-16 bg-white">
        <div className="tea-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
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
                className="tea-card p-8 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{specialty.icon}</div>
                <h3 className="text-xl font-bold text-tea-dark-green mb-3">{specialty.title}</h3>
                <p className="text-gray-700">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-tea-dark-green text-white">
        <div className="tea-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
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
            
            <div className="grid grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="rounded-lg overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1563911892437-1feda0179e1b?auto=format&fit=crop&q=80" 
                  alt="Tea plantation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1549737221-bef65e2604a6?auto=format&fit=crop&q=80" 
                  alt="Tea leaves" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1551610290-e153ec567dd8?auto=format&fit=crop&q=80" 
                  alt="Tea processing" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1515696955266-4f67e13219e8?auto=format&fit=crop&q=80" 
                  alt="Tea cup" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-tea-cream">
        <div className="tea-container text-center">
          <h2 className="section-title inline-block mx-auto after:left-1/4 after:right-1/4 after:w-1/2">
            Tea Terroirs of Sri Lanka
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-12 text-gray-700">
            Sri Lanka's diverse growing regions, each with its unique climate and soil conditions, produce teas with distinctive characteristics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="tea-card p-8 animate-fade-up">
              <h3 className="text-xl font-bold text-tea-dark-green mb-3">Nuwara Eliya</h3>
              <p className="text-gray-700">
                High altitude region producing delicate, light-bodied teas with floral notes and a bright, brisk character.
              </p>
            </div>
            
            <div className="tea-card p-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-bold text-tea-dark-green mb-3">Dimbula</h3>
              <p className="text-gray-700">
                Full-bodied teas with a rounded flavor, hints of citrus, and a refreshing character.
              </p>
            </div>
            
            <div className="tea-card p-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
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

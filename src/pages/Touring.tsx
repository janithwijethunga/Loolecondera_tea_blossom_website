
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { CheckCircle, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Touring = () => {
  const tourDestinations = [
    {
      name: "Negombo",
      description: "Starting point of the tour, featuring beautiful beaches and a vibrant fish market.",
      image: "https://images.unsplash.com/photo-1546979313-4d00c1ab1c9d?auto=format&fit=crop&q=80"
    },
    {
      name: "Kandy",
      description: "Home to the Temple of the Tooth Relic and surrounded by tea plantations.",
      image: "https://images.unsplash.com/photo-1580101188432-9e351e90cba7?auto=format&fit=crop&q=80"
    },
    {
      name: "Nuwara Eliya",
      description: "Known as 'Little England' with its cool climate and colonial architecture.",
      image: "https://images.unsplash.com/photo-1546950581-3bebf3717899?auto=format&fit=crop&q=80"
    },
    {
      name: "Ella",
      description: "Picturesque hill town with stunning views and hiking opportunities.",
      image: "https://images.unsplash.com/photo-1586034679970-cb7659d671e8?auto=format&fit=crop&q=80"
    },
    {
      name: "Galle",
      description: "Historic fort city with Dutch colonial influence and beautiful beaches.",
      image: "https://images.unsplash.com/photo-1586791906307-65760982be10?auto=format&fit=crop&q=80"
    },
    {
      name: "Colombo",
      description: "The commercial capital with a mix of modern and colonial architecture.",
      image: "https://images.unsplash.com/photo-1580746738099-50b23d442b8d?auto=format&fit=crop&q=80"
    }
  ];

  const tourIncludes = [
    "Accommodations in 4 to 5-star hotels",
    "All meals",
    "Local transport",
    "Chinese guide/translator",
    "Tea lectures and training",
    "Practical sessions",
    "Entrance tickets"
  ];

  const tourExcludes = [
    "Personal expenses",
    "Air tickets"
  ];

  return (
    <div>
      <HeroBanner 
        title="Tea Touring" 
        subtitle="Experience the beauty and heritage of Sri Lanka's tea country"
        backgroundImage="https://images.unsplash.com/photo-1577030099906-7e64ee4937f3?auto=format&fit=crop&q=80"
      />
      
      <section className="py-16 bg-white">
        <div className="tea-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="section-title">8-Day Sri Lanka Tea Tour</h2>
              <p className="text-lg text-gray-700 mb-6">
                Immerse yourself in Sri Lanka's rich tea heritage with our comprehensive 8-day, 7-night tour. Journey through lush plantations, historic sites, and stunning landscapes while learning about the art and science of tea production.
              </p>
              <p className="text-gray-700 mb-6">
                This carefully curated experience takes you from coastal Negombo to the cultural heart of Kandy, through the misty tea country of Nuwara Eliya and Ella, and along the southern coast to Galle before returning to Colombo.
              </p>
              <p className="text-gray-700">
                Throughout the journey, you'll enjoy expert guidance, luxury accommodations, and opportunities to engage with the tea-making process from leaf to cup.
              </p>
            </div>
            
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1576346222709-962a66df9d9f?auto=format&fit=crop&q=80" 
                alt="Tea plantation workers" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-tea-cream">
        <div className="tea-container">
          <h2 className="section-title text-center mx-auto after:left-1/4 after:right-1/4 after:w-1/2">
            Tour Destinations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {tourDestinations.map((destination, index) => (
              <div 
                key={destination.name}
                className="tea-card animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <MapPin size={18} className="text-tea-gold mr-2" />
                    <h3 className="text-xl font-bold text-tea-dark-green">{destination.name}</h3>
                  </div>
                  <p className="text-gray-700">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-tea-dark-green text-white">
        <div className="tea-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-up">
              <h2 className="section-title text-white after:bg-tea-gold">
                What's Included
              </h2>
              <ul className="space-y-4">
                {tourIncludes.map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle size={20} className="text-tea-gold mr-3 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="section-title text-white after:bg-tea-gold">
                What's Not Included
              </h2>
              <ul className="space-y-4 mb-8">
                {tourExcludes.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-tea-gold mr-3">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Ready to Experience Tea Country?</h3>
                <p className="mb-4">
                  For booking inquiries, custom itineraries, or more information about our tea tours, please contact our team.
                </p>
                <Link to="/contact" className="tea-btn bg-tea-gold hover:bg-tea-gold/90 text-tea-dark-green inline-block">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="tea-container text-center">
          <h2 className="section-title inline-block mx-auto after:left-1/4 after:right-1/4 after:w-1/2">
            What You'll Experience
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
            Our tea tour offers a comprehensive journey through Sri Lanka's tea heritage, culture, and natural beauty.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="tea-card p-8 animate-fade-up">
              <h3 className="text-xl font-bold text-tea-dark-green mb-4">Tea Education</h3>
              <p className="text-gray-700">
                Learn about tea cultivation, processing, and grading through expert lectures and hands-on experiences at working tea factories.
              </p>
            </div>
            
            <div className="tea-card p-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-bold text-tea-dark-green mb-4">Cultural Immersion</h3>
              <p className="text-gray-700">
                Visit important cultural sites including the Temple of the Tooth Relic and experience local traditions and cuisine.
              </p>
            </div>
            
            <div className="tea-card p-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold text-tea-dark-green mb-4">Scenic Beauty</h3>
              <p className="text-gray-700">
                Travel through Sri Lanka's diverse landscapes, from misty mountains to golden beaches, with breathtaking views throughout.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Touring;

import React, { useEffect } from 'react';
import BackgroundImg from "../assets/bg2.jpg";
import Img from "../assets/old3.png";

const LoolkanduraTeaEstate = () => {
  // Subtle scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > elementPosition - window.innerHeight * 0.85) {
          element.classList.add('appear');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-cream-50">
      {/* Background with parallax effect */}
      <div 
            className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
            style={{ backgroundImage: `url(${BackgroundImg})` }}
      />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header with animation */}
        <div className="text-center mb-12 animate-on-scroll opacity-0 transition-all duration-1000 ease-out transform translate-y-8" style={{animationDelay: '0.2s'}}>
          <h1 className="text-5xl font-bold text-green-800 tracking-wider">LOOLKANDURA TEA ESTATE</h1>
          <div className="w-48 h-1 bg-green-800 mx-auto mt-4 shadow-md"></div>
        </div>
        
        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
          {/* Left content - Text with drop cap */}
          <div className="md:w-2/3 text-center animate-on-scroll opacity-0 transition-all duration-1000 ease-out transform translate-x-8" style={{animationDelay: '0.4s'}}>
            <p className="text-gray-800 leading-relaxed mb-8 text-lg first-letter:text-5xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:text-green-800">
              Loolkandura Estate is a tea plantation located in the Central Province of 
              Sri Lanka. It is known for being the birthplace of Ceylon tea, which is a 
              type of black tea that is grown and produced in Sri Lanka. The estate 
              was founded in 1867 by James Taylor, a British planter who introduced 
              tea cultivation to Sri Lanka. Today, Loolecondera Estate is still in 
              operation and produces high-quality Ceylon tea that is exported around 
              the world. The estate is also a popular tourist attraction, with visitors 
              coming to see the tea fields and learn about the history of tea 
              production in Sri Lanka. Loolecondera Tea Estate, also known as 
              Loolecondera Estate, is located in the Kandy district of Sri Lanka. It is 
              one of the oldest tea estates in the country, having been established in 
              1867 by James Taylor, a Scottish planter. The estate covers an area of 
              over 230 hectares and is situated at an elevation of approximately 1,000 
              meters above sea level.
            </p>
          </div>
          
          {/* Right content - Image with fancy border */}
          <div className="md:w-1/3 animate-on-scroll opacity-0 transition-all duration-1000 ease-out transform translate-x-8" style={{animationDelay: '0.6s'}}>
            <div className="relative p-2 bg-gradient-to-br from-yellow-100 to-yellow-400 rounded-lg shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-400 rounded-lg blur-sm opacity-70"></div>
              <div className="relative p-3 bg-white rounded-lg">
                <img 
                  src={Img}
                  alt="Historical image of Loolkandura Tea Estate"
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-102"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom content with stylized paragraph */}
        <div className="mt-16 text-center p-8 bg-green-50 bg-opacity-60 rounded-xl shadow-md animate-on-scroll opacity-0 transition-all duration-1000 ease-out transform translate-y-8" style={{animationDelay: '0.8s'}}>
          <p className="text-gray-800 leading-relaxed text-lg">
            The tea produced at Loolecondera Estate is known for its high quality and distinct flavor. The estate produces both black and green teas, with the 
            majority of the tea being black. The tea is hand-picked by skilled workers and processed using traditional methods to ensure the best flavor and 
            quality. Visitors to Loolkandura Estate can take a tour of the tea factory to see how the tea is processed and learn about the history of tea production 
            in Sri Lanka. They can also take a walk through the tea fields, which are surrounded by picturesque hills and mountains. Overall, Loolkandura Tea 
            Estate is a must-visit destination for anyone interested in tea production and Sri Lankan history.
          </p>
        </div>
        
        {/* Add a footer with decorative elements */}
        <div className="mt-16 flex justify-center animate-on-scroll opacity-0 transition-all duration-1000 ease-out" style={{animationDelay: '1s'}}>
          <div className="w-16 h-16 bg-green-800 opacity-20 rounded-full"></div>
          <div className="w-24 h-24 bg-yellow-400 opacity-20 rounded-full -ml-6"></div>
          <div className="w-16 h-16 bg-green-800 opacity-20 rounded-full -ml-6"></div>
        </div>
      </div>
      
      {/* Add CSS for animations */}
      <style>{`
        .animate-on-scroll {
          opacity: 0;
        }
        .animate-on-scroll.appear {
          opacity: 1;
          transform: translate(0, 0);
        }
        .first-letter:first-letter {
          font-size: 3.5rem;
          float: left;
          margin-right: 0.25rem;
          line-height: 1;
        }
      `}</style>
    </div>
  );
};

export default LoolkanduraTeaEstate;
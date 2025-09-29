
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroBanner2 from '../components/HomePage/HeroBanner2';
import historyBackground from '../assets/bg.webp';
import { images } from '../assets/assets';


const History = () => {
  // Auto-scroll functionality
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const autoScrollIntervalRef = useRef(null);

  const startAutoScroll = () => {
    if (autoScrollIntervalRef.current) return; // Prevent multiple intervals
    
    setIsAutoScrolling(true);
    let scrollPosition = 0;
    const scrollSpeed = 0.6; // pixels per frame
    const container = scrollContainerRef.current;
    
    if (!container) return;
    
    autoScrollIntervalRef.current = setInterval(() => {
      if (!container) return;
      
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (scrollPosition >= maxScroll) {
        // Reset to beginning for continuous loop
        scrollPosition = 0;
        container.scrollTo({ left: 0, behavior: 'smooth' });
        
        // Pause briefly at the beginning before continuing
        setTimeout(() => {
          scrollPosition = 0;
        }, 2000);
      } else {
        scrollPosition += scrollSpeed;
        container.scrollLeft = scrollPosition;
      }
    }, 16); // ~60fps
  };

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
      setIsAutoScrolling(false);
    }
  };

  // Only pause auto-scroll on actual clicks, not mouse hover
  const handleUserClick = () => {
    if (isAutoScrolling) {
      stopAutoScroll();
      // Resume after 5 seconds of no interaction
      setTimeout(() => {
        if (scrollContainerRef.current) {
          const rect = scrollContainerRef.current.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
          if (isInViewport) {
            startAutoScroll();
          }
        }
      }, 5000);
    }
  };

  // Clean up on unmount
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-quart',
    });

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, []);

  const timelineEvents = [
    {
      year: "1867",
      title: "Beginning of Ceylon Tea",
      description: "British introduced tea cultivation to Sri Lanka as a replacement for coffee."
    },
    {
      year: "1873",
      title: "First Commercial Shipment",
      description: "The first shipment of Ceylon tea arrived in London, marking the beginning of a global industry."
    },
    {
      year: "1880s",
      title: "Industry Expansion",
      description: "By the late 19th century, Ceylon tea had gained a reputation for its high quality and distinctive flavor."
    },
    {
      year: "1900s",
      title: "Industry Regulation",
      description: "The Ceylon Tea Traders Association was established to promote and regulate the industry."
    },
    {
      year: "1948",
      title: "Independence & Growth",
      description: "After Sri Lanka's independence, the tea industry continued to grow as a primary export."
    },
    {
      year: "Present",
      title: "Global Recognition",
      description: "Today, Ceylon tea remains a symbol of Sri Lanka's rich history and tradition."
    }
  ];

  return (
    <div>
      <div className="hidden md:block">
        <HeroBanner2 
         
          backgroundImage={images.ProductsHero1}
        />
      </div>
      <section className="min-h-screen flex items-center justify-center bg-white py-16">
        <div className="tea-container">
          <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
            <h2 className="section-title">The Legacy of Loolecondera</h2>
            <p className="text-lg text-gray-700 mb-6">
              The history of Ceylon tea dates back to 1867 when the British introduced tea cultivation to Sri Lanka as a replacement for coffee. James Taylor, a Scottish planter, established the first tea plantations in the hill country, leveraging the ideal climate and altitude.
            </p>
            <p className="text-lg text-gray-700">
              Loolecondera Esherotate, located in Kandy district, holds the distinction of being the birthplace of Ceylon tea. It was here that James Taylor planted the first commercial tea plantation on just 19 acres of land, forever changing Sri Lanka's agricultural landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start max-w-5xl mt-10 mx-auto">
            <div className="lg:col-span-2 animate-fade-up" data-aos="fade-right" data-aos-delay="200">
              <div className="rounded-lg overflow-hidden h-full mt-30">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/looleconderalk.firebasestorage.app/o/Loolkondera%20Assets%2FHistory%2FTea%20Xotics.webp?alt=media&token=d1fb9dff-aaa5-4648-9e50-d7ab59660d0d" 
                  alt="Historical tea plantation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:col-span-3 animate-fade-up mt-0" style={{ animationDelay: '0.1s' }} data-aos="fade-left" data-aos-delay="400">
              <h3 className="text-2xl font-bold text-tea-dark-green mb-4">James Taylor: The Pioneer</h3>
              <p className="text-gray-700 mb-4">
                James Taylor arrived in Ceylon (now Sri Lanka) in 1852 and became the assistant supervisor of Loolecondera Estate. Using his knowledge of tea cultivation from India and China, he planted the first tea seeds and developed innovative processing methods.
              </p>
              <p className="text-gray-700 mb-4">
                Taylor built a small tea factory on the estate and invented his own tea rolling machine, demonstrating remarkable innovation for his time. His methods for cultivating and processing tea formed the foundation of Ceylon's tea industry.
              </p>
              {/* <p className="text-gray-700">
                By the time of his death in 1892, Taylor had witnessed the transformation of Sri Lanka into one of the world's leading tea producers, an achievement largely due to his pioneering efforts.
              </p> */}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-tea-cream">
  <div className="tea-container">
    <motion.h2 
      className="section-title text-center mx-auto after:left-1/4 after:right-1/4 after:w-1/2 mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Timeline of Ceylon Tea
    </motion.h2>
    
    <div className="relative">
      {/* Horizontal scroll container */}
      <motion.div 
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide pb-8"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onViewportEnter={startAutoScroll}
        onViewportLeave={stopAutoScroll}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {/* Main horizontal timeline container */}
        <motion.div 
          className="relative min-w-[1400px] mx-auto px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Horizontal timeline line with animated growth */}
          <motion.div 
            className="absolute top-1/2 left-8 right-8 h-1 bg-tea-light-green transform -translate-y-1/2 z-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left center" }}
          />
          
          {/* Timeline events container */}
          <div className="relative flex justify-between items-center">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={event.year}
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Alternating top and bottom positioning */}
                {index % 2 === 0 ? (
                  // Events above the line (even indices)
                  <>
                    <div className="mb-8 w-64 text-center">
                      <motion.div 
                        className="relative bg-gradient-to-br from-white via-tea-cream to-white p-6 rounded-xl shadow-lg tea-card border-l-4 border-tea-gold overflow-hidden backdrop-blur-sm"
                        whileHover={{ 
                          y: -8, 
                          rotateY: 5,
                          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 20px rgba(184, 134, 11, 0.2)" 
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-8 h-8 bg-tea-gold opacity-10 rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-6 h-6 bg-tea-light-green opacity-10 rounded-tr-full"></div>
                        
                        
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-lg font-bold text-tea-dark-green mb-3 flex items-center justify-center">
                            <span className="w-2 h-2 bg-tea-gold rounded-full mr-2 animate-pulse"></span>
                            {event.title}
                          </h3>
                          <p className="text-sm text-gray-700 leading-relaxed">{event.description}</p>
                        </div>
                        
                        {/* Subtle pattern overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50 pointer-events-none"></div>
                      </motion.div>
                      {/* Animated connector line from card to circle */}
                      <motion.div 
                        className="w-0.5 h-8 bg-tea-light-green mx-auto"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    
                    {/* Timeline circle with pulse animation */}
                    <motion.div 
                      className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-tea-dark-green to-tea-light-green border-4 border-white z-10 shadow-xl"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        delay: index * 0.2 + 0.3, 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 10 
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: "0 0 30px rgba(184, 134, 11, 0.6)"
                      }}
                      viewport={{ once: true }}
                    >
                      {/* Inner glow ring */}
                      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-tea-gold/20 to-transparent"></div>
                      <span className="text-white text-xs font-bold relative z-10">{event.year}</span>
                      {/* Pulse effect */}
                     
                    </motion.div>
                    
                    {/* Empty space below for alternating layout */}
                    <div className="mt-8 w-64 h-32"></div>
                  </>
                ) : (
                  // Events below the line (odd indices)
                  <>
                    {/* Empty space above for alternating layout */}
                    <div className="mb-8 w-64 h-32"></div>
                    
                    {/* Timeline circle with pulse animation */}
                    <motion.div 
                      className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-tea-dark-green to-tea-light-green border-4 border-white z-10 shadow-xl"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        delay: index * 0.2 + 0.3, 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 10 
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)"
                      }}
                      viewport={{ once: true }}
                    >
                      {/* Inner glow ring */}
                      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-tea-light-green/20 to-transparent"></div>
                      <span className="text-white text-xs font-bold relative z-10">{event.year}</span>
                     
                     
                    </motion.div>
                    
                    <div className="mt-8 w-64 text-center">
                      {/* Animated connector line from circle to card */}
                      <motion.div 
                        className="w-0.5 h-8 bg-tea-light-green mx-auto"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
                        viewport={{ once: true }}
                      />
                      <motion.div 
                        className="relative bg-gradient-to-tl from-white via-tea-cream to-white p-6 rounded-xl shadow-lg tea-card border-r-4 border-tea-light-green overflow-hidden backdrop-blur-sm"
                        whileHover={{ 
                          y: -8, 
                          rotateY: -5,
                          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 20px rgba(34, 197, 94, 0.2)" 
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 left-0 w-8 h-8 bg-tea-light-green opacity-10 rounded-br-full"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 bg-tea-gold opacity-10 rounded-tl-full"></div>
                        
                        
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-lg font-bold text-tea-dark-green mb-3 flex items-center justify-center">
                            <span className="w-2 h-2 bg-tea-light-green rounded-full mr-2 animate-pulse"></span>
                            {event.title}
                          </h3>
                          <p className="text-sm text-gray-700 leading-relaxed">{event.description}</p>
                        </div>
                        
                        {/* Subtle pattern overlay */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent opacity-50 pointer-events-none"></div>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
                      ))}
          </div>
        </motion.div>
      </motion.div>
      
      
      
      {/* Scroll indicator for mobile */}
      <motion.div 
        className="text-center mt-4 md:hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-gray-600">← Scroll horizontally to view full timeline →</p>
      </motion.div>
      
   
    </div>
  </div>
</section>
      
     
    </div>
  );
};

export default History;

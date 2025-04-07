
import React from 'react';
import HeroBanner from '../components/HeroBanner';

const History = () => {
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
      year: "Early 1900s",
      title: "Industry Regulation",
      description: "The Ceylon Tea Traders Association was established to promote and regulate the industry."
    },
    {
      year: "1948",
      title: "Independence & Growth",
      description: "After Sri Lanka's independence, the tea industry continued to grow as a primary export."
    },
    {
      year: "Present Day",
      title: "Global Recognition",
      description: "Today, Ceylon tea remains a symbol of Sri Lanka's rich history and tradition."
    }
  ];

  return (
    <div>
      <HeroBanner 
        title="Our History" 
        subtitle="The rich heritage of Ceylon tea"
        backgroundImage="https://images.unsplash.com/photo-1518198606936-d92403c81c12?auto=format&fit=crop&q=80"
      />
      
      <section className="py-16 bg-white">
        <div className="tea-container">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="section-title">The Legacy of Loolecondera</h2>
            <p className="text-lg text-gray-700 mb-6">
              The history of Ceylon tea dates back to 1867 when the British introduced tea cultivation to Sri Lanka as a replacement for coffee. James Taylor, a Scottish planter, established the first tea plantations in the hill country, leveraging the ideal climate and altitude.
            </p>
            <p className="text-lg text-gray-700">
              Loolecondera Estate, located in Kandy district, holds the distinction of being the birthplace of Ceylon tea. It was here that James Taylor planted the first commercial tea plantation on just 19 acres of land, forever changing Sri Lanka's agricultural landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 animate-fade-up">
              <div className="rounded-lg overflow-hidden h-full">
                <img 
                  src="https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?auto=format&fit=crop&q=80" 
                  alt="Historical tea plantation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:col-span-3 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold text-tea-dark-green mb-4">James Taylor: The Pioneer</h3>
              <p className="text-gray-700 mb-4">
                James Taylor arrived in Ceylon (now Sri Lanka) in 1852 and became the assistant supervisor of Loolecondera Estate. Using his knowledge of tea cultivation from India and China, he planted the first tea seeds and developed innovative processing methods.
              </p>
              <p className="text-gray-700 mb-4">
                Taylor built a small tea factory on the estate and invented his own tea rolling machine, demonstrating remarkable innovation for his time. His methods for cultivating and processing tea formed the foundation of Ceylon's tea industry.
              </p>
              <p className="text-gray-700">
                By the time of his death in 1892, Taylor had witnessed the transformation of Sri Lanka into one of the world's leading tea producers, an achievement largely due to his pioneering efforts.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-tea-cream">
        <div className="tea-container">
          <h2 className="section-title text-center mx-auto after:left-1/4 after:right-1/4 after:w-1/2">
            Timeline of Ceylon Tea
          </h2>
          
          <div className="relative mt-12">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-tea-light-green"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div 
                  key={event.year} 
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } animate-fade-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-1"></div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-tea-dark-green border-4 border-tea-cream z-10">
                    <span className="text-white text-sm font-bold">{event.year}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className={`${
                      index % 2 === 0 ? 'ml-10' : 'mr-10'
                    } bg-white p-6 rounded-lg shadow-md tea-card`}>
                      <h3 className="text-xl font-bold text-tea-dark-green mb-2">{event.title}</h3>
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-tea-dark-green text-white">
        <div className="tea-container text-center">
          <h2 className="section-title text-white after:bg-tea-gold inline-block mx-auto after:left-1/4 after:right-1/4 after:w-1/2">
            Present Day Legacy
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Today, Loolecondera continues the legacy of excellence established over 150 years ago. While honoring traditional methods, we embrace sustainable practices and innovation to ensure the highest quality tea for generations to come.
          </p>
          <p className="max-w-3xl mx-auto text-lg">
            Our commitment to preserving the authentic character of Ceylon tea while meeting modern standards of quality and sustainability makes Loolecondera a living testament to Sri Lanka's rich tea heritage.
          </p>
        </div>
      </section>
    </div>
  );
};

export default History;

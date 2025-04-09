import React from 'react';
import Old1 from '../assets/old1.png';
import Old2 from '../assets/old2.png';

const History = () => {
  return (
    <div className="bg-gradient-to-b from-green-900 to-green-800 py-20 px-4 relative overflow-hidden">
      {/* Decorative tea leaves background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.5C87.3,-31.9,89.9,-15.9,88.8,-0.7C87.7,14.6,82.8,29.2,74.9,42.5C67,55.7,56.1,67.6,42.6,75.6C29.2,83.6,13.2,87.8,-1.7,90.1C-16.6,92.4,-33.1,92.8,-45.1,84.4C-57.1,76,-64.6,58.8,-72.6,42.7C-80.7,26.5,-89.4,11.3,-89.6,-4.1C-89.8,-19.5,-81.4,-38.9,-68.8,-50.6C-56.1,-62.3,-39.2,-66.2,-24.4,-73C-9.6,-79.8,3.1,-89.5,17.2,-87.8C31.3,-86.1,45.4,-73,45.5,-73.1L44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M38.5,-65.1C52.1,-56.9,67.2,-50.2,76.3,-38.3C85.5,-26.3,88.7,-9,85.8,6.7C82.9,22.4,74,36.4,63.9,50.2C53.8,64,42.5,77.5,28.4,82.2C14.4,86.9,-2.4,82.8,-19.2,78.4C-36,74,-52.9,69.3,-65.3,58.8C-77.7,48.3,-85.7,32,-88.1,14.8C-90.5,-2.5,-87.4,-20.6,-79.3,-35.4C-71.2,-50.1,-58.2,-61.4,-44.1,-69.5C-30,-77.6,-15,-82.5,-1.2,-80.6C12.7,-78.7,25.3,-70.1,38,-65.3L38.5,-65.1Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Elegant section title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-white inline-block relative">
            Our Heritage
            <span className="block h-1 w-24 bg-yellow-300 mx-auto mt-3"></span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Image with decorative frame */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-75 rounded-lg transform rotate-3 group-hover:rotate-1 transition-transform duration-300"></div>
              <div className="relative p-2 bg-white rounded-lg shadow-xl transform group-hover:translate-y-2 group-hover:translate-x-2 transition-transform duration-300">
                <img 
                  src={Old1} 
                  alt="Tea plantation in colonial Ceylon" 
                  className="rounded w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-green-700 to-green-800 text-white p-8 rounded-lg shadow-2xl h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFFFFF" d="M44.1,-76.1C58.4,-69.7,72.3,-60.1,80.8,-46.4C89.2,-32.6,92.3,-14.7,89.4,1.7C86.5,18,77.6,32.8,67.7,47.4C57.8,62,46.8,76.3,32.6,83.3C18.3,90.3,0.7,89.9,-15.6,85.6C-31.9,81.3,-47,73.1,-58.9,61.3C-70.8,49.6,-79.7,34.3,-83.3,17.9C-87,1.5,-85.5,-15.9,-79.3,-31.3C-73.1,-46.7,-62.2,-60,-48.4,-66.6C-34.6,-73.3,-17.3,-73.2,-0.8,-71.9C15.7,-70.6,31.4,-68.1,44.1,-76.1Z" transform="translate(100 100)" />
                </svg>
              </div>
              
              <h2 className="text-3xl font-serif mb-6 relative z-10">History of Ceylon Tea</h2>
              
              <div className="h-1 w-16 bg-yellow-300 mb-6 rounded-full"></div>
              
              <p className="text-base leading-relaxed mb-4 text-gray-100">
              The history of Ceylon tea dates back to the 19th century, when the British introduced tea cultivation to Sri Lanka (then known as Ceylon) as a replacement for coffee, which was devastated by disease. In 1867, the first tea plantations were established in the hill country of Sri Lanka, which offered the ideal climate and altitude for growing tea. The British brought in Indian and Chinese tea plants and experimented with different varieties to find the best-suited plants for the region.
              </p>
              
              <p className="text-base leading-relaxed text-gray-100">
                By the late 19th century, Ceylon tea had gained a reputation for its high quality and distinctive flavor. The tea 
                industry continued to grow and became the country's primary export, providing a significant source of income and 
                employment for the local population.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img 
                src={Old2} 
                alt="Tea processing in colonial Ceylon" 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="inline-block px-3 py-1 bg-yellow-500 text-black rounded-full font-bold text-sm mb-2">
                  Since 1867
                </div>
                <h3 className="text-2xl font-serif">A Legacy of Excellence</h3>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-800 to-green-900 p-6 rounded-lg shadow-xl">
              <p className="text-base leading-relaxed text-gray-200">
                In the early 20th century, the Ceylon Tea Traders Association was established to promote and regulate the tea 
                industry. Ceylon tea was also awarded the prestigious "Ceylon Lion" trademark to ensure that only tea produced in 
                Sri Lanka could be marketed as Ceylon tea.
              </p>
              <div className="h-px w-full bg-green-600 my-4"></div>
              <p className="text-base leading-relaxed text-gray-200">
                Today, Ceylon tea is one of the most recognized teas in the world, playing a vital role in the country's economy 
                and cultural heritage.
              </p>
              <div className="mt-4 flex justify-end">
                <button className="group flex items-center text-yellow-300 hover:text-yellow-100 transition-colors duration-300 cursor-pointer">
                  <span className="mr-2">Discover more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
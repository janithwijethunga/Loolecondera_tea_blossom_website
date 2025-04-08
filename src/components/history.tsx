import React from 'react';
import Old1 from '../assets/old1.png';
import Old2 from '../assets/old2.png';

const History = () => {
  return (
    <div className="bg-[#0b3300] py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
        {/* Left Image */}
        <div className="flex justify-center items-center">
          <div className="">
            <img src={Old1} alt="Old tea history" className=" w-full h-auto object-cover hover:scale-105 transition" />
          </div>
        </div>

        {/* Center Text */}
        <div className="bg-[#145200] text-white px-6 py-10 rounded-md shadow-xl flex flex-col justify-center text-center">
          <h2 className="text-2xl font-bold mb-4 uppercase">History of Ceylon Tea</h2>
          <div className="h-1 w-10 bg-lime-400 mx-auto mb-6 rounded-full" />
          <p className="text-base leading-relaxed">
            The history of Ceylon tea dates back to the 19th century, when the British introduced tea cultivation to Sri Lanka
            (then known as Ceylon) as a replacement for coffee, which was devastated by disease. In 1867, the first tea plantations
            were established in the hill country of Sri Lanka, which offered the ideal climate and altitude for growing tea.
            The British brought in Indian and Chinese tea plants and experimented with different varieties to find the best-suited
            plants for the region.
          </p>
          <br />
          <p className="text-base leading-relaxed">
            By the late 19th century, Ceylon tea had gained a reputation for its high quality and distinctive flavor. The tea
            industry continued to grow and became the country's primary export, providing a significant source of income and
            employment for the local population.
          </p>
        </div>

        {/* Right Box with Image and Text */}
        <div className="flex flex-col items-center justify-center text-white">
          <div className="">
            <img src={Old2} alt="Old tea 2" className="hover:scale-105 transition w-full h-auto object-cover" />
          </div>
          <div className="bg-green-900 p-6 rounded-md text-center shadow-md">
            <h3 className="text-xl font-bold uppercase mb-2">Since 1867</h3>
            <p className="text-sm leading-relaxed text-white/90">
              In the early 20th century, the Ceylon Tea Traders Association was established to promote and regulate the tea
              industry. Ceylon tea was also awarded the prestigious “Ceylon Lion” trademark to ensure that only tea produced in
              Sri Lanka could be marketed as Ceylon tea.
              <br /><br />
              Today, Ceylon tea is one of the most recognized teas in the world, playing a vital role in the country's economy
              and cultural heritage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;

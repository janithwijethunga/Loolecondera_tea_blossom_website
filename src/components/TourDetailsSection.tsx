import React from 'react';
import { CheckCircle } from 'lucide-react';

const TourDetailsSection = ({ activeTab }) => {
  // Sri Lanka Tour Itinerary
  const sriLankaItinerary = [
    {
      day: "DAY 1",
      title: "KATUNAYAKE | NEGOMBO",
      description: "Arrival at the Bandaranaike International Airport in Katunayake, formalities for entry and baggage claim. Meeting with the tour guide and travel to Negombo. Negombo is slightly north of Colombo and close to the airport, and was formerly the centre of the cinnamon trade. It is home to a picturesque lagoon, numerous Catholic churches, and an impressive network of canals built by the Dutch which are currently being restored. It also has an active fishing industry and a bustling fish market known as 'Lellama'.",
      accommodation: "Dinner and overnight stay at Jetwing Blue."
    },
    {
      day: "DAY 2",
      title: "NEGOMBO | KANDY | NUWARA ELIYA",
      description: "Breakfast at Negombo and departure to Kandy. Arrival in Kandy in the afternoon, visit to the Temple of the Tooth Relic, which houses the most revered tooth relic of the Lord Buddha; this is a place of utmost importance to Sri Lankan Buddhists as it bears extraordinary testimonies of the past with its greatest symbol of Buddhism. Departure to Nuwara Eliya, visit Ramboda Falls and Bloomfield Tea Estate and tea factory en route to Nuwara Eliya.",
      accommodation: "Dinner and overnight stay at The Grand Hotel - Nuwara Eliya."
    },
    {
      day: "DAY 3",
      title: "NUWARA ELIYA | TALAWAKELLE | ELLA",
      description: "Breakfast at the Grand Hotel and departure to Tea Research Institute and St. Coombes Tea Factory and Tea Estate in Talawakelle. Departure to Ella in the evening and overnight stay at Ella. Ella is a town located in Sri Lanka's Uva Province which has a rich biodiversity, dense with numerous varieties of flora and fauna. Ella is surrounded by hills covered with cloud forests and tea plantations.",
      accommodation: "Overnight stay at Ella."
    },
    {
      day: "DAY 4",
      title: "ELLA | GALLE | AHUNGALLA",
      description: "Breakfast at Ella and departure to Galle. Galle is a city on the southwest coast of Sri Lanka. It's known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century. Stone sea walls, expanded by the Dutch, encircle car-free streets with architecture reflecting Portuguese, Dutch, and British rule. Visiting Galle Fort and departing Galle to the Hotel Riu, Ahungalla for lunch, dinner, and overnight stay.",
      accommodation: "Lunch, dinner, and overnight stay at Hotel Riu, Ahungalla. (Tourists can opt to take the Madu River boat tour upon personal request.)"
    },
    {
      day: "DAY 5",
      title: "AHUNGALLA | ELPITIYA",
      description: "Breakfast at the Hotel Riu, visit to the turtle hatchery in Ahungalla and arrival back to the hotel for lunch. Visit to the Athukorala Tea Factory at Elpitiya where a lecture on tea will be conducted. Tourists will be awarded a certificate for participating in the tea tour.",
      accommodation: "Return back to Hotel Riu for dinner and overnight stay."
    },
    {
      day: "DAY 6",
      title: "AHUNGALLA | COLOMBO",
      description: "Breakfast at the Hotel Riu and departure to Colombo at 6:30 am. Arrival at Colombo, visiting the tea auction at the National Chamber of Commerce, Colombo, Sri Lanka Tea Board, and Port City. Lunch at Colombo and check-in, dinner, and overnight stay at Cinnamon Grand, Colombo.",
      accommodation: "Dinner and overnight stay at Cinnamon Grand, Colombo."
    },
    {
      day: "DAY 7",
      title: "COLOMBO | KATUNAYAKE",
      description: "Breakfast and checkout of Cinnamon Grand at 12:00 pm. Tourists are free to tour the city of Colombo and shop within the city. Departure from Colombo to the Bandaranaike International Airport at around 3:30 pm - 4:00 pm.",
      accommodation: ""
    }
  ];
  
  // China Tour Itinerary
  const chinaItinerary = [
    {
      day: "DAY 1",
      title: "KATUNAYAKE | SHANGHAI | HANGZHOU",
      description: "Arrival in Shanghai and visit to Zhejiang University (Hangzhou) where study programs and research proceedings on different types of tea will be conducted. Zhejiang University is one of China's oldest and most prestigious institutions. It consistently ranks among the top universities nationally and internationally and is recognized for its groundbreaking research in various fields like biotechnology, engineering, and environmental science.",
      accommodation: "Overnight stay in Hangzhou."
    },
    {
      day: "DAY 2",
      title: "ZHEJIANG UNIVERSITY, HANGZHOU",
      description: "Exploration of Chinese tea varieties including black tea (Keemun, Lapsang Souchong, Dian Hong, Yixing Black Tea, Jin Jun Mei), oolong tea (Tie Guan Yin, Da Hong Pao, Dan Cong), green tea (Longjing, Bi Luo Chun, Huangshan Maofeng, Gunpowder Tea, Anji Bai Cha, Tai Ping Hou Kui), Pu'erh tea, and white tea (Silver Needle, White Peony).",
      accommodation: "Continued stay in Hangzhou."
    },
    {
      day: "DAY 3",
      title: "LONGJING VILLAGE | HANGZHOU",
      description: "Visit to Longjing Tea Garden and West Lake Hangzhou Benshan Longjing Tea Museum. Longjing Tea Garden and Tea Factory: These gardens are situated around the West Lake area and along the hillsides surrounding the lake. The region's unique climate, fertile soil, and specific geographical features contribute to the high-quality Longjing tea production. In the vicinity of the tea gardens, there are tea processing facilities or factories where the freshly plucked tea leaves undergo various steps to become the finished Longjing tea.",
      accommodation: "Overnight stay in Hangzhou."
    },
    {
      day: "DAY 4",
      title: "TEA TASTING AND CHINESE TEA CEREMONY",
      description: "Tasting session for various Chinese tea types and Chinese tea ceremony conducted by the Sri Lanka - China Cultural Association. Recommended visits include the Hangzhou - Beijing Grand Canal (also known as the Beijing-Hangzhou Grand Canal, it is an ancient waterway in China and one of the world's oldest and longest artificial water systems) and the Qiantang River Bund (The Qiantang River is known for its significant tidal bore and scenic beauty).",
      accommodation: "Final night in Hangzhou."
    }
  ];
  
  // Package includes/excludes for Sri Lanka
  const sriLankaIncludes = [
    "All three meals",
    "Local transport from airport to airport", 
    "Chinese guide/translator",
    "Lecturing on tea",
    "Tea training",
    "Practical training",
    "All entrance tickets",
    "Accommodation in 4 to 5-star hotels"
  ];
  
  const sriLankaExcludes = [
    "Air tickets from China to Colombo and Colombo to China",
    "Children below six - free, above 6-12 years - half rate, above 12 - full rate",
    "Personal nature costs not included"
  ];
  
  // Contact information
  const contactInfo = {
    address: "12, 2nd Lane, Beddagana Road, Pitakotte, Sri Lanka.",
    phone: "+94 763006555",
    email: "info@boswingroup.com"
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
            {activeTab === 'srilanka' ? 'TEA TOUR OF SRI LANKA' : 'TEA TOUR OF CHINA'}
          </h2>
          <h3 className="text-xl font-medium text-amber-600 mb-12 text-center">
            {activeTab === 'srilanka' ? '08 DAYS / 07 NIGHTS' : '07 DAYS / 06 NIGHTS'}
          </h3>
          
          {/* Detailed Itinerary */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-green-700 mb-8 flex items-center">
              <span className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center mr-3 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </span>
              Detailed Itinerary
            </h3>
            <div className="space-y-10">
              {(activeTab === 'srilanka' ? sriLankaItinerary : chinaItinerary).map((day, index) => (
                <div key={index} className="border-l-4 border-green-600 pl-6 pb-3 relative">
                  {/* Day indicator dot */}
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                    <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {day.day}
                    </span>
                    <h4 className="text-xl font-bold text-green-800">{day.title}</h4>
                  </div>
                  <div className="bg-green-50 p-5 rounded-lg">
                    <p className="text-gray-700 mb-3 leading-relaxed">{day.description}</p>
                    {day.accommodation && (
                      <p className="text-amber-700 font-medium italic flex items-center">
                        <svg className="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                        {day.accommodation}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Package Details - show only for Sri Lanka tour */}
          {activeTab === 'srilanka' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-green-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Items Included
                </h3>
                <ul className="space-y-2">
                  {sriLankaIncludes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                  </svg>
                  Items Not Included
                </h3>
                <ul className="space-y-2">
                  {sriLankaExcludes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-600 mr-2 text-lg leading-tight">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {/* Contact Information */}
          <div className="bg-green-800 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-green-900 font-medium py-3 px-8 rounded-lg transition-colors shadow-md">
                Book This Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDetailsSection;
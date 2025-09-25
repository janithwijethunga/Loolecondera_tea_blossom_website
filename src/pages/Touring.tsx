import React, { useState } from "react";
import { CheckCircle, Calendar, Users, Clock, Star } from "lucide-react";

import { images } from "../assets/assets.js";

// Reusable Tour Day Card Component
const TourDayCard = ({ day, dayNumber }) => {
  return (
    <div className="border-l-4 border-green-600 pl-6 pb-3 relative">
      {/* Day indicator dot */}
      <div className="absolute -left-3 top-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold">
          {dayNumber}
        </span>
      </div>

      {/* Day Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-6">
        <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
          {day.day}
        </span>
        <h4 className="text-xl font-bold text-green-800">
          {day.title}
        </h4>
      </div>

      {/* Two-column responsive layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image column - 50% on desktop, full width on mobile */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={day.image}
              alt={day.imageAlt}
              className="w-full h-64 lg:h-80 object-cover"
            />
          </div>
        </div>

        {/* Content column - 50% on desktop, full width on mobile */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="bg-gradient-to-br from-green-50 to-amber-50 p-6 rounded-xl shadow-sm h-full">
            {/* Description Content */}
            <div className="text-gray-700 mb-4 leading-relaxed space-y-3">
              {day.description}
            </div>

            {/* Accommodation Info */}
            {day.accommodation && (
              <div className="mt-4 pt-4 border-t border-green-200">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-3 text-amber-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                  <p className="text-amber-700 font-medium italic text-sm">
                    {day.accommodation}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Itinerary Section Component
const ItinerarySection = ({
  day,
  title,
  imageSrc,
  imageAlt,
  description,
  note,
  reverse = false
}) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div className={`grid md:grid-cols-2 items-center gap-8 md:gap-12 py-10 ${
        reverse ? 'md:grid-flow-col-dense' : ''
      }`}>
        {/* Image Column */}
        <div className={`w-full ${reverse ? 'md:order-2' : 'md:order-1'}`}>
          <img
            src={imageSrc}
            alt={imageAlt || title}
            loading="lazy"
            decoding="async"
            className="w-full h-[280px] md:h-[360px] rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* Text Column */}
        <div className={`w-full space-y-2 md:space-y-3 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
            <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full self-start">
              DAY {day}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-green-800 leading-tight">
              {title}
            </h3>
          </div>

          {/* Description Content */}
          <div className="text-gray-700 leading-relaxed space-y-3">
            {description}
          </div>

          {/* Optional Note/Callout */}
          {note && (
            <div className="mt-2">
              {note}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Itinerary List Component
const ItineraryList = ({ items }) => {
  return (
    <div className="space-y-0">
      {items.map((item, index) => (
        <ItinerarySection
          key={index}
          day={item.day}
          title={item.title}
          imageSrc={item.imageSrc}
          imageAlt={item.imageAlt}
          description={item.description}
          note={item.note}
          reverse={index % 2 === 1} // Alternate layout: true for even items (2nd, 4th, 6th...)
        />
      ))}
    </div>
  );
};

const TeaTouringPage = () => {
  const [activeTab, setActiveTab] = useState("srilanka");

  // Mapping destination names to available images
  const destinationImages = {
    "Negombo": images.slday1,
    "Kandy": images.slday2,
    "Nuwara Eliya": images.slday3,
    "Ella": images.slday4,
    "Galle": images.slday5,
    "Colombo": images.slday6,
    "Beijing": images.chday1,
    "Shanghai": images.chday2,
    "Hangzhou": images.chday3,
    "Guangzhou": images.chday4,
    "Xi'an": images.chday5,
    "Chengdu": images.chday6,
    "Guilin": images.chday7,
    "Hong Kong": images.chday8,
    "Fujian": images.chday4, 
  };

  const tourDestinations = {
    srilanka: [
      {
        name: "Negombo",
        description:
          "Starting point of the tour, featuring beautiful beaches and a vibrant fish market.",
        highlights: ["Fish market tour", "Beach relaxation", "Local cuisine"],
      },
      {
        name: "Kandy",
        description:
          "Home to the Temple of the Tooth Relic and surrounded by tea plantations.",
        highlights: ["Temple of the Tooth", "Tea Museum", "Botanical Gardens"],
      },
      {
        name: "Nuwara Eliya",
        description:
          "Known as 'Little England' with its cool climate and colonial architecture.",
        highlights: ["Tea factory visit", "Victoria Park", "Gregory Lake"],
      },
      {
        name: "Ella",
        description:
          "Picturesque hill town with stunning views and hiking opportunities.",
        highlights: ["Nine Arch Bridge", "Ella Rock hike", "Local tea tasting"],
      },
      {
        name: "Galle",
        description:
          "Historic fort city with Dutch colonial influence and beautiful beaches.",
        highlights: ["Galle Fort walk", "Maritime Museum", "Beach activities"],
      },
      {
        name: "Colombo",
        description:
          "The commercial capital with a mix of modern and colonial architecture.",
        highlights: [
          "National Museum",
          "Gangaramaya Temple",
          "Shopping experience",
        ],
      },
    ],
    china: [
      {
        name: "Beijing",
        description:
          "Begin your journey in China's historic capital with its blend of ancient sites and modern wonders.",
        highlights: ["Tea ceremony", "Forbidden City", "Great Wall"],
      },
      {
        name: "Shanghai",
        description:
          "Experience China's modern metropolis with its rich tea culture and vibrant urban life.",
        highlights: [
          "Yu Garden tea houses",
          "Bund tea shops",
          "Modern tea bars",
        ],
      },
      {
        name: "Hangzhou",
        description:
          "Visit the home of Longjing (Dragon Well) tea and the beautiful West Lake.",
        highlights: [
          "Longjing tea plantation",
          "Tea Museum",
          "West Lake scenery",
        ],
      },
      
    ],
  };

  const tourIncludes = [
    "Premium accommodations in 4 to 5-star hotels",
    "All meals featuring local and international cuisine",
    "Comfortable private transportation",
    "Bilingual guides fluent in English and Chinese",
    "Expert tea lectures and hands-on training sessions",
    "All entrance tickets to attractions and tea factories",
    "Tea tasting sessions and tea samples to take home",
  ];

  const tourExcludes = [
    "International airfare to and from Sri Lanka/China",
    "Travel insurance",
    "Personal expenses and shopping",
    "Alcoholic beverages outside of scheduled tastings",
  ];

  // Sri Lanka Tour Itinerary
  const sriLankaItinerary = [
    {
      day: "DAY 1",
      title: "KATUNAYAKE | NEGOMBO",
      description: (
        <div>
          <p>
            Arrival at the Bandaranaike International Airport in Katunayake,
            formalities for entry and baggage claim. Meeting with the tour guide
            and travel to Negombo.
          </p>
          <br />
          <p>
            Negombo is slightly north of Colombo and close to the airport, and
            was formerly the centre of e cinnamon trade. It is home to a
            picturesque lagoon, numerous Catholic churches and an impressive
            network of canals built by the Dutch which are currently being
            restored. It also has an active fishing industry and a bustling fish
            market known as 'Lellama' .
          </p>
          <br />
        </div>
      ),

      accommodation: "Dinner and overnight stay at Jetwing Blue.",
      image: images.slday1,
      imageAlt: "Negombo Beach and Dutch Canal",
    },
    {
      day: "DAY 2",
      title: "NEGOMBO | KANDY | NUWARA ELIYA",
      description: (
        <div>
          <p>Breakfast at Negombo and departure to Kandy.</p>
          <p>
            Arrival in Kandy in the afternoon, Visit to the Temple of the Tooth
            Relic, which houses the most revered tooth relic of the Lord Buddha;
            this is a place of utmost importance to Sri Lankan buddhists as it
            bears extraordinary testimonies of the past with its greatest symbol
            of Buddhism.
          </p>
          <br />
          <p>
            Departure to Nuwara Eliya, visit Ramboda Falls and Bloomfield Tea
            Estate and tea factory en route to Nuwara Eliya
          </p>
          <br />
        </div>
      ),

      accommodation:
        "Dinner and overnight stay at The Grand Hotel - Nuwara Eliya.",
      image: images.slday2,
      imageAlt: "Temple of the Tooth Relic in Kandy",
    },
    {
      day: "DAY 3",
      title: "NUWARA ELIYA | TALAWAKELLE | ELLA",
      description: (
        <div>
          <p>
            Breakfast at the Grand Hotel and departure to Tea Research Institute
            and St. Coombes Tea Factory and Tea Estate in Talawakelle.
          </p>
          <br />
          <p>Departure to Ella in the evening and overnight stay at Ella.</p>
          <br />
          <p>
            Ella is a town located in Sri Lanka's Uva Province which hasa rich
            biodiversity, dense with numerous varieties of flora and fauna. Ella
            is surrounded by hills covered with cloud forests and tea
            plantations.
          </p>
          <br />
        </div>
      ),

      accommodation: "Overnight stay at Ella.",
      image: images.slday3,
      imageAlt: "Tea Research Institute in Talawakelle",
    },
    {
      day: "DAY 4",
      title: "ELLA | GALLE | AHUNGALLA",
      description: (
        <div>
          <p>Breakfast at Ella and departure to Galle</p>
          <br />
          <p>
            Galle is a city on the southwest coast of Sri Lanka. It’s known for
            Galle Fort, the fortified old city founded by Portuguese colonists
            in the 16th century. Stone sea walls, expanded by the Dutch,
            encircle car-free streets with architecture reflecting Portuguese,
            Dutch and British rule.
          </p>
          <p></p>
        </div>
      ),

      accommodation:
        "Lunch, dinner, and overnight stay at Hotel Riu, Ahungalla. (Tourists can opt to take the Madu River boat tour upon personal request.)",
      image: images.slday4,
      imageAlt: "Historic Galle Fort",
    },
    {
      day: "DAY 5",
      title: "AHUNGALLA | ELPITIYA",
      description:
        "Breakfast at the Hotel Riu, visit to the turtle hatchery in Ahungalla and arrival back to the hotel for lunch. Visit to the Athukorala Tea Factory at Elpitiya where a lecture on tea will be conducted. Tourists will be awarded a certificate for participating in the tea tour.",
      accommodation: "Return back to Hotel Riu for dinner and overnight stay.",
      image: images.slday5,
      imageAlt: "Turtle Hatchery in Ahungalla",
    },
    {
      day: "DAY 6",
      title: "AHUNGALLA | COLOMBO",
      description: (
        <div>
          <p>Breakfast at the Hotel Riu and departure to Colombo at 6:30am</p>
          <br />
          <p>
            Arrival at Colombo, visiting the tea auction at the National Chamber
            of Commerce, Colombo, Sri Lanka Tea board and Port City.
          </p>
        </div>
      ),

      accommodation: "Dinner and overnight stay at Cinnamon Grand, Colombo.",
      image: images.slday6,
      imageAlt: "Tea Auction at National Chamber of Commerce",
    },
    {
      day: "DAY 7",
      title: "COLOMBO | KATUNAYAKE",
      description: (
        <div>
          <p>
            Breakfast and checkout of Cinnamon Grand at 12.00pm Tourists are
            free to tour the city of Colombo and shop within the city
          </p>
          <br />

          <p>
            Departure from Colombo to the Bandaranaike International Airport at
            around 3.30 pm - 4.00pm
          </p>
        </div>
      ),
      accommodation: "",
      image: images.slday7,
      imageAlt: "Colombo City Skyline",
    },
  ];

  // China Tour Itinerary
  const chinaItinerary = [
    {
      day: "DAY 1",
      title: "KATUNAYAKE | SHANGHAI",
      description: (
        <p>
          Arrival to Shanghai and visit to Zhejiang University (Hangzhou) where
          study programs and research proceedings on different types of tea will
          be conducted.
          <br />
          <br />
          Zhejiang University is one of China's oldest and most prestigious
          institutions. It consistently ranks among the top universities
          nationally and internationally and recognized for its groundbreaking
          research in various fields like biotechnology, engineering, and
          environmental science.
        </p>
      ),
      accommodation: "Sofitel Hangzhou Westlake",
      image: images.chday1,
      imageAlt: "Zhejiang University Campus",
    },
    {
      day: "DAY 2",
      title: "ZHEJIANG UNIVERSITY, HANGZHOU",
      description: (
        <div className="text-base leading-relaxed text-gray-800 space-y-4">
          <p>
            Chinese black tea is a diverse category with a rich history and
            various famous varieties. Some well-known types of Chinese black tea
            include:
          </p>

          <p className="ml-8">
            &#x2022; <strong>Keemun</strong>: It has a complex aroma and is
            often used in English Breakfast blends.
            <br />
            &#x2022; <strong>Lapsang Souchong</strong>: This tea is distinct due
            to its smoky flavor, achieved by drying the leaves over pinewood
            fires.
            <br />
            &#x2022; <strong>Dian Hong (Yunnan Black Tea)</strong>: This tea has
            a rich, malty flavor with notes of chocolate.
            <br />
       
            <br />
           
          </p>

        

         
          

          <br />
        </div>
      ),
      accommodation: "Sofitel Hangzhou Westlake",
      image: images.chday2,
      imageAlt: "Chinese Tea Varieties Display",
    },
    {
      day: "DAY 3",
      title: "LONGJING VILLAGE | HANGZHOU",
      description: (
        <div>
          

          <br />
          <strong>Longjing Tea Garden And Tea Factory</strong>
          <p>
            These gardens are situated around the West Lake area and along the
            hillsides surrounding the lake. The region's unique climate, fertile
            soil, and specific geographical features contribute to the
            high-quality Longjing tea production.
          </p>
          <br />
          <p>
            In the vicinity of the tea gardens, there are tea processing
            facilities or factories where the freshly plucked tea leaves undergo
            various steps to become the finished Longjing tea
          </p>
          <br />
         
        </div>
      ),

      accommodation: "Tea Boutique Hotel West Lake, Hangzhou",
      image: images.chday3,
      imageAlt: "Longjing Tea Gardens",
    },
    {
      day: "DAY 4",
      title: "CHINESE TEA CEREMONY",
      description: (
        <div>
          <p>
            Tasting session for various Chinese tea types and Chinese tea
            ceremony conducted by the Sri Lanka - China cultural association.
          </p>
          
          <br />

          
           
           
              <strong>Qiantang River Bund</strong>
              <br />
              The Qiantang River is known for its significant tidal bore
              phenomenon,
              travels upriver against the current during specific tidal
              conditions.
            
            
          
          <br />
         
        </div>
      ),

      accommodation: "Tea Boutique Hotel West Lake, Hangzhou",
      image: images.chday4,
      imageAlt: "Traditional Chinese Tea Ceremony",
    },
    {
      day: "DAY 5",
      title: "West Lake | Taizhiwan Gardens",
      description: (
        <div>
          <p>
            <strong>He Fang Avenue</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-8">
            <li>
              He Fang Street is a historic and culturally vibrant pedestrian
              street in Hangzhou that preserves the traditional charm of the
              city and serves as a hub for cultural exploration.
            </li>
          </ul>
          <br />

          <p>
            <strong>West Lake</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-8">
            <li>
              West Lake, located in Hangzhou, Zhejiang Province, China, is a
              UNESCO World Heritage Site and one of China's most renowned and
              picturesque natural landscapes.
            </li>
          </ul>
          <br />

        </div>
      ),

      accommodation: "Midtown Shangri-La Hangzhou",
      image: images.chday5,
      imageAlt: "Historic Sites of Hangzhou – West Lake and Pagoda",
    },
    {
      day: "DAY 6",
      title: "anji white tea plantation | fujian | Hangzhou ",
      description: (
        <div>
          <p>
            <strong>Anji White Tea Plantation</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-8">
            <li>
              The Anji White Tea Plantation is a renowned tea-growing region
              located in Anji County, Zhejiang Province, China. It's famous for
              producing Anji Bai Cha, a prized variety of white tea known for
              its unique appearance and delicate flavor profile.
            </li>
          </ul>
          <br />

          <p>
            <strong>Fujian</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-8">
            <li>
              Fujian is a coastal province located in southeastern China, known
              for its rich cultural heritage, diverse landscapes, and historical
              significance. It is famous for its tea production, cultivating
              some of China's finest teas.
            </li>
          </ul>
          <br />
        </div>
      ),

      accommodation: "Anji Zhebei Hotel (Anji County Stay)",
      image: images.chday6,
      imageAlt: "Anji White Tea Plantation Hills",
    },
    {
      day: "DAY 7",
      title: "HANgzhou | Shanghai",
      description: (
        <div>
          <p></p>
          <ul className="list-disc list-inside space-y-2 ml-8">
            <li>
              Studying white and black tea manufacturing and tea tasting at a
              tea factory in the morning.
            </li>
          </ul>
          <br />

          <p></p>
          <ul className="list-disc list-inside space-y-2 ml-8">
            <li>Departure to Shanghai</li>
          </ul>
          <br />
        </div>
      ),

      accommodation: "Pudong Shangri-La, East Shanghai",
      image: images.chday7,
      imageAlt: "Shanghai Skyline and Tea Market Tour",
    },
    {
      day: "DAY 8",
      title: "HANgzhou | Shanghai",
      description: (
        <div>
          <p></p>
          <ul className="list-disc list-inside space-y-2 ml-8">
            <li>
              Two lectures conducted on "How to enter the Chinese market”
              opportunity finding session and exploring tea market in China to
              get experience in the Chinese tea industry
            </li>
          </ul>
          <br />

          <p></p>
          <ul className="list-disc list-inside space-y-2 ml-8">
            <li>Certificate awarding in the morning</li>
          </ul>
          <br />
          <ul className="list-disc list-inside space-y-2 ml-8">
            <li>
              Free to travel the city after lunch. Departure to Sri Lanka{" "}
            </li>
          </ul>
          <br />
        </div>
      ),

      accommodation: "Departure Day",
      image: images.chday8,
      imageAlt: "Lecture Session and City Departure",
    },
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
    "Accommodation in 4 to 5-star hotels",
  ];

  const sriLankaExcludes = [
    "Air tickets from China to Colombo and Colombo to China",
    "Children below six - free, above 6-12 years - half rate, above 12 - full rate",
    "Personal nature costs not included",
  ];

  // Contact information
  const contactInfo = {
    address: "12, 2nd Lane, Beddagana Road, Pitakotte, Sri Lanka.",
    phone: "+94 763006555",
    email: "info@boswingroup.com",
  };

  // Chinese tea types for display
  const chineseTeaTypes = [
    {
      name: "Black Tea",
      description:
        "Fully oxidized tea with rich, robust flavors. Popular varieties include Keemun, Lapsang Souchong, and Dian Hong.",
      image: images.CeylonBlackTea,
    },
    {
      name: "Green Tea",
      description:
        "Unoxidized tea with fresh, grassy notes. Famous types include Longjing (Dragon Well), Bi Luo Chun, and Gunpowder.",
      image: images.CeylonGreenTea,
    },
    {
      name: "Oolong Tea",
      description:
        "Partially oxidized tea with complex flavors. Notable varieties are Tie Guan Yin, Da Hong Pao, and Dan Cong.",
      image: images.CeylonOolongTea,
    },
    {
      name: "White Tea",
      description:
        "Minimally processed tea with delicate sweetness. Silver Needle and White Peony are prized examples.",
      image: images.CeylonWhiteTea,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-amber-50 min-h-screen">
      <style>{`@keyframes slide { 0% { transform: translateX(0); } 50% { transform: translateX(10px); } 100% { transform: translateX(0); } } .animate-slide { animation: slide 2s ease-in-out infinite alternate; }`}</style>
      {/* Hero Banner */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <img
          src={images.hero}
          alt="Tea Tours Experience"
          className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-3000 ease-out"
          style={{
            transformOrigin: "center center",
            animation: "slowZoom 15s infinite alternate ease-in-out",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 z-10"></div>

        {/* Content Container */}
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 lg:px-8">
          <div className="max-w-4xl">
            {/* Decorative Element */}
            <div className="w-20 h-1 bg-amber-400 mb-6 transform translate-x-1 md:translate-x-0"></div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              <span className="block">TEA TOURS</span>
              <span className="text-amber-400 block text-2xl md:text-3xl lg:text-4xl font-medium mt-1">
                BY THE SRI LANKA - CHINA COMMERCIAL, CULTURAL{" "}
                <br className="hidden lg:block" />
                AND FRIENDSHIP ASSOCIATION
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mb-8 leading-relaxed">
              Taking you to two exhilarating journeys between Sri Lanka and
              Mainland China, the tea tours organized by the Sri Lanka - China
              Cultural Association where you can immerse yourself in two unique
              tea experiences.
            </p>

            {/* Call to Action */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded-md transition-all duration-300 transform hover:scale-105">
                Explore Tours
              </button>
              <button className="px-8 py-3 bg-transparent border border-white text-white hover:bg-white/10 font-medium rounded-md transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Floating Elements */}
        <div className="absolute bottom-8 right-8 z-20 hidden md:block">
          <div className="w-16 h-16 border-2 border-amber-400/30 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Tour Tabs */}
      <div className="bg-white py-8 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-full shadow-inner inline-flex p-1">
              <button
                className={`px-8 py-3 rounded-full font-medium transition-all ${
                  activeTab === "srilanka"
                    ? "bg-green-700 text-white shadow-md"
                    : "text-gray-700 hover:bg-green-50"
                }`}
                onClick={() => setActiveTab("srilanka")}
              >
                Tea Tour of Sri Lanka
              </button>
              <button
                className={`px-8 py-3 rounded-full font-medium transition-all ${
                  activeTab === "china"
                    ? "bg-amber-700 text-white shadow-md"
                    : "text-gray-700 hover:bg-amber-50"
                }`}
                onClick={() => setActiveTab("china")}
              >
                Tea Tour of China
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">
                {activeTab === "srilanka"
                  ? "8-Day Sri Lanka Tea Journey"
                  : "10-Day China Tea Experience"}
              </h2>

              

              {activeTab === "srilanka" ? (
                <div className="space-y-4 text-gray-700">
                  <p>
                    Immerse yourself in Sri Lanka's rich tea heritage with our
                    comprehensive 8-day, 7-night tour. Journey through lush
                    plantations, historic sites, and stunning landscapes while
                    learning about the art and science of tea production.
                  </p>
                  <p>
                    This carefully curated experience takes you from coastal
                    Negombo to the cultural heart of Kandy, through the misty
                    tea country of Nuwara Eliya and Ella, and along the southern
                    coast to Galle before returning to Colombo.
                  </p>
                  <p>
                    Throughout the journey, you'll enjoy expert guidance, luxury
                    accommodations, and opportunities to engage with the
                    tea-making process from leaf to cup.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 text-gray-700">
                  <p>
                    Discover the birthplace of tea with our 10-day journey
                    through China's most significant tea regions. From the
                    modern metropolis of Shanghai to the ancient tea mountains
                    of Fujian, this tour combines cultural immersion with
                    authentic tea experiences.
                  </p>
                  <p>
                    Learn about China's six tea categories directly from masters
                    who have perfected the craft for generations. Visit imperial
                    tea gardens, participate in traditional ceremonies, and
                    explore the historical significance of tea in Chinese
                    culture.
                  </p>
                  <p>
                    This exclusive tour offers unprecedented access to tea
                    producers, with opportunities to pick, process, and taste
                    teas at their source.
                  </p>
                </div>
              )}

              <button className="mt-8 bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md flex items-center">
                Book This Tour
                <svg
                  className="ml-2 w-5 h-5 animate-slide"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src={activeTab === "srilanka" ? images.sltour : images.chtour}
                alt={
                  activeTab === "srilanka"
                    ? "Sri Lanka Tea Plantation"
                    : "Chinese Tea Ceremony"
                }
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-white bg-opacity-70 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                  {activeTab === "srilanka"
                    ? "AUTHENTIC EXPERIENCE"
                    : "CULTURAL IMMERSION"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Display Chinese Tea Types - Only for China Tab */}
      {activeTab === "china" && (
        <section className="py-12 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-amber-800 mb-10">
              Discover China's Four Tea Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {chineseTeaTypes.map((tea, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={tea.image}
                      alt={tea.name}
                      className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-amber-700 mb-2">
                      {tea.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{tea.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tour Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-3 text-center">
              {activeTab === "srilanka"
                ? "TEA TOUR OF SRI LANKA"
                : "TEA TOUR OF CHINA"}
            </h2>
            <h3 className="text-xl font-medium text-amber-600 mb-4 text-center">
              {activeTab === "srilanka"
                ? "08 DAYS / 07 NIGHTS"
                : "07 DAYS / 06 NIGHTS"}
            </h3>

            {/* Detailed Itinerary */}
            <div className="mb-16">
              

              {/* Transform data for new component */}
              <ItineraryList
                items={(activeTab === "srilanka" ? sriLankaItinerary : chinaItinerary).map((item, index) => ({
                  day: index + 1,
                  title: item.title,
                  imageSrc: item.image,
                  imageAlt: item.imageAlt,
                  description: item.description,
                  note: item.accommodation ? (
                    <div className="flex items-start">
                     
                      <p className="text-amber-700 font-medium italic text-sm">
                        {item.accommodation}
                      </p>
                    </div>
                  ) : null
                }))}
              />
            </div>

            {/* Featured Attractions - visible for both tabs */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-green-800 mb-8 text-center">
                Featured {activeTab === "srilanka" ? "Sri Lankan" : "Chinese"}{" "}
                Tea Experiences
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Tea Factory Visit */}
                <div className="bg-amber-50 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={
                      activeTab === "srilanka"
                        ? images.teavisit
                        : images.ceramony
                    }
                    alt={
                      activeTab === "srilanka"
                        ? "Tea Factory Visit"
                        : "Tea Ceremony"
                    }
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-green-800 mb-2">
                      {activeTab === "srilanka"
                        ? "Tea Factory Tour"
                        : "Traditional Tea Ceremony"}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {activeTab === "srilanka"
                        ? "Witness the complete tea manufacturing process from fresh leaf to finished product at working tea factories."
                        : "Experience the art and ritual of Chinese tea ceremony under the guidance of tea masters."}
                    </p>
                  </div>
                </div>

                {/* Tea Plantation */}
                <div className="bg-green-50 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={images.teastate}
                    alt="Tea Plantation"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-green-800 mb-2">
                      {activeTab === "srilanka"
                        ? "Hill Country Tea Estates"
                        : "Longjing Tea Gardens"}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {activeTab === "srilanka"
                        ? "Walk through mist-covered tea plantations and learn about sustainable tea cultivation methods."
                        : "Visit the famous Dragon Well tea terraces and participate in seasonal tea picking activities."}
                    </p>
                  </div>
                </div>

                {/* Tea Tasting */}
                <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={images.teatest}
                    alt="Tea Tasting"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-green-800 mb-2">
                      Expert-Led Tea Tasting
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {activeTab === "srilanka"
                        ? "Develop your palate with guided tastings of Ceylon tea varieties from different growing regions."
                        : "Sample the diversity of Chinese teas, learning to identify flavor profiles and quality indicators."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
          </div>
        </div>
      </section>

      {/* Tour Destinations */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            {activeTab === "srilanka"
              ? "Sri Lanka Tour Destinations"
              : "China Tour Destinations"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourDestinations[activeTab].map((destination, index) => (
              <div
                key={destination.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
              >
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={destinationImages[destination.name] || images.sltour}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-xl font-bold text-white">
                      {destination.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    {destination.description}
                  </p>
                  <h4 className="font-bold text-green-800 mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {destination.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-amber-500 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Details
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-green-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
                What's Included
              </h2>
              <ul className="space-y-4">
                {activeTab === "srilanka"
                  ? sriLankaIncludes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-amber-400 mr-3 mt-1 flex-shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))
                  : tourIncludes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-amber-400 mr-3 mt-1 flex-shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-green-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </span>
                What's Not Included
              </h2>
              <ul className="space-y-4 mb-8">
                {activeTab === "srilanka"
                  ? sriLankaExcludes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-amber-400 mr-3">•</span>
                        <span>{item}</span>
                      </li>
                    ))
                  : tourExcludes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-amber-400 mr-3">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
              </ul>

              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">
                  Ready to Experience Tea Country?
                </h3>
                <p className="mb-6">
                  For booking inquiries, custom itineraries, or more information
                  about our tea tours, please contact our team. Special rates
                  available for groups of 6 or more.
                </p>
                <a
                  href="#contact"
                  className="bg-amber-500 hover:bg-amber-600 text-green-900 font-medium py-3 px-6 rounded-lg transition-colors inline-block shadow-md"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default TeaTouringPage;

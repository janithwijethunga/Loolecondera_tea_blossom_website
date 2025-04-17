import React, { useState } from "react";
import { CheckCircle, Calendar, Users, Clock, Star } from "lucide-react";
import tourhero from "../assets/Tours/hero.jpg";
import sltour from "../assets/Tours/sltour.jpg";
import chinatour from "../assets/Tours/chinatour.jpg";
import slday1 from "../assets/Tours/slday1.jpg";
import slday2 from "../assets/Tours/slday2.jpg";
import slday3 from "../assets/Tours/slday3.jpg";
import slday4 from "../assets/Tours/slday4.jpg";
import slday5 from "../assets/Tours/slday5.jpg";
import slday6 from "../assets/Tours/slday6.jpg";
import slday7 from "../assets/Tours/slday7.jpg";
import teafvisit from "../assets/Tours/teafvisit.jpg";
import teastate from "../assets/Tours/teastate.jpg";
import teatest from "../assets/Tours/teatest.jpg";
import ceramony from "../assets/Tours/ceramony.jpg";
import grd from "../assets/Tours/grd.jpg";
import chday1 from "../assets/Tours/chday1.jpg";
import chday2 from "../assets/Tours/chday2.jpg";
import chday3 from "../assets/Tours/chday3.jpg";
import chday4 from "../assets/Tours/chday4.jpg";
import chday5 from "../assets/Tours/chday5.jpg";
import chday6 from "../assets/Tours/chday6.jpg";
import chday7 from "../assets/Tours/chday7.jpg";
import chday8 from "../assets/Tours/chday8.jpg";

const TeaTouringPage = () => {
  const [activeTab, setActiveTab] = useState("srilanka");

  // Expanded image paths - in real implementation these would be imports
  const images = {
    hero: tourhero,
    sriLanka: sltour,
    china: chinatour,
    teaServing: "/api/placeholder/600/400",
    destinations: {
      Negombo: slday1,
      Kandy: slday2,
      "Nuwara Eliya": slday3,
      Ella: slday4,
      Galle: slday5,
      Colombo: slday6,
      Beijing: "/api/placeholder/400/300",
      Shanghai: "/api/placeholder/400/300",
      Hangzhou: "/api/placeholder/400/300",
      Fujian: "/api/placeholder/400/300",
    },
    // Added images for itinerary days
    sriLankaItinerary: {
      day1: slday1, // Negombo
      day2: slday2, // Temple of the Tooth Relic
      day3: slday3, // Tea Research Institute
      day4: slday4, // Galle Fort
      day5: slday5, // Turtle Hatchery
      day6: slday6, // Tea Auction
      day7: slday7, // Colombo
    },
    chinaItinerary: {
      day1: chday1,
      day2: chday2,
      day3: chday3,
      day4: chday4,
      day5: chday5,
      day6: chday6,
      day7: chday7,
      day8: chday8,
    },
    teaTypes: {
      blackTea: "/api/placeholder/300/200",
      greenTea: "/api/placeholder/300/200",
      oolongTea: "/api/placeholder/300/200",
      whiteTea: "/api/placeholder/300/200",
      puerhTea: "/api/placeholder/300/200",
    },
    hotels: {
      jetwingBlue: "/api/placeholder/300/200",
      grandHotel: "/api/placeholder/300/200",
      ellaHotel: "/api/placeholder/300/200",
      hotelRiu: "/api/placeholder/300/200",
      cinnamonGrand: "/api/placeholder/300/200",
    },
    attractions: {
      teaFactory: teafvisit,
      toothRelic: grd,
      teaPlantation: teastate,
      teaCeremony: ceramony,
      teaTasting: teatest,
    },
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
      {
        name: "Fujian",
        description:
          "Explore the birthplace of oolong tea and traditional tea cultivation methods.",
        highlights: [
          "Oolong tea factory",
          "Tea mountains",
          "Traditional tea villages",
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
      description:
        "Arrival at the Bandaranaike International Airport in Katunayake, formalities for entry and baggage claim. Meeting with the tour guide and travel to Negombo. Negombo is slightly north of Colombo and close to the airport, and was formerly the centre of the cinnamon trade. It is home to a picturesque lagoon, numerous Catholic churches, and an impressive network of canals built by the Dutch which are currently being restored. It also has an active fishing industry and a bustling fish market known as 'Lellama'.",
      accommodation: "Dinner and overnight stay at Jetwing Blue.",
      image: images.sriLankaItinerary.day1,
      imageAlt: "Negombo Beach and Dutch Canal",
    },
    {
      day: "DAY 2",
      title: "NEGOMBO | KANDY | NUWARA ELIYA",
      description:
        "Breakfast at Negombo and departure to Kandy. Arrival in Kandy in the afternoon, visit to the Temple of the Tooth Relic, which houses the most revered tooth relic of the Lord Buddha; this is a place of utmost importance to Sri Lankan Buddhists as it bears extraordinary testimonies of the past with its greatest symbol of Buddhism. Departure to Nuwara Eliya, visit Ramboda Falls and Bloomfield Tea Estate and tea factory en route to Nuwara Eliya.",
      accommodation:
        "Dinner and overnight stay at The Grand Hotel - Nuwara Eliya.",
      image: images.sriLankaItinerary.day2,
      imageAlt: "Temple of the Tooth Relic in Kandy",
    },
    {
      day: "DAY 3",
      title: "NUWARA ELIYA | TALAWAKELLE | ELLA",
      description:
        "Breakfast at the Grand Hotel and departure to Tea Research Institute and St. Coombes Tea Factory and Tea Estate in Talawakelle. Departure to Ella in the evening and overnight stay at Ella. Ella is a town located in Sri Lanka's Uva Province which has a rich biodiversity, dense with numerous varieties of flora and fauna. Ella is surrounded by hills covered with cloud forests and tea plantations.",
      accommodation: "Overnight stay at Ella.",
      image: images.sriLankaItinerary.day3,
      imageAlt: "Tea Research Institute in Talawakelle",
    },
    {
      day: "DAY 4",
      title: "ELLA | GALLE | AHUNGALLA",
      description:
        "Breakfast at Ella and departure to Galle. Galle is a city on the southwest coast of Sri Lanka. It's known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century. Stone sea walls, expanded by the Dutch, encircle car-free streets with architecture reflecting Portuguese, Dutch, and British rule. Visiting Galle Fort and departing Galle to the Hotel Riu, Ahungalla for lunch, dinner, and overnight stay.",
      accommodation:
        "Lunch, dinner, and overnight stay at Hotel Riu, Ahungalla. (Tourists can opt to take the Madu River boat tour upon personal request.)",
      image: images.sriLankaItinerary.day4,
      imageAlt: "Historic Galle Fort",
    },
    {
      day: "DAY 5",
      title: "AHUNGALLA | ELPITIYA",
      description:
        "Breakfast at the Hotel Riu, visit to the turtle hatchery in Ahungalla and arrival back to the hotel for lunch. Visit to the Athukorala Tea Factory at Elpitiya where a lecture on tea will be conducted. Tourists will be awarded a certificate for participating in the tea tour.",
      accommodation: "Return back to Hotel Riu for dinner and overnight stay.",
      image: images.sriLankaItinerary.day5,
      imageAlt: "Turtle Hatchery in Ahungalla",
    },
    {
      day: "DAY 6",
      title: "AHUNGALLA | COLOMBO",
      description:
        "Breakfast at the Hotel Riu and departure to Colombo at 6:30 am. Arrival at Colombo, visiting the tea auction at the National Chamber of Commerce, Colombo, Sri Lanka Tea Board, and Port City. Lunch at Colombo and check-in, dinner, and overnight stay at Cinnamon Grand, Colombo.",
      accommodation: "Dinner and overnight stay at Cinnamon Grand, Colombo.",
      image: images.sriLankaItinerary.day6,
      imageAlt: "Tea Auction at National Chamber of Commerce",
    },
    {
      day: "DAY 7",
      title: "COLOMBO | KATUNAYAKE",
      description:
        "Breakfast and checkout of Cinnamon Grand at 12:00 pm. Tourists are free to tour the city of Colombo and shop within the city. Departure from Colombo to the Bandaranaike International Airport at around 3:30 pm - 4:00 pm.",
      accommodation: "",
      image: images.sriLankaItinerary.day7,
      imageAlt: "Colombo City Skyline",
    },
  ];

  // China Tour Itinerary
  const chinaItinerary = [
    {
      day: "DAY 1",
      title: "KATUNAYAKE | SHANGHAI | HANGZHOU",
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
      accommodation: "Overnight stay in Hangzhou.",
      image: images.chinaItinerary.day1,
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
          <p>
            <strong>Keemun</strong>: It has a complex aroma and is often used in
            English Breakfast blends.
            <br />
            <strong>Lapsang Souchong</strong>: This tea is distinct due to its
            smoky flavor, achieved by drying the leaves over pinewood fires.
            <br />
            <strong>Dian Hong (Yunnan Black Tea)</strong>: This tea has a rich,
            malty flavor with notes of chocolate.
            <br />
            <strong>Yixing Black Tea</strong>: This tea is known for its mellow
            and sweet taste, often with fruity undertones.
            <br />
            <strong>Jin Jun Mei</strong>: Jin Jun Mei is made from young tea
            buds and is highly prized for its rich and sweet flavor profile.
          </p>

          <p>
            <strong>Oolong tea</strong> is a traditional Chinese tea that falls
            between green and black tea in terms of oxidation levels. Popular
            varieties include Tie Guan Yin, Da Hong Pao, and Dan Cong.
          </p>

          <p>
            <strong>Chinese green tea</strong> is celebrated for its delicate
            flavors, health benefits, and cultural significance. Here are some
            notable varieties:
          </p>
          <p>
            <strong>Longjing</strong>: It has a flat appearance, a mellow,
            slightly sweet taste, and a distinctive chestnut-like aroma.
            <br />
            <strong>Bi Luo Chun</strong>: Known for its delicate, fruity flavor
            and floral aroma.
            <br />
            <strong>Huangshan Maofeng</strong>: This tea features long, slender
            leaves and offers a refreshing, slightly nutty flavor with floral
            notes.
            <br />
            <strong>Gunpowder Tea</strong>: It is known for its rolled leaves
            resembling pellets. It has a bold taste and is often used in
            Moroccan mint tea.
            <br />
            <strong>Anji Bai Cha</strong>: Features pale green leaves and offers
            a sweet, vegetal taste with hints of chestnut.
            <br />
            <strong>Tai Ping Hou Kui</strong>: This tea is known for its large,
            flat leaves and has a smooth, floral taste.
          </p>

          <p>
            <strong>Pu'erh tea</strong> is a unique and highly prized type of
            fermented tea originating from the Yunnan province in China. The
            taste can vary significantly depending on factors like the region,
            processing methods, and aging such as earthy, woody, or even
            mushroom-like flavors, with a smooth and sometimes mellow or
            slightly astringent taste.
          </p>

          <p>
            <strong>Chinese white tea</strong> is a delicate and minimally
            processed tea known for its subtle flavors and gentle aroma.
          </p>
          <p>
            <strong>Silver Needle (Bai Hao Yinzhen)</strong>: This is one of the
            most famous types of Chinese white tea. It's made exclusively from
            young tea buds and is known for its silvery appearance, delicate
            flavor, and slight sweetness.
            <br />
            <strong>White Peony (Bai Mudan)</strong>: This tea is slightly
            bolder than Silver Needle and may have a fuller flavor with floral
            and fruity notes.
          </p>
        </div>
      ),
      accommodation: "Continued stay in Hangzhou.",
      image: images.chinaItinerary.day2,
      imageAlt: "Chinese Tea Varieties Display",
    },
    {
      day: "DAY 3",
      title: "LONGJING VILLAGE | HANGZHOU",
      description:
        "Visit to Longjing Tea Garden and West Lake Hangzhou Benshan Longjing Tea Museum. Longjing Tea Garden and Tea Factory: These gardens are situated around the West Lake area and along the hillsides surrounding the lake. The region's unique climate, fertile soil, and specific geographical features contribute to the high-quality Longjing tea production. In the vicinity of the tea gardens, there are tea processing facilities or factories where the freshly plucked tea leaves undergo various steps to become the finished Longjing tea.",
      accommodation: "Overnight stay in Hangzhou.",
      image: images.chinaItinerary.day3,
      imageAlt: "Longjing Tea Gardens",
    },
    {
      day: "DAY 4",
      title: "TEA TASTING AND CHINESE TEA CEREMONY",
      description:
        "Tasting session for various Chinese tea types and Chinese tea ceremony conducted by the Sri Lanka - China Cultural Association. Recommended visits include the Hangzhou - Beijing Grand Canal (also known as the Beijing-Hangzhou Grand Canal, it is an ancient waterway in China and one of the world's oldest and longest artificial water systems) and the Qiantang River Bund (The Qiantang River is known for its significant tidal bore and scenic beauty).",
      accommodation: "Final night in Hangzhou.",
      image: images.chinaItinerary.day4,
      imageAlt: "Traditional Chinese Tea Ceremony",
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
      image: images.teaTypes.blackTea,
    },
    {
      name: "Green Tea",
      description:
        "Unoxidized tea with fresh, grassy notes. Famous types include Longjing (Dragon Well), Bi Luo Chun, and Gunpowder.",
      image: images.teaTypes.greenTea,
    },
    {
      name: "Oolong Tea",
      description:
        "Partially oxidized tea with complex flavors. Notable varieties are Tie Guan Yin, Da Hong Pao, and Dan Cong.",
      image: images.teaTypes.oolongTea,
    },
    {
      name: "White Tea",
      description:
        "Minimally processed tea with delicate sweetness. Silver Needle and White Peony are prized examples.",
      image: images.teaTypes.whiteTea,
    },
    {
      name: "Pu'erh Tea",
      description:
        "Fermented and aged tea from Yunnan province with earthy, deep flavors that improve over time.",
      image: images.teaTypes.puerhTea,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-amber-50 min-h-screen">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block">TEA TOURS</span>
              <span className="text-amber-400 block text-3xl md:text-4xl lg:text-5xl font-medium mt-1">
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

              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center text-gray-700">
                  <Calendar size={20} className="mr-2 text-green-600" />
                  <span>
                    {activeTab === "srilanka"
                      ? "8 days, 7 nights"
                      : "10 days, 9 nights"}
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users size={20} className="mr-2 text-green-600" />
                  <span>Small groups (max 12)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock size={20} className="mr-2 text-green-600" />
                  <span>Available year-round</span>
                </div>
              </div>

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
                  className="ml-2 w-5 h-5"
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
                src={activeTab === "srilanka" ? images.sriLanka : images.china}
                alt={
                  activeTab === "srilanka"
                    ? "Sri Lanka Tea Plantation"
                    : "Chinese Tea Ceremony"
                }
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-white bg-opacity-90 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
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
              Discover China's Five Tea Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
              {activeTab === "srilanka"
                ? "TEA TOUR OF SRI LANKA"
                : "TEA TOUR OF CHINA"}
            </h2>
            <h3 className="text-xl font-medium text-amber-600 mb-12 text-center">
              {activeTab === "srilanka"
                ? "08 DAYS / 07 NIGHTS"
                : "07 DAYS / 06 NIGHTS"}
            </h3>

            {/* Detailed Itinerary */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-green-700 mb-8 flex items-center">
                <span className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center mr-3 text-white">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </span>
                Detailed Itinerary
              </h3>
              <div className="space-y-12">
                {(activeTab === "srilanka"
                  ? sriLankaItinerary
                  : chinaItinerary
                ).map((day, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-green-600 pl-6 pb-3 relative"
                  >
                    {/* Day indicator dot */}
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {index + 1}
                      </span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                      <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                        {day.day}
                      </span>
                      <h4 className="text-xl font-bold text-green-800">
                        {day.title}
                      </h4>
                    </div>

                    {/* Two-column layout for desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                      {/* Image column (2/5 width on desktop) */}
                      <div className="md:col-span-2">
                        <div className="rounded-lg overflow-hidden shadow-md h-56 md:h-full">
                          <img
                            src={day.image}
                            alt={day.imageAlt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Text content column (3/5 width on desktop) */}
                      <div className="md:col-span-3">
                        <div className="bg-green-50 p-5 rounded-lg h-full">
                          <p className="text-gray-700 mb-3 leading-relaxed">
                            {day.description}
                          </p>
                          {day.accommodation && (
                            <p className="text-amber-700 font-medium italic flex items-center">
                              <svg
                                className="w-5 h-5 mr-2 text-amber-600 flex-shrink-0"
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
                              {day.accommodation}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Attractions - visible for both tabs */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-green-800 mb-8 text-center">
                Featured {activeTab === "srilanka" ? "Sri Lankan" : "Chinese"}{" "}
                Tea Experiences
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Tea Factory Visit */}
                <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={
                      activeTab === "srilanka"
                        ? images.attractions.teaFactory
                        : images.attractions.teaCeremony
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
                    src={images.attractions.teaPlantation}
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
                    src={images.attractions.teaTasting}
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
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={images.destinations[destination.name]}
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

      {/* Tour Details */}
      {/* Tour Details */}
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
      </section>
    </div>
  );
};

export default TeaTouringPage;

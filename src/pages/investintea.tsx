import React, { useState, useEffect } from "react";
import {
  FaLeaf,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaSeedling,
  FaMugHot,
  FaGlobeAsia,
  FaHome,
} from "react-icons/fa";
import heroo from "../assets/investintea/hero.jpg";
import img1 from "../assets/investintea/img1.jpg";
import img2 from "../assets/investintea/img2.jpg";
import img3 from "../assets/investintea/img3.jpg";
import img4 from "../assets/investintea/img4.jpg";
import Teavilla from "../components/teavilla";
import villas from "../assets/investintea/villas.jpg";
import surroundings from "../assets/investintea/surroundings.jpg";
import garden from "../assets/investintea/garden.jpg";

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface HighlightProps {
  title: string;
  icon: React.ReactNode;
}

interface VillaFeatureProps {
  title: string;
  description: string;
  image: string;
}

const VillaFeature: React.FC<VillaFeatureProps> = ({
  title,
  description,
  image,
}) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const InvestInTeaPage: React.FC = () => {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preference: "webinar",
  });
  const [teaSets, setTeaSets] = useState(1);
  const [years, setYears] = useState(20);
  const [initialInvestment, setInitialInvestment] = useState(200000);
  const [annualFee, setAnnualFee] = useState(100000);
  const [totalInvestment, setTotalInvestment] = useState(2100000);
  const [currency, setCurrency] = useState("LKR");
  const [showDetails, setShowDetails] = useState(Array(3).fill(false));

  // Currency conversion rates
  const conversionRates = {
    LKR: 1,
    USD: 0.0035, // 1 LKR = 0.0035 USD
    RMB: 0.025, // 1 LKR = 0.025 RMB
  };

  // Recalculate when inputs change
  useEffect(() => {
    const newInitialInvestment = 200000 * teaSets;
    const newAnnualFee = 100000 * teaSets;
    const newTotalInvestment =
      newInitialInvestment + newAnnualFee * (years - 1);

    setInitialInvestment(newInitialInvestment);
    setAnnualFee(newAnnualFee);
    setTotalInvestment(newTotalInvestment);
  }, [teaSets, years]);

  // Format number with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Convert currency
  const convertCurrency = (amount) => {
    return Math.round(amount * conversionRates[currency]);
  };

  // Toggle details visibility
  const toggleDetails = (index) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  const handleContactChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setContactFormData((prev) => ({ ...prev, [name]: value }));
  };

  const InvestmentStep = ({ number, title, description, icon, image }) => (
    <div className="relative flex flex-col h-full">
      {/* Timeline connector (visible on desktop) */}
      <div className="hidden lg:block absolute top-24 left-0 w-full h-1 bg-green-200">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-green-500"></div>
      </div>

      {/* Step number */}
      <div className="bg-green-800 text-white font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center relative z-10 mx-auto mb-4">
        {number}
      </div>

      {/* Content card */}
      <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-green-800 opacity-10"></div>
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 bg-green-600 text-white p-3 rounded-full">
            {icon}
          </div>
        </div>

        {/* Text content */}
        <div className="p-6">
          <div className="uppercase text-xs font-bold tracking-wider text-green-600 mb-2">
            {number === "01" && "OWNING THE TEA TREES"}
            {number === "02" && "RECEIVING THE PRODUCT"}
            {number === "03" && "VISIT YOUR GARDEN"}
            {number === "04" && "EXPLORE CEYLON"}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );

  const Highlight = ({ title, description, icon }) => (
    <div className="bg-green-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:bg-green-100 flex flex-col items-center text-center">
      <div className="bg-green-600 text-white p-4 rounded-full mb-4 inline-flex items-center justify-center w-16 h-16">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-green-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for your interest! We will contact you shortly.");
    setContactFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      preference: "webinar",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${heroo})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-8xl text-white font-semibold mb-8 leading-tight font-lobster max-w-3xl">
            Sip the golden drink housed from your own estate
          </h1>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 flex items-center">
              Contact us <FaArrowRight className="ml-2" />
            </button>
            <button className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 italic">
              We provide the golden opportunity of owning a Ceylon Tea Garden
              and use the harvested premium un-blend, single estate Ceylon Tea.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Taste Your Own Tea */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              Are you ready to taste a cup of tea from your own tea plants?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              For the next two decades, become the sovereign of your own tea
              kingdom. With each cup, you'll command your taste buds to explore
              the vast, rich landscapes of tea. From the misty mountains of
              green tea to the fiery depths of spicy chai, your reign as the tea
              monarch will be nothing short of a delicious adventure. Embrace
              the journey as you sip, savor, and rule over your tea state with
              wisdom and flavor.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Our Tea Experience
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Discover the world of premium tea through our carefully curated
              experiences and knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Highlight
              title="Invest In Tea"
              description="Learn about tea as a sustainable investment and how to build your collection."
              icon={<FaLeaf className="text-2xl" />}
            />

            <Highlight
              title="Tea From Your Garden"
              description="Grow your own tea plants and enjoy the freshest cup possible."
              icon={<FaSeedling className="text-2xl" />}
            />

            <Highlight
              title="Tending to Tea Garden"
              description="Expert tips for maintaining healthy and productive tea plants year-round."
              icon={<FaMugHot className="text-2xl" />}
            />

            <Highlight
              title="Explore Ceylon"
              description="Discover the rich heritage and exceptional teas from the famous Ceylon region."
              icon={<FaGlobeAsia className="text-2xl" />}
            />
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Your Tea Investment Journey
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Make an annual payment to own a bulk of premium tea trees. From
              the moment you invest, you'll receive 500g of pure natural Ceylon
              Tea every month, delivered to your doorstep free of charge,
              anywhere in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative">
            <InvestmentStep
              number="01"
              title="Purchase a Bulk of Tea Trees"
              description="You can purchase tea trees in 100 trees bulk sets. The minimum amount is 1 set or 100 trees."
              icon={<FaLeaf className="text-xl" />}
              image={img1}
            />

            <InvestmentStep
              number="02"
              title="Taste Tea From Your Garden"
              description="After you make the first investment, you will have 500g of Premium Ceylon tea per month for a continuous 20-year period. You will receive your collected harvest every three months. It will be delivered to your doorstep without a shipping or transport fee. (Annually you will get 6kg of pure Ceylon tea from your own garden.)"
              icon={<FaMugHot className="text-xl" />}
              image={img2}
            />

            <InvestmentStep
              number="03"
              title="Take a Vacation in Your Tea Garden"
              description="You are entitled to visit your tea garden at any time you wish and you can spend a vacation in our Tea Bungalow. We will arrange a special tea tour in our tea garden where you can tend to and puck tea from your garden and a tour to a tea factory. "
              icon={<FaHome className="text-xl" />}
              image={img3}
            />

            <InvestmentStep
              number="04"
              title="Explore the beauty of the golden land, Sri Lanka"
              description="You can maximize your visit to Sri Lanka with us. A completed tour with exploring tea gardens, tea factories, and research centers, to mesmerizing relics and sea sides."
              icon={<FaGlobeAsia className="text-xl" />}
              image={img4}
            />
          </div>

          <div className="mt-16 text-center">
            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Your Tea Investment Today
            </button>
          </div>
        </div>
      </section>
      <Teavilla />

      {/* Villa & Surroundings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-800">
            Subha Tea Villa & Surroundings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VillaFeature
              title="Villas"
              description="The gorgeous Subha Tea Villa offers an idyllic Pelmadulla escape with maximum comfort and scenic bliss."
              image={villas}
            />
            <VillaFeature
              title="Surrounding"
              description="Features a luxury pool overlooking the spectacular Kudaella Falls for a unique tea-drinking getaway."
              image={surroundings}
            />
            <VillaFeature
              title="Tea Garden"
              description="The villa's surrounding flourishing tea garden supplies leaves directly sourced, processed, and brewed for your cup."
              image={garden}
            />
          </div>
        </div>
      </section>

      {/* Investment Details */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="relative flex flex-col items-center mb-16">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-100 rounded-full opacity-70"></div>
            <h2 className="text-4xl font-bold relative z-10 mb-3 text-center">
              Tea Investment Calculator
            </h2>
            <div className="w-16 h-1 bg-green-500 mb-8"></div>
            <p className="text-slate-600 text-center max-w-3xl">
              Calculate your potential investment in our tea plantation over
              time. Adjust the number of tea sets and investment period to see
              how your investment grows.
            </p>
          </div>

          {/* Calculator Controls */}
          <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
            <h3 className="text-xl font-bold text-slate-800 mb-6">
              Customize Your Investment
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tea Sets Slider */}
              <div className="space-y-4">
                <label className="font-medium text-slate-700 flex justify-between">
                  <span>Number of Tea Sets</span>
                  <span className="text-green-600 font-bold">{teaSets}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={teaSets}
                  onChange={(e) => setTeaSets(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
                <p className="text-sm text-slate-500">
                  Each tea set contains 100 tea plants
                </p>
              </div>

              {/* Years Slider */}
              <div className="space-y-4">
                <label className="font-medium text-slate-700 flex justify-between">
                  <span>Investment Period (Years)</span>
                  <span className="text-green-600 font-bold">{years}</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="25"
                  value={years}
                  onChange={(e) => setYears(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
                <p className="text-sm text-slate-500">
                  Optimal tea-tree lifespan: 20–25 years
                </p>
              </div>

              {/* Currency Selector */}
              <div className="space-y-4">
                <label className="font-medium text-slate-700">Currency</label>
                <div className="flex space-x-2">
                  {Object.keys(conversionRates).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setCurrency(curr)}
                      className={`flex-1 py-3 px-4 rounded-lg text-center font-medium transition-colors ${
                        currency === curr
                          ? "bg-green-500 text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  View costs in different currencies
                </p>
              </div>
            </div>
          </div>

          {/* Investment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Initial Investment Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-bold text-slate-800">
                    Initial Investment
                  </span>
                </div>
                <button
                  onClick={() => toggleDetails(0)}
                  className="text-green-500 hover:text-green-700"
                >
                  {showDetails[0] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-slate-900">
                  {formatNumber(convertCurrency(initialInvestment))}
                </span>
                <span className="ml-1 text-slate-600">{currency}</span>
              </div>

              {showDetails[0] && (
                <>
                  <p className="text-slate-600 mb-4">
                    The Initial Investment is paid for your{" "}
                    {teaSets > 1 ? teaSets + " Tea-Sets" : "Tea-Set"} at the
                    starting year. Each tea set includes 100 tea plants.
                  </p>

                  <p className="text-slate-600 mb-4">
                    After you invest, we will take the tea saplings and do the
                    ground preparation and other necessary caretaking to grow
                    them into harvestable tea plants.
                  </p>
                </>
              )}

              <div className="bg-slate-50 p-4 rounded-lg mt-4 text-sm">
                <span className="font-medium">
                  Initial Investment: {formatNumber(convertCurrency(200000))}{" "}
                  {currency} per Tea-Set × {teaSets} Sets
                </span>
                {currency === "LKR" && (
                  <span className="block text-slate-500 italic mt-1">
                    (around USD 700 or RMB 5000 per set)
                  </span>
                )}
              </div>
            </div>

            {/* Investment Period Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-bold text-slate-800">
                    Investment Period
                  </span>
                </div>
                <button
                  onClick={() => toggleDetails(1)}
                  className="text-green-500 hover:text-green-700"
                >
                  {showDetails[1] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-slate-900">
                  {years}
                </span>
                <span className="ml-1 text-slate-600">years</span>
              </div>

              {showDetails[1] && (
                <p className="text-slate-600 mb-4">
                  The optimal life expectancy of a commercial tea tree is around
                  20-25 years. You've selected a {years}-year investment period.
                </p>
              )}

              <div className="bg-slate-50 p-4 rounded-lg mt-4 text-sm flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-green-500 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <span>
                  Selected period:{" "}
                  <span className="font-medium">{years} years</span> of{" "}
                  {teaSets > 1 ? teaSets + " tea sets" : "1 tea set"}
                </span>
              </div>
            </div>

            {/* Annual Investment Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-bold text-slate-800">
                    Annual Investment
                  </span>
                </div>
                <button
                  onClick={() => toggleDetails(2)}
                  className="text-green-500 hover:text-green-700"
                >
                  {showDetails[2] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-slate-900">
                  {formatNumber(convertCurrency(annualFee))}
                </span>
                <span className="ml-1 text-slate-600">{currency}</span>
              </div>

              {showDetails[2] && (
                <p className="text-slate-600 mb-4">
                  For maintenance and production proceedings, you'll pay an
                  annual fee for each tea set. This covers all necessary care
                  for your tea plants.
                </p>
              )}

              <div className="bg-slate-50 p-4 rounded-lg mt-4 text-sm">
                <span className="font-medium">
                  Annual Charges: {formatNumber(convertCurrency(100000))}{" "}
                  {currency} per set × {teaSets} Sets
                </span>
                {currency === "LKR" && (
                  <span className="block text-slate-500 italic mt-1">
                    (around USD 350 or RMB 2500 per set)
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Investment Summary */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-slate-800">
                Investment Summary
              </h3>
              <div className="w-8 h-1 bg-green-500"></div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <div>
                  <span className="text-slate-600">Initial Investment</span>
                  <span className="block text-xs text-slate-500">(Year 1)</span>
                </div>
                <div className="text-right">
                  <span className="font-medium text-slate-900">
                    {formatNumber(convertCurrency(initialInvestment))}{" "}
                    {currency}
                  </span>
                  <span className="block text-xs text-slate-500">
                    {teaSets} Tea {teaSets > 1 ? "Sets" : "Set"} ×{" "}
                    {formatNumber(convertCurrency(200000))} {currency}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <div>
                  <span className="text-slate-600">Annual fee</span>
                  <span className="block text-xs text-slate-500">
                    (Years 2-{years})
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-medium text-slate-900">
                    {formatNumber(convertCurrency(annualFee))} {currency}
                  </span>
                  <span className="block text-xs text-slate-500">
                    × {years - 1} years
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <div>
                  <span className="text-slate-600">Total Annual Fees</span>
                </div>
                <div className="text-right">
                  <span className="font-medium text-slate-900">
                    {formatNumber(convertCurrency(annualFee * (years - 1)))}{" "}
                    {currency}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex justify-between items-center bg-green-500 text-white p-6 rounded-lg">
                <div>
                  <span className="font-bold">Total Investment</span>
                  <span className="block text-xs text-green-100">
                    ({years} years, {teaSets} Tea {teaSets > 1 ? "Sets" : "Set"}
                    )
                  </span>
                </div>
                <span className="text-2xl font-bold">
                  {formatNumber(convertCurrency(totalInvestment))} {currency}
                </span>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-8 text-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                Start Your Tea Investment
              </button>
              <p className="mt-4 text-sm text-slate-500">
                Ready to begin your journey as a tea investor? Contact our team
                for more information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Left side - Contact Info */}
      <div className="lg:w-5/12 bg-gradient-to-br from-amber-500 to-orange-600 p-8 lg:p-12 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-700 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-10 text-amber-50">
            We'd love to hear from you! Fill out the form to start a conversation with our team.
          </p>
          
          <div className="space-y-6 mt-12">
            <div className="p-4 rounded-xl transition-all duration-300 cursor-pointer hover:bg-white hover:bg-opacity-10">
              <div className="flex items-start">
                <div className="bg-amber-100 text-amber-800 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-md">
                  ✉️
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Email</h3>
                  <a href="mailto:info@boswingroup.com" className="text-amber-100 hover:text-white hover:underline transition-colors">
                    info@boswingroup.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-xl transition-all duration-300 cursor-pointer hover:bg-white hover:bg-opacity-10">
              <div className="flex items-start">
                <div className="bg-emerald-100 text-emerald-800 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-md">
                  📞
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <a href="tel:+94763006555" className="text-amber-100 hover:text-white hover:underline transition-colors">
                    +94 7 630 06555
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-xl transition-all duration-300 cursor-pointer hover:bg-white hover:bg-opacity-10">
              <div className="flex items-start">
                <div className="bg-violet-100 text-violet-800 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-md">
                  📍
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Visit Us</h3>
                  <p className="text-amber-100">
                    12, 2nd Lane, Beddagana Road, Pitakotte, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                F
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                T
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                L
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                I
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Form */}
      <div className="lg:w-7/12 p-8 lg:p-12">
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800">
              Let's start with your details
            </h3>
            <p className="text-gray-600 mt-2">
              We'll need this to get back to you
            </p>
          </div>
          
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-amber-500 text-white ring-4 ring-amber-100">
                1
              </div>
              <div className="w-12 h-1 bg-gray-200"></div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 text-gray-500">
                2
              </div>
              <div className="w-12 h-1 bg-gray-200"></div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 text-gray-500">
                3
              </div>
            </div>
          </div>
          
          <form>
            <div className="space-y-6">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="relative">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
                  placeholder="+1 (234) 567-8900"
                />
              </div>
              
              <div className="relative">
                <label htmlFor="preference" className="block text-sm font-medium text-gray-700">
                  I'm interested in
                </label>
                <select
                  id="preference"
                  name="preference"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
                >
                  <option value="webinar">Attending a webinar</option>
                  <option value="callback">Requesting a callback</option>
                  <option value="info">More information</option>
                </select>
              </div>
              
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
                  placeholder="Tell us more about what you're looking for..."
                ></textarea>
              </div>
              
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default InvestInTeaPage;

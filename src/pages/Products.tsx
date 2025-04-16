import React, { useState } from 'react';

// Tea illustration components
const TeaLeafSVG = ({ color = "#4CAF50", secondaryColor = "#388E3C" }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M50,10 C60,20 80,30 80,50 C80,75 60,90 50,90 C40,90 20,75 20,50 C20,30 40,20 50,10 Z" fill={color} />
    <path d="M50,15 C58,23 75,32 75,50 C75,70 58,85 50,85 C42,85 25,70 25,50 C25,32 42,23 50,15 Z" fill={secondaryColor} />
    <path d="M50,30 C55,40 65,45 65,55 C65,70 55,75 50,75 C45,75 35,70 35,55 C35,45 45,40 50,30 Z" fill="#fff" fillOpacity="0.2" />
  </svg>
);

const TeaCupSVG = ({ color = "#795548", accentColor = "#8D6E63" }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <ellipse cx="50" cy="75" rx="30" ry="10" fill={accentColor} />
    <path d="M30,30 C30,25 40,20 50,20 C60,20 70,25 70,30 L65,75 C65,80 58,85 50,85 C42,85 35,80 35,75 L30,30 Z" fill={color} />
    <path d="M35,35 C35,32 42,29 50,29 C58,29 65,32 65,35 L62,70 C62,73 57,75 50,75 C43,75 38,73 38,70 L35,35 Z" fill="#D7CCC8" />
    <path d="M70,40 C75,40 80,45 80,55 C80,65 75,70 70,70" fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const GoldenTeaSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <radialGradient id="goldGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="70%" stopColor="#DAA520" />
        <stop offset="100%" stopColor="#B8860B" />
      </radialGradient>
    </defs>
    <ellipse cx="50" cy="75" rx="30" ry="10" fill="#B8860B" />
    <path d="M30,30 C30,25 40,20 50,20 C60,20 70,25 70,30 L65,75 C65,80 58,85 50,85 C42,85 35,80 35,75 L30,30 Z" fill="url(#goldGradient)" />
    <path d="M35,35 C35,32 42,29 50,29 C58,29 65,32 65,35 L62,70 C62,73 57,75 50,75 C43,75 38,73 38,70 L35,35 Z" fill="#FFF8E1" />
    <path d="M70,40 C75,40 80,45 80,55 C80,65 75,70 70,70" fill="none" stroke="#B8860B" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const TeaBagSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="35" y="20" width="30" height="40" rx="5" fill="#F5F5DC" />
    <line x1="50" y1="20" x2="50" y2="5" stroke="#8D6E63" strokeWidth="2" />
    <rect x="45" y="5" width="10" height="5" fill="#D7CCC8" />
    <rect x="40" y="25" width="20" height="30" fill="#BCAAA4" opacity="0.5" />
    <rect x="38" y="60" width="24" height="20" rx="5" fill="#795548" />
    <ellipse cx="50" cy="80" rx="15" ry="5" fill="#5D4037" />
  </svg>
);

const RoyalTeaSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9C27B0" />
        <stop offset="100%" stopColor="#673AB7" />
      </linearGradient>
    </defs>
    <ellipse cx="50" cy="75" rx="30" ry="10" fill="#4A148C" />
    <path d="M30,30 C30,25 40,20 50,20 C60,20 70,25 70,30 L65,75 C65,80 58,85 50,85 C42,85 35,80 35,75 L30,30 Z" fill="url(#purpleGradient)" />
    <path d="M35,35 C35,32 42,29 50,29 C58,29 65,32 65,35 L62,70 C62,73 57,75 50,75 C43,75 38,73 38,70 L35,35 Z" fill="#F3E5F5" />
    <path d="M20,25 L30,35 M30,25 L20,35" stroke="#FFD700" strokeWidth="2" />
    <path d="M70,25 L80,35 M80,25 L70,35" stroke="#FFD700" strokeWidth="2" />
    <circle cx="50" cy="15" r="5" fill="#FFD700" />
  </svg>
);

const getTeaIllustration = (teaName, index) => {
  // Create varied illustrations based on tea name or index
  if (teaName.includes("Bag")) return <TeaBagSVG />;
  if (teaName.includes("Golden")) return <GoldenTeaSVG />;
  if (teaName.includes("Royal")) return <RoyalTeaSVG />;
  
  // For classics, alternate between leaf and cup designs with varied colors
  const colors = ["#388E3C", "#558B2F", "#2E7D32", "#1B5E20", "#33691E"];
  const secondaryColors = ["#4CAF50", "#689F38", "#43A047", "#2E7D32", "#558B2F"];
  const cupColors = ["#795548", "#6D4C41", "#5D4037", "#4E342E", "#3E2723"];
  
  return index % 2 === 0 ? 
    <TeaLeafSVG color={colors[index % colors.length]} secondaryColor={secondaryColors[index % secondaryColors.length]} /> : 
    <TeaCupSVG color={cupColors[index % cupColors.length]} />;
};

const teaData = {
  classic: [
    { name: 'Pekoe Tea', brand: 'Lantana', weights: ['6–10 kg', '11–15 kg', '16–20 kg'], price: '$15' },
    { name: 'CTC Tea', brand: 'Lantana', weights: ['1–5 kg', '6–10 kg', '11–15 kg'], price: '$20' },
    { name: 'DUST Tea', brand: 'Lantana', weights: ['1–5 kg', '6–10 kg'], price: '$20' },
    { name: 'DUST1 Tea', brand: 'Lantana', weights: ['1–5 kg', '6–10 kg'], price: '$20' },
    { name: 'BOPF Tea', brand: 'Lantana', weights: ['1–5 kg', '6–10 kg'], price: '$20' },
    { name: 'FF Tea Bag', brand: 'Lantana', weights: ['1–5 kg', '6–10 kg'], price: '$25' },
    { name: 'BOPF EX SPECIAL1 Tea', brand: 'Lantana', weights: ['1–5 kg', '6–10 kg'], price: '$30' },
    { name: 'OPA Tea', brand: 'Lantana', weights: ['6–10 kg', '11–15 kg'], price: '$15' },
    { name: 'BOP Tea', brand: 'Lantana', weights: ['6–10 kg', '11–15 kg'], price: '$20' },
    { name: 'OP 1 Tea', brand: 'Lantana', weights: ['6–10 kg', '11–15 kg'], price: '$20' },
    { name: 'OP Tea', brand: 'Lantana', weights: ['6–10 kg', '11–15 kg'], price: '$15' },
  ],
  premium: [
    { name: 'Tranquil Twist', brand: 'Boswin', price: '$2500' },
    { name: 'Golden Elegance', brand: 'Boswin', price: '$800' },
    { name: 'Serene Fusion', brand: 'Boswin', price: '$1500' },
    { name: 'Royal Essence', brand: 'Boswin', price: '$1800' },
    { name: 'Pure Bliss', brand: 'Boswin', price: '$750' },
  ],
};

export default function TeaProductsPage() {
  const [activeCollection, setActiveCollection] = useState('classic');
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="bg-gradient-to-b from-green-50 to-amber-50 min-h-screen py-10 px-6 md:px-16">
      {/* Hero Section */}
      <div className="relative mb-16 bg-green-800 rounded-xl overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Tea pattern background */}
          <svg width="100%" height="100%" className="absolute inset-0">
            <pattern id="teaPattern" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <circle cx="10" cy="10" r="1.5" fill="#fff" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#teaPattern)" />
          </svg>
        </div>
        <div className="relative z-10 py-16 px-8 text-center">
          <h1 className="text-5xl font-bold text-amber-50 mb-4">Loolecondera Tea Collections</h1>
          <p className="text-xl text-amber-50/90 max-w-2xl mx-auto">
            Exquisite teas sourced from the finest gardens around the world
          </p>
        </div>
      </div>

      {/* Collection Tabs */}
      <div className="flex justify-center mb-12">
        <div className="bg-white rounded-full shadow-md inline-flex p-1">
          <button 
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              activeCollection === 'classic' 
                ? 'bg-green-700 text-white' 
                : 'text-gray-700 hover:bg-green-50'
            }`}
            onClick={() => setActiveCollection('classic')}
          >
            Classic Collection
          </button>
          <button 
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              activeCollection === 'premium' 
                ? 'bg-amber-700 text-white' 
                : 'text-gray-700 hover:bg-amber-50'
            }`}
            onClick={() => setActiveCollection('premium')}
          >
            Premium Collection
          </button>
        </div>
      </div>

      {/* Collection Display */}
      <div className="max-w-7xl mx-auto">
        {activeCollection === 'classic' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teaData.classic.map((tea, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ${
                  hoveredCard === `classic-${i}` ? 'scale-105 shadow-xl' : ''
                }`}
                onMouseEnter={() => setHoveredCard(`classic-${i}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="h-48 bg-green-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32">
                      {getTeaIllustration(tea.name, i)}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-gray-800">{tea.name}</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {tea.brand}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {tea.weights.map((weight, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        {weight}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-green-700 font-bold text-lg">{tea.price}</p>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-medium py-1 px-3 rounded-lg transition-colors">
                      Notify Me
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeCollection === 'premium' && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {teaData.premium.map((tea, i) => (
              <div 
                key={i} 
                className={`bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ${
                  hoveredCard === `premium-${i}` ? 'scale-105 shadow-xl' : ''
                }`}
                onMouseEnter={() => setHoveredCard(`premium-${i}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="h-56 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40">
                      {getTeaIllustration(tea.name, i)}
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white bg-opacity-80 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-800">{tea.name}</h3>
                    <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {tea.brand}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">Limited edition premium tea</p>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-amber-700 font-bold text-xl">{tea.price}</p>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-green-200">
        <div className="text-center text-gray-600">
          <p>© 2025 Loolecondera Tea Estate. All rights reserved.</p>
          <p className="mt-2 text-sm">The finest premium teas since 1867</p>
        </div>
      </footer>
    </div>
  );
}
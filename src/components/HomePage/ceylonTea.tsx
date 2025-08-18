import React from "react";
import TeaLeaves from "../../assets/Homepage/green-tea-bud-leaves-green-tea-plantations-morning_1x.jpg";

// Functional component with proper type annotation
const CeylonTea: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen flex items-center justify-center overflow-hidden">
      <div className="bg-fixed bg-cover bg-center">
        {/* Background Image */}
        <img
          src={TeaLeaves}
          alt="Ceylon Tea"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl px-6 py-12 md:px-16 text-center">
        <div className="text-3xl font-extrabold text-[#66ff01] mb-6 tracking-widest">
          LOOLECONDERA CEYLON TEA
        </div>

        <div className="space-y-6 text-lg  text-white max-w-3xl">
          <p>
            Pure Ceylon tea, also known as Sri Lankan tea, is a type of black
            tea that is grown and produced exclusively in Sri Lanka. Sri Lanka
            is one of the largest tea producers in the world, and tea production
            is a major industry in the country.
          </p>
          <p>
            Ceylon tea is known for its high quality and distinct flavor,
            resulting from the unique combination of the region's climate, soil,
            and elevation. The tea is grown in the highlands of Sri Lanka, which
            are located in the central and southern parts of the island.
          </p>
          <p>
            Ceylon tea is typically made from the plant, which is native to
            China but was brought to Sri Lanka in the 19th century by British
            colonialists. Today, Ceylon tea is produced in several different
            regions of Sri Lanka, each with its own unique flavor and character.
          </p>
          <p>
            Pure Ceylon tea is available in several grades, ranging from
            high-quality whole-leaf teas to lower-grade teas used in tea bags.
            Ceylon tea is known for its rich, full-bodied flavor and aroma, and
            is a popular choice for both hot and iced tea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CeylonTea;

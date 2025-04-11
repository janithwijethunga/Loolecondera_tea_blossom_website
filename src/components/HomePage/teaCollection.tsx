import React from "react";
import { Typography } from "antd";
import { motion } from "framer-motion";

import OP from "../../assets/Homepage/opImg.jpg";
import BOP from "../../assets/Homepage/bopImg.jpg";
import FBOP from "../../assets/Homepage/fbopImg.jpg";
import FBOPEXTRA from "../../assets/Homepage/fbopSpecialImg.jpg";
import PEKOE from "../../assets/Homepage/pekoeImg.jpg";
import DUST from "../../assets/Homepage/dustImg.jpg";
import SILVERTIPS from "../../assets/Homepage/silverImg.jpg";
import GOLDENTIPS from "../../assets/Homepage/goldenImg.jpg";

const { Title, Text } = Typography;

const TeaCollection = () => {
  const teas = [
    {
      id: 1,
      name: "OP",
      price: "$1.20",
      description:
        "Orange Pekoe (OP) is one of the higher leaf grades in the tea classification system. It represents whole, unbroken tea leaves that are typically harvested from the top two leaves and a bud of the tea plant's new growth.",
      imageUrl: OP,
    },
    {
      id: 2,
      name: "BOP",
      price: "$1.20",
      description:
        "Broken leaves in BOP grade tea can brew a stronger, more robust flavor compared to whole leaf teas. ",
      imageUrl: BOP,
    },
    {
      id: 3,
      name: "FBOP",
      price: "$1.30",
      description:
        "The inclusion of young buds or tips adds complexity and a certain delicacy to the flavor profile. ",
      imageUrl: FBOP,
    },
    {
      id: 4,
      name: "FBOP EXTRA SPECIAL 1",
      price: "$1.30",
      description:
        "(FBOP Special 1) is a specific tea grade that indicates a particular quality of tea leaves within the Flowery Broken Orange Pekoe (FBOP) category. The (Special 1) designation suggests that this grade is of higher quality compared to standard FBOP teas.",
      imageUrl: FBOPEXTRA,
    },
    {
      id: 5,
      name: "PEKOE",
      price: "$1.30",
      description:
        "Pekoe grade tea leaves are known for producing a milder and more delicate cup of tea compared to coarser leaves. ",
      imageUrl: PEKOE,
    },
    {
      id: 6,
      name: "DUST #1",
      price: "$1.20",
      description:
        "Because of the small particle size, Dust 1 tea brews quickly and produces a strong, robust cup of tea.",
      imageUrl: DUST,
    },
    {
      id: 7,
      name: "SILVER TIPS",
      price: "$1.30",
      description:
        "The delicate buds are minimally processed, usually just withering and drying, to preserve their natural characteristics. The flavor is light, subtle, and often described as floral and slightly sweet.",
      imageUrl: SILVERTIPS,
    },
    {
      id: 8,
      name: "GOLDEN TIPS",
      price: "$1.30",
      description:
        "Golden Tips tea is renowned for its exquisite flavor and aroma. The buds are carefully plucked during specific harvesting periods to ensure their quality. ",
      imageUrl: GOLDENTIPS,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-14">
        <Text className="text-red-500 uppercase text-sm tracking-widest font-medium">
          Loolecondera Tea Collections
        </Text>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
          Classic Tea Collection
        </h2>
        <div className="h-1 w-16 bg-red-500 mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teas.map((tea, index) => (
          <motion.div
            key={tea.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center bg-white shadow-lg hover:shadow-xl transition rounded-2xl overflow-hidden"
          >
            <img
              src={tea.imageUrl}
              alt={tea.name}
              className="w-full md:w-48 h-48 object-cover md:rounded-l-2xl"
            />
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {tea.name}
                  </h3>
                </div>
                <span className="text-red-600 font-bold text-lg">
                  {tea.price}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{tea.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeaCollection;

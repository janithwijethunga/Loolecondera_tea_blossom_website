import React from "react";
import Background from "../assets/bg1.jpg";
import Img1 from "../assets/bestProvider.png";
import Img2 from "../assets/ceylonTea.png";
import {
  CoffeeOutlined,
  SafetyCertificateOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

const specialties = [
  {
    icon: (
      <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-yellow-400">
        <CoffeeOutlined className="text-yellow-400 text-xl" />
      </div>
    ),
    title: "BRIGHT AND FLAVORFUL",
    description:
      "Ceylon tea has a bright, golden color and a crisp, refreshing taste that is distinctive from other black teas. The tea has a medium body and a bold, slightly citrusy flavor that is well-balanced and not too strong.",
  },
  {
    icon: (
      <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-yellow-400">
        <SafetyCertificateOutlined className="text-yellow-400 text-xl" />
      </div>
    ),
    title: "ETHICAL AND SUSTAINABLE",
    description:
      "Many tea estates in Sri Lanka are committed to ethical and sustainable practices, such as using organic farming methods, providing fair wages and working conditions for workers, and supporting local communities.",
  },
  {
    icon: (
      <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-yellow-400">
        <EnvironmentOutlined className="text-yellow-400 text-xl" />
      </div>
    ),
    title: "SINGLE-ORIGIN TEA",
    description:
      "Ceylon tea is a single-origin tea, meaning that it is grown and produced in Sri Lanka. This gives it a unique flavor profile that is specific to the region and the local growing conditions.",
  },
  {
    icon: (
      <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-yellow-400">
        <GlobalOutlined className="text-yellow-400 text-xl" />
      </div>
    ),
    title: "UNIQUE TEA REGIONS",
    description:
      "Sri Lanka has several distinct tea-growing regions, each with its own unique flavor profile. These regions include Uva, Dimbula, and Nuwara Eliya, each of which produces tea with its own distinct character and taste.",
  },
  {
    icon: (
      <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-yellow-400">
        <AppstoreOutlined className="text-yellow-400 text-xl" />
      </div>
    ),
    title: "VERSATILE",
    description:
      "Ceylon tea can be enjoyed plain or with a splash of milk or lemon, making it a versatile tea that can be enjoyed any time of day. It is also used in many blended teas, such as Earl Grey and English Breakfast.",
  },
];

const Specialties = () => {
  return (
    <div
      className="bg-fixed bg-center bg-cover py-20"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 max-w-7xl mx-auto items-center">
        {/* Left Side - Images */}
        <div className="flex flex-col items-center justify-center space-y-10">
          <img
            src={Img1}
            alt="Specialties1"
            className="w-72 lg:w-96 hover:scale-105 transition"
          />
          <img
            src={Img2}
            alt="Specialties2"
            className="w-52 lg:w-60 hover:scale-105 transition"
          />
        </div>

        {/* Right Side - Features */}
        <div className="text-white space-y-10">
          {specialties.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-3xl">{item.icon}</div>
              <div>
                <h3 className="text-xl font-extrabold text-yellow-400 mb-2 uppercase">
                  {item.title}
                </h3>
                <p className="text-base text-white/90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialties;

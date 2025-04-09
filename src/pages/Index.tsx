import React from "react";
import HeroBanner from "../components/HomePage/HeroBanner";
import TeaCard from "../components/HomePage/TeaCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBannerImage from "../assets/Hero cover_1x.jpg";
import Banner2 from "../assets/red banner_1x.jpg";
import Banner3 from "../assets/tea-plantations-green-mountain-fields-wallpaper-preview_1x.jpg";
import CeylonBlackTea from "../assets/CeylonBlackTea.png";
import CeylonGreenTea from "../assets/CeylonGreenTea.png";
import CeylonOolongTea from "../assets/CeylonOolongTea.png";
import CeylonWhiteTea from "../assets/CeylonWhiteTea.png";
import CeylonTea from "../components/HomePage/ceylonTea";
import Specialist from "../components/HomePage/specialties"
import History from "../components/HomePage/history";
import TeaState from "../components/HomePage/teaState";
import WorldWide from "../components/HomePage/wordwide"

const Index = () => {
  const teaTypes = [
    {
      title: "Ceylon Black Tea",
      description:
        "Black tea is the most common variety of Ceylon tea and is known for its bold, full-bodied flavor and rich aroma. It is typically served hot and can be enjoyed plain or with milk and sugar.",
      image: CeylonBlackTea,
      link: "/products",
    },
    {
      title: "Ceylon Green Tea",
      description:
        "Green tea is a lighter, milder variety of Ceylon tea that is known for its delicate, vegetal flavor and subtle aroma. It is typically served hot and can be enjoyed plain or with a squeeze of lemon.",
      image: CeylonGreenTea,
      link: "/products",
    },
    {
      title: "Ceylon Oolong Tea",
      description:
        "Oolong tea is often prized for its complex and nuanced taste. It can have floral, fruity, and even nutty notes, depending on the specific variety and processing methods. The flavor profile can range from light and delicate to rich and robust.",
      image: CeylonOolongTea,
      link: "/products",
    },
    {
      title: "Ceylon White Tea",
      description:
        "White tea is a rare and delicate variety of Ceylon tea that is made from the youngest tea leaves and buds. It is known for its light, sweet flavor and floral aroma and is typically served hot.",
      image: CeylonWhiteTea,
      link: "/products",
    },
  ];

  return (
    <div>
      <HeroBanner backgroundImage={heroBannerImage} />

      <div>
        <img src={Banner2} alt="Hero Banner" className="w-full object-cover" />
      </div>

      {/* Premium Tea Section with Banner 3 Background */}
      <section className="relative overflow-hidden">
        <img
          src={Banner3}
          alt="Hero Banner"
          className="absolute w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div className="relative z-10 tea-container py-20">
          <div className="text-center mb-14">
            <h2 className="section-title inline-block mx-auto after:left-1/4 after:right-1/4 after:w-1/2 text-white text-3xl font-bold tracking-wide">
              Our Premium Teas
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-white mt-4 opacity-90">
              Discover the exceptional quality and distinctive character of
              Loolecondera's premium Ceylon teas, cultivated in the pristine
              highlands of Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teaTypes.map((tea, index) => (
              <TeaCard
                key={tea.title}
                title={tea.title}
                description={tea.description}
                imageSrc={tea.image}
                link={tea.link}
                animationDelay={index}
              />
            ))}
          </div>
        </div>
      </section>

      <div>
        <CeylonTea />
      </div>
      <div>
        <Specialist />
      </div>
      <div>
        <History />
      </div>
      <div>
        <TeaState />
      </div>
      <div>
<WorldWide />
      </div>

      {/* Heritage Section */}
      <section className="py-20 bg-white">
        <div className="tea-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="section-title text-tea-dark-green text-3xl font-bold mb-4">
                Our Heritage
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Since 1867, Loolecondera has been at the heart of Ceylon tea
                production. Our tea estates, nestled in the lush highlands of
                Sri Lanka, produce some of the world's finest teas, celebrated
                for their exceptional quality and distinctive character.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                With generations of expertise and a commitment to sustainable
                practices, we continue to honor the legacy of James Taylor, the
                pioneer who established the first tea plantation in Sri Lanka.
              </p>
              <Link
                to="/history"
                className="tea-btn inline-flex items-center bg-tea-gold text-tea-dark-green px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
              >
                Explore Our History
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            <div
              className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80"
                alt="Tea plantation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-white font-playfair text-xl">
                  Established 1867
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-tea-dark-green text-white">
        <div className="tea-container text-center">
          <h2 className="section-title text-white after:bg-tea-gold inline-block mx-auto after:left-1/4 after:right-1/4 after:w-1/2 text-3xl font-semibold">
            Experience Ceylon's Finest
          </h2>
          <p className="max-w-3xl mx-auto text-lg mt-4 mb-10 opacity-90">
            Loolecondera offers more than just exceptional tea. Discover our
            specialized tea tours, learn about our sustainable farming
            practices, and explore the unique characteristics that make Ceylon
            tea so special.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/specialties"
              className="tea-btn bg-tea-gold hover:bg-yellow-400 text-tea-dark-green px-6 py-2 rounded-full font-semibold"
            >
              Our Specialties
            </Link>
            <Link
              to="/touring"
              className="tea-btn bg-transparent hover:bg-white/10 border border-white px-6 py-2 rounded-full font-semibold"
            >
              Tea Tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

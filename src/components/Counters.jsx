import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your images
import speedImg from "../assets/img1.png";
import webImg from "../assets/img2.jpg";
import erpImg from "../assets/img3.jpg";

const cards = [
  {
    title: "Speed Optimized for All Users",
    description:
      "At EEC, we understand that internet speeds can vary. We've made our app lightweight and optimized for fast loading, so you can access content quickly, even on slower connections.",
    image: speedImg,
  },
  {
    title: "Web-Based Convenience",
    description:
      "EEC is fully web-based, requiring no software installation. Access the platform from any device with internet, ensuring flexibility and convenience for all users.",
    image: webImg,
  },
  {
    title: "Intuitive Interface",
    description:
      "EEC offers a user-friendly, intuitive platform ideal for students, teachers, and parents. No technical skills required—just simple, seamless navigation.",
    image: erpImg,
  },
];

const Counters = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-6">
      {/* Section Title */}
      <h2
        className="text-4xl font-extrabold text-center mb-16 yellow-400 font-tektur tracking-tight"
        data-aos="fade-down"
        
      >
        User-Centric Design & Seamless Access
      </h2>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-100 relative overflow-hidden"
            data-aos="zoom-in-up"
            data-aos-delay={index * 200}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/30 to-black-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

            {/* Image */}
            <div className="w-full h-44 mb-6 flex justify-center items-center overflow-hidden rounded-xl bg-gray-50">
              <img
                src={card.image}
                alt={card.title}
                className="object-contain h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-yellow-400 mb-2 group-hover:text-black-900 transition-colors">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counters;

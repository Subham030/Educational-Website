import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ParallaxBanner } from "react-scroll-parallax";
import landingImage from "../assets/Features.jpg";
import {
  FaRobot,
  FaLightbulb,
  FaMobileAlt,
  FaChartLine,
} from "react-icons/fa";

// Feature content
const features = [
  {
    title: "AI-Driven Learning",
    description:
      "EEC utilizes advanced AI to deliver tailored learning experiences, adapting to each student’s unique needs and pace. This dynamic approach ensures focused academic growth and deeper understanding.",
    icon: <FaRobot className="text-5xl text-blue-500" />,
  },
  {
    title: "Interactive Content",
    description:
      "With multimedia-rich, real-world-based lessons, EEC transforms traditional learning into an immersive experience. Students engage with content that informs and inspires.",
    icon: <FaLightbulb className="text-5xl text-purple-500" />,
  },
  {
    title: "Flexible Access",
    description:
      "EEC allows students to access learning materials anytime, anywhere, on any device — adapting to their schedule, lifestyle, and pace for uninterrupted learning.",
    icon: <FaMobileAlt className="text-5xl text-gray-700" />,
  },
  {
    title: "Real-Time Insights",
    description:
      "AI-driven analytics track student progress and provide timely insights. EEC ensures educators and learners stay aligned with their goals through continuous feedback.",
    icon: <FaChartLine className="text-5xl text-green-500" />,
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="bg-neutral-100 text-gray-800">
      {/* Parallax Header */}
      <ParallaxBanner
        layers={[{ image: landingImage, speed: -20 }]}
        className="h-[80vh]"
      >
        <div className="flex items-center justify-center h-full bg-black/60">
          <h1
            className="text-white text-5xl font-extrabold text-center drop-shadow-lg px-6 tracking-tight"
            data-aos="fade-down"
            style={{ textShadow: "2px 2px 4px rgb(10, 11, 12)" }}
          >
            Features
          </h1>
        </div>
      </ParallaxBanner>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white/30 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-yellow-100"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Glow Background Effect */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-300/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}
              <div className="flex justify-center mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-center text-gray-900 mb-3 tracking-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

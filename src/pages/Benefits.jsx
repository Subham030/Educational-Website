import { ParallaxBanner } from "react-scroll-parallax";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLaptopCode,
  FaRobot,
  FaChartBar,
  FaStream,
  FaClipboardList,
  FaComments,
  FaCubes,
  FaTachometerAlt,
  FaMoneyBillWave,
  FaCloud,
} from "react-icons/fa";
import landingImage from "../assets/Benefits.jpg";

const benefits = [
  {
    title: "Integrated ERP & LMS",
    description:
      "EEC seamlessly combines ERP and LMS functionalities, streamlining school management and delivering an engaging, personalized learning experience.",
    icon: <FaLaptopCode className="text-3xl text-blue-600" />,
  },
  {
    title: "AI & ML-Powered Personalization",
    description:
      "AI personalizes learning paths, adapting to each student's strengths and weaknesses with ML-enhanced precision.",
    icon: <FaRobot className="text-3xl text-purple-600" />,
  },
  {
    title: "Real-Time Performance Analytics",
    description:
      "Track progress instantly and generate detailed analytics for informed decisions.",
    icon: <FaChartBar className="text-3xl text-green-600" />,
  },
  {
    title: "Streamlined Administrative Processes",
    description:
      "Automate scheduling, payroll, and reports with ease for seamless school operations.",
    icon: <FaStream className="text-3xl text-orange-500" />,
  },
  {
    title: "Smart Exam Reporting",
    description:
      "Use AI to schedule, evaluate and generate smart insights from exams.",
    icon: <FaClipboardList className="text-3xl text-red-500" />,
  },
  {
    title: "AI-Driven Communication & Collaboration",
    description:
      "Chatbots and real-time updates connect students, teachers and parents better than ever.",
    icon: <FaComments className="text-3xl text-pink-500" />,
  },
  {
    title: "Adaptive Learning Tools",
    description:
      "Engaging, gamified content tailored to students’ pace and interests.",
    icon: <FaCubes className="text-3xl text-yellow-500" />,
  },
  {
    title: "Centralized Dashboards",
    description:
      "Monitor performance, fees, and attendance in one place.",
    icon: <FaTachometerAlt className="text-3xl text-cyan-600" />,
  },
  {
    title: "Comprehensive Financial Management",
    description:
      "Automated invoicing, reminders and secure payment tracking.",
    icon: <FaMoneyBillWave className="text-3xl text-emerald-600" />,
  },
  {
    title: "Cloud-Based Access & Security",
    description:
      "Reliable cloud infrastructure ensures 24/7 access and robust data protection.",
    icon: <FaCloud className="text-3xl text-gray-700" />,
  },
];

const Benefits = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="bg-white text-gray-800">
      {/* Parallax Header */}
      <ParallaxBanner
        layers={[{ image: landingImage, speed: -20 }]}
        className="h-[80vh]"
      >
        <div className="flex items-center justify-center h-full bg-black/50">
          <h1
            className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-xl px-6"
            data-aos="fade-down"
            style={{ textShadow: "2px 2px 4px rgb(14, 14, 17)" }}
          >
            Benefits of EEC
          </h1>
        </div>
      </ParallaxBanner>

      {/* Benefits Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const isLastOdd =
              benefits.length % 3 === 1 && index === benefits.length - 1;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-[0_0_15px_rgba(255,222,0,0.4)] hover:scale-[1.03] transition-all duration-300 ${
                  isLastOdd ? "lg:col-span-full lg:flex lg:justify-center" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

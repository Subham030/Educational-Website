import { useState, useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import {
  FaGraduationCap,
  FaUserGraduate,
  FaBrain,
  FaBusAlt,
  FaClipboardList,
  FaWallet,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";
import Modal from "react-modal";
import landingImage from "../assets/services.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

Modal.setAppElement("#root");

const services = [
  {
    icon: <FaGraduationCap className="text-green-600 text-5xl" />,
    title: "Academics Management",
    points: [
      "Personalized Learning Paths",
      "Progress Tracking",
      "Lesson & Resource Management",
      "Interactive Assessments",
    ],
  },
  {
    icon: <FaUserGraduate className="text-blue-600 text-5xl" />,
    title: "Student Management",
    points: [
      "Personalized Dashboard",
      "Progress Monitoring",
      "Reward System",
      "Learning Analytics",
    ],
  },
  {
    icon: <FaBrain className="text-purple-600 text-5xl" />,
    title: "AI and ML features of EEC",
    points: [
      "Tailored Learning Journeys",
      "Smart Progress Insights",
      "Predictive Performance Alerts",
      "Instant Automated Feedback",
    ],
  },
  {
    icon: <FaBusAlt className="text-yellow-500 text-5xl" />,
    title: "E-Library and Transportation",
    points: [
      "Digital E-Library Access",
      "Real-Time Fleet Tracking",
      "Enhanced Safety Features",
      "GPS-Based Student Tracking",
    ],
  },
  {
    icon: <FaClipboardList className="text-yellow-500 text-5xl" />,
    title: "Exam Management",
    points: [
      "Seamless Exam Scheduling",
      "Secure Online Assessments",
      "Instant Result Generation",
      "Performance Analytics",
    ],
  },
  {
    icon: <FaWallet className="text-rose-500 text-5xl" />,
    title: "HR Management",
    points: [
      "Attendance Monitoring",
      "Leave Management",
      "HR Insights",
      "Employee Records",
    ],
  },
  {
    icon: <FaMoneyBillWave className="text-orange-500 text-5xl" />,
    title: "Finance Management",
    points: [
      "Fee Payment Management",
      "Financial Due Reports",
      "Payment History Reports",
      "Payment Reminders",
    ],
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };


  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="bg-white text-gray-800 relative">
      {/* Parallax Header */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-white/30 backdrop-blur-sm"></div>
      <ParallaxBanner
        layers={[{ image: landingImage, speed: -20 }]}
        className="h-[80vh]"
      >
        <div className="flex items-center justify-center h-[80vh] bg-black/40">
          <h1
            className="text-white text-4xl sm:text-5xl font-bold text-center drop-shadow-lg px-4"
            data-aos="fade-down"
            style={{ textShadow: "2px 2px 4px rgba(14, 14, 16, 0.97)" }}
          >
            Our Services
          </h1>
        </div>
      </ParallaxBanner>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const isLastSingle = services.length % 3 === 1 && index === services.length - 1;

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-md p-6 text-center cursor-pointer transition duration-300 hover:shadow-xl w-full max-w-sm ${
                  isLastSingle ? "col-span-full mx-auto" : ""
                }`}
                onClick={() => handleToggle(index)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Icon with animation */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isActive ? "-translate-y-3" : ""
                  } group-hover:-translate-y-3 group-hover:animate-pulse`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="mt-4 font-semibold text-gray-800 text-lg">
                  {service.title}
                </h3>

                {/* Description Points */}
                <ul
                  className={`mt-3 text-sm text-gray-700 space-y-2 text-left transition-opacity duration-300 ease-in-out ${
                    isActive
                      ? "opacity-100 block"
                      : "opacity-0 hidden sm:group-hover:block sm:opacity-100"
                  }`}
                >
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        className="max-w-xl mx-auto mt-32 bg-white p-6 rounded-xl shadow-lg relative"
        overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-start z-50 px-4"
      >
        {selectedService && (
          <>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl font-bold"
            >
              &times;
            </button>
            <div className="text-center">
              <div className="text-4xl mb-4">{selectedService.icon}</div>
              <h2 className="text-2xl font-semibold mb-2">
                {selectedService.title}
              </h2>
              <ul className="text-gray-700 text-sm space-y-2 mt-4 text-left">
                {selectedService.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Services;

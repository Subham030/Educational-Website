import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "react-modal";
import { ParallaxBanner } from "react-scroll-parallax";
import {
  FaMoneyCheckAlt,
  FaBusAlt,
  FaUserTie,
  FaMobileAlt,
  FaFileAlt,
  FaComments,
  FaLaptopCode,
} from "react-icons/fa";
import landingImage from "../assets/Modules.jpg";

Modal.setAppElement("#root");

const modules = [
  {
    title: "Fee Collection",
    description:
      "Manage secure fee collection, dues, and receipts digitally.",
    icon: <FaMoneyCheckAlt className="text-blue-600 text-4xl" />,
    details:
      "Advanced fee scheduling, online payment integration, auto-reminders for dues, and real-time financial dashboards.",
  },
  {
    title: "Transport & GPS",
    description:
      "Track buses and student movement in real-time.",
    icon: <FaBusAlt className="text-green-600 text-4xl" />,
    details:
      "Live GPS tracking, route mapping, student check-ins, and driver performance reports.",
  },
  {
    title: "HR Management",
    description:
      "Manage staff data, attendance, leaves, and payroll.",
    icon: <FaUserTie className="text-purple-600 text-4xl" />,
    details:
      "Centralize HR records, auto-generate payslips, leave workflows, and employee performance analytics.",
  },
  {
    title: "Mobile & Web App",
    description:
      "Modern responsive apps for all stakeholders.",
    icon: <FaMobileAlt className="text-pink-600 text-4xl" />,
    details:
      "Cross-platform apps for teachers, students, and parents with real-time notifications and attendance updates.",
  },
  {
    title: "Exam Management",
    description:
      "Conduct online and offline exams seamlessly.",
    icon: <FaFileAlt className="text-indigo-600 text-4xl" />,
    details:
      "Secure exam portal, multiple question formats, result generation, and performance analytics.",
  },
  {
    title: "Parent Communication",
    description:
      "Bridge the gap between parents and teachers.",
    icon: <FaComments className="text-orange-500 text-4xl" />,
    details:
      "Broadcast alerts, chat modules, calendar events, and guardian engagement reports.",
  },
];

const Modules = () => {
  const [active, setActive] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const handleToggle = (index) => {
    setActive(prev => (prev === index ? null : index));
  };

  const openModal = (module) => {
    setSelectedModule(module);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedModule(null);
  };

  return (
    <section className="bg-white text-gray-800">
      {/* Parallax Header */}
      <ParallaxBanner layers={[{ image: landingImage, speed: -20 }]} className="h-[80vh]">
        <div className="flex items-center justify-center h-full bg-black/40">
          <h1
            className="text-white text-4xl md:text-5xl font-bold text-center px-4 drop-shadow-lg"
            data-aos="fade-down"
            style={{ textShadow: "2px 2px 4px rgb(17, 17, 19)" }}
          >
            Explore Our Modules
          </h1>
        </div>
      </ParallaxBanner>

      {/* Modules Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-md p-6 text-center cursor-pointer transition duration-300 hover:shadow-xl"
              onClick={() => handleToggle(index)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  active === index ? "-translate-y-3" : ""
                } group-hover:-translate-y-3 group-hover:animate-pulse`}
              >
                {mod.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 font-semibold text-gray-800">{mod.title}</h3>

              {/* Description */}
              <p
                className={`mt-3 text-sm text-gray-700 transition-opacity duration-300 ease-in-out ${
                  active === index ? "opacity-100 block" : "opacity-0 hidden sm:group-hover:block sm:opacity-100"
                }`}
              >
                {mod.description}
              </p>

              {/* Learn More Button */}
              {active === index && (
                <button
                  onClick={() => openModal(mod)}
                  className="mt-4 text-sm px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
                >
                  Learn More
                </button>
              )}
            </div>
          ))}
        </div>

        {/* LMS CTA */}
        <div
          className="mt-14 bg-gray-900 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6"
          data-aos="fade-up"
          data-aos-delay={modules.length * 100}
        >
          <div className="text-4xl bg-white text-gray-900 p-4 rounded-full animate-bounce">
            <FaLaptopCode />
          </div>
          <div>
            <h3 className="text-xl font-bold">Learning Management Software</h3>
            <p className="text-sm mt-1 text-gray-300">
              Adaptive, gamified, and AI-integrated LMS with progress tracking, lesson planning and student analytics.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        className="max-w-xl mx-auto mt-32 bg-white p-6 rounded-xl shadow-lg relative"
        overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-start z-50 px-4"
      >
        {selectedModule && (
          <>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl font-bold"
            >
              &times;
            </button>
            <div className="text-center">
              <div className="text-4xl mb-4">{selectedModule.icon}</div>
              <h2 className="text-2xl font-semibold mb-2">{selectedModule.title}</h2>
              <p className="text-gray-700 text-sm leading-relaxed">{selectedModule.details}</p>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Modules;

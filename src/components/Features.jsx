import { FaBrain, FaGraduationCap, FaChalkboardTeacher, FaChartLine } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Features.css";

const features = [
  {
    icon: <FaBrain className="text-yellow-400 text-6xl floating-icon" />,
    title: "AI-Powered Learning Insights",
    desc: "EEC utilizes artificial intelligence to analyze student progress and learning patterns, offering personalized recommendations that enhance each student’s learning journey.",
  },
  {
    icon: <FaGraduationCap className="text-yellow-400 text-6xl floating-icon" />,
    title: "Adaptive Learning Paths",
    desc: "With machine learning algorithms, EEC tailors educational content to the individual needs of each student, ensuring they learn at their own pace and level of understanding.",
  },
  {
    icon: <FaChalkboardTeacher className="text-yellow-400 text-6xl floating-icon" />,
    title: "Advanced LMS Features",
    desc: "EEC’s Learning Management System (LMS) is designed for the future of education, with tools for interactive lessons, gamified content, and real-time assessments that keep students engaged.",
  },
  {
    icon: <FaChartLine className="text-yellow-400 text-6xl floating-icon" />,
    title: "Data-Driven Performance Monitoring",
    desc: "Through AI and machine learning, EEC provides educators with real-time performance tracking, highlighting areas of improvement and helping create customized learning interventions for each student.",
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });

    // Optional: improve repeatability
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  return (
    <section id="features" className="bg-gray-100 py-20 px-6 text-center font-tektur">
      <h2 className="text-4xl font-bold mb-12 text-gray-800" data-aos="fade-up">Why EEC?</h2>
      
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="relative group flex flex-col items-center"
            data-aos="zoom-in"
            data-aos-delay={i * 150}
            data-aos-once="false"
          >
            {/* Floating Icon */}
            <div
              className="icon-floating text-yellow-400 text-6xl mb-4 group-hover:animate-float"
              data-aos="fade-down"
              data-aos-delay={i * 150}
              data-aos-once="false"
            >
              {f.icon}
            </div>

            {/* Flip Card */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[#fffdf5] rounded-xl p-6 shadow-md flex justify-center items-center">
                  <h3 className="text-lg font-bold text-center">{f.title}</h3>
                </div>
                <div className="flip-card-back bg-gradient-to-br from-yellow-100 via-white to-yellow-200 rounded-xl p-6 flex justify-center items-center shadow-lg">
                  <p className="text-sm text-gray-800">{f.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

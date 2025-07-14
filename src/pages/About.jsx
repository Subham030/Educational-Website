import { ParallaxBanner } from 'react-scroll-parallax';
import aboutImage from "../assets/about.jpg";
import ERP from "../assets/erp_about.jpg";
import LMS from "../assets/lms.jpg";

const About = () => {
  return (
    <section id="about" className="bg-gray-100">
      {/* Parallax Hero Section */}
      <ParallaxBanner
        layers={[{ image: aboutImage, speed: -20 }]}
        className="h-[80vh]"
      >
        <div className="flex items-center justify-center h-full bg-black/40">
          <h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold text-center px-4 drop-shadow-lg"
            data-aos="fade-down"
            style={{ textShadow: "2px 2px 4px rgb(10, 10, 12)" }}
          >
            About Us
          </h1>
        </div>
      </ParallaxBanner>

      {/* Intro Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
        <p className="text-lg leading-8" data-aos="fade-up">
          <strong>Welcome to Electronic Educare (EEC)</strong>, where innovation meets education. EEC is a comprehensive platform that combines a state-of-the-art Learning Management System (LMS) with robust Enterprise Resource Planning (ERP) solutions tailored for schools. Our mission is to redefine education by blending technology with teaching, creating an environment where students are inspired to learn and grow.
        </p>
      </div>

      {/* LMS Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          <img
            src={LMS}
            alt="LMS System"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-4">LMS System</h2>
            <p className="text-lg leading-7 text-gray-700">
              EEC’s LMS brings a new era of technology-driven education, making learning engaging, personalized, and interactive. With features like gamified content, adaptive learning paths, and AI-powered insights, we ensure that students are not just learning but are excited to explore and understand concepts at their own pace. Teachers are equipped with dynamic tools to create compelling lessons, track progress, and meet the unique needs of every learner effectively.
            </p>
          </div>
        </div>
      </div>

      {/* ERP Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-4">ERP</h2>
            <p className="text-lg leading-7 text-gray-700">
              EEC also provides a powerful ERP solution that streamlines school administration. From attendance tracking to fee management and performance reporting, our ERP simplifies every operational aspect for administrators. Real-time insights, automated workflows, and efficient communication channels ensure smooth coordination across all stakeholders. By combining LMS and ERP on a single platform, EEC offers schools an all-in-one solution for modern education management. Whether it’s enhancing the learning experience or optimizing administrative processes, we are committed to empowering educators, students, and school leaders to achieve excellence.
            </p>
          </div>
          <img
            src={ERP}
            alt="ERP System"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
            data-aos="fade-left"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

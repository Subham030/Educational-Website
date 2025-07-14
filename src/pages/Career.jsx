import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "react-modal";
import { ParallaxBanner } from "react-scroll-parallax";
import { motion, AnimatePresence } from "framer-motion";
import landingImage from "../assets/career.jpg";

// Modal root
Modal.setAppElement("#root");

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const benefits = [
    {
      title: "Innovative Culture",
      description:
        "We foster a creative and collaborative environment that empowers you to bring new ideas to life.",
    },
    {
      title: "Great Team",
      description:
        "Work with a passionate team of professionals dedicated to revolutionizing education.",
    },
    {
      title: "Growth Opportunities",
      description:
        "Advance your career with ample opportunities for professional development and learning.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    setTimeout(() => {
      setJobs([
        {
          title: "Frontend Developer",
          description:
            "Help us build beautiful and user-friendly interfaces for our EEC platform.",
          requirements: [
            "Experience with HTML, CSS, JavaScript",
            "Knowledge of React or Vue.js",
            "2+ years of experience",
          ],
        },
        {
          title: "Backend Developer",
          description:
            "Develop scalable and high-performing backend services for EEC.",
          requirements: [
            "Experience with Node.js, Python, or PHP",
            "Familiarity with MySQL or MongoDB",
            "3+ years of experience",
          ],
        },
        {
          title: "UX/UI Designer",
          description:
            "Design intuitive and user-centric experiences for the EEC platform.",
          requirements: [
            "Experience with Figma, Sketch, or Adobe XD",
            "Knowledge of user research methods",
            "2+ years of experience",
          ],
        },
      ]);
    }, 500);
  }, []);

  const openModal = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const resume = formData.get("resume");

    const csvRow = [
      selectedJob?.title || "",
      name,
      email,
      message.replace(/\n/g, " "),
      resume?.name || "No file uploaded",
    ];
    const headers = ["Job Title", "Name", "Email", "Message", "Resume"];
    const csv = [headers, csvRow]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const filename = `application_${Date.now()}.csv`;

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSubmitted(true);
    setTimeout(closeModal, 3000);
  };

  return (
    <section className="bg-white text-gray-800">
      {/* Hero */}
      <ParallaxBanner
        layers={[{ image: landingImage, speed: -20 }]}
        className="h-[75vh]"
      >
        <div className="flex items-center justify-center h-[80vh] bg-black/60 px-4">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold text-center drop-shadow-lg"  data-aos="fade-down"
          style={{ textShadow: "2px 2px 4px rgb(9, 10, 10)" }}
          >
            Career Opportunities at EEC
          </h1>
        </div>
      </ParallaxBanner>

      {/* Job Openings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <h2
          className="text-3xl font-bold text-center text-blue-900 mb-12"
          data-aos="fade-up"
        >
          Current Job Openings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">
                {job.title}
              </h3>
              <p className="text-sm text-center text-gray-600 mb-4">
                {job.description}
              </p>
              <ul className="text-sm text-gray-700 list-disc pl-5 mb-4 space-y-1">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
              <div className="text-center">
                <button
                  onClick={() => openModal(job)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm transition"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Join Section */}
      <div className="bg-gray-50 py-20 px-4 sm:px-6">
        <h2
          className="text-3xl font-bold text-center text-blue-900 mb-12"
          data-aos="fade-up"
        >
          Why Join EEC?
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {b.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            className="w-full max-w-xl mx-auto mt-20 bg-white p-6 rounded-xl shadow-xl border outline-none relative z-50"
            overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-start z-40 px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Apply for {selectedJob?.title}
              </h2>

              {submitted ? (
                <div className="text-green-600 font-medium text-center">
                  ✅ Application submitted successfully!
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Why are you a good fit?"
                    rows={4}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  ></textarea>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    className="w-full text-sm text-gray-600"
                    required
                  />
                  <div className="flex flex-wrap justify-between items-center mt-4">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                    >
                      Submit Application
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="text-sm text-gray-500 underline mt-3 sm:mt-0"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Career;

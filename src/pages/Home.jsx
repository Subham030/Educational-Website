import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });

    const handleScroll = () => {
      AOS.refreshHard();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <section
        id="home"
        className="py-20 px-6 bg-white text-center font-tektur"
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold mb-6 text-gray-800"
            data-aos="fade-up"
          >
            Empowering Excellence, Everywhere
          </h2>
          <p
            className="text-lg text-gray-600 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            EEC simplifies school management, enhances learning experiences, and
            fosters strong parent engagement. Our advanced ERP system takes care
            of administrative tasks like attendance, scheduling, and reporting,
            freeing up schools to focus on education. Students benefit from
            personalized tools and interactive resources, while parents stay
            informed and connected through real-time updates, progress tracking,
            and teacher communication.
          </p>
          <button
            className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded hover:bg-yellow-500 transition"
            data-aos="fade-up"
            data-aos-delay="200"
            onClick={()=>{
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Learn More
          </button>
        </div>
      </section>
  );
};

export default Home;

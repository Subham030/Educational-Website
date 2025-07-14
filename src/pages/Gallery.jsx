import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { ParallaxBanner } from "react-scroll-parallax";
import landingImage from "../assets/gallery.jpg";
import img1 from "../assets/gal1.jpeg";
import img2 from "../assets/gal2.jpeg";
import img3 from "../assets/gal3.jpeg";
import img4 from "../assets/gal4.jpeg";
import img5 from "../assets/gal5.jpeg";

const images = [img1, img2, img3, img4, img5];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
    const navbar = document.querySelector("nav");
    const footer = document.querySelector("footer");
    if (navbar) navbar.style.display = modalOpen ? "none" : "";
    if (footer) footer.style.display = modalOpen ? "none" : "";

    return () => {
      document.body.style.overflow = "auto";
      if (navbar) navbar.style.display = "";
      if (footer) footer.style.display = "";
    };
  }, [modalOpen]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentIndex(null);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 50) goNext();
    else if (deltaX < -50) goPrev();
  };

  return (
    <section className="bg-white text-gray-800 w-full">
      {/* Landing Section */}
      <ParallaxBanner layers={[{ image: landingImage, speed: -20 }]} className="h-[80vh]">
              <div className="flex items-center justify-center h-full bg-black/40">
                <h1
                  className="text-white text-4xl md:text-5xl font-bold text-center px-4 drop-shadow-lg"
                  data-aos="fade-down"
                  style={{ textShadow: "2px 2px 4px rgb(17, 17, 19)" }}
                >
                  Explore Our Gallery
                </h1>
              </div>
      </ParallaxBanner>







      {/* Image Grid */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Moments at EEC
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md"
              onClick={() => openModal(idx)}
            >
              <img
                src={img}
                alt={`Gallery ${idx}`}
                className="w-full h-48 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Small Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-[9999] flex items-center justify-center"
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="relative p-2 bg-transparent rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-0 text-white text-xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={images[currentIndex]}
              alt="Popup"
              className="max-w-[80vw] max-h-[60vh] object-contain rounded-md shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

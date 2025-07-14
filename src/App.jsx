import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Counters from "./components/Counters";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Benefits from "./pages/Benefits";
import Feature from "./pages/Features";
import Modules from "./pages/Modules";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./components/Contact";
import Services from "./pages/Services";
import Career from "./pages/Career";

function App() {
  const location = useLocation(); // 🔁 track route

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  useEffect(() => {
    AOS.refresh(); // 🔁 refresh AOS every route change
  }, [location.pathname]);

  return (
    <ParallaxProvider>
      <div className="App w-full overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div data-aos="fade-down"><Hero /></div>
                <div data-aos="fade-down"><Home /></div>
                <div data-aos="fade-down"><Features /></div>
                <div data-aos="fade-down"><Counters /></div>
                <div data-aos="fade-down"><Contact /></div>
              </>
            }
          />
          <Route path="/features" element={<div data-aos="fade-up"><Feature /></div>} />
          <Route path="/benefits" element={<div data-aos="fade-up"><Benefits /></div>} />
          <Route path="/modules" element={<div data-aos="fade-up"><Modules /></div>} />
          <Route path="/gallery" element={<div data-aos="fade-up"><Gallery /></div>} />
          <Route path="/about" element={<div data-aos="fade-up"><About /></div>} />
          <Route path="/services" element={<div data-aos="fade-up"><Services /></div>} />
          <Route path="/career" element={<div data-aos="fade-up"><Career /></div>} />
        </Routes>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;

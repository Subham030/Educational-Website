import heroImage from "../assets/home.jpg";

const Hero = () => {
  return (
    <section
       className="h-screen bg-cover bg-center relative flex items-center justify-end pr-10"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="text-right text-white max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6" data-aos="fade-down" style={{ textShadow: "2px 2px 4px rgba(7, 7, 7, 0.7)" }}>
          Welcome to Electronic Educare
        </h1>
      </div>
    </section>
  );
};

export default Hero;

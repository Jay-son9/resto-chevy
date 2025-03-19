// src/components/HeroSection.jsx

const HeroSection = () => {
  return (
    <section id='hero'
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/bgd.jpg')", 
        backgroundAttachment: 'fixed', // Parallax effect
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
      <div className="flex items-center justify-center w-full h-full text-center text-white px-4">
        <div className="animate-fade animate-once animate-delay-[30ms] animate-ease-in">
          <h2 className="text-lg sm:text-xl md:text-2xl mb-4">1970</h2>
          <h1  className="text-white text-5xl sm:text-6xl md:text-7xl font-bold tracking-wider mb-4">Chevrolet</h1>
          <h2 className="text-lg sm:text-xl md:text-2xl"> C / 10</h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

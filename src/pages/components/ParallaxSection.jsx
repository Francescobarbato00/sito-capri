import React from 'react';

const ParallaxScrollSection = () => {
  return (
    <section className="relative h-72 flex items-center justify-center overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/2.jpeg')",
        }}
      ></div>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Benvenuti all'evento annuale sulla Digitalizzazione della Giustizia!
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-4 justify-center">
          <a
            href="#"
            className="text-white font-semibold py-2 px-4 rounded-lg mb-2 md:mb-0 text-sm md:text-base border border-white"
          >
            CLICCA PER SCARICARE LA LOCANDINA DEL 4 OTTOBRE
          </a>
          <a
            href="#"
            className="text-white font-semibold py-2 px-4 rounded-lg text-sm md:text-base border border-white"
          >
            CLICCA PER SCARICARE LA LOCANDINA DEL 5 OTTOBRE
          </a>
        </div>
      </div>
    </section>
  );
};

export default ParallaxScrollSection;

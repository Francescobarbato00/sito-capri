import React from 'react';

const ScrollingLogos = () => {
  return (
    <section className="py-20 bg-white">  {/* Increased padding for larger section */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">Istituzioni che contribuiscono all'organizzazione</h2>
      </div>
      <div className="overflow-hidden relative">
        <div className="flex space-x-16 animate-scroll-slow">  {/* Increased space between logos */}  {/* Increased height of logos */}
          <img src="/2.png" alt="Logo 2" className="h-32 md:h-40 object-contain" />
          <img src="/3.png" alt="Logo 3" className="h-32 md:h-40 object-contain" />
          <img src="/4.png" alt="Logo 4" className="h-32 md:h-40 object-contain" />
          <img src="/5.png" alt="Logo 5" className="h-32 md:h-40 object-contain" />
          <img src="/6.png" alt="Logo 6" className="h-32 md:h-40 object-contain" />
          <img src="/7.png" alt="Logo 7" className="h-32 md:h-40 object-contain" />
          <img src="/8.png" alt="Logo 8" className="h-32 md:h-40 object-contain" />
          <img src="/9.png" alt="Logo 9" className="h-32 md:h-40 object-contain" />
          <img src="/10.png" alt="Logo 10" className="h-32 md:h-40 object-contain" />
          <img src="/11.png" alt="Logo 11" className="h-32 md:h-40 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default ScrollingLogos;

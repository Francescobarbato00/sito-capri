// components/HeroSection.jsx
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  return (
    <div 
      className="relative bg-cover bg-center bg-fixed min-h-screen flex flex-col justify-center items-center text-white" 
      style={{ backgroundImage: "url('/certosa.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 text-center px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Capri 4-6 Ottobre 2024:<br />
          Digitalizzazione della Giustizia
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8">
          L'adesione al convegno dovrà essere effettuata tramite la compilazione del form sottostante.
        </p>
        <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-xl">
          Iscriviti al Convegno
        </button>
        <CountdownTimer />
      </div>
    </div>
  );
};

export default HeroSection;

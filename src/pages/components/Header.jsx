import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo or Title on the Left */}
        <div className="text-white text-lg font-bold">
          CAPRI 2024
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-white">
          <a href="#" className="hover:text-blue-500 transition duration-300">Home</a>
          <a href="#" className="hover:text-blue-500 transition duration-300">Benvenuti</a>
          <a href="#" className="hover:text-blue-500 transition duration-300">Locandine</a>
          <a href="#" className="hover:text-blue-500 transition duration-300">Info Logistiche</a>
          <a href="#" className="hover:text-blue-500 transition duration-300">Programma</a>
          <a href="#" className="hover:text-blue-500 transition duration-300">Interventi Video Registrati</a>
          <a href="#" className="hover:text-blue-500 transition duration-300">Registrazioni 2023</a>
          <a href="#" className="hover:text-blue-500 transition duration-300">Contatti</a>
        </nav>

      </div>
    </header>
  );
};

export default Header;

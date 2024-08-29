import React from 'react';

const ContactForm = () => {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Non riesci a partecipare all'evento?
          </h2>
          <p className="text-lg mb-6">
            Compila il form per iscriverti alla nostra newsletter!
          </p>
          <p className="text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
            La registrazione includerà l'invio automatico di email con aggiornamenti, informazioni e dati rilevanti. 
            Compila il form anche per formulare domande o segnalare argomenti.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="col-span-1 md:col-span-2">
              <input
                type="text"
                placeholder="Cognome e Nome"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <input
              type="text"
              placeholder="Telefono"
              className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="col-span-1 md:col-span-2">
              <textarea
                placeholder="Commenti"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <div className="col-span-1 md:col-span-2 text-right">
              <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                Inizia ora
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  };
  const GoogleMap = () => {
    return (
      <section className="py-0">
        <div className="w-full h-screen">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16352.231406558348!2d14.22750708773158!3d40.5484471576206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b9875b5f54869%3A0x7e0f54c1576d1e03!2sCertosa%20di%20San%20Giacomo!5e0!3m2!1sit!2sit!4v1693308023041!5m2!1sit!2sit"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>
    );
  };
  
  export { ContactForm, GoogleMap };
  
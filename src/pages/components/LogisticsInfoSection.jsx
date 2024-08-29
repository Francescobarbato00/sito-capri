const LogisticsInfoSection = () => {
    return (
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white">
        {/* Left Image Section */}
        <div className="md:w-7/12 flex-shrink-0 mt-10 md:mt-0">
          <div className="relative">
            <img
              src="/prova.jpg"  // Update this path to your image
              alt="Capri Tourism"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              style={{
                clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)', // This creates the diagonal cut effect on the left
              }}
            />
          </div>
        </div>
  
        {/* Right Text Section */}
        <div className="md:w-5/12 md:pl-12 mt-8 md:mt-0 text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            Informazioni Logistiche:
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Si informano tutti i partecipanti che è necessario provvedere autonomamente alla prenotazione dei viaggi e delle sistemazioni alberghiere.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Per tutte le informazioni relative ai trasporti, agli alloggi e ad altre utili indicazioni per organizzare il vostro soggiorno, visitate il sito Capri Tourism.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Le spese di allestimento per le sale, la segreteria, la cura del cerimoniale, l’amplificazione, lo streaming, i contatti con la stampa, il light lunch, etc... sono suddivise tra alcune delle istituzioni che parteciperanno all’evento.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Per partecipare al convegno, è necessario <a href="#" className="text-red-500">compilare il form di iscrizione</a>.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Per gli eventi ludici, culturali e che tradizionalmente accompagnano l’iniziativa, come cene di gruppo, aperitivi e altre attività conviviali, saranno inviate le informazioni ai contatti inseriti nel form di iscrizione.
          </p>
          <p className="text-lg text-gray-700 mb-6 font-bold">
            Presto sarà disponibile su questo sito un chatbot dotato di intelligenza artificiale, che potrà rispondere a tutte le domande relative all’evento di Capri.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Per qualsiasi difficoltà relativa alle prenotazioni di hotel o per ulteriori informazioni, si prega di contattare il seguente indirizzo email: <a href="mailto:eventodigitalizzazione@capri.com" className="text-red-500">eventodigitalizzazione@capri.com</a>
          </p>
          <p className="text-lg text-gray-700">
            <a href="https://www.capritourism.com" className="text-red-500" target="_blank" rel="noopener noreferrer">https://www.capritourism.com</a>
          </p>
        </div>
      </section>
    );
  };
  
  export default LogisticsInfoSection;
  
const ConferenceSection = () => {
    return (
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white">
        {/* Left Text Section */}
        <div className="md:w-5/12 text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            Benvenuti all'Evento Annuale di Capri per la trasformazione Digitale della Giustizia!
          </h2>
          <p className="text-lg font-bold text-gray-700 mb-4">
            Data: 4-6 Ottobre 2024.
          </p>
          <p className="text-lg font-bold text-gray-700 mb-4">
            Una delle mete più affascinanti e famose,
            facilmente raggiungibile da Napoli e da Sorrento.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Dal 2013 un momento di confronto costruttivo con l’intervento di tutti gli interessati, a ogni livello, sulla digitalizzazione della giustizia, della pubblica amministrazione, dei rapporti commerciali.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Prima limitato alla sola giustizia ordinaria è stato poi allargato a tutti i processi telematici, e in generale agli istituti del digitale trasversali tra pubblico e privato, con la recente apertura ad interventi di esperti delle istituzioni europee (Commissione Europea, European Judicial Training Network, Corte europea dei diritti dell’Uomo, Corte europea di giustizia).
          </p>
          <p className="text-lg text-gray-700 mb-6">
            L’incontro porta a contatto i vertici, autori di riforme e normative anche di misure e atti di soft law, con la base, costituita principalmente da magistrati di ogni ordine e grado, avvocati sia dello Stato che del libero foro, giuristi, accademici, e tutti coloro che siano interessati allo studio del fenomeno della digitalizzazione, divenuto ormai pervasivo, anche alla luce della imponente azione normativa UE del decennio digitale.
          </p>
          <a
            href="#"
            className="inline-block bg-transparent border border-gray-800 text-gray-800 font-semibold py-2 px-6 rounded hover:bg-gray-800 hover:text-white transition-colors duration-300"
          >
            SCOPRI IL PROGRAMMA
          </a>
        </div>
  
        {/* Right Image Section */}
        <div className="md:w-7/12 flex-shrink-0 mt-10 md:mt-0">
          <div className="relative">
            <img
              src="/1.jpg"  // Update this path to your image
              alt="Conference"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 10% 100%)', // This creates the diagonal cut effect
              }}
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default ConferenceSection;
  
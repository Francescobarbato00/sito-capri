import React from 'react';

const CommentSuggestionSection = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Hai qualche commento o suggerimento?
        </h2>
        <p className="text-lg md:text-xl mt-2">
          Inseriscilo nel form in fondo alla pagina.
        </p>
      </div>
    </section>
  );
};

const VideoSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          BREVI INTERVENTI VIDEO REGISTRATI
        </h2>
        <p className="text-gray-600 text-sm md:text-base mt-4 max-w-2xl mx-auto">
          In questa sezione saranno collocati i video dei relatori che, non potendo partecipare all'evento in presenza, hanno video registrato il proprio contributo.
        </p>
        <p className="text-gray-500 text-xs md:text-sm mt-2 max-w-2xl mx-auto">
          I materiali verranno caricati prima possibile, compatibilmente con i controlli tecnici necessari.
        </p>
      </div>
    </section>
  );
};

export { CommentSuggestionSection, VideoSection };

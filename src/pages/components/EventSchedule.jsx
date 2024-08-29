import { useState } from 'react';

const EventSchedule = () => {
  const [activeDay, setActiveDay] = useState(null); // Nessun giorno selezionato inizialmente
  const [isListVisible, setIsListVisible] = useState(false); // Controlla la visibilità della lista

  const handleDayClick = (day) => {
    if (activeDay === day) {
      setIsListVisible(!isListVisible); // Se il giorno è già attivo, alterna la visibilità
    } else {
      setActiveDay(day);
      setIsListVisible(true); // Mostra la lista se si seleziona un nuovo giorno
    }
  };

  const schedule = {
    day1: [
      {
        time: '',
        title: (
          <div className="text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-600">
              VENERDI 4 OTTOBRE
            </h2>
            <h3 className="text-lg md:text-2xl font-semibold mt-2">
              Evento Lavoro
            </h3>
            <p className="text-base md:text-lg mt-1">
              Capri Sala Pollio - 4 ottobre 2024, ore 14:30
            </p>
            <p className="text-lg md:text-xl mt-2 font-italic">
              "Questioni di diritto e processo del lavoro, 
              nell’era della rivoluzione tecnologica"
            </p>
          </div>
        ),
        speaker: '',
        description: '',
      },
      {
        time: '14:00',
        title: 'Accoglienza dei partecipanti',
        speaker: '',
        description: '',
        image: '/images/speaker1.jpg',
      },
      {
        time: '14:15',
        title:
          'Questioni di diritto e processo del lavoro, nell’era della rivoluzione tecnologica',
        speaker: 'Coordina Pietro Curzio, presidente Emerito Corte di Cassazione',
        description: '',
        image: '/images/speaker2.jpg',
      },
      {
        time: '14:30',
        title: 'Interventi',
        speaker: '',
        description: '',
        image: '',
      },
      {
        time: '',
        title: 'Marco Biasi',
        speaker: 'Prof. Associato di diritto del lavoro presso l’Universita’ degli Studi di Milano',
        description: 'e Marco Giacalone, Professore di ricerca al dipartimento di diritto privato ed economia del diritto (PREC) Università libera di Bruxelles (VUB), co-direttore del gruppo di ricerca in digitalizzazione e accesso alla giustizia (DIKE).',
        image: '/images/speaker3.jpg',
      },
      {
        time: '',
        title: 'Milena Doriano',
        speaker: 'Assistente di studio presso la Corte Costituzionale',
        description: '“Intelligenza artificiale e diritto del lavoro”.',
        image: '/images/speaker4.jpg',
      },
      // Altri eventi qui...
      {
        time: '17:00',
        title: 'Tavola rotonda conclusiva: L’impatto della rivoluzione tecnologica sul diritto e processo del lavoro',
        speaker: '',
        description: '',
        image: '/images/speaker14.jpg',
      },
      {
        time: '',
        title: 'Giovanni Amoroso',
        speaker: 'Giudice della Corte Costituzionale',
        description: '',
        image: '/images/speaker15.jpg',
      },
      {
        time: '',
        title: 'Raffaele De Luca Tamajo',
        speaker: 'Prof. Avv. Emerito di diritto del lavoro Università di Napoli Federico II',
        description: '',
        image: '/images/speaker16.jpg',
      },
      {
        time: '',
        title: 'Lorenzo Zoppoli',
        speaker: 'Ordinario di diritto del lavoro, Università di Napoli Federico II',
        description: '',
        image: '/images/speaker17.jpg',
      },
      {
        time: '17:50',
        title: 'Chiusura dei lavori',
        speaker: '',
        description: '',
        image: '/images/speaker18.jpg',
      },
    ],
    day2: [
        {
          time: '',
          title: (
            <div className="text-left">
              <h2 className="text-2xl md:text-4xl font-bold text-blue-600">
                SABATO 5 OTTOBRE
              </h2>
              <h3 className="text-lg md:text-2xl font-semibold mt-2">
                Evento Lavoro
              </h3>
              <p className="text-base md:text-lg mt-1">
                Capri Sala Pollio - 5 ottobre 2024, ore 8:45
              </p>
              <p className="text-lg md:text-xl mt-2 font-italic">
                "La digitalizzazione in Europa e la sua applicazione nella giustizia e nell'amministrazione pubblica"
              </p>
            </div>
          ),
          speaker: '',
          description: '',
          image: '',
        },
        {
          time: '08:45',
          title: 'Accoglienza in Certosa di San Giacomo',
          speaker: 'Pierfrancesco Talamo, Direttore',
          description: `
            Benvenuto da parte delle autorità locali, civili e giudiziarie:
            - Paolo Falco, Sindaco di Capri.
            - Maria Rosaria Covelli, Presidente della Corte di Appello di Napoli.
          `,
          image: '/images/speaker20.jpg',
        },
        {
          time: '09:00',
          title: 'Saluti introduttivi dei promotori',
          speaker: '',
          description: `
            - Fabio Pinelli, Vice Presidente del Consiglio Superiore della Magistratura (CSM).
            - Margherita Cassano, Prima Presidente della Corte di Cassazione.
            - Luigi Maruotti, Presidente del Consiglio di Stato.
            - Luigi Salvato, Procuratore Generale della Corte di Cassazione.
            - Carolina Lussana, Presidente del Consiglio di Presidenza della Giustizia Tributaria.
            - Francesco Greco, Presidente del Consiglio Nazionale Forense (CNF).
            - Giulio Biino, Presidente del Consiglio Nazionale del Notariato (CNN).
          `,
          image: '/images/speaker21.jpg',
        },
        {
          time: '09:45',
          title: 'La Giustizia moderna alla luce dei Regolamenti europei adottati dall’UE nel Decennio Digitale',
          speaker: 'PRIMO FOCUS: “L’Identità e domicilio digitali, presupposti per ogni negozio, procedimento e processo digitali.”',
          description: `
            Keynote speech: Antonella Ciriello, Consigliere della Corte di Cassazione e Consulente del Ministro della Giustizia.
          `,
          image: '/images/speaker22.jpg',
        },
        {
          time: '10:50',
          title: 'SECONDO FOCUS: Stato della digitalizzazione della giustizia in Italia e in Europa',
          speaker: '',
          description: `
            Keynote speech: Ileana Fedele, Consigliere e Magistrato addetto al Ced della Corte di Cassazione.
            Interviste a:
            - Ettore Sala, Capo Dipartimento DIT, Ministero della Giustizia.
            - Maria Vittoria Marchianò, Presidente della Settima Commissione del CSM.
            - Brunella Bruno, Consigliera di Stato, Direttore SPI Giustizia Amministrativa.
            - Ines Marini, Vice Presidente della Scuola Superiore della Magistratura.
            - Francesco Pizzuto, Consigliere Nazionale Forense, Scuola Superiore dell’Avvocatura.
          `,
          image: '/images/speaker23.jpg',
        },
        {
          time: '11:50',
          title: 'TERZO FOCUS: L’intelligenza artificiale, un pericolo o una sfida per i diritti umani, la giustizia e la pubblica amministrazione?',
          speaker: '',
          description: `
            Keynote speech: Mario Nobile, Direttore Generale dell’Agenzia per l’Italia Digitale.
            Interviste a cura di Raffaella Calandra, giornalista inviata del Sole 24 Ore a:
            - Raffaele Sabato, Giudice della Corte Europea dei Diritti dell’Uomo.
            - Pasquale Stanzione, Presidente del Garante per la protezione dei dati personali.
            - Francesca Quadri, Capo Ufficio Legislativo.
            - Bruno Frattasi, Direttore Generale dell’Agenzia per la cybersicurezza nazionale.
            - Antonio Mura, Capo Ufficio legislativo Ministero della Giustizia.
            - Luigi Tarantino, Segretario Generale Delegato del Consiglio di Stato.
          `,
          image: '/images/speaker24.jpg',
        },
        {
          time: '13:15',
          title: 'Conclusione della sessione mattutina',
          speaker: 'Intervento del Sig. Ministro della Giustizia Carlo Nordio',
          description: '',
          image: '/images/speaker25.jpg',
        },
        {
          time: '13:45',
          title: 'Light lunch',
          speaker: '',
          description: 'Nel Chiostro piccolo della Certosa.',
          image: '/images/speaker26.jpg',
        },
        {
          time: '14:45',
          title: 'Divisione nei GRUPPI DI DISCUSSIONE',
          speaker: '',
          description: '',
          image: '',
        },
        {
          time: '14:45',
          title: 'GRUPPO 1: L’innovazione e la digitalizzazione nel diritto e processo civile',
          speaker: 'Coordinatori: Giuseppe Fichera, Massimo Ferro',
          description: `
            - Valeria Spagnoletti, consigliere corte di Appello Bari: “Indici di qualità del lavoro giudiziario e strumenti di rilevazione statistica”.
            - Fabio Anzilotti, magistrato responsabile settore civile DIT: “Stato della digitalizzazione civile”.
            - Giovanni Bruno, prof. Ordinario di Diritto Privato Università di Roma Torvergata: “Le piattaforme telematiche per la gestione della composizione negoziale della crisi di impresa”.
            - Michele Nastri, notaio in Ercolano e Giuseppe Vitrani, avvocato componente FIIF: “La conservazione del digitale”.
            - Gian Andrea Chiesi, componente del Comitato direttivo SSM: “La formazione nel digitale”.
            - Ilaria Grimaldi, componente STO, giudice del Tribunale di Napoli: “Delibera CSM del 13.6.24 in materia di Linee guida per l’Ufficio per il Processo ex art. 50 DL 90/2014”.
            - Mirella Delia, magistrato ufficio legislativo Ministero della Giustizia: ”La banca dati conciliativa”.
            - Marisaria Maugeri, prof. Ordinario di diritto privato Università di Catania.
            - Enrico Quaranta, segretario generale SSM: “Digitalizzazione delle procedure del codice della crisi”.
            - Giovanni Rocchi, presidente consiglio dell’Ordine foro di Brescia: “Domicilio digitale, notifica e comunicazioni nel processo civile.”
            Parteciperà al gruppo anche Germana Lo Sapio, consigliera TAR.
          `,
          image: '/images/speaker27.jpg',
        },
        {
          time: '14:45',
          title: 'GRUPPO 2: L’innovazione e la digitalizzazione del processo penale',
          speaker: 'Coordinatori: Marco Bisogni, Paolo Abbritti',
          description: `
            - Paolo Abbritti e Mario Formisano: “La banca dati di merito”.
            - Paola Piccirillo, giudice del Tribunale di Napoli: “Delibera CSM del 13.6.24 in materia di Linee guida per l’Ufficio per il Processo”.
            - Antonio Corbo, RID penale Corte di Cassazione e Luigi Cuomo, RID della Procura Generale della Cassazione: “Il PPT in Cassazione”.
            - Fernanda Iannone, RID Corte di Appello di Napoli: “Le videoregistrazioni e il PPT”.
            - Silvana Pucci, RID Corte di Appello Milano: “APP nella evoluzione degli applicativi penale”.
            - Alberto Santacatterina, coordinatore STO: “APP e statuto del magistrato”.
            - Roberto Patscot, sostituto procuratore Napoli: “Il fascicolo informatico”.
            - Edmondo De Gregorio, magistrato Gabinetto Ministero della Giustizia: “L’evoluzione di APP”.
            - Aldo Resta, responsabile area penale DIT, Ministero della Giustizia: “La giurisdizione penale digitale”.
            - Magherita Cardona Albini, vice capo dipartimento Affari Giustizia: “La cooperazione nel digitale”.
            - Donatello Cimadomo, avvocato del Foro di Potenza e professore associato Università di Salerno Diritto Processuale Penale: “Il riconoscimento facciale”.
            - Luigi Giordano, sostituto procuratore generale Cassazione.
            - Giovanna Ollà, consigliere segretario del CNF.
            - Roberto D’Auria, consigliere CSM e Francesco Paolo Sisto, Vice Ministro della Giustizia: CONCLUSIONI.
            Sarà presente Federico Vianelli, vice presidente SSM.
            Interverrà nel gruppo di lavoro Giovanni Russo, Capo Dipartimento dell’Amministrazione Penitenziaria.
          `,
          image: '/images/speaker28.jpg',
        },
        {
          time: '14:45',
          title: 'GRUPPO 3: Processo Telematico ed Intelligenza Artificiale: Rischi e Opportunità per la Giustizia Tributaria',
          speaker: 'Coordinatore: Fiorenza Sarzanini',
          description: `
            Saluti:
            - Carolina Lussana, presidente CPGT.
            - Alfonso Bonafede, consigliere CPGT.
            Relatori:
            - Padre Paolo Benanti, Presidente della Commissione AI per l’informazione.
            - Roberto Mastroianni, Giudice del tribunale dell’Unione Europea.
            - Tammaro Maiello, Consigliere CPGT.
            - Ginevra Cerrina Feroni, Vicepresidente del Garante per la protezione dei dati personali.
            - Brunella Bruno, Consigliera di Stato.
            - Giuseppe Dongiacomo, Consigliere della Corte di Cassazione.
            - Carmelo Fontana, Google EMEA AI senior counsel.
          `,
          image: '/images/speaker29.jpg',
        },
        {
          time: '14:45',
          title: 'GRUPPO 4: L’intelligenza artificiale',
          speaker: 'Coordinatori: Rosita D’Angiolella, Roberto Arcella',
          description: `
            - Alberto Barbazza: “La nuova proposta della Commissione europea per una direttiva sulla regolamentazione della responsabilità per danni causati da sistemi con A.I.”
            - Marco La Greca, avvocato dello stato: “Intelligenza artificiale e ACN”.
            - Gennaro Terracciano, professore ordinario Università Foro Italico: “L’intelligenza artificiale nella pubblica amministrazione”.
            - Mariano Sciacca, presidente sezione Tribunale di Catania: “Governance e investimenti pubblici per la gestione ‘pubblica’ dell’AI nel giudiziario”.
            - Fiorenzo Sirianni, capo dipartimento della Giustizia Tributaria del MEF: “L’intelligenza artificiale nel settore della giustizia tributaria”.
            - Hadrian Simonetti, presidente di sezione del Consiglio di Stato.
            - Giovanni Gallone, consigliere di Stato.
            - Eugenio Tagliasacchi, consigliere di Stato.
            - Francesco Urraro, componente Consiglio di Presidenza della Giustizia Amministrativa.
            - Alessandro Greco, avvocato del foro di Roma.
            Partecipano anche Luigi D’Angiolella, presidente Camera Amministrativa di Napoli, Fabrizio Perla ed Enrico Romano, avvocati del foro di Napoli.
            Sarà presente Serafino Sorrenti, Chief Information Security Officer, Presidenza del Consiglio dei Ministri.
          `,
          image: '/images/speaker30.jpg',
        },
        {
          time: '14:45',
          title: 'GRUPPO 5: Europe’s Digital Decade (La digitalizzazione in Europa)',
          speaker: 'Coordinatore: Derveaux Ingrid, segretario generale EJTN',
          description: `
            - Stanislas Adam, referendario Corte di Giustizia Europea.
            - Gianluca Grasso, consigliere Corte Suprema di Cassazione.
            - Raffaele Sabato, Giudice Corte Europea diritti dell’uomo.
            - Giuseppe Buffone, magistrato esperto della Rappresentanza Permanente d’Italia presso l’Unione europea.
            - Stefano Nativi, componente Rappresentanza Permanente Italiana Commissione UE.
            - Paola Giacalone, Researcher alla Libera Università di Bruxelles.
            - Kristina Bekavav, Director Croatian Judicial Academy.
            - Haffide Boulakras, Director Ecole national Magistrature (France).
            - Prateek SIBAL, Programme Specialist Section for Digital Policies and Digital Transformation, UNESCO.
            - Marina Perrelli, Consigliere di Stato.
            Sarà presente Rosario Ammendolia, magistrato addetto al DIT, coordinatore del “gruppo progetti internazionali”.
          `,
          image: '/images/speaker31.jpg',
        },
        {
          time: '14:45',
          title: 'GRUPPO 6: Interventi video registrati sui temi dei 5 gruppi',
          speaker: 'Gruppo Asincrono',
          description: `
            - Claudio Castelli, magistrato a riposo.
            - Giovanna De Minico, professoressa di Diritto Costituzionale, Università Federico II di Napoli.
            - Maurizio Reale, avvocato del Foro di Teramo.
          `,
          image: '/images/speaker32.jpg',
        },
        {
          time: '17:30',
          title: 'Chiusura dei lavori',
          speaker: '',
          description: '',
          image: '/images/speaker33.jpg',
        },
      ],
    };
  
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-blue-500 text-sm font-bold uppercase text-center mb-4">
            Programma
          </h2>
          <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
            Programma dell'Evento
          </h1>
  
          {/* Tabs */}
          <div className="flex justify-center space-x-2 mb-6">
            {Object.keys(schedule).map((day, index) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 py-2 text-sm font-semibold ${
                  activeDay === day
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-900'
                } transition-colors duration-300 rounded-t-lg`}
              >
                Giorno {index + 1}
                <br />
                <span className="text-xs text-gray-300">{index === 0 ? '4 OTT. 2024' : '5 OTT. 2024'}</span>
              </button>
            ))}
          </div>
  
          {/* Schedule Content */}
          {activeDay && (
            <div className="bg-white p-6 rounded-lg shadow">
              {schedule[activeDay].map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center mb-6 last:mb-0"
                >
                  <img
                    src={event.image}
                    alt={event.speaker}
                    className="w-14 h-14 rounded-full md:mr-4 mb-4 md:mb-0"
                  />
                  <div className="text-center md:text-left">
                    <p className="text-xs text-gray-400 mb-1">{event.time}</p>
                    <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                    <p className="text-xs text-gray-600 mb-1">{event.description}</p>
                    {event.speaker && (
                      <p className="text-blue-500 text-xs font-semibold">
                        {event.speaker}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  };
  
  export default EventSchedule;
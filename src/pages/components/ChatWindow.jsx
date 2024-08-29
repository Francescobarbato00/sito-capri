// src/components/ChatWindow.jsx

import { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const typingIntervalRef = useRef(null); // Reference to store the typing interval

  useEffect(() => {
    // Initial bot message
    const initialBotMessage = {
      text: 'Salve, sono il suo Assistente Virtuale. Come posso esserle utile?',
      fromUser: false,
      timestamp: new Date(),
    };
    setMessages([initialBotMessage]);
  }, []);

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      const newMessage = { text: input, fromUser: true, timestamp: new Date() };
      setMessages([...messages, newMessage]);
      setInput('');
      setIsTyping(true);

      const botResponse = 'AGID, in forza del suo mandato istituzionale ed in particolare degli articoli 14bis e 51 del D. Lgs 5 marzo 2005 n. 82 (CAD) ed in linea con gli obiettivi descritti dal “Piano triennale per l’informatica nella pubblica amministrazione” si impegna, tramite il CERT-AGID, a mantenere e sviluppare servizi di sicurezza preventivi e funzioni di accompagnamento utili per la crescita e la diffusione della cultura della sicurezza informatica...\n\n';

      let index = 0;
      typingIntervalRef.current = setInterval(() => {
        if (index < botResponse.length) {
          setMessages((prevMessages) => {
            const lastMessage = prevMessages[prevMessages.length - 1];
            const updatedText = lastMessage.text + botResponse[index];
            const updatedMessages = [...prevMessages.slice(0, -1), { ...lastMessage, text: updatedText }];
            return updatedMessages;
          });
          index++;
        } else {
          clearInterval(typingIntervalRef.current);
          setIsTyping(false);
        }
      }, 30);

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: '', fromUser: false, timestamp: new Date() },
      ]);
    }
  };

  const handleStopTyping = () => {
    clearInterval(typingIntervalRef.current);
    setIsTyping(false);
  };

  const formatTime = (timestamp) => {
    const hours = timestamp.getHours().toString().padStart(2, '0');
    const minutes = timestamp.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div className="fixed bottom-20 right-10 w-96 h-96 bg-black text-white rounded-lg shadow-lg flex flex-col justify-between overflow-hidden z-50"
         style={{ zIndex: 1000 }}> {/* Aggiunto un z-index alto */}
      <div className="bg-gradient-to-b from-blue-800 to-blue-600 p-5 flex justify-between items-center">
        <h3 className="text-lg font-semibold">Evento Digitalizzazione - ChatBot</h3>
        <button onClick={onClose} className="text-white">
          <FaTimes size={20} />
        </button>
      </div>
      <div className="flex-grow p-5 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.fromUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`${message.fromUser ? 'bg-blue-500' : 'bg-gray-700'} max-w-xs p-4 rounded-lg shadow-sm`}>
              <p className="text-sm whitespace-pre-wrap">{message.text}</p>
              <span className="block text-xs text-gray-400 mt-1 text-right">{formatTime(message.timestamp)}</span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-between items-center">
            <div className="bg-gray-700 max-w-xs p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-400">Il bot sta scrivendo...</p>
            </div>
            <button
              onClick={handleStopTyping}
              className="ml-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition duration-300"
            >
              Stop
            </button>
          </div>
        )}
      </div>
      <div className="bg-gray-800 p-4">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Scrivi un messaggio..."
            className="flex-grow p-4 rounded-full bg-gray-700 text-white focus:outline-none border border-gray-600 focus:border-blue-500 transition duration-300"
          />
          <button
            onClick={handleSendMessage}
            className="bg-gradient-to-b from-blue-800 to-blue-600 text-white p-4 rounded-full hover:shadow-md transition-shadow duration-300"
          >
            Invia
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;

// src/components/ChatButton.jsx

import { useState } from 'react';
import { FaCommentAlt } from 'react-icons/fa';
import ChatWindow from './ChatWindow';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="fixed bottom-8 right-8 bg-gradient-to-b from-blue-800 to-blue-600 text-white rounded-full p-5 shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300 z-50"
        onClick={toggleChat}
        style={{ zIndex: 1000 }} // Aggiunto un z-index alto
      >
        <FaCommentAlt size={28} />
      </div>
      {isOpen && <ChatWindow onClose={toggleChat} />}
    </>
  );
};

export default ChatButton;

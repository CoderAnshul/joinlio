import React from 'react';
import chatIcon from "../../assets/images/chat.png"
import { Link } from 'react-router-dom';

const ChatButton = () => {
  return (
    <Link to="/send-message">
    <button 
      className="fixed bottom-6 right-6 z-[1000] flex items-center justify-center w-14 h-14 rounded-full bg-[#cae3f7] hover:bg-[#2CA2FB] transition-colors duration-300 shadow-lg"
      aria-label="Open chat"
    >
      <img 
        src={chatIcon} 
        alt="Chat icon" 
        className="w-8 h-8 object-contain"
      />
    </button>
    </Link>
  );
};

export default ChatButton;
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppChat = () => {
    const message = 'Hi! I need help with finding a rental property.';
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl p-4 mb-4 w-80 border">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Need Help?</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Hi! I'm here to help you find the perfect rental property. Click below to start a conversation with our support team.
          </p>
          <button
            onClick={handleWhatsAppChat}
            className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Start WhatsApp Chat
          </button>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default ChatBot;
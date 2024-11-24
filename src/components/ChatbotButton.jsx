import React, { useState } from 'react';
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // Match this with animation duration
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className={`absolute bottom-16 right-0 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 ${isClosing ? 'animate-warp-out' : 'animate-warp-in'}`}>
          {/* Chat Header */}
          <div className="flex items-center justify-between p-3 border-b border-gray-200 bg-[#2f4f7f] rounded-t-lg">
            <div className="flex items-center space-x-2">
              <ChatBubbleLeftRightIcon className="h-5 w-5 text-white" />
              <h3 className="text-sm font-semibold text-white">Chat Assistant</h3>
            </div>
            <button
              onClick={handleClose}
              className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-[#1a3d5d]"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="p-4 h-64 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <div className="bg-[#2f4f7f] text-white rounded-lg p-2 max-w-[80%]">
                  <p className="text-sm">Hello! How can I help you today?</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex space-x-2 items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-full focus:ring-1 focus:ring-[#2f4f7f] focus:border-transparent bg-white"
              />
              <button className="p-1.5 bg-[#2f4f7f] text-white rounded-full hover:bg-[#1a3d5d] transition-colors flex items-center justify-center">
                <PaperAirplaneIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => !isClosing && setIsOpen(!isOpen)}
        className={`bg-[#2f4f7f] text-white p-2.5 rounded-full shadow-lg hover:bg-[#1a3d5d] transition-colors flex items-center justify-center group ${isOpen ? 'scale-90' : 'scale-100'} transform duration-300`}
      >
        <ChatBubbleLeftRightIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default ChatbotButton;

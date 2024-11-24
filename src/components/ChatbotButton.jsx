import React, { useState } from 'react';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      <div
        className={`absolute bottom-0 right-0 mb-16 bg-white rounded-2xl shadow-2xl w-96 transform transition-all duration-300 origin-bottom-right border border-gray-200
          ${isOpen 
            ? 'scale-100 opacity-100 translate-y-0' 
            : 'scale-0 opacity-0 translate-y-full'
          }`}
      >
        {/* Chat Header */}
        <div className="bg-blue-600 p-4 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 border-2 border-blue-600 rounded-full"></div>
            </div>
            <div>
              <h3 className="text-white font-medium">EBS Assistant</h3>
              <p className="text-xs text-blue-100">Online</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/75 hover:text-white hover:bg-white/20 transition-colors p-1.5 rounded-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="p-4 h-96 overflow-y-auto bg-gray-50 space-y-4">
          {/* Welcome Message */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div className="bg-white rounded-2xl p-4 max-w-[80%] shadow-md border border-gray-100">
              <p className="text-gray-800 text-sm">
                👋 Hello! I'm your EBS Assistant. How can I help you today?
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Personal Loan", "Health Insurance", "EMI Calculator"].map((option) => (
                  <button
                    key={option}
                    className="px-3 py-1.5 bg-gray-100 text-xs text-gray-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* User Message Example */}
          <div className="flex items-start justify-end space-x-3">
            <div className="bg-blue-600 rounded-2xl p-4 max-w-[80%] shadow-md">
              <p className="text-white text-sm">
                I'd like to know more about personal loans.
              </p>
            </div>
          </div>

          {/* Assistant Response */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div className="bg-white rounded-2xl p-4 max-w-[80%] shadow-md border border-gray-100">
              <p className="text-gray-800 text-sm">
                I'll be happy to help you with personal loans. We offer competitive interest rates starting from 10.49% with flexible repayment options. Would you like to:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Check Eligibility",
                  "View Interest Rates",
                  "Calculate EMI"
                ].map((option) => (
                  <button
                    key={option}
                    className="px-3 py-1.5 bg-gray-100 text-xs text-gray-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full px-4 py-2.5 bg-gray-50 text-gray-800 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400 text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
            <button className="p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 relative group"
      >
        <div className="relative">
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-360' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            )}
          </svg>
          <span className={`absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transform transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}>
            1
          </span>
        </div>
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-white text-gray-800 text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-md border border-gray-200">
          Chat with us
        </div>
      </button>
    </div>
  );
};

export default ChatbotButton;

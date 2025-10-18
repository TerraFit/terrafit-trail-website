'use client';

import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '27837789487';
const INITIAL_MESSAGE = "Hi! I'm interested in acquiring a TerraFit System for my property.";
const QUICK_QUESTIONS = [
  "What's included in the system?",
  "What's the installation process?",
  "Can I see more examples?",
  "What's the warranty?"
];

export function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Auto-open after 5 seconds, only once per session
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  const handleQuickQuestion = (question: string) => {
    const message = encodeURIComponent(`${INITIAL_MESSAGE}\n\n${question}`);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  const handleInitialMessage = () => {
    const message = encodeURIComponent(INITIAL_MESSAGE);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
        aria-label="Open WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-green-500 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold">TerraFit System Sales</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-green-600 p-1 rounded transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        <p className="text-sm text-gray-700">
          Interested in acquiring a TerraFit System? Let's chat!
        </p>

        {/* Initial message button */}
        <button
          onClick={handleInitialMessage}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded font-medium transition-colors"
        >
          Start Conversation
        </button>

        {/* Quick questions */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-gray-600 uppercase">Quick Questions:</p>
          {QUICK_QUESTIONS.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(question)}
              className="w-full text-left text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-3 rounded transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

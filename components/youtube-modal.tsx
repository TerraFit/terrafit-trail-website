'use client';
import { useState } from 'react';

export default function YouTubeModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail Preview */}
      <div 
        className="max-w-md mx-auto cursor-pointer transform hover:scale-105 transition duration-300"
        onClick={() => setIsOpen(true)}
      >
        <div className="bg-black rounded-lg overflow-hidden shadow-2xl border-4 border-white">
          <div className="aspect-[9/16] relative bg-gradient-to-br from-green-600 to-orange-500 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Watch the TerraFit Experience</h3>
              <p className="text-sm opacity-90">See our fitness trail in action</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-md w-full">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-orange-400"
            >
              ✕
            </button>
            <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                title="TerraFit Trail Experience"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

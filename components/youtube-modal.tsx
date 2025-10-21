'use client';

import { useState } from 'react';
<button onClick={onClose}>✕</button>
<button onClick={handlePlayClick}>▶</button>
interface YouTubeModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export default function YouTubeModal({ isOpen, onClose, videoId }: YouTubeModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-sm mx-auto" style={{ maxHeight: '90vh' }}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-50 p-2"
          aria-label="Close video"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Video container with 9:16 aspect ratio (vertical) */}
        <div 
          className="relative w-full bg-black rounded-lg overflow-hidden shadow-2xl"
          style={{ aspectRatio: '9/16', maxHeight: '90vh' }}
        >
          {!isPlaying ? (
            // Thumbnail preview
            <div 
              className="relative w-full h-full group cursor-pointer" 
              onClick={handlePlayClick}
              style={{
                backgroundImage: `url('https://img.youtube.com/vi/${videoId}/mqdefault.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
              
              {/* Video title overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-medium">Watch TerraFit Trail Experience</p>
              </div>
            </div>
          ) : (
            // YouTube iframe
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="TerraFit Trail Experience"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
}

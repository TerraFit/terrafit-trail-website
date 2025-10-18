'use client';

import { useState, useEffect } from 'react';
import { X, Play } from 'lucide-react';

interface YouTubeModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export function YouTubeModal({ isOpen, onClose, videoId }: YouTubeModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsPlaying(false);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-2xl mx-auto" style={{ maxHeight: '90vh' }}>
        {/* Close button - Always visible and on top */}
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
                backgroundPosition: 'center'
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 rounded-full p-4 group-hover:bg-red-700 transition-colors shadow-lg">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
              
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-semibold text-sm">Watch TerraFit Trail Experience</p>
              </div>
            </div>
          ) : (
            // YouTube iframe
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="TerraFit Trail Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
}

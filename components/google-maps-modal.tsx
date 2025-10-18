'use client';

import { X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GoogleMapsModalProps {
  isOpen: boolean;
  onClose: () => void;
  mapsUrl: string;
}

export function GoogleMapsModal({ isOpen, onClose, mapsUrl }: GoogleMapsModalProps) {
  if (!isOpen) return null;

  const handleOpenMap = () => {
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-md bg-white rounded-lg overflow-hidden shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 transition-colors shadow-lg"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-8 text-center space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">TerraFit Trail Map</h2>
            <p className="text-gray-600">
              View the interactive map of TerraFit Trail at J-Bay Zebra Lodge
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 mb-4">
              Click the button below to open the full interactive map in a new window
            </p>
            <Button
              onClick={handleOpenMap}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Open Interactive Map
            </Button>
          </div>

          <div className="text-xs text-gray-500">
            <p>Location: J-Bay Zebra Lodge</p>
            <p>Eastern Cape, South Africa</p>
            <p>Coordinates: -33.9082336, 25.1000752</p>
          </div>
        </div>
      </div>
    </div>
  );
}

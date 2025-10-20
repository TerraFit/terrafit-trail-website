'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ExerciseModalProps {
  isOpen: boolean;
  onClose: () => void;
  exercise: any;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export function ExerciseModal({ 
  isOpen, 
  onClose, 
  exercise, 
  onNext, 
  onPrev, 
  hasNext, 
  hasPrev 
}: ExerciseModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Modal content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{exercise.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Exercise content would go here */}
          <p>Exercise modal content</p>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            
            <button
              onClick={onNext}
              disabled={!hasNext}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg disabled:opacity-50"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

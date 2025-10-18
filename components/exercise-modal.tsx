'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Exercise {
  station: number;
  name: string;
  category: 'Mobility/Agility' | 'Strength' | 'Endurance';
  instructions: string[];
  image?: string;
}

interface ExerciseModalProps {
  exercise: Exercise | null;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'Mobility/Agility':
      return '#FBBF24'; // Yellow
    case 'Strength':
      return '#EF4444'; // Red
    case 'Endurance':
      return '#3B82F6'; // Blue
    default:
      return '#9CA3AF'; // Gray
  }
};

export function ExerciseModal({
  exercise,
  isOpen,
  onClose,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: ExerciseModalProps) {
  if (!exercise) return null;

  const color = getCategoryColor(exercise.category);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              {/* Exercise Image */}
              {exercise.image && (
                <div className="relative w-full h-64 bg-gray-200">
                  <Image
                    src={exercise.image}
                    alt={exercise.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Station and Category */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-bold"
                    style={{ backgroundColor: color }}
                  >
                    {exercise.station}
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{exercise.name}</h2>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mt-2"
                      style={{ backgroundColor: color }}
                    >
                      {exercise.category}
                    </span>
                  </div>
                </div>

                {/* Instructions */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Instructions:</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    {exercise.instructions.map((instruction, idx) => (
                      <li key={idx} className="text-gray-700">
                        {instruction}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3 justify-between">
                  <button
                    onClick={onPrevious}
                    disabled={!hasPrevious}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                      hasPrevious
                        ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </button>

                  <button
                    onClick={onClose}
                    className="px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all"
                  >
                    Close
                  </button>

                  <button
                    onClick={onNext}
                    disabled={!hasNext}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                      hasNext
                        ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

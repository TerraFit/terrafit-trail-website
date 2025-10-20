"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { exercisesData } from "@/lib/exercises-data";
import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";

const categoryColorMap = {
  mobility: { label: "Mobility/Agility", description: "Improve flexibility and movement", color: "bg-yellow-500", stationColor: "bg-yellow-400" },
  strength: { label: "Strength", description: "Build power and muscle", color: "bg-red-500", stationColor: "bg-red-400" },
  endurance: { label: "Endurance", description: "Boost stamina and cardiovascular fitness", color: "bg-blue-500", stationColor: "bg-blue-400" },
};

interface ExerciseCardProps {
  exercise: any;
  category: string;
  onCardClick: (exercise: any) => void;
}

function ExerciseCard({ exercise, category, onCardClick }: ExerciseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const categoryInfo = categoryColorMap[category as keyof typeof categoryColorMap];
  const stationColor = categoryInfo?.stationColor || "bg-gray-400";

  return (
    <Card 
      className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col cursor-pointer hover:scale-105"
      onClick={() => onCardClick(exercise)}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-lg">{exercise.title}</CardTitle>
            <CardDescription>{exercise.description}</CardDescription>
          </div>
          {/* Color-coded Station Number */}
          <div className={`${stationColor} text-white font-bold px-3 py-1 rounded-full text-sm whitespace-nowrap`}>
            Station {exercise.station}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground text-sm mb-4 relative overflow-hidden">
          <Image
            src={exercise.imageUrl}
            alt={exercise.title}
            fill
            className="object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
            <span className="text-xs">Exercise Image</span>
          </div>
        </div>
        
        {/* Instructions with Expand/Collapse */}
        <div className="text-sm space-y-2 flex-1 flex flex-col">
          <p className="font-medium text-foreground">Instructions:</p>
          <ul className="text-xs text-muted-foreground space-y-1 flex-1">
            {isExpanded ? (
              // Show all instructions when expanded
              exercise.instructions.map((instruction: string, idx: number) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>{instruction}</span>
                </li>
              ))
            ) : (
              // Show first 3 instructions when collapsed
              <>
                {exercise.instructions.slice(0, 3).map((instruction: string, idx: number) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </>
            )}
          </ul>

          {/* Expand/Collapse Button */}
          {exercise.instructions.length > 3 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors mt-2 font-medium text-xs"
            >
              <ChevronDown 
                className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              />
              {isExpanded ? 'Show less' : `+${exercise.instructions.length - 3} more steps`}
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Exercise Modal Component
function ExerciseModal({ 
  exercise, 
  isOpen, 
  onClose, 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext 
}: any) {
  if (!exercise || !isOpen) return null;

  const categoryInfo = categoryColorMap[exercise.category as keyof typeof categoryColorMap];
  const stationColor = categoryInfo?.stationColor || "bg-gray-400";

  return (
    <>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          {/* Modal */}
          <div
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
              {exercise.imageUrl && (
                <div className="relative w-full h-64 bg-gray-200">
                  <Image
                    src={exercise.imageUrl}
                    alt={exercise.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Station and Category */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-bold ${stationColor}`}
                  >
                    {exercise.station}
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{exercise.title}</h2>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mt-2 ${categoryInfo?.color}`}
                    >
                      {categoryInfo?.label}
                    </span>
                  </div>
                </div>

                {/* Instructions */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Instructions:</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    {exercise.instructions.map((instruction: string, idx: number) => (
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
          </div>
        </>
      )}
    </>
  );
}

export function Exercises() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [displayCount, setDisplayCount] = useState(6);
  const [selectedExercise, setSelectedExercise] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Sort exercises by station order (1→15)
  const sortedExercises = useMemo(() => {
    return [...exercisesData].sort((a, b) => a.station - b.station);
  }, []);

  const exercisesByCategory = useMemo(() => {
    return {
      all: sortedExercises,
      mobility: sortedExercises.filter(e => e.category === 'mobility'),
      strength: sortedExercises.filter(e => e.category === 'strength'),
      endurance: sortedExercises.filter(e => e.category === 'endurance'),
    };
  }, [sortedExercises]);

  const currentExercises = exercisesByCategory[selectedCategory as keyof typeof exercisesByCategory];
  const displayedExercises = currentExercises.slice(0, displayCount);
  const hasMore = displayCount < currentExercises.length;

  const handleViewMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setDisplayCount(prev => prev + 6);
      setIsLoadingMore(false);
    }, 600);
  };

  const handleExerciseClick = (exercise: any) => {
    setSelectedExercise(exercise);
    setIsModalOpen(true);
  };

  const handlePrevious = () => {
    const currentIndex = currentExercises.indexOf(selectedExercise);
    if (currentIndex > 0) {
      setSelectedExercise(currentExercises[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    const currentIndex = currentExercises.indexOf(selectedExercise);
    if (currentIndex < currentExercises.length - 1) {
      setSelectedExercise(currentExercises[currentIndex + 1]);
    }
  };

  const currentIndex = selectedExercise ? currentExercises.indexOf(selectedExercise) : -1;
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < currentExercises.length - 1;

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setDisplayCount(6);
  };

  return (
    <section id="exercises" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold">Exercise Library</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              43 professionally designed exercises across 15 stations, color-coded for easy progression
            </p>
          </div>

          {/* Color-coded Tabs with "All Activities" */}
          <Tabs value={selectedCategory} onValueChange={handleCategoryChange} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all" className="data-[state=active]:bg-gray-600 data-[state=active]:text-white">
                All Activities
              </TabsTrigger>
              <TabsTrigger value="mobility" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white">
                Mobility/Agility
              </TabsTrigger>
              <TabsTrigger value="strength" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
                Strength
              </TabsTrigger>
              <TabsTrigger value="endurance" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Endurance
              </TabsTrigger>
            </TabsList>

            {/* All Activities Tab */}
            <TabsContent value="all" className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-4 h-4 rounded-full bg-gray-600" />
                <div>
                  <h3 className="text-2xl font-semibold">All Activities</h3>
                  <p className="text-muted-foreground">All 43 exercises across all categories</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {displayedExercises.map((exercise, idx) => (
                    <div
                      key={exercise.id}
                    >
                      <ExerciseCard 
                        exercise={exercise} 
                        category={exercise.category}
                        onCardClick={handleExerciseClick}
                      />
                    </div>
                  ))}
              </div>

              {/* View More Button */}
              {hasMore && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleViewMore}
                    disabled={isLoadingMore}
                    className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all disabled:opacity-50"
                  >
                    {isLoadingMore ? 'Loading...' : 'View More Exercises'}
                  </button>
                </div>
              )}
            </TabsContent>

            {/* Category Tabs */}
            {Object.entries(exercisesByCategory).map(([categoryKey, exercises]) => {
              if (categoryKey === 'all') return null;
              
              const categoryInfo = categoryColorMap[categoryKey as keyof typeof categoryColorMap];
              const displayedCategoryExercises = exercises.slice(0, displayCount);
              const hasCategoryMore = displayCount < exercises.length;
              
              return (
                <TabsContent key={categoryKey} value={categoryKey} className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-4 h-4 rounded-full ${categoryInfo.color}`} />
                    <div>
                      <h3 className="text-2xl font-semibold">{categoryInfo.label}</h3>
                      <p className="text-muted-foreground">{categoryInfo.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {displayedCategoryExercises.map((exercise, idx) => (
                        <div
                          key={exercise.id}
                        >
                          <ExerciseCard 
                            exercise={exercise} 
                            category={categoryKey}
                            onCardClick={handleExerciseClick}
                          />
                        </div>
                      ))}
                    </>
                  </div>

                  {/* View More Button for Category */}
                  {hasCategoryMore && (
                    <div className="flex justify-center mt-8">
                      <button
                        onClick={handleViewMore}
                        disabled={isLoadingMore}
                        className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all disabled:opacity-50"
                      >
                        {isLoadingMore ? 'Loading...' : 'View More Exercises'}
                      </button>
                    </div>
                  )}
                </TabsContent>
              );
            })
            }
          </Tabs>

          {/* Exercise Summary Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-yellow-600 mb-2">{exercisesByCategory.mobility.length}</div>
                <p className="text-muted-foreground">Mobility/Agility Exercises</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-red-600 mb-2">{exercisesByCategory.strength.length}</div>
                <p className="text-muted-foreground">Strength Exercises</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">{exercisesByCategory.endurance.length}</div>
                <p className="text-muted-foreground">Endurance Exercises</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Exercise Modal */}
      <ExerciseModal
        exercise={selectedExercise}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
      />
    </section>
  );
}

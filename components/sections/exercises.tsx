"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { exercisesData } from "@/lib/exercises-data";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const categoryColorMap = {
  mobility: { label: "Mobility/Agility", description: "Improve flexibility and movement", color: "bg-yellow-500", stationColor: "bg-yellow-400" },
  strength: { label: "Strength", description: "Build power and muscle", color: "bg-red-500", stationColor: "bg-red-400" },
  endurance: { label: "Endurance", description: "Boost stamina and cardiovascular fitness", color: "bg-blue-500", stationColor: "bg-blue-400" },
};

interface ExerciseCardProps {
  exercise: any;
  category: string;
}

function ExerciseCard({ exercise, category }: ExerciseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const categoryInfo = categoryColorMap[category as keyof typeof categoryColorMap];
  const stationColor = categoryInfo?.stationColor || "bg-gray-400";

  return (
    <Card className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
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
              onClick={() => setIsExpanded(!isExpanded)}
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

export function Exercises() {
  const exercisesByCategory = {
    all: exercisesData,
    mobility: exercisesData.filter(e => e.category === 'mobility'),
    strength: exercisesData.filter(e => e.category === 'strength'),
    endurance: exercisesData.filter(e => e.category === 'endurance'),
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
          <Tabs defaultValue="all" className="w-full">
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
                {exercisesByCategory.all.map((exercise) => {
                  const category = exercise.category;
                  return (
                    <ExerciseCard key={exercise.id} exercise={exercise} category={category} />
                  );
                })}
              </div>
            </TabsContent>

            {/* Category Tabs */}
            {Object.entries(exercisesByCategory).map(([categoryKey, exercises]) => {
              if (categoryKey === 'all') return null;
              
              const categoryInfo = categoryColorMap[categoryKey as keyof typeof categoryColorMap];
              
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
                    {exercises.map((exercise) => (
                      <ExerciseCard key={exercise.id} exercise={exercise} category={categoryKey} />
                    ))}
                  </div>
                </TabsContent>
              );
            })}
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
    </section>
  );
}

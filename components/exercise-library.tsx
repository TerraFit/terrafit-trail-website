'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { ExerciseModal } from './exercise-modal';

interface Exercise {
  station: number;
  name: string;
  category: 'Mobility/Agility' | 'Strength' | 'Endurance';
  instructions: string[];
  image?: string;
}

const exercisesData: Exercise[] = [
  // Station 1 - Yellow (Mobility/Agility)
  {
    station: 1,
    name: 'Preparatory Stretching (Upper Body)',
    category: 'Mobility/Agility',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Gently reach arms overhead and lean to each side',
      'Perform arm circles in both directions',
      'Repeat 10 times each direction'
    ],
    image: '/exercises/yellow-station-01-preparatory-stretching-upper-body.png',
  },
  {
    station: 1,
    name: 'Preparatory Stretching (Ankle)',
    category: 'Mobility/Agility',
    instructions: [
      'Stand on one leg for balance',
      'Rotate ankle in circles',
      'Perform 10 circles each direction per ankle',
      'Switch legs and repeat'
    ],
    image: '/exercises/yellow-station-01-preparatory-stretching-ankle.png',
  },
  {
    station: 1,
    name: 'Preparatory Stretching (Calf)',
    category: 'Mobility/Agility',
    instructions: [
      'Stand facing a wall or support',
      'Step one leg back',
      'Keep heel on ground and lean forward',
      'Hold for 20-30 seconds, then switch legs'
    ],
    image: '/exercises/yellow-station-01-preparatory-stretching-calf.png',
  },
  // Station 2 - Yellow (Mobility/Agility)
  {
    station: 2,
    name: 'Lift Heels, Toes',
    category: 'Mobility/Agility',
    instructions: [
      'Stand with feet hip-width apart',
      'Rise up on toes, hold for 2 seconds',
      'Lower heels and lift toes up',
      'Repeat 15-20 times'
    ],
    image: '/exercises/yellow-station-02-lift-heels-toes.png',
  },
  {
    station: 2,
    name: 'Squat Raise Into Toes',
    category: 'Mobility/Agility',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Lower into a squat position',
      'While in squat, raise up on toes',
      'Repeat 10-12 times'
    ],
    image: '/exercises/yellow-station-02-squat-raise-into-toes.png',
  },
  {
    station: 2,
    name: 'Jump Cross-Legged',
    category: 'Mobility/Agility',
    instructions: [
      'Jump with feet together 10 times',
      'Jump with feet apart 10 times',
      'Jump with feet crossed 10 times',
      'Repeat sequence 2-3 times'
    ],
    image: '/exercises/yellow-station-02-jump-cross-legged.png',
  },
  {
    station: 2,
    name: 'Reciprocal Arm Swings',
    category: 'Mobility/Agility',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Swing arms forward and back in opposite directions',
      'Gradually increase range of motion',
      'Repeat 10-15 times'
    ],
    image: '/exercises/yellow-station-02-reciprocal-arm-swings.png',
  },
  {
    station: 2,
    name: 'Parallel Arm Swings Figure-Eight Motion',
    category: 'Mobility/Agility',
    instructions: [
      'Extend arms in front of body',
      'Trace a figure-eight pattern in the air',
      'Perform 10 figure-eights in each direction'
    ],
    image: '/exercises/yellow-station-02-parallel-arm-swings-figure-eight-motion.png',
  },
  {
    station: 2,
    name: 'Backward Crawl Different Heights',
    category: 'Mobility/Agility',
    instructions: [
      'Start in standing position',
      'Crawl backward on hands and feet',
      'Perform at high level (hands high)',
      'Repeat 5-10 times'
    ],
    image: '/exercises/yellow-station-02-backward-crawl-different-heights.png',
  },
  // Station 3 - Yellow & Red
  {
    station: 3,
    name: 'Balance Trunk',
    category: 'Mobility/Agility',
    instructions: [
      'Stand on a stable surface or log',
      'Maintain balance for 20-30 seconds',
      'Engage core muscles'
    ],
    image: '/exercises/yellow-station-03-balance-trunk.png',
  },
  {
    station: 3,
    name: 'Jump Feet Together',
    category: 'Strength',
    instructions: [
      'Stand with feet together',
      'Jump up and down repeatedly',
      'Maintain a steady rhythm',
      'Repeat 10-15 times'
    ],
    image: '/exercises/red-station-03-jump-feet-together.png',
  },
  // Station 4 - Yellow & Red
  {
    station: 4,
    name: 'Hang and Breathe Calmly',
    category: 'Mobility/Agility',
    instructions: [
      'Grip pull-up bar with hands shoulder-width apart',
      'Hang with arms extended',
      'Maintain calm, steady breathing',
      'Hold for at least 10 seconds'
    ],
    image: '/exercises/yellow-station-04-hang-and-breathe-calmly.png',
  },
  {
    station: 4,
    name: 'Hold a Suspended Position with Bent Arms',
    category: 'Strength',
    instructions: [
      'Grip pull-up bar with hands shoulder-width apart',
      'Pull up until chin is above bar',
      'Hold position with bent arms',
      'Hold for at least 5 seconds'
    ],
    image: '/exercises/red-station-04-hold-a-suspended-position-with-bent-arms.png',
  },
  {
    station: 4,
    name: 'Pull-ups',
    category: 'Strength',
    instructions: [
      'Grip pull-up bar with hands shoulder-width apart',
      'Pull body up until chin is above bar',
      'Lower body with control',
      'Repeat at least 2 times'
    ],
    image: '/exercises/red-station-04-pull-ups.png',
  },
  // Station 5 - Yellow
  {
    station: 5,
    name: 'Arch and Round Your Back',
    category: 'Mobility/Agility',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Arch your back gently',
      'Then round your back',
      'Repeat 10-15 times'
    ],
    image: '/exercises/yellow-station-05-arch-and-round-your-back.png',
  },
  {
    station: 5,
    name: 'Intense Torso Rotation',
    category: 'Mobility/Agility',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Place hands behind head',
      'Rotate torso left and right',
      'Repeat 10-15 times on each side'
    ],
    image: '/exercises/yellow-station-05-intense-torso-rotation.png',
  },
  {
    station: 5,
    name: 'Laterally Bend the Upper Body',
    category: 'Mobility/Agility',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Reach one arm overhead',
      'Bend laterally to the opposite side',
      'Repeat 10-15 times on each side'
    ],
    image: '/exercises/yellow-station-05-laterally-bend-the-upper-body.png',
  },
  // Station 6 - Yellow & Red
  {
    station: 6,
    name: 'Leg Circles Feet Off Ground',
    category: 'Mobility/Agility',
    instructions: [
      'Sit on the ground or bench',
      'Lift feet off ground',
      'Make circles with your feet',
      'Perform 10 circles in each direction'
    ],
    image: '/exercises/yellow-station-06-leg-circles-feet-off-the-ground-upper-body-stable.png',
  },
  {
    station: 6,
    name: 'Slowly Lift Knees to the Left, Centre, Right',
    category: 'Strength',
    instructions: [
      'Hold the rings, feet off ground',
      'Slowly lift knees to the left',
      'Then to the centre, then to the right',
      'Lower body with control, at least 1 on each side'
    ],
    image: '/exercises/red-station-06-slowly-lift-knees-to-the-left-center-right.png',
  },
  // Station 7 - Red
  {
    station: 7,
    name: 'Gentle Body Swings While Supporting Yourself on Your Arms',
    category: 'Strength',
    instructions: [
      'Support yourself on parallel bars, straight position',
      'Maintain arm strength and control',
      'Gently swing your body forward and backwards',
      'At least 2 times'
    ],
    image: '/exercises/red-station-07-gentle-body-swings-while-supporting-yourself-on-your-arms.png',
  },
  {
    station: 7,
    name: 'Arm Pull-ups',
    category: 'Strength',
    instructions: [
      'Grip the pull-up bar with hands shoulder-width apart',
      'Pull your arms up to lift your body',
      'Lower with control',
      'At least 5 times'
    ],
    image: '/exercises/red-station-07-arm-pull-ups.png',
  },
  {
    station: 7,
    name: 'Move Forward While Supporting Yourself on Your Arms',
    category: 'Strength',
    instructions: [
      'Support yourself on parallel bars',
      'Move forward by shifting weight on arms',
      'Maintain body control',
      'At least 1 length'
    ],
    image: '/exercises/red-station-07-move-forward-while-supporting-yourself-on-your-arms.png',
  },
  // Station 8 - Blue & Red
  {
    station: 8,
    name: 'Climb Up and Down',
    category: 'Endurance',
    instructions: [
      'Stand at the base of the climbing structure',
      'Climb up as quickly as possible',
      'Climb back down',
      'At least 1 minute'
    ],
    image: '/exercises/blue-station-08-climb-up-and-down.png',
  },
  {
    station: 8,
    name: 'Climb Up Fully Then Descend',
    category: 'Strength',
    instructions: [
      'Climb the structure fully to the top and down',
      'Alternating legs',
      'At least 1 minute'
    ],
    image: '/exercises/blue-station-08-climb-up-fully-then-descend.png',
  },
  // Station 9 - Red
  {
    station: 9,
    name: 'Alternately Lift Feet by a Shoe\'s Length',
    category: 'Strength',
    instructions: [
      'Lie on your elbows in a plank position with legs extended',
      'Alternately lift feet by a shoe\'s length',
      'Keep torso and legs straight',
      'At least 10'
    ],
    image: '/exercises/red-station-09-alternately-lift-feet-by-a-shoes-length-keeping-torso-and-legs-straight.png',
  },
  {
    station: 9,
    name: 'Lift Torso with Back Extension',
    category: 'Strength',
    instructions: [
      'Lie face down on the bench in the hip locked position',
      'Lift your torso using your back muscles',
      'Repeat at least 10 times'
    ],
    image: '/exercises/red-station-09-lift-torso-with-back-extension-without-changing-hip-or-leg-position.png',
  },
  {
    station: 9,
    name: 'Raise Hips as High as Possible',
    category: 'Strength',
    instructions: [
      'Lie on your back with one knee bent, the other straight',
      'Raise hips as high as possible',
      'Lower without touching the bench',
      'Repeat at least 8 times'
    ],
    image: '/exercises/red-station-09-raise-hips-as-high-as-possible-lower-without-touching-the-ground.png',
  },
  // Station 10 - Blue
  {
    station: 10,
    name: 'Jump Feet Together',
    category: 'Endurance',
    instructions: [
      'Stand with feet together',
      'Jump with feet together, landing softly with bent knees',
      'At least 2 lengths'
    ],
    image: '/exercises/blue-station-10-jump-feet-together.png',
  },
  {
    station: 10,
    name: 'Jump Alternately Left and Right',
    category: 'Endurance',
    instructions: [
      'Jump side to side alternately',
      'Maintain a steady rhythm',
      'Land softly on each side',
      'At least for 30 seconds'
    ],
    image: '/exercises/blue-station-10-jump-alternately-left-right.png',
  },
  // Station 11 - Yellow & Blue
  {
    station: 11,
    name: 'Apply Light Pressure to Shoulders',
    category: 'Mobility/Agility',
    instructions: [
      'Stand upright with good posture',
      'Grab the bar and apply light pressure to shoulders',
      'Hold and release',
      'At least 10 times'
    ],
    image: '/exercises/yellow-station-11-apply-light-pressure-to-shoulders-hold-for-one-second-then-release.png',
  },
  {
    station: 11,
    name: 'Support Jumps',
    category: 'Endurance',
    instructions: [
      'Jump while maintaining arm support for 2 seconds',
      'Jump down and repeat',
      'At least 5 times'
    ],
    image: '/exercises/blue-station-11-support-jumps.png',
  },
  // Station 12 - Red
  {
    station: 12,
    name: 'Push-ups',
    category: 'Strength',
    instructions: [
      'Start in plank position',
      'Lower body until chest nearly touches the beam',
      'Push back up to the starting position',
      'Repeat at least 5 times'
    ],
    image: '/exercises/red-station-12-push-ups.png',
  },
  {
    station: 12,
    name: 'Support Yourself on Your Arms Backwards',
    category: 'Strength',
    instructions: [
      'Support your body on your hands on the beam behind you',
      'Keep body straight',
      'Repeat at least 5 times'
    ],
    image: '/exercises/red-station-12-support-yourself-on-your-arms-backward.png',
  },
  // Station 13 - Yellow & Blue
  {
    station: 13,
    name: 'Circle Around Each Post',
    category: 'Mobility/Agility',
    instructions: [
      'Stand at the starting post',
      'Run in circles around each post',
      'Maintain balance and control',
      'At least 1 course'
    ],
    image: '/exercises/yellow-station-13-circle-around-each-post.png',
  },
  {
    station: 13,
    name: 'Hurdle Slalom',
    category: 'Endurance',
    instructions: [
      'Stand at the starting post',
      'Jump over each hurdle',
      'Maintain speed and control',
      'At least two courses'
    ],
    image: '/exercises/blue-station-13-hurdle-jumps.png',
  },
  // Station 14 - Yellow
  {
    station: 14,
    name: 'Balance Until Horizontal',
    category: 'Mobility/Agility',
    instructions: [
      'Stand on one leg',
      'Lean forward until your body is horizontal',
      'Hold position for 5 seconds',
      'Switch legs and repeat'
    ],
    image: '/exercises/yellow-station-14-balance-until-horizontal.png',
  },
  {
    station: 14,
    name: 'Walk Forward and Backwards in Balance',
    category: 'Mobility/Agility',
    instructions: [
      'Walk forward on the balance beam',
      'Maintain a steady balance',
      'Walk backwards on the balance beam',
      'At least 1 length in each direction'
    ],
    image: '/exercises/yellow-station-14-walk-forward-and-backward-in-balance.png',
  },
  // Station 15 - Yellow
  {
    station: 15,
    name: 'Neck Stretch',
    category: 'Mobility/Agility',
    instructions: [
      'Stand upright',
      'Gently tilt your head to one side, pushing down with the opposite arm',
      'Hold for at least 15 seconds',
      'Repeat on the other side'
    ],
    image: '/exercises/yellow-station-15-neck-stretch.png',
  },
  {
    station: 15,
    name: 'Seratus Stretch',
    category: 'Mobility/Agility',
    instructions: [
      'Stand with legs crossed',
      'Reach both arms overhead',
      'Lean to one side',
      'Hold for at least 15 seconds, repeat on the other side'
    ],
    image: '/exercises/yellow-station-15-seratus-stretch.png',
  },
  {
    station: 15,
    name: 'Quad Knee Stretch',
    category: 'Mobility/Agility',
    instructions: [
      'One knee on the ground, with the other knee up',
      'Upper body straight',
      'Move your hip forward',
      'Hold for at least 15 seconds, repeat on the other side'
    ],
    image: '/exercises/yellow-station-15-quad-knee-stretch.png',
  },
  {
    station: 15,
    name: 'Aductor Stretch',
    category: 'Mobility/Agility',
    instructions: [
      'Stand with feet wide apart',
      'Bend one knee and lean to that side',
      'Keep the other leg straight',
      'Hold for at least 15 seconds, repeat on the other side'
    ],
    image: '/exercises/yellow-station-15-aductor-stretch.png',
  },
  {
    station: 15,
    name: 'Quad Standing Stretch',
    category: 'Mobility/Agility',
    instructions: [
      'Stand on one leg and hold the pole with one hand',
      'Pull the other foot toward the buttocks',
      'Keep knees together',
      'Hold for at least 15 seconds, repeat on the other side'
    ],
    image: '/exercises/yellow-station-15-quad-standing-stretch.png',
  },
  {
    station: 15,
    name: 'Calf Stretch',
    category: 'Mobility/Agility',
    instructions: [
      'Stand facing the pole',
      'Step one leg back',
      'Keep the back leg heel on the ground, and move your hip forward',
      'Hold for at least 15 seconds, repeat on the other side'
    ],
    image: '/exercises/yellow-station-15-calf-stretch.png',
  },
];

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

export function ExerciseLibrary() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Activities');
  const [displayCount, setDisplayCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter and sort exercises by station order (PRESERVE EXACT ORDER 1→15)
  const filteredAndSortedExercises = useMemo(() => {
    let filtered = exercisesData;

    if (selectedCategory !== 'All Activities') {
      filtered = exercisesData.filter(exercise => exercise.category === selectedCategory);
    }

    // Sort by station number FIRST, then by original order
    return [...filtered].sort((a, b) => {
      if (a.station !== b.station) {
        return a.station - b.station;
      }
      // If same station, maintain original order
      return exercisesData.indexOf(a) - exercisesData.indexOf(b);
    });
  }, [selectedCategory]);

  const displayedExercises = filteredAndSortedExercises.slice(0, displayCount);
  const hasMore = displayCount < filteredAndSortedExercises.length;

  const handleViewMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount(prev => prev + 6);
      setIsLoading(false);
    }, 600);
  };

  const handleExerciseClick = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setIsModalOpen(true);
  };

  const handlePrevious = () => {
    const currentIndex = filteredAndSortedExercises.indexOf(selectedExercise!);
    if (currentIndex > 0) {
      setSelectedExercise(filteredAndSortedExercises[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    const currentIndex = filteredAndSortedExercises.indexOf(selectedExercise!);
    if (currentIndex < filteredAndSortedExercises.length - 1) {
      setSelectedExercise(filteredAndSortedExercises[currentIndex + 1]);
    }
  };

  const currentIndex = selectedExercise ? filteredAndSortedExercises.indexOf(selectedExercise) : -1;
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < filteredAndSortedExercises.length - 1;

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            selectedCategory === 'All Activities'
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => {
            setSelectedCategory('All Activities');
            setDisplayCount(6);
          }}
        >
          All Activities
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            selectedCategory === 'Mobility/Agility'
              ? 'bg-yellow-400 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => {
            setSelectedCategory('Mobility/Agility');
            setDisplayCount(6);
          }}
        >
          🟡 Mobility/Agility
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            selectedCategory === 'Strength'
              ? 'bg-red-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => {
            setSelectedCategory('Strength');
            setDisplayCount(6);
          }}
        >
          🔴 Strength
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            selectedCategory === 'Endurance'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => {
            setSelectedCategory('Endurance');
            setDisplayCount(6);
          }}
        >
          🔵 Endurance
        </button>
      </div>

      {/* Exercises Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <AnimatePresence mode="popLayout">
          {displayedExercises.map((exercise, index) => {
            const color = getCategoryColor(exercise.category);

            return (
              <motion.div
                key={`${exercise.station}-${exercise.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleExerciseClick(exercise)}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:scale-105"
              >
                {/* Exercise Image */}
                {exercise.image && (
                  <div className="relative w-full h-48 bg-gray-200">
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

                {/* Exercise Content */}
                <div className="p-4">
                  {/* Station Number with Color */}
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm"
                      style={{ backgroundColor: color }}
                    >
                      {exercise.station}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-800">{exercise.name}</h3>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-3">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-white text-xs font-semibold"
                      style={{ backgroundColor: color }}
                    >
                      {exercise.category}
                    </span>
                  </div>

                  {/* Instructions Preview */}
                  <div className="mb-3">
                    <ul className="list-disc pl-5 space-y-1">
                      {exercise.instructions.slice(0, 2).map((instruction, idx) => (
                        <li key={idx} className="text-sm text-gray-700">
                          {instruction}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Click to View */}
                  <p className="text-green-600 hover:text-green-700 font-semibold text-sm">
                    Click to view details →
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* View More Button */}
      {hasMore && (
        <div className="flex justify-center mb-8">
          <button
            onClick={handleViewMore}
            disabled={isLoading}
            className="flex items-center gap-2 px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                View More Exercises
              </>
            )}
          </button>
        </div>
      )}

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
    </div>
  );
}

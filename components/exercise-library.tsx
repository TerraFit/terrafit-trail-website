'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Exercise {
  station: number;
  name: string;
  category: 'Mobility/Agility' | 'Strength' | 'Endurance';
  instructions: string[];
  image?: string;
}

const exercisesData: Exercise[] = [
  {
    station: 1,
    name: 'Preparatory Stretching (Upper Body)',
    category: 'Mobility/Agility',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Gently reach arms overhead and lean to each side',
      'Perform arm circles in both directions',
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
    ],
    image: '/exercises/yellow-station-01-preparatory-stretching-calf.png',
  },
  {
    station: 2,
    name: 'Lift Heels, Toes',
    category: 'Mobility/Agility',
    instructions: [
      'Stand with feet hip-width apart',
      'Rise up on toes, hold for 2 seconds',
      'Lower heels and lift toes up',
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
      'Perform 10 figure-eights in each direction',
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
    ],
    image: '/exercises/yellow-station-02-backward-crawl-different-heights.png',
  },
  {
    station: 3,
    name: 'Balance Trunk',
    category: 'Mobility/Agility',
    instructions: [
      'Stand on a stable surface or log',
      'Maintain balance for 20-30 seconds',
      'Engage core muscles',
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
    ],
    image: '/exercises/red-station-03-jump-feet-together.png',
  },
  {
    station: 4,
    name: 'Hang and Breathe Calmly',
    category: 'Mobility/Agility',
    instructions: [
      'Grip pull-up bar with hands shoulder-width apart',
      'Hang with arms extended',
      'Maintain calm, steady breathing',
    ],
    image: '/exercises/yellow-station-04-hang-and-breathe-calmly.png',
  },
  {
    station: 4,
    name: 'Hold a Suspended Position with Bent Arms',
    category: 'Strength',
    instructions: [
      'Grip pull-up bar with hands shoulder-width apart',
      'Pull yourself up until arms are bent at 90 degrees',
      'Hold this position for as long as possible',
    ],
    image: '/exercises/red-station-04-hold-a-suspended-position-with-bent-arms.png',
  },
  {
    station: 4,
    name: 'Pull Ups',
    category: 'Strength',
    instructions: [
      'Grip pull-up bar with hands shoulder-width apart',
      'Pull yourself up until chin is over the bar',
      'Lower yourself slowly',
    ],
    image: '/exercises/red-station-04-pull-ups.png',
  },
  {
    station: 5,
    name: 'Arch and Round Your Back',
    category: 'Mobility/Agility',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Arch your back gently',
      'Then round your back',
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
    ],
    image: '/exercises/yellow-station-05-laterally-bend-the-upper-body.png',
  },
  {
    station: 6,
    name: 'Leg Circles Feet Off Ground',
    category: 'Mobility/Agility',
    instructions: [
      'Sit on the ground or bench',
      'Lift feet off ground',
      'Make circles with your feet',
    ],
    image: '/exercises/yellow-station-06-leg-circles-feet-off-the-ground-upper-body-stable.png',
  },
  {
    station: 6,
    name: 'Slowly Lift Knees to the Left, Center, Right',
    category: 'Strength',
    instructions: [
      'Sit on the ground or bench',
      'Lean back slightly',
      'Slowly lift knees to the left, center, and right',
    ],
    image: '/exercises/red-station-06-slowly-lift-knees-to-the-left-center-right.png',
  },
  {
    station: 7,
    name: 'Gentle Body Swings While Supporting Yourself on Your Arms',
    category: 'Strength',
    instructions: [
      'Grip parallel bars with hands shoulder-width apart',
      'Lift body off ground',
      'Swing body gently forward and backward',
    ],
    image: '/exercises/red-station-07-gentle-body-swings-while-supporting-yourself-on-your-arms.png',
  },
  {
    station: 7,
    name: 'Arm Pull Ups',
    category: 'Strength',
    instructions: [
      'Grip parallel bars with hands shoulder-width apart',
      'Pull yourself up',
      'Lower yourself slowly',
    ],
    image: '/exercises/red-station-07-arm-pull-ups.png',
  },
  {
    station: 7,
    name: 'Move Forward While Supporting Yourself on Your Arms',
    category: 'Strength',
    instructions: [
      'Grip parallel bars with hands shoulder-width apart',
      'Lift body off ground',
      'Move forward using your arms',
    ],
    image: '/exercises/red-station-07-move-forward-while-supporting-yourself-on-your-arms.png',
  },
  {
    station: 8,
    name: 'Climb Up and Down',
    category: 'Endurance',
    instructions: [
      'Climb up the ladder',
      'Climb down the ladder',
      'Repeat',
    ],
    image: '/exercises/blue-station-08-climb-up-and-down.png',
  },
  {
    station: 8,
    name: 'Climb Up Fully, Then Descend',
    category: 'Endurance',
    instructions: [
      'Climb up the ladder fully',
      'Descend carefully',
      'Repeat',
    ],
    image: '/exercises/blue-station-08-climb-up-fully-then-descend.png',
  },
  {
    station: 9,
    name: 'Alternately Lift Feet by a Shoes Length, Keeping Torso and Legs Straight',
    category: 'Strength',
    instructions: [
      'Lie on your back',
      'Alternately lift feet by a shoes length',
      'Keep torso and legs straight',
    ],
    image: '/exercises/red-station-09-alternately-lift-feet-by-a-shoes-length-keeping-torso-and-legs-straight.png',
  },
  {
    station: 9,
    name: 'Lift Torso with Back Extension, Without Changing Hip or Leg Position',
    category: 'Strength',
    instructions: [
      'Lie on your stomach',
      'Lift torso with back extension',
      'Keep hips and legs still',
    ],
    image: '/exercises/red-station-09-lift-torso-with-back-extension-without-changing-hip-or-leg-position.png',
  },
  {
    station: 9,
    name: 'Raise Hips as High as Possible, Lower Without Touching the Ground',
    category: 'Strength',
    instructions: [
      'Lie on your back with knees bent',
      'Raise hips as high as possible',
      'Lower without touching the ground',
    ],
    image: '/exercises/red-station-09-raise-hips-as-high-as-possible-lower-without-touching-the-ground.png',
  },
  {
    station: 10,
    name: 'Jump Feet Together',
    category: 'Endurance',
    instructions: [
      'Jump feet together over the obstacle',
      'Repeat',
      'Maintain a steady rhythm',
    ],
    image: '/exercises/blue-station-10-jump-feet-together.png',
  },
  {
    station: 10,
    name: 'Jump Alternately Left, Right',
    category: 'Endurance',
    instructions: [
      'Jump alternately left and right over the obstacle',
      'Repeat',
      'Maintain a steady rhythm',
    ],
    image: '/exercises/blue-station-10-jump-alternately-left-right.png',
  },
  {
    station: 11,
    name: 'Apply Light Pressure to Shoulders, Hold for One Second, Then Release',
    category: 'Mobility/Agility',
    instructions: [
      'Stand upright with good posture',
      'Apply light pressure to shoulders',
      'Hold for one second, then release',
    ],
    image: '/exercises/yellow-station-11-apply-light-pressure-to-shoulders-hold-for-one-second-then-release.png',
  },
  {
    station: 11,
    name: 'Support Jumps',
    category: 'Endurance',
    instructions: [
      'Jump over the support',
      'Repeat',
      'Maintain a steady rhythm',
    ],
    image: '/exercises/blue-station-11-support-jumps.png',
  },
  {
    station: 12,
    name: 'Push Ups',
    category: 'Strength',
    instructions: [
      'Perform push-ups on the support',
      'Lower your body until your chest nearly touches the ground',
      'Push yourself back up',
    ],
    image: '/exercises/red-station-12-push-ups.png',
  },
  {
    station: 12,
    name: 'Support Yourself on Your Arms Backward',
    category: 'Strength',
    instructions: [
      'Support yourself on your arms',
      'Move backward',
      'Keep your body straight',
    ],
    image: '/exercises/red-station-12-support-yourself-on-your-arms-backward.png',
  },
  {
    station: 13,
    name: 'Circle Around Each Post',
    category: 'Mobility/Agility',
    instructions: [
      'Stand at starting post',
      'Run in circle around each post',
      'Maintain balance and control',
    ],
    image: '/exercises/yellow-station-13-circle-around-each-post.png',
  },
  {
    station: 13,
    name: 'Hurdle Jumps',
    category: 'Endurance',
    instructions: [
      'Jump over the hurdles',
      'Repeat',
      'Maintain a steady rhythm',
    ],
    image: '/exercises/blue-station-13-hurdle-jumps.png',
  },
  {
    station: 14,
    name: 'Walk Forward and Backward in Balance',
    category: 'Mobility/Agility',
    instructions: [
      'Walk forward on balance beam',
      'Maintain steady balance',
      'Walk backward',
    ],
    image: '/exercises/yellow-station-14-walk-forward-and-backward-in-balance.png',
  },
  {
    station: 14,
    name: 'Balance Until Horizontal',
    category: 'Mobility/Agility',
    instructions: [
      'Stand on one leg',
      'Lean forward until body is horizontal',
      'Hold position for 10-20 seconds',
    ],
    image: '/exercises/yellow-station-14-balance-until-horizontal.png',
  },
  {
    station: 15,
    name: 'Neck Stretch',
    category: 'Mobility/Agility',
    instructions: [
      'Gently tilt your head to one side',
      'Hold the stretch',
      'Repeat on the other side',
    ],
    image: '/exercises/yellow-station-15-neck-stretch.png',
  },
  {
    station: 15,
    name: 'Seratus Stretch',
    category: 'Mobility/Agility',
    instructions: [
      'Sit with your legs extended',
      'Reach for your toes',
      'Hold the stretch',
    ],
    image: '/exercises/yellow-station-15-seratus-stretch.png',
  },
  {
    station: 15,
    name: 'Quad Knee Stretch',
    category: 'Mobility/Agility',
    instructions: [
      'Stand on one leg',
      'Grab your other foot and pull it towards your butt',
      'Hold the stretch',
    ],
    image: '/exercises/yellow-station-15-quad-knee-stretch.png',
  },
  {
    station: 15,
    name: 'Aductor Stretch',
    category: 'Mobility/Agility',
    instructions: [
      'Sit with your legs extended and feet together',
      'Gently press your knees towards the ground',
      'Hold the stretch',
    ],
    image: '/exercises/yellow-station-15-aductor-stretch.png',
  },
  {
    station: 15,
    name: 'Quad Standing Stretch',
    category: 'Mobility/Agility',
    instructions: [
      'Stand on one leg',
      'Grab your other foot and pull it towards your butt',
      'Hold the stretch',
    ],
    image: '/exercises/yellow-station-15-quad-standing-stretch.png',
  },
  {
    station: 15,
    name: 'Calf Stretch',
    category: 'Mobility/Agility',
    instructions: [
      'Stand facing a wall or support',
      'Step one leg back',
      'Keep heel on ground and lean forward',
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
  const [expandedInstructions, setExpandedInstructions] = useState<{ [key: string]: boolean }>({});

  const filteredExercises = selectedCategory === 'All Activities'
    ? exercisesData
    : exercisesData.filter(exercise => exercise.category === selectedCategory);

  const sortedExercises = [...filteredExercises].sort((a, b) => a.station - b.station);

  const toggleInstructions = (key: string) => {
    setExpandedInstructions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

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
          onClick={() => setSelectedCategory('All Activities')}
        >
          All Activities
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            selectedCategory === 'Mobility/Agility'
              ? 'bg-yellow-400 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setSelectedCategory('Mobility/Agility')}
        >
          🟡 Mobility/Agility
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            selectedCategory === 'Strength'
              ? 'bg-red-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setSelectedCategory('Strength')}
        >
          🔴 Strength
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            selectedCategory === 'Endurance'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setSelectedCategory('Endurance')}
        >
          🔵 Endurance
        </button>
      </div>

      {/* Exercises Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedExercises.map((exercise, index) => {
          const exerciseKey = `${exercise.station}-${index}`;
          const isExpanded = expandedInstructions[exerciseKey] || false;
          const color = getCategoryColor(exercise.category);

          return (
            <motion.div
              key={exerciseKey}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
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

                {/* Instructions */}
                <div className="mb-3">
                  <ul className="list-disc pl-5 space-y-1">
                    {exercise.instructions
                      .slice(0, isExpanded ? exercise.instructions.length : 2)
                      .map((instruction, idx) => (
                        <li key={idx} className="text-sm text-gray-700">
                          {instruction}
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Expand/Collapse Button */}
                {exercise.instructions.length > 2 && (
                  <motion.button
                    onClick={() => toggleInstructions(exerciseKey)}
                    className="text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
                  >
                    {isExpanded
                      ? '- Collapse'
                      : `+ ${exercise.instructions.length - 2} more steps`}
                  </motion.button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

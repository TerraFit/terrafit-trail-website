import Link from 'next/link';

const previewExercises = [
  { station: 1, name: 'Balance Walk', category: 'mobility', color: 'bg-yellow-500' },
  { station: 4, name: 'Step Ups', category: 'strength', color: 'bg-red-500' },
  { station: 11, name: 'Monkey Bars', category: 'endurance', color: 'bg-blue-500' }
];

export default function ExercisePreview() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Explore Our Exercises
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover 43 professionally designed exercises across 15 stations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {previewExercises.map((exercise, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg border border-green-100 overflow-hidden transform hover:scale-105 transition duration-300">
              <div className={`h-2 ${exercise.color}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${exercise.color}`}>
                    Station {exercise.station}
                  </span>
                  <span className="text-sm text-gray-500 capitalize">{exercise.category}</span>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{exercise.name}</h3>
                <div className="h-40 bg-gradient-to-br from-green-200 to-orange-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-600">Exercise Image</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Professional outdoor fitness equipment designed for all skill levels.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/exercises"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 shadow-lg"
          >
            View Full Exercise Library
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import YouTubeModal from '@/components/YouTubeModal';
import ExercisePreview from '@/components/ExercisePreview';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Outdoor
            <span className="block text-orange-400">Fitness Trails</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            For public and private estates, corporate campuses, and resort properties
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400">15</div>
              <div className="text-green-200">Stations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400">43</div>
              <div className="text-green-200">Exercises</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400">100%</div>
              <div className="text-green-200">Outdoor</div>
            </div>
          </div>

          {/* YouTube Modal Component */}
          <YouTubeModal />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link 
              href="/trail-locator" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 shadow-lg"
            >
              Visit Our Trail
            </Link>
            <Link 
              href="/buy-system" 
              className="border-2 border-white hover:bg-white hover:text-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300"
            >
              Buy TerraFit System
            </Link>
          </div>
        </div>
      </section>

      {/* Exercise Preview */}
      <ExercisePreview />

      {/* Why Choose TerraFit */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
          Why Choose TerraFit Trail
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Professional Grade', desc: 'Commercial-quality equipment built to last' },
            { title: 'Complete System', desc: '15 stations, 43 exercises for full-body fitness' },
            { title: 'Natural Integration', desc: 'Beautifully blends with outdoor environments' }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h3 className="text-xl font-bold text-green-700 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

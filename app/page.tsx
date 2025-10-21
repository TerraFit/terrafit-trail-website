import Link from 'next/link';

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

      {/* Simple Exercise Preview - No broken imports */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
            Professional Fitness Trail System
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold text-green-700 mb-3">15 Stations</h3>
              <p className="text-gray-600">Complete outdoor fitness circuit</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold text-green-700 mb-3">43 Exercises</h3>
              <p className="text-gray-600">Full-body workout variety</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold text-green-700 mb-3">3 Categories</h3>
              <p className="text-gray-600">Strength, Mobility, Endurance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

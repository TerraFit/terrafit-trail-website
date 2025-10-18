import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-green-600">TerraFit Trail</Link>
        <div className="flex items-center space-x-6">
          <Link href="/exercises" className="text-gray-700 hover:text-green-600">Exercises</Link>
          <Link href="/trail" className="text-gray-700 hover:text-green-600">Trail Locator</Link>
          <Link href="/benefits" className="text-gray-700 hover:text-green-600">Benefits</Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
          <Link href="/register" className="text-white bg-green-500 hover:bg-green-700 px-4 py-2 rounded-full transition-colors">Register <span className="line-through">FREE</span></Link>
          <Link href="/get-started" className="text-white bg-green-500 hover:bg-green-700 px-4 py-2 rounded-full transition-colors">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}

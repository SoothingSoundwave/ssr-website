// not-found.tsx
// Path: /src/app/not-found.tsx

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <h1 className="text-9xl font-heading font-bold text-accent-purple mb-4">
          404
        </h1>
        
        {/* Error Message */}
        <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-text-primary mb-4">
          Page Not Found
        </h2>
        
        <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
          Looks like this page got lost in the soundwaves. 
          Let's get you back to the music.
        </p>
        
        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="px-8 py-4 bg-accent-purple hover:bg-hover-purple text-white font-sans font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-glow-purple"
          >
            Go Home
          </Link>
          
          <Link
            href="/releases"
            className="px-8 py-4 border-2 border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white font-sans font-medium rounded-lg transition-all duration-300"
          >
            Browse Releases
          </Link>
        </div>
        
        {/* Decorative Wave */}
        <div className="mt-16 opacity-20">
          <svg
            className="w-full h-24 text-accent-purple"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C300,60 600,60 900,30 C1050,15 1125,0 1200,0 L1200,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
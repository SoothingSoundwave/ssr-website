'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <svg
            className="w-24 h-24 mx-auto text-error"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-text-primary mb-4">
          Something Went Wrong
        </h1>
        
        <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
          We encountered an unexpected error. Try refreshing the page or go back home.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="px-8 py-4 bg-accent-purple hover:bg-hover-purple text-white font-sans font-medium rounded-lg transition-all"
          >
            Try Again
          </button>
          
          <a href="/" className="px-8 py-4 border-2 border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white font-sans font-medium rounded-lg transition-all">
            Go Home
          </a>
        </div>
      </div>
    </div>
  )
}
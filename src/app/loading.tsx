// loading.tsx
// Path: /src/app/loading.tsx

export default function Loading() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center">
      <div className="text-center">
        {/* Animated Soundwave Loader */}
        <div className="flex items-end justify-center space-x-2 mb-6">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 bg-accent-purple rounded-full animate-pulse"
              style={{
                height: `${20 + (i % 3) * 10}px`,
                animationDelay: `${i * 0.15}s`,
                animationDuration: '1s',
              }}
            />
          ))}
        </div>
        
        {/* Loading Text */}
        <p className="text-text-secondary font-sans">
          Loading...
        </p>
      </div>
    </div>
  )
}
// src/app/custom-vinyl/page.tsx

export default function CustomVinylPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <div className="text-8xl mb-6">🎵</div>
        </div>
        
        <h1 className="text-6xl font-heading font-bold text-text-primary mb-6">
          Coming Soon
        </h1>
        
        <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-8">
          We're working on something special. Custom vinyl records will be available soon!
        </p>
        
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-accent-purple hover:bg-hover-purple text-white font-sans font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-glow-purple"
        >
          Get Notified
        </a>
      </div>
    </div>
  )
}
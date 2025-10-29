// page.tsx
// Path: /src/app/merch/page.tsx

export default function MerchPage() {
  return (
    <div className="min-h-screen pt-32 pb-20" suppressHydrationWarning>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
        <div className="max-w-7xl mx-auto" suppressHydrationWarning>
          <h1 className="text-5xl font-heading font-bold text-text-primary mb-4 text-center">
            Official Merchandise
          </h1>
          
          <p className="text-text-secondary text-lg text-center mb-12">
            Show your love for Soothing Soundwave Records
          </p>
          
          {/* Creator Spring Embed - Grid Layout */}
          <div className="mb-12" suppressHydrationWarning>
            <iframe 
              style={{
                borderRadius: '24px',
                border: 'none',
                width: '100%',
                height: '960px'
              }}
              src="https://embed.creator-spring.com/widget?slug=soothing-soundwave-records&per=20&currency=&page=1&layout=grid-sm-4&theme=dark" 
              title="Soothing Soundwave Records Merch store powered by Spring" 
              width="100%" 
              height="960"
            />
          </div>
          
          {/* Full Store CTA */}
          <div className="text-center bg-bg-secondary/50 backdrop-blur-sm border border-border-subtle rounded-lg p-12" suppressHydrationWarning>
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
              Explore Our Full Collection
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Visit our store to browse our complete collection of apparel, accessories, 
              home goods, and more. New designs added regularly!
            </p>
            <a 
              href="https://soothing-soundwave-records.creator-spring.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-8 py-4 bg-accent-purple hover:bg-hover-purple text-white font-sans font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-glow-purple text-lg"
            >
              View Full Store
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
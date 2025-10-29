// MerchCarousel.tsx
// Path: /src/components/home/MerchCarousel.tsx

import Link from 'next/link'

export default function MerchCarousel() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-text-primary mb-4">
              Official Merch
            </h2>
            <p className="text-text-secondary text-lg">
              Rep the label with exclusive merchandise
            </p>
          </div>

          {/* Creator Spring Carousel Embed */}
          <div className="mb-8">
            <iframe 
              style={{
                borderRadius: '24px',
                border: 'none',
                width: '100%',
                height: '420px'
              }}
              src="https://embed.creator-spring.com/widget?slug=soothing-soundwave-records&per=20&currency=&page=1&layout=carousel-wide&theme=dark&bg=transparent" 
              title="Soothing Soundwave Records Merch store powered by Spring" 
              width="100%" 
              height="420"
            />
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              href="/merch"
              className="inline-block px-8 py-4 bg-accent-purple hover:bg-hover-purple text-white font-sans font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-glow-purple text-lg"
            >
              View All Merch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
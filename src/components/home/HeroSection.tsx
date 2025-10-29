// HeroSection.tsx
// Path: /src/components/home/HeroSection.tsx

'use client'

import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleScrollToReleases = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const releasesSection = document.getElementById('releases')
    if (releasesSection) {
      releasesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const heading = "Soothing Soundwave Records"
  const description = "Welcome to Soothing Soundwave Records, the everlasting wave of the chillest and most relaxing music! Our main goal is to give you a music background for most of your moments, whether it be chill hop for work or studying, different lounge tunes you can chill at the beach to, smooth jazz for your evenings in two with a glass of red wine, even some downtempo and deep house…"

  return (
    <>
      {/* Fixed video background SAMO za homepage */}
      {mounted && (
        <div className="fixed inset-0 w-full h-full -z-10">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://ocfefvcylrzsjuhcqxlu.supabase.co/storage/v1/object/public/hero-videos/ssr-hero-vid.mp4" type="video/mp4" />
          </video>
          {/* Overlay koji fade OUT sa 2s linear animacijom */}
          <div className="absolute inset-0 bg-black animate-hero-overlay"></div>
          {/* Statički overlay kao na drugim stranicama */}
          <div className="absolute inset-0 bg-bg-primary/70"></div>
        </div>
      )}

      <section className="relative h-screen w-full overflow-hidden">
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-text-primary mb-6 sm:mb-8 tracking-wide leading-tight" style={{ fontFamily: 'Hadenut, serif' }}>
              {heading.split('').map((char, index) => (
                <span key={index} className="opacity-0 animate-fade-in-letter" style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'forwards' }}>
                  {char}
                </span>
              ))}
            </h1>

            {/* TEXT: Changed from 0.015s to 0.005s per character to finish in ~2 seconds instead of 6+ seconds */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto px-4">
              {description.split('').map((char, index) => (
                <span key={index} className="opacity-0 animate-fade-in-letter" style={{ animationDelay: `${2 + (index * 0.005)}s`, animationFillMode: 'forwards' }}>
                  {char}
                </span>
              ))}
            </p>

            {/* BUTTON: Changed from 6s to 3s (appears at 1 second into the 2-second text animation) */}
            <div className="mt-10 sm:mt-12 opacity-0 animate-fade-in-letter" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
              <a 
                href="#releases" 
                onClick={handleScrollToReleases}
                className="inline-block px-8 py-4 bg-accent-purple hover:bg-hover-purple text-white font-sans font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-glow-purple"
              >
                Explore Our Music
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </>
  )
}
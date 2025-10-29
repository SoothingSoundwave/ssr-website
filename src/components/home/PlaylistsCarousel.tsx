// PlaylistsCarousel.tsx
// Path: /src/components/home/PlaylistsCarousel.tsx

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Playlist {
  id: string
  name: string
  description: string
  images: Array<{ url: string; height: number; width: number }>
  tracks: { total: number }
  external_urls: { spotify: string }
  uri: string
}

interface PlaylistsCarouselProps {
  playlists?: Playlist[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export default function PlaylistsCarousel({ 
  playlists = [], 
  autoPlay = true,
  autoPlayInterval = 6000 
}: PlaylistsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [itemsPerView, setItemsPerView] = useState(2)
  const SLIDE_AMOUNT = 2 // Always slide by 2 playlists

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setItemsPerView(1)
      } else {
        setItemsPerView(2)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!autoPlay || isHovered || !playlists || playlists.length <= itemsPerView) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, playlists.length - itemsPerView)
        const nextIndex = prev + SLIDE_AMOUNT
        return nextIndex >= maxIndex ? 0 : nextIndex
      })
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, isHovered, playlists?.length, itemsPerView])

  const goToNext = () => {
    if (!playlists) return
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, playlists.length - itemsPerView)
      const nextIndex = prev + SLIDE_AMOUNT
      return nextIndex >= maxIndex ? 0 : nextIndex
    })
  }

  const goToPrevious = () => {
    if (!playlists) return
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, playlists.length - itemsPerView)
      const nextIndex = prev - SLIDE_AMOUNT
      return nextIndex < 0 ? maxIndex : nextIndex
    })
  }

  if (playlists.length === 0) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-text-tertiary">No playlists available</p>
        </div>
      </section>
    )
  }

  const showNavigation = playlists && playlists.length > itemsPerView
  const totalPages = Math.ceil(playlists.length / itemsPerView)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Reduced max-width for more reasonable card sizes */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-primary mb-3">
              Curated Playlists
            </h2>
            <p className="text-text-secondary text-lg">
              Handpicked collections of the chillest vibes
            </p>
          </div>

          <div 
            className="relative group overflow-hidden"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Fixed width container to prevent layout shifts */}
            <div className="overflow-hidden">
              <div 
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${(currentIndex / playlists.length) * 100}%)`,
                  width: `${playlists.length * (100 / itemsPerView)}%`
                }}
              >
                {playlists.map((playlist) => (
                  <div
                    key={playlist.id}
                    className="flex-shrink-0"
                    style={{ 
                      width: `calc(${100 / playlists.length}% - ${(24 * (playlists.length - 1)) / playlists.length}px)`,
                      maxWidth: '500px'
                    }}
                  >
                    {/* Playlist card with constrained width */}
                    <div className="bg-bg-secondary/50 backdrop-blur-sm border border-border-subtle rounded-lg overflow-hidden hover:border-accent-purple transition-all duration-300 hover:shadow-lg">
                      <div className="p-4"> {/* Reduced padding from p-6 to p-4 */}
                        {/* Header with track count and open in Spotify icon */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-text-tertiary text-sm">
                            {playlist.tracks.total} tracks
                          </span>
                          
                          {/* Open in Spotify Icon */}
                          <a
                            href={playlist.external_urls.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-accent-purple hover:bg-hover-purple text-white rounded transition-all duration-300 shadow-md hover:shadow-glow-purple"
                            aria-label="Open in Spotify"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>

                        {/* Embedded Spotify Player with constrained height */}
                        <iframe
                          src={`https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator&theme=0`}
                          width="100%"
                          height="352" // Slightly reduced height from 380 to 352
                          frameBorder="0"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          className="rounded"
                          title={`Spotify playlist: ${playlist.name}`}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {showNavigation && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous playlists"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Next playlists"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* View All Link */}
          <div className="text-center mt-10">
            <Link
              href="/playlists"
              className="inline-flex items-center gap-2 text-accent-purple hover:text-hover-purple font-bold text-lg transition-colors group/link"
            >
              View All Playlists
              <ChevronRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
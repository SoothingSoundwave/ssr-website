// ReleasesCarousel.tsx
// Path: /src/components/home/ReleasesCarousel.tsx

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Album {
  id: string
  name: string
  artists: Array<{ name: string }>
  images: Array<{ url: string; height: number; width: number }>
  release_date: string
  total_tracks: number
  album_type: string
  external_urls: { spotify: string }
}

interface ReleasesCarouselProps {
  albums?: Album[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export default function ReleasesCarousel({ 
  albums = [], 
  autoPlay = true,
  autoPlayInterval = 5000 
}: ReleasesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [itemsPerView, setItemsPerView] = useState(6)
  const SLIDE_AMOUNT = 5 // Always slide by 5 cards

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2)
      } else if (window.innerWidth < 768) {
        setItemsPerView(3)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(4)
      } else if (window.innerWidth < 1280) {
        setItemsPerView(5)
      } else {
        setItemsPerView(6)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!autoPlay || isHovered || !albums || albums.length <= itemsPerView) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, albums.length - itemsPerView)
        const nextIndex = prev + SLIDE_AMOUNT
        return nextIndex >= maxIndex ? 0 : nextIndex
      })
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, isHovered, albums?.length, itemsPerView])

  const goToNext = () => {
    if (!albums) return
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, albums.length - itemsPerView)
      const nextIndex = prev + SLIDE_AMOUNT
      return nextIndex >= maxIndex ? 0 : nextIndex
    })
  }

  const goToPrevious = () => {
    if (!albums) return
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, albums.length - itemsPerView)
      const nextIndex = prev - SLIDE_AMOUNT
      return nextIndex < 0 ? maxIndex : nextIndex
    })
  }

  // Don't render the section at all if no albums
  if (!albums || albums.length === 0) {
    return null
  }

  const showNavigation = albums.length > itemsPerView
  // Calculate dots based on slide amount, not items per view
  const totalSlides = Math.ceil(Math.max(0, albums.length - itemsPerView) / SLIDE_AMOUNT) + 1
  const currentSlide = Math.floor(currentIndex / SLIDE_AMOUNT)

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-2">
              Latest Releases
            </h2>
            <p className="text-text-secondary text-base">
              Fresh tracks and albums from Soothing Soundwave Records
            </p>
          </div>

          <div 
            className="relative group overflow-hidden"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="overflow-hidden">
              <div 
                className="flex gap-4 transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${(currentIndex / albums.length) * 100}%)`,
                  width: `${albums.length * (100 / itemsPerView)}%`
                }}
              >
                {albums.map((album, index) => (
                  <div
                    key={album.id}
                    className="flex-shrink-0"
                    style={{ 
                      width: `calc(${100 / albums.length}% - ${16 * (albums.length - 1) / albums.length}px)`,
                      maxWidth: '200px'
                    }}
                  >
                    <a href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="group block">
                      <div className="bg-bg-secondary rounded-lg overflow-hidden hover:bg-bg-elevated transition-all duration-300 hover:scale-105">
                        <div className="aspect-square relative">
                          {album.images[0] ? (
                            <Image
                              src={album.images[0].url}
                              alt={album.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 200px"
                              loading={index < 6 ? 'eager' : 'lazy'}
                            />
                          ) : (
                            <div className="w-full h-full bg-bg-elevated flex items-center justify-center">
                              <span className="text-text-tertiary text-sm">No Image</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="p-3">
                          <h3 className="text-text-primary font-medium text-sm line-clamp-2 mb-1 group-hover:text-accent-purple transition-colors">
                            {album.name}
                          </h3>
                          <p className="text-text-tertiary text-xs line-clamp-1">
                            {album.artists.map(a => a.name).join(', ')}
                          </p>
                          <p className="text-text-tertiary text-xs mt-1">
                            {album.total_tracks} {album.total_tracks === 1 ? 'track' : 'tracks'}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {showNavigation && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous releases"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Next releases"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* View All Link */}
          <div className="text-center mt-10">
            <Link
              href="/releases"
              className="inline-flex items-center gap-2 text-accent-purple hover:text-hover-purple font-bold text-lg transition-colors group/link"
            >
              View All Releases
              <ChevronRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
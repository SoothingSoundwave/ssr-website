// VideoCarousel.tsx
// Path: /src/components/home/VideoCarousel.tsx

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { YouTubeVideo } from '@/types/youtube.types'
import { ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectFade, Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/thumbs'

interface VideoCarouselProps {
  videos: YouTubeVideo[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export default function VideoCarousel({ 
  videos, 
  autoPlay = true,
  autoPlayInterval = 5000 
}: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  useEffect(() => {
    if (!autoPlay || isHovered || videos.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length)
      swiperInstance?.slideNext()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, isHovered, videos.length, swiperInstance])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length)
    swiperInstance?.slideNext()
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)
    swiperInstance?.slidePrev()
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    swiperInstance?.slideTo(index)
  }

  if (videos.length === 0) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[var(--text-tertiary)]">No videos available</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Match releases carousel max-width */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-[var(--text-primary)] mb-3">
              Latest Videos
            </h2>
            <p className="text-[var(--text-secondary)] text-lg">
              Check out our newest releases and visual content
            </p>
          </div>

          <div 
            className="relative group"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Carousel container with sliding animation */}
            <div className="overflow-hidden rounded-2xl">
              <Swiper
                modules={[Navigation, Autoplay, EffectFade, Thumbs]}
                spaceBetween={0}
                slidesPerView={1}
                effect="fade"
                speed={700}
                loop={videos.length > 1}
                autoplay={false} // We handle autoplay manually above
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                className="video-main-swiper"
              >
                {videos.map((video, index) => {
                  const thumbnail = video.snippet.thumbnails.maxres || 
                                   video.snippet.thumbnails.high || 
                                   video.snippet.thumbnails.medium
                  const videoUrl = `https://www.youtube.com/watch?v=${video.id}`

                  return (
                    <SwiperSlide key={video.id}>
                      <div className="relative aspect-video bg-[var(--bg-elevated)] group/slide">
                        <Image
                          src={thumbnail.url}
                          alt={video.snippet.title}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover/slide:opacity-90 transition-opacity"></div>

                        <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="bg-[var(--accent-purple)] rounded-full p-6 transform group-hover/slide:scale-110 transition-transform duration-300 shadow-lg">
                            <Play className="w-12 h-12 text-white fill-white" />
                          </div>
                        </a>

                        <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                          <div className="max-w-3xl">
                            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2 line-clamp-2">
                              {video.snippet.title}
                            </h3>
                            {video.snippet.description && (
                              <p className="text-gray-200 text-base line-clamp-2 mb-4">
                                {video.snippet.description}
                              </p>
                            )}
                            {video.statistics && (
                              <div className="flex items-center gap-6 text-sm text-gray-300 mb-4">
                                <span>{parseInt(video.statistics.viewCount).toLocaleString()} views</span>
                                <span>•</span>
                                <span>{parseInt(video.statistics.likeCount).toLocaleString()} likes</span>
                              </div>
                            )}
                            <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                              <Play className="w-4 h-4 fill-black" />
                              Watch Now
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>

            {/* Navigation Arrows */}
            {videos.length > 1 && (
              <>
                <button 
                  onClick={goToPrevious} 
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100" 
                  aria-label="Previous video"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={goToNext} 
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100" 
                  aria-label="Next video"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Navigation */}
          {videos.length > 1 && (
            <div className="flex justify-center items-center gap-3 mt-6">
              {/* Use Swiper for thumbnail navigation too */}
              <Swiper
                modules={[Thumbs]}
                spaceBetween={12}
                slidesPerView={videos.length < 3 ? videos.length : 3}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
                breakpoints={{
                  640: {
                    slidesPerView: Math.min(videos.length, 4),
                  },
                  768: {
                    slidesPerView: Math.min(videos.length, 5),
                  },
                  1024: {
                    slidesPerView: Math.min(videos.length, 6),
                  }
                }}
                className="video-thumbs-swiper w-full max-w-3xl"
              >
                {videos.map((video, index) => (
                  <SwiperSlide key={`thumb-${video.id}`}>
                    <button 
                      onClick={() => goToSlide(index)} 
                      className={`group/thumb relative transition-all duration-300 block w-full ${
                        index === currentIndex ? 'ring-2 ring-[var(--accent-purple)]' : 'opacity-50 hover:opacity-100'
                      }`}
                      style={{
                        height: index === currentIndex ? '96px' : '64px'
                      }}
                      aria-label={`Go to video ${index + 1}`}
                    >
                      <div className="relative w-full h-full rounded-lg overflow-hidden">
                        <Image
                          src={video.snippet.thumbnails.default.url}
                          alt={video.snippet.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                          <Play className="w-6 h-6 text-white fill-white" />
                        </div>
                      </div>
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {/* View All Link */}
          <div className="text-center mt-10">
            <Link 
              href="/videos" 
              className="inline-flex items-center gap-2 text-[var(--accent-purple)] hover:text-[var(--hover-purple)] font-bold text-lg transition-colors group"
            >
              View All Videos
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
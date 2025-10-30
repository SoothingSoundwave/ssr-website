// RadioCard.tsx
// Path: /src/components/videos/RadioCard.tsx

'use client'

import Image from 'next/image'
import { YouTubeVideo } from '@/types/youtube.types'
import { Radio } from 'lucide-react'

interface RadioCardProps {
  video: YouTubeVideo
  priority?: boolean
}

export default function RadioCard({ video, priority = false }: RadioCardProps) {
  const { snippet, statistics } = video
  const thumbnail = snippet.thumbnails.high || snippet.thumbnails.medium
  
  const truncateTitle = (title: string, maxLength: number = 60) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title
  }

  const isLive = snippet.liveBroadcastContent === 'live'
  const videoUrl = `https://www.youtube.com/watch?v=${video.id}`

  return (
    <div className="w-full max-w-4xl mx-auto group relative bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-elevated)] rounded-xl overflow-hidden border-2 border-[var(--accent-coral)] hover:border-[var(--accent-coral)] hover:shadow-[0_0_20px_rgba(255,155,133,0.3)] transition-all duration-300">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="block relative w-full aspect-video overflow-hidden">
        <Image
          src={thumbnail.url}
          alt={snippet.title}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 896px"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-transparent to-transparent">
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex items-center gap-2 bg-red-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
            <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-white"></span>
            </span>
            <span className="text-white font-bold text-xs sm:text-sm uppercase tracking-wide">Live Now</span>
          </div>

          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[var(--accent-coral)] rounded-full p-2 sm:p-3">
            <Radio className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </div>

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-[var(--accent-coral)] rounded-full p-4 sm:p-6 transform group-hover:scale-110 transition-transform">
            <Radio className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" />
          </div>
        </div>
      </a>

      <div className="p-4 sm:p-5 md:p-6">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="block">
          <h3 className="font-heading font-bold text-[var(--text-primary)] text-lg sm:text-xl md:text-2xl mb-2 line-clamp-2 group-hover:text-[var(--accent-coral)] transition-colors">
            {truncateTitle(snippet.title, 80)}
          </h3>
        </a>

        {snippet.description && (
          <p className="text-[var(--text-secondary)] text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{snippet.description}</p>
        )}

        <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[var(--accent-coral)] text-white py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-bold hover:bg-[var(--accent-coral)]/90 hover:shadow-lg hover:shadow-[var(--accent-coral)]/50 transition-all duration-300 group">
          <Radio className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
          <span>Listen Now</span>
        </a>

        <div className="mt-3 text-center">
          <span className="inline-block bg-[var(--accent-coral)]/20 text-[var(--accent-coral)] px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold uppercase tracking-wider">🎵 24/7 Radio Stream</span>
        </div>
      </div>
    </div>
  )
}
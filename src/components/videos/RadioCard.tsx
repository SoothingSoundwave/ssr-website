'use client'

import Image from 'next/image'
import { YouTubeVideo } from '@/types/youtube.types'
import { Radio, Eye, Users } from 'lucide-react'

interface RadioCardProps {
  video: YouTubeVideo
  priority?: boolean
}

export default function RadioCard({ video, priority = false }: RadioCardProps) {
  const { snippet, statistics } = video
  const thumbnail = snippet.thumbnails.high || snippet.thumbnails.medium
  
  const formatViews = (count: string) => {
    const num = parseInt(count)
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }

  const truncateTitle = (title: string, maxLength: number = 60) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title
  }

  const isLive = snippet.liveBroadcastContent === 'live'
  const videoUrl = `https://www.youtube.com/watch?v=${video.id}`

  return (
    <div className="group relative bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-elevated)] rounded-xl overflow-hidden border-2 border-[var(--accent-coral)] hover:border-[var(--accent-coral)] hover:shadow-[0_0_20px_rgba(255,155,133,0.3)] transition-all duration-300">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="block relative aspect-video overflow-hidden">
        <Image
          src={thumbnail.url}
          alt={snippet.title}
          width={thumbnail.width}
          height={thumbnail.height}
          priority={priority}
          className="object-cover w-full h-full"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-transparent to-transparent">
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="text-white font-bold text-sm uppercase tracking-wide">Live Now</span>
          </div>

          <div className="absolute top-4 right-4 bg-[var(--accent-coral)] rounded-full p-3">
            <Radio className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-[var(--accent-coral)] rounded-full p-6 transform group-hover:scale-110 transition-transform">
            <Radio className="w-10 h-10 text-white animate-pulse" />
          </div>
        </div>
      </a>

      <div className="p-5">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="block">
          <h3 className="font-heading font-bold text-[var(--text-primary)] text-xl mb-2 line-clamp-2 group-hover:text-[var(--accent-coral)] transition-colors">
            {truncateTitle(snippet.title, 80)}
          </h3>
        </a>

        {snippet.description && (
          <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">{snippet.description}</p>
        )}

        {statistics && (
          <div className="bg-[var(--bg-primary)] rounded-lg p-3 mb-4">
            <div className="flex items-center justify-around">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 text-[var(--accent-coral)] mb-1">
                  <Users className="w-4 h-4" />
                  <span className="font-bold text-lg">{formatViews(statistics.viewCount)}</span>
                </div>
                <span className="text-[var(--text-tertiary)] text-xs">Listening</span>
              </div>

              <div className="w-px h-10 bg-[var(--border-subtle)]"></div>

              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 text-[var(--text-secondary)] mb-1">
                  <Eye className="w-4 h-4" />
                  <span className="font-bold text-lg">{formatViews(statistics.viewCount)}</span>
                </div>
                <span className="text-[var(--text-tertiary)] text-xs">Total Views</span>
              </div>
            </div>
          </div>
        )}

        <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[var(--accent-coral)] text-white py-3 rounded-lg text-base font-bold hover:bg-[var(--accent-coral)]/90 hover:shadow-lg hover:shadow-[var(--accent-coral)]/50 transition-all duration-300 group">
          <Radio className="w-5 h-5 group-hover:animate-pulse" />
          <span>Listen Now</span>
        </a>

        <div className="mt-3 text-center">
          <span className="inline-block bg-[var(--accent-coral)]/20 text-[var(--accent-coral)] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">🎵 24/7 Radio Stream</span>
        </div>
      </div>
    </div>
  )
}
'use client'

import Image from 'next/image'
import { YouTubeVideo } from '@/types/youtube.types'
import { Play, Eye, ThumbsUp } from 'lucide-react'

interface VideoCardProps {
  video: YouTubeVideo
  priority?: boolean
}

export default function VideoCard({ video, priority = false }: VideoCardProps) {
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
    return `${Math.floor(diffDays / 365)} years ago`
  }

  const truncateTitle = (title: string, maxLength: number = 60) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title
  }

  const isLive = snippet.liveBroadcastContent === 'live'
  const videoUrl = `https://www.youtube.com/watch?v=${video.id}`

  return (
    <div className="group relative bg-[var(--bg-secondary)] rounded-lg overflow-hidden border border-[var(--border-subtle)] hover:border-[var(--accent-purple)] transition-all duration-300 hover:-translate-y-1">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="block relative aspect-video overflow-hidden">
        <Image
          src={thumbnail.url}
          alt={snippet.title}
          width={thumbnail.width}
          height={thumbnail.height}
          priority={priority}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-[var(--accent-purple)] rounded-full p-4">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>

        {isLive && (
          <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            LIVE
          </div>
        )}
      </a>

      <div className="p-4">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="block">
          <h3 className="font-heading font-semibold text-[var(--text-primary)] text-lg mb-2 line-clamp-2 group-hover:text-[var(--accent-purple)] transition-colors">
            {truncateTitle(snippet.title, 80)}
          </h3>
        </a>

        {snippet.description && (
          <p className="text-[var(--text-tertiary)] text-sm mb-3 line-clamp-2">{snippet.description}</p>
        )}

        <div className="flex items-center justify-between text-sm text-[var(--text-tertiary)]">
          {statistics && (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{formatViews(statistics.viewCount)}</span>
              </div>

              <div className="flex items-center gap-1">
                <ThumbsUp className="w-4 h-4" />
                <span>{formatViews(statistics.likeCount)}</span>
              </div>
            </div>
          )}

          {!isLive && (
            <span className="text-xs">{formatDate(snippet.publishedAt)}</span>
          )}
        </div>

        <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="mt-4 w-full block text-center bg-transparent border-2 border-[var(--accent-purple)] text-[var(--accent-purple)] py-2 rounded-md text-sm font-medium hover:bg-[var(--accent-purple)] hover:text-white transition-all duration-300">
          Watch on YouTube
        </a>
      </div>
    </div>
  )
}
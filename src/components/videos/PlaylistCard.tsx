'use client'

import Image from 'next/image'
import { YouTubePlaylist } from '@/types/youtube.types'
import { ListVideo, Play } from 'lucide-react'

interface PlaylistCardProps {
  playlist: YouTubePlaylist
  priority?: boolean
}

export default function PlaylistCard({ playlist, priority = false }: PlaylistCardProps) {
  const { snippet, contentDetails } = playlist
  const thumbnail = snippet.thumbnails.high || snippet.thumbnails.medium
  
  const formatCount = (count: number) => {
    if (count === 1) return '1 video'
    return `${count} videos`
  }

  const truncateTitle = (title: string, maxLength: number = 60) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title
  }

  const truncateDescription = (desc: string, maxLength: number = 100) => {
    return desc.length > maxLength ? `${desc.slice(0, maxLength)}...` : desc
  }

  const playlistUrl = `https://www.youtube.com/playlist?list=${playlist.id}`

  return (
    <div className="group relative bg-[var(--bg-secondary)] rounded-lg overflow-hidden border border-[var(--border-subtle)] hover:border-[var(--accent-pink)] transition-all duration-300 hover:-translate-y-1">
      <a href={playlistUrl} target="_blank" rel="noopener noreferrer" className="block relative aspect-video overflow-hidden">
        <Image
          src={thumbnail.url}
          alt={snippet.title}
          width={thumbnail.width}
          height={thumbnail.height}
          priority={priority}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute bottom-0 right-0 bg-black/90 px-3 py-2 m-2 rounded-md flex items-center gap-2">
            <ListVideo className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">{contentDetails.itemCount}</span>
          </div>
        </div>

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-[var(--accent-pink)] rounded-full p-4">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>
      </a>

      <div className="p-4">
        <a href={playlistUrl} target="_blank" rel="noopener noreferrer" className="block">
          <h3 className="font-heading font-semibold text-[var(--text-primary)] text-lg mb-2 line-clamp-2 group-hover:text-[var(--accent-pink)] transition-colors">
            {truncateTitle(snippet.title, 80)}
          </h3>
        </a>

        {snippet.description && (
          <p className="text-[var(--text-tertiary)] text-sm mb-3 line-clamp-2">
            {truncateDescription(snippet.description, 120)}
          </p>
        )}

        <div className="flex items-center justify-between text-sm text-[var(--text-tertiary)] mb-4">
          <div className="flex items-center gap-1">
            <ListVideo className="w-4 h-4" />
            <span>{formatCount(contentDetails.itemCount)}</span>
          </div>

          <span className="bg-[var(--accent-pink)]/20 text-[var(--accent-pink)] px-2 py-1 rounded text-xs font-medium">PLAYLIST</span>
        </div>

        <a href={playlistUrl} target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-transparent border-2 border-[var(--accent-pink)] text-[var(--accent-pink)] py-2 rounded-md text-sm font-medium hover:bg-[var(--accent-pink)] hover:text-white transition-all duration-300">
          View Playlist
        </a>
      </div>
    </div>
  )
}
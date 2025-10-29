'use client'

import { YouTubeVideo, YouTubePlaylist } from '@/types/youtube.types'
import VideoCard from './VideoCard'
import PlaylistCard from './PlaylistCard'
import RadioCard from './RadioCard'

interface VideoGridProps {
  videos?: YouTubeVideo[]
  playlists?: YouTubePlaylist[]
  radioStreams?: YouTubeVideo[]
  section: 'all' | 'videos' | 'playlists' | 'radio'
  className?: string
}

export default function VideoGrid({
  videos = [],
  playlists = [],
  radioStreams = [],
  section,
  className = ''
}: VideoGridProps) {
  
  // Render radio streams section
  const renderRadioSection = () => {
    if (radioStreams.length === 0) return null

    return (
      <section className="mb-16">
        {/* Section header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-heading font-bold text-4xl text-[var(--text-primary)]">
              24/7 Radio Streams
            </h2>
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              LIVE
            </span>
          </div>
          <p className="text-[var(--text-secondary)] text-lg">
            Tune in to our continuous chill music streams
          </p>
        </div>

        {/* Grid - Radio cards are larger, max 2 per row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {radioStreams.map((stream, index) => (
            <RadioCard
              key={stream.id}
              video={stream}
              priority={index < 2}
            />
          ))}
        </div>
      </section>
    )
  }

  // Render playlists section
  const renderPlaylistsSection = () => {
    if (playlists.length === 0) return null

    return (
      <section className="mb-16">
        {/* Section header */}
        <div className="mb-8">
          <h2 className="font-heading font-bold text-4xl text-[var(--text-primary)] mb-2">
            Curated Playlists
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Hand-picked collections of our best tracks
          </p>
        </div>

        {/* Grid - 3 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map((playlist, index) => (
            <PlaylistCard
              key={playlist.id}
              playlist={playlist}
              priority={index < 3}
            />
          ))}
        </div>
      </section>
    )
  }

  // Render videos section
  const renderVideosSection = () => {
    if (videos.length === 0) return null

    return (
      <section className="mb-16">
        {/* Section header */}
        <div className="mb-8">
          <h2 className="font-heading font-bold text-4xl text-[var(--text-primary)] mb-2">
            Latest Videos
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Our newest releases and music videos
          </p>
        </div>

        {/* Grid - 3 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              priority={index < 6}
            />
          ))}
        </div>
      </section>
    )
  }

  // Render based on section prop
  const renderContent = () => {
    switch (section) {
      case 'radio':
        return renderRadioSection()
      
      case 'playlists':
        return renderPlaylistsSection()
      
      case 'videos':
        return renderVideosSection()
      
      case 'all':
      default:
        return (
          <>
            {renderRadioSection()}
            {renderPlaylistsSection()}
            {renderVideosSection()}
          </>
        )
    }
  }

  // Empty state
  const renderEmptyState = () => {
    const isEmpty = 
      (section === 'all' && videos.length === 0 && playlists.length === 0 && radioStreams.length === 0) ||
      (section === 'radio' && radioStreams.length === 0) ||
      (section === 'playlists' && playlists.length === 0) ||
      (section === 'videos' && videos.length === 0)

    if (!isEmpty) return null

    return (
      <div className="text-center py-20">
        <div className="mb-4">
          <span className="text-6xl">🎵</span>
        </div>
        <h3 className="font-heading font-bold text-2xl text-[var(--text-primary)] mb-2">
          No content available
        </h3>
        <p className="text-[var(--text-secondary)]">
          Check back soon for new {section === 'all' ? 'content' : section}!
        </p>
      </div>
    )
  }

  return (
    <div className={`w-full ${className}`}>
      {renderContent()}
      {renderEmptyState()}
    </div>
  )
}
// page.tsx
// Path: /src/app/playlists/page.tsx

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Playlist {
  id: string
  name: string
  description: string
  images: Array<{ url: string; height: number; width: number }>
  tracks: { total: number }
  external_urls: { spotify: string }
  uri: string
}

export default function PlaylistsPage() {
  const [playlists, setPlaylists] = useState<Playlist[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPlaylists() {
      try {
        const response = await fetch('/api/spotify/playlists')
        if (!response.ok) throw new Error('Failed to fetch playlists')
        const data = await response.json()
        
        // Sort playlists by date (newest first)
        const sortedPlaylists = (data.playlists || []).sort((a: Playlist, b: Playlist) => {
          // Spotify doesn't provide creation date in playlist data
          // We'll sort by playlist ID or order from API (newest playlists appear first typically)
          return 0 // Keep API order which is typically newest first
        })
        
        setPlaylists(sortedPlaylists)
      } catch (err) {
        setError('Failed to load playlists')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPlaylists()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-bg-secondary rounded w-64 mx-auto mb-4"></div>
              <div className="h-6 bg-bg-secondary rounded w-48 mx-auto"></div>
            </div>
            <p className="text-text-secondary mt-8">Loading playlists...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-error text-lg">{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-heading font-bold text-text-primary mb-4 text-center">
            Our Playlists
          </h1>
          
          <p className="text-text-secondary text-lg text-center mb-12">
            Curated collections of the chillest vibes{playlists.length > 0 && ` â€¢ ${playlists.length} playlists`}
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="bg-bg-secondary/50 backdrop-blur-sm border border-border-subtle rounded overflow-hidden hover:border-accent-purple transition-all duration-300 hover:shadow-lg"
              >
                <div className="p-6">
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

                  {/* Embedded Spotify Player */}
                  <iframe
                    src={`https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator&theme=0`}
                    width="100%"
                    height="380"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>

          {playlists.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="text-text-tertiary">No playlists found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
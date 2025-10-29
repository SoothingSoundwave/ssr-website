// page.tsx
// Path: /src/app/releases/page.tsx

'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import Image from 'next/image'

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

interface GroupedAlbums {
  monthYear: string
  albums: Album[]
}

export default function ReleasesPage() {
  const [groupedAlbums, setGroupedAlbums] = useState<GroupedAlbums[]>([])
  const [displayedGroups, setDisplayedGroups] = useState<GroupedAlbums[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [hasMore, setHasMore] = useState(true)
  const observerTarget = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function fetchReleases() {
      try {
        const response = await fetch('/api/spotify/releases-playlist')
        if (!response.ok) throw new Error('Failed to fetch releases')
        const data = await response.json()
        
        // Group albums by month/year
        const grouped = groupAlbumsByMonth(data.albums)
        setGroupedAlbums(grouped)
        
        // Initially load first 3 months
        setDisplayedGroups(grouped.slice(0, 3))
        setHasMore(grouped.length > 3)
      } catch (err) {
        setError('Failed to load releases')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchReleases()
  }, [])

  const loadMore = useCallback(() => {
    if (!hasMore) return

    const currentLength = displayedGroups.length
    const nextGroups = groupedAlbums.slice(0, currentLength + 2)
    
    setDisplayedGroups(nextGroups)
    setHasMore(nextGroups.length < groupedAlbums.length)
  }, [displayedGroups.length, groupedAlbums, hasMore])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore()
        }
      },
      { threshold: 0.1 }
    )

    const currentTarget = observerTarget.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [hasMore, loading, loadMore])

  function groupAlbumsByMonth(albums: Album[]): GroupedAlbums[] {
    const groups: { [key: string]: Album[] } = {}

    albums.forEach((album) => {
      const date = new Date(album.release_date)
      const monthYear = date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long' 
      })

      if (!groups[monthYear]) {
        groups[monthYear] = []
      }
      groups[monthYear].push(album)
    })

    return Object.entries(groups).map(([monthYear, albums]) => ({
      monthYear,
      albums,
    }))
  }

  const totalAlbums = groupedAlbums.reduce((sum, group) => sum + group.albums.length, 0)

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-primary pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-bg-secondary rounded w-64 mx-auto mb-4"></div>
              <div className="h-6 bg-bg-secondary rounded w-48 mx-auto"></div>
            </div>
            <p className="text-text-secondary mt-8">Loading releases...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-bg-primary pt-32 pb-20">
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
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-heading font-bold text-text-primary mb-4 text-center">
            Our Releases
          </h1>
          
          <p className="text-text-secondary text-lg text-center mb-12">
            {totalAlbums} albums and singles from Soothing Soundwave Records
          </p>
          
          <div className="space-y-12">
            {displayedGroups.map((group, groupIndex) => (
              <div key={group.monthYear}>
                <h2 className="text-2xl font-heading font-semibold text-text-primary mb-6 border-b border-border-subtle pb-2">
                  {group.monthYear}
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {group.albums.map((album) => (
                    <a key={album.id} href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="group">
                      <div className="bg-bg-secondary rounded overflow-hidden hover:bg-bg-elevated transition-all duration-300 hover:scale-105">
                        <div className="aspect-square relative">
                          {album.images[0] ? (
                            <Image
                              src={album.images[0].url}
                              alt={album.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                              loading={groupIndex < 2 ? 'eager' : 'lazy'}
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
                  ))}
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div ref={observerTarget} className="mt-12 text-center">
              <div className="inline-block animate-pulse">
                <div className="h-8 w-32 bg-bg-secondary rounded"></div>
              </div>
              <p className="text-text-tertiary text-sm mt-2">Loading more...</p>
            </div>
          )}

          {!hasMore && displayedGroups.length > 0 && (
            <div className="mt-12 text-center">
              <p className="text-text-tertiary text-sm">
                You've reached the end! All {totalAlbums} releases loaded.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
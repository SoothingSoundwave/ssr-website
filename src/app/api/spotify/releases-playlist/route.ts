// route.ts
// Path: /src/app/api/spotify/releases-playlist/route.ts

import { NextResponse } from 'next/server'
import { getPlaylistTracks } from '@/lib/api/spotify'

export const dynamic = 'force-dynamic'

const RELEASES_PLAYLIST_ID = '5jS1EBGYx3ul7hutxPtjix'

export async function GET() {
  try {
    const data = await getPlaylistTracks(RELEASES_PLAYLIST_ID)
    
    // Group tracks by album
    const albumsMap = new Map()
    
    data.items.forEach((item: any) => {
      if (!item.track || !item.track.album) return
      
      const album = item.track.album
      const albumId = album.id
      
      if (!albumsMap.has(albumId)) {
        albumsMap.set(albumId, {
          id: album.id,
          name: album.name,
          artists: album.artists,
          images: album.images,
          release_date: album.release_date,
          total_tracks: album.total_tracks,
          album_type: album.album_type,
          external_urls: album.external_urls,
          uri: album.uri,
        })
      }
    })
    
    // Convert map to array and sort by release date (newest first)
    const albums = Array.from(albumsMap.values()).sort((a, b) => {
      return new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
    })
    
    return NextResponse.json(
      { 
        albums,
        total: albums.length,
        original_tracks: data.total 
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    )
  } catch (error) {
    console.error('Error in releases playlist API route:', error)
    return NextResponse.json(
      { error: 'Failed to fetch releases playlist from Spotify' },
      { status: 500 }
    )
  }
}
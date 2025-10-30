// page.tsx
// Path: /src/app/page.tsx

import { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ReleasesCarousel from '@/components/home/ReleasesCarousel'
import PlaylistsCarousel from '@/components/home/PlaylistsCarousel'
import VideoCarousel from '@/components/home/VideoCarousel'
import MerchCarousel from '@/components/home/MerchCarousel'
import { getChannelVideos } from '@/lib/api/youtube'
import { getUserPlaylists, getPlaylistTracks } from '@/lib/api/spotify'

export const metadata: Metadata = {
  title: 'Soothing Soundwave Records | Relaxing & Chill Music Label',
  description: 'Discover and stream the best in relaxing and chill music. Featuring curated playlists, new releases, and exclusive content from Soothing Soundwave Records.',
  openGraph: {
    title: 'Soothing Soundwave Records',
    description: 'Discover and stream the best in relaxing and chill music.',
    type: 'website',
  },
}

export const revalidate = 86400 // Revalidate once per day

async function getReleasesFromPlaylist() {
  try {
    const RELEASES_PLAYLIST_ID = '5jS1EBGYx3ul7hutxPtjix'
    const data = await getPlaylistTracks(RELEASES_PLAYLIST_ID)
    
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
    
    const albums = Array.from(albumsMap.values()).sort((a: any, b: any) => {
      return new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
    })
    
    return albums
  } catch (error) {
    console.error('Error fetching releases:', error)
    return []
  }
}

export default async function HomePage() {
  // Fetch all data in parallel
  const [videosData, releasesData, playlistsData] = await Promise.all([
    getChannelVideos(5).catch(() => ({ items: [] })),
    getReleasesFromPlaylist().catch(() => []),
    getUserPlaylists().catch(() => ({ items: [] })),
  ])

  return (
    <main className="min-h-screen">
      <HeroSection />
      <div id="releases">
        <ReleasesCarousel albums={releasesData} />
      </div>
      {/* FIXED: API returns { playlists: [...] }, not { items: [...] } */}
      <PlaylistsCarousel playlists={playlistsData.items || playlistsData.playlists || []} />
      <VideoCarousel videos={videosData.items} />
      <MerchCarousel />
    </main>
  )
}
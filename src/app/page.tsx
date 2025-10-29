// page.tsx
// Path: /src/app/page.tsx

import { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ReleasesCarousel from '@/components/home/ReleasesCarousel'
import PlaylistsCarousel from '@/components/home/PlaylistsCarousel'
import VideoCarousel from '@/components/home/VideoCarousel'
import MerchCarousel from '@/components/home/MerchCarousel'
import { getChannelVideos } from '@/lib/api/youtube'
import { getUserPlaylists } from '@/lib/api/spotify'

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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/spotify/releases-playlist`,
      { next: { revalidate: 86400 } }
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch releases')
    }
    
    const data = await response.json()
    return data.albums || []
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